
/* ---------- Hilfsfunktionen ---------- */
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rnd(0,a.length-1)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(0,i);[a[i],a[j]]=[a[j],a[i]];}return a;};
const fmt=n=>String(n).replace(".",",");
const pad=n=>String(n).padStart(2,"0");
const hm=min=>{min=((min%1440)+1440)%1440;return pad(Math.floor(min/60))+":"+pad(min%60);};
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const lcm=(a,b)=>a/gcd(a,b)*b;
const sg=n=>n<0?"−"+(-n):String(n);
const par=n=>n<0?`(−${-n})`:String(n);
const F=(n,d)=>`<span class="fr"><sup>${n}</sup>⁄<sub>${d}</sub></span>`;
const sup=e=>({2:"²",3:"³",4:"⁴"}[e]||"^"+e);
const r3=x=>Number(x.toFixed(4));
function poly(c,v){v=v||"x";let s="";const n=c.length-1;
  c.forEach((a,i)=>{const e=n-i;if(!a)return;const abs=Math.abs(a);let t=(abs===1&&e>0)?"":String(abs);if(e>0)t+=v+(e>1?sup(e):"");
    s+=s===""?(a<0?"−":"")+t:(a<0?" − ":" + ")+t;});
  return s||"0";}
const ROUNDS=10;
const money=x=>x.toFixed(2).replace(".",",");

/* ---------- Speicher (nur Komfort, darf fehlen) ---------- */
let store={};
try{store=JSON.parse(localStorage.getItem("lernwelt_v1")||"{}");}catch(e){store={};}
const save=()=>{try{localStorage.setItem("lernwelt_v1",JSON.stringify(store));}catch(e){}};
const skey=(id,k)=>id+"@"+k;
const starsOf=(id,k)=>(store[skey(id,k)]&&store[skey(id,k)].stars)||0;

/* ---------- Aufgaben-Generatoren (k = Klassenstufe, 0 = Vorschule) ---------- */
function parts(n){return{h:Math.floor(n/100)*100,t:Math.floor(n/10)%10*10,e:n%10};}

function genZaehlen(k){
  const n=rnd(1,k<=0?8:10),e=pick(["🍎","⭐","🐟","🎈","🐞","🌼"]);
  return{q:`Wie viele siehst du?<div style="font-size:2rem;margin:8px 0">${Array(n).fill(e).join(" ")}</div>`,type:"num",answer:n,
    hint:"Tippe mit dem Finger jedes Bild einmal an und zähle laut mit.",way:`Es sind ${n} Stück.`};
}
function genVergleich(k){
  const mx=k<=0?10:k==1?20:k==2?100:1000;
  const r=Math.random();
  const a=rnd(1,mx-1);
  if(r<.5){let b;do{b=rnd(1,mx);}while(b===a);
    return{q:`Welche Zahl ist größer: ${a} oder ${b}?`,type:"choice",choices:shuffle([String(a),String(b)]),answer:String(Math.max(a,b)),
      hint:"Die Zahl, die auf dem Zahlenstrahl weiter rechts steht, ist größer.",way:`${Math.max(a,b)} ist größer als ${Math.min(a,b)}.`};}
  if(r<.75)return{q:`Welche Zahl kommt direkt nach ${a}?`,type:"num",answer:a+1,hint:"Zähle einen Schritt weiter.",way:`Nach ${a} kommt ${a+1}.`};
  return{q:`Welche Zahl kommt direkt vor ${a+1}?`,type:"num",answer:a,hint:"Zähle einen Schritt zurück.",way:`Vor ${a+1} kommt ${a}.`};
}
function genPlusBig(){
  let a,b;
  if(Math.random()<.5){
    const h=rnd(1,6),t=rnd(0,8),e=rnd(0,8);a=h*100+t*10+e;
    b=rnd(0,Math.min(3,9-h))*100+rnd(0,9-t)*10+rnd(0,9-e);if(b<10)b=11;
  }else{a=rnd(120,780);b=rnd(35,Math.min(399,999-a));}
  const p=parts(b);let s=a,steps=[`${a}`];
  if(p.h){s+=p.h;steps.push(`+ ${p.h} = ${s}`);}
  if(p.t){s+=p.t;steps.push(`+ ${p.t} = ${s}`);}
  if(p.e){s+=p.e;steps.push(`+ ${p.e} = ${s}`);}
  return{q:`${a} + ${b} = ?`,type:"num",answer:a+b,
    hint:`Zerlege ${b} in Hunderter, Zehner und Einer und rechne Schritt für Schritt.`,
    way:`Rechne in Schritten: ${steps.join(" ")}.`};
}
function genPlus(k){
  if(k>=3)return genPlusBig();
  const mx=k<=0?10:k==1?20:100;
  const a=rnd(1,mx-1),b=rnd(1,mx-a);
  const t=Math.floor(b/10)*10,e=b%10;
  return{q:`${a} + ${b} = ?`,type:"num",answer:a+b,
    hint:mx>20?"Rechne erst die Zehner dazu, dann die Einer.":"Zähle von der größeren Zahl aus weiter oder zerlege die Zahlen.",
    way:mx>20&&t?`${a} + ${t} = ${a+t}, dann + ${e} = ${a+b}.`:`${a} + ${b} = ${a+b}.`};
}
function genMinusBig(){
  const a=rnd(200,999),b=rnd(21,Math.min(a-10,520));
  const p=parts(b);let s=a,steps=[`${a}`];
  if(p.h){s-=p.h;steps.push(`− ${p.h} = ${s}`);}
  if(p.t){s-=p.t;steps.push(`− ${p.t} = ${s}`);}
  if(p.e){s-=p.e;steps.push(`− ${p.e} = ${s}`);}
  return{q:`${a} − ${b} = ?`,type:"num",answer:a-b,
    hint:`Nimm erst die Hunderter weg, dann die Zehner, dann die Einer. Probe: Ergebnis + ${b}.`,
    way:`Rechne in Schritten: ${steps.join(" ")}.`};
}
function genMinus(k){
  if(k>=3)return genMinusBig();
  const mx=k<=0?10:k==1?20:100;
  const a=rnd(2,mx),b=rnd(1,a-1);
  const t=Math.floor(b/10)*10,e=b%10;
  return{q:`${a} − ${b} = ?`,type:"num",answer:a-b,
    hint:mx>20?"Nimm erst die Zehner weg, dann die Einer.":"Zähle zurück oder ergänze von der kleineren zur größeren Zahl.",
    way:mx>20&&t?`${a} − ${t} = ${a-t}, dann − ${e} = ${a-b}.`:`${a} − ${b} = ${a-b}.`};
}
function genMal(k){
  if(k<=2){const a=pick([2,5,10]),b=rnd(1,10);
    return{q:`${a} · ${b} = ?`,type:"num",answer:a*b,hint:`Zähle in ${a}er-Schritten: ${a}, ${2*a}, ${3*a} …`,way:`${b} mal die ${a}: ${a*b}.`};}
  if(Math.random()<.3){
    const a=rnd(2,9),b=rnd(2,9);
    return{q:`${a*10} · ${b} = ?`,type:"num",answer:a*10*b,
      hint:`Rechne erst ${a} · ${b} und häng dann eine Null an.`,
      way:`${a} · ${b} = ${a*b}. Weil ${a*10} ein Zehner-Wert ist, kommt eine Null dazu: ${a*10*b}.`};
  }
  const a=rnd(2,10),b=rnd(3,10);
  return{q:`${a} · ${b} = ?`,type:"num",answer:a*b,
    hint:`Rechne ${a} · ${b-1} und zähl noch ${a} dazu. Oder tausche die Zahlen: ${b} · ${a}.`,
    way:`${a} · ${b-1} = ${a*(b-1)}, dazu noch ${a}: ${a*(b-1)} + ${a} = ${a*b}.`};
}
function genGeteilt(k){
  const b=k<=2?pick([2,5,10]):rnd(2,10),c=rnd(k<=2?1:2,10),a=b*c;
  return{q:`${a} : ${b} = ?`,type:"num",answer:c,
    hint:`Frag dich: ${b} mal welche Zahl ergibt ${a}? Das ist die Umkehraufgabe.`,
    way:`Umkehraufgabe: ${b} · ${c} = ${a}. Also ist ${a} : ${b} = ${c}.`};
}
function genSchriftlich(k){
  if(Math.random()<.5){
    const a=k<=4?rnd(12,99):rnd(120,999),b=k<=4?rnd(3,9):rnd(11,45);
    const t=Math.floor(b/10)*10,e=b%10;
    return{q:`${a} · ${b} = ?`,type:"num",answer:a*b,
      hint:`Zerlege ${b}: rechne ${a} mal ${t?t+" und ":""}${a} mal ${e||b}, dann zähle zusammen.`,
      way:t?`${a}·${t} = ${a*t}, ${a}·${e} = ${a*e}. Zusammen: ${a*b}.`:`${a} · ${b} = ${a*b}.`};
  }
  const b=rnd(3,12),c=k<=4?rnd(11,99):rnd(25,300),a=b*c;
  return{q:`${a} : ${b} = ?`,type:"num",answer:c,
    hint:`Teile Schritt für Schritt (halbschriftlich) und mach die Probe mit ${b} · Ergebnis.`,
    way:`Probe: ${b} · ${c} = ${a}. Also ist ${a} : ${b} = ${c}.`};
}
function genRunden(k){
  const n=rnd(1000,k<=4?99999:999999),pl=pick([10,100,1000]);
  const a=Math.round(n/pl)*pl;
  const nm={10:"Zehner",100:"Hunderter",1000:"Tausender"}[pl];
  return{q:`Runde ${n} auf ${nm}.`,type:"num",answer:a,
    hint:`Schau auf die Ziffer direkt rechts der ${nm}-Stelle: 0 bis 4 abrunden, 5 bis 9 aufrunden.`,
    way:`${n} gerundet auf ${nm} ist ${a}.`};
}
function genGeld(k){
  if(k<=2){
    const p1=rnd(1,9)*5,p2=rnd(1,Math.min(9,Math.floor((95-p1)/5)))*5;
    if(Math.random()<.5)
      return{q:`Ein Stift kostet ${p1} Cent, ein Radiergummi ${p2} Cent. Wie viel Cent kosten beide zusammen?`,type:"num",unit:"Cent",answer:p1+p2,
        hint:"Zusammen heißt plus rechnen.",way:`${p1} + ${p2} = ${p1+p2} Cent.`};
    return{q:`Du kaufst etwas für ${p1+p2} Cent und bezahlst mit 1 € (100 Cent). Wie viel Cent bekommst du zurück?`,type:"num",unit:"Cent",answer:100-p1-p2,
      hint:"Rückgeld = bezahlt minus Preis.",way:`100 − ${p1+p2} = ${100-p1-p2} Cent.`};
  }
  const items=[["einen Apfel",20,60],["ein Eis",80,180],["einen Stift",35,90],["ein Heft",55,150],["eine Brezel",45,95],["einen Radiergummi",25,70]];
  const [x,y]=shuffle(items).slice(0,2);
  const p1=Math.round(rnd(x[1],x[2])/5)*5,p2=Math.round(rnd(y[1],y[2])/5)*5;
  if(Math.random()<.5){
    return{q:`Du kaufst ${x[0]} für ${p1} Cent und ${y[0]} für ${p2} Cent. Wie viel Cent musst du zahlen?`,
      type:"num",unit:"Cent",answer:p1+p2,hint:`Zusammen kaufen heißt: plus rechnen.`,
      way:`${p1} + ${p2} = ${p1+p2} Cent (das sind ${money((p1+p2)/100)} €).`};
  }
  const pay=Math.ceil((p1+p2)/100)*100+(Math.random()<.4?100:0);
  return{q:`Du kaufst ${x[0]} für ${p1} Cent und ${y[0]} für ${p2} Cent und gibst ${pay/100} € (${pay} Cent). Wie viel Cent bekommst du zurück?`,
    type:"num",unit:"Cent",answer:pay-p1-p2,
    hint:`Rechne erst aus, was alles kostet. Dann: bezahlt − Preis = Rückgeld.`,
    way:`Preis: ${p1} + ${p2} = ${p1+p2} Cent. Rückgeld: ${pay} − ${p1+p2} = ${pay-p1-p2} Cent.`};
}
function genLaenge(k){
  if(k<=2){
    if(Math.random()<.5){const v=rnd(1,5);return{q:`${v} m = ? cm`,type:"num",unit:"cm",answer:v*100,hint:"1 m sind 100 cm.",way:`${v} · 100 = ${v*100} cm.`};}
    const v=rnd(1,5);return{q:`${v*100} cm = ? m`,type:"num",unit:"m",answer:v,hint:"100 cm sind 1 m.",way:`${v*100} : 100 = ${v} m.`};
  }
  const t=pick([["m","cm",100],["km","m",1000],["cm","mm",10]]);
  const v=rnd(2,25);
  if(Math.random()<.6)return{q:`${v} ${t[0]} = ? ${t[1]}`,type:"num",unit:t[1],answer:v*t[2],
      hint:`1 ${t[0]} sind ${t[2]} ${t[1]}. Du rechnest mal ${t[2]}.`,way:`1 ${t[0]} = ${t[2]} ${t[1]}. Also ${v} · ${t[2]} = ${v*t[2]} ${t[1]}.`};
  return{q:`${v*t[2]} ${t[1]} = ? ${t[0]}`,type:"num",unit:t[0],answer:v,
    hint:`${t[2]} ${t[1]} sind 1 ${t[0]}. Du rechnest geteilt durch ${t[2]}.`,way:`${t[2]} ${t[1]} = 1 ${t[0]}. Also ${v*t[2]} : ${t[2]} = ${v} ${t[0]}.`};
}
function genGewicht(k){
  const pairs=[["kg","g"],["l","ml"],["t","kg"]];
  if(k>=5)pairs.push(["g","mg"]);
  const t=pick(pairs);
  if(Math.random()<.55){
    const v=k>=5&&Math.random()<.6?rnd(1,99)/10:rnd(1,20);
    const a=Math.round(v*1000);
    return{q:`${fmt(v)} ${t[0]} = ? ${t[1]}`,type:"num",unit:t[1],answer:a,
      hint:`1 ${t[0]} sind 1000 ${t[1]}. Du rechnest mal 1000.`,way:`${fmt(v)} · 1000 = ${a} ${t[1]}.`};
  }
  const v=k>=5?rnd(1,99)/10:rnd(1,20);
  const a=Math.round(v*1000);
  return{q:`${a} ${t[1]} = ? ${t[0]}`,type:"num",unit:t[0],answer:v,
    hint:`1000 ${t[1]} sind 1 ${t[0]}. Du rechnest geteilt durch 1000.`,way:`${a} : 1000 = ${fmt(v)} ${t[0]}.`};
}
function clockSvg(min){
  const h=Math.floor(min/60)%12,m=min%60;
  const ha=(h+m/60)*30,ma=m*6;
  let ticks="";
  for(let i=0;i<12;i++){ticks+=`<line x1="60" y1="10" x2="60" y2="${i%3?16:20}" stroke="#241b4b" stroke-width="${i%3?2:3}" transform="rotate(${i*30} 60 60)"/>`;}
  return `<svg class="clock" width="150" height="150" viewBox="0 0 120 120" role="img" aria-label="Uhr"><circle cx="60" cy="60" r="54" fill="#fff" stroke="#4f46e5" stroke-width="5"/>${ticks}<line x1="60" y1="60" x2="60" y2="30" stroke="#241b4b" stroke-width="5" stroke-linecap="round" transform="rotate(${ha} 60 60)"/><line x1="60" y1="60" x2="60" y2="17" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" transform="rotate(${ma} 60 60)"/><circle cx="60" cy="60" r="4" fill="#241b4b"/></svg>`;
}
function timeChoices(t,deltas){
  const ans=hm(t),w=new Set();
  deltas.forEach(d=>{const x=hm(t+d);if(x!==ans)w.add(x);});
  return{ans,ch:shuffle([ans,...shuffle([...w]).slice(0,3)])};
}
function genUhr(k){
  const r=Math.random();
  if(r<.4){
    const step=k<=2?15:5;
    const t=rnd(1*60/step,11*60/step)*step;
    const {ans,ch}=timeChoices(t,k<=2?[15,-15,30,-30,60]:[5,-5,10,-10,60,-60]);
    return{q:`${clockSvg(t)}Wie spät ist es?`,type:"choice",choices:ch,answer:ans,
      hint:"Der kurze Zeiger zeigt die Stunde, der lange Zeiger die Minuten (Strich 3 = 15 Minuten).",way:`Die Uhr zeigt ${ans} Uhr.`};
  }
  if(k>=3&&r<.65){
    const h=rnd(1,5),m=pick([0,15,30,45]);
    return{q:`Wie viele Minuten sind ${h} Std.${m?" "+m+" Min.":""}?`,type:"num",unit:"Min.",answer:h*60+m,
      hint:"1 Stunde hat 60 Minuten.",way:`${h} · 60 = ${h*60}${m?`, dazu ${m}: ${h*60+m}`:""} Minuten.`};
  }
  const start=k<=2?rnd(6*4,20*4)*15:rnd(6*12,20*12)*5;
  const add=k<=2?pick([15,30,45,60]):pick([15,20,25,30,35,40,45,50,55,60,75,90]);
  const {ans,ch}=timeChoices(start+add,k<=2?[15,-15,30,-30,60]:[5,-5,10,-10,60,-60,15]);
  return{q:`Es ist ${hm(start)} Uhr. Wie spät ist es ${add} Minuten später?`,type:"choice",choices:ch,answer:ans,
    hint:`Zähle erst bis zur nächsten vollen Stunde und dann den Rest dazu.`,way:`${hm(start)} + ${add} Min. = ${ans} Uhr.`};
}
function genGeo(k){
  if(k<=2){
    const pool=[["Wie viele Ecken hat ein Dreieck?",3],["Wie viele Ecken hat ein Rechteck?",4],["Wie viele Ecken hat ein Kreis?",0],["Wie viele Seiten hat ein Quadrat?",4],["Wie viele Flächen hat ein Würfel?",6],["Wie viele Ecken hat ein Würfel?",8]];
    const [q,a]=pick(pool);
    const ch=shuffle([...new Set([a,...shuffle([0,3,4,5,6,8,12].filter(x=>x!==a)).slice(0,3)])]).map(String);
    return{q,type:"choice",choices:ch,answer:String(a),hint:"Stell dir die Form vor oder zeichne sie kurz auf.",way:`Richtig ist ${a}.`};
  }
  const r=Math.random();
  if(k>=5&&r<.5){
    const v=rnd(0,3);
    if(v===0){const g=rnd(2,10)*2,h=rnd(3,9);return{q:`Ein Dreieck hat die Grundseite ${g} cm und die Höhe ${h} cm. Wie groß ist die Fläche?`,type:"num",unit:"cm²",answer:g*h/2,
      hint:"Dreiecksfläche = Grundseite · Höhe : 2.",way:`${g} · ${h} : 2 = ${g*h/2} cm².`};}
    if(v===1){const a=rnd(2,9),b=rnd(2,9),c=rnd(2,9);return{q:`Ein Quader ist ${a} cm lang, ${b} cm breit und ${c} cm hoch. Wie groß ist sein Volumen?`,type:"num",unit:"cm³",answer:a*b*c,
      hint:"Volumen = Länge · Breite · Höhe.",way:`${a} · ${b} · ${c} = ${a*b*c} cm³.`};}
    if(v===2){const a=rnd(30,80),b=rnd(30,80);return{q:`In einem Dreieck sind zwei Winkel ${a}° und ${b}°. Wie groß ist der dritte Winkel?`,type:"num",unit:"°",answer:180-a-b,
      hint:"Die Winkelsumme im Dreieck ist 180°.",way:`180 − ${a} − ${b} = ${180-a-b}°.`};}
    const g=rnd(3,12),h=rnd(2,9);return{q:`Ein Parallelogramm hat die Grundseite ${g} cm und die Höhe ${h} cm. Wie groß ist die Fläche?`,type:"num",unit:"cm²",answer:g*h,
      hint:"Parallelogramm: Grundseite mal Höhe.",way:`${g} · ${h} = ${g*h} cm².`};
  }
  if(r<.4){const a=rnd(3,15),b=rnd(2,12);
    return{q:`Ein Rechteck ist ${a} cm lang und ${b} cm breit. Wie groß ist der Umfang?`,type:"num",unit:"cm",answer:2*(a+b),
      hint:`Der Umfang ist der Weg rundherum: alle vier Seiten zusammen.`,way:`${a} + ${b} + ${a} + ${b} = ${2*(a+b)} cm.`};}
  if(r<.6){const a=rnd(3,15);
    return{q:`Ein Quadrat hat eine Seitenlänge von ${a} cm. Wie groß ist der Umfang?`,type:"num",unit:"cm",answer:4*a,
      hint:`Ein Quadrat hat vier gleich lange Seiten.`,way:`4 · ${a} = ${4*a} cm.`};}
  if(r<.8){const a=rnd(3,12),b=rnd(2,9);
    return{q:`Ein Rechteck ist ${a} cm lang und ${b} cm breit. Wie groß ist die Fläche?`,type:"num",unit:"cm²",answer:a*b,
      hint:`Fläche = Länge mal Breite.`,way:`${a} · ${b} = ${a*b} cm².`};}
  const pool=[["Wie viele Ecken hat ein Würfel?",8,[4,6,8,12]],["Wie viele Kanten hat ein Würfel?",12,[6,8,12,16]],["Wie viele Flächen hat ein Quader?",6,[4,6,8,12]],
    ["Wie viele Spiegelachsen hat ein Quadrat?",4,[1,2,3,4]],["Wie viele Spiegelachsen hat ein Rechteck (kein Quadrat)?",2,[1,2,3,4]],["Wie viele Ecken hat ein Dreieck?",3,[3,4,5,6]]];
  const [q,a,ch]=pick(pool);
  return{q,type:"choice",choices:ch.map(String),answer:String(a),hint:`Stell dir den Körper oder die Form vor.`,way:`Richtig ist ${a}. Würfel/Quader: 8 Ecken, 12 Kanten, 6 Flächen.`};
}
function genMittel(){
  let v,m;do{m=rnd(3,15);v=[rnd(1,2*m),rnd(1,2*m),rnd(1,2*m)];v.push(4*m-v[0]-v[1]-v[2]);}while(v[3]<1||v[3]>3*m);
  return{q:`Berechne den Mittelwert von ${v.join(", ")}.`,type:"num",answer:m,
    hint:"Mittelwert = Summe aller Werte : Anzahl der Werte.",way:`(${v.join(" + ")}) : 4 = ${4*m} : 4 = ${m}.`};
}
function genDiagramm(k){
  if(k>=5&&Math.random()<.4)return genMittel();
  const sets=[["Mo","Di","Mi","Do","Fr"],["Anna","Ben","Cem","Dora","Eli"],["Rot","Blau","Grün","Gelb","Lila"]];
  const labels=pick(sets).slice(0,rnd(3,5));
  let vals;do{vals=labels.map(()=>rnd(1,9)*2);}while(new Set(vals).size<vals.length);
  const W=360,H=210,L=34,B=30,T=12,max=20,bw=Math.min(44,(W-L-10)/labels.length-12);
  const y=v=>H-B-(H-B-T)*v/max;
  let svg=`<svg class="chart" viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="Säulendiagramm">`;
  for(let v=0;v<=max;v+=4){svg+=`<line x1="${L}" x2="${W-6}" y1="${y(v)}" y2="${y(v)}" stroke="#d9d3f5"/><text x="${L-6}" y="${y(v)+4}" font-size="11" text-anchor="end" fill="#6b6590">${v}</text>`;}
  for(let v=2;v<=max;v+=4){svg+=`<line x1="${L}" x2="${W-6}" y1="${y(v)}" y2="${y(v)}" stroke="#eee9fc" stroke-dasharray="3 3"/>`;}
  const cols=["#4f46e5","#7c3aed","#0891b2","#16a34a","#d97706"];
  labels.forEach((l,i)=>{const cx=L+(i+.5)*(W-L-6)/labels.length;
    svg+=`<rect x="${cx-bw/2}" y="${y(vals[i])}" width="${bw}" height="${H-B-y(vals[i])}" rx="5" fill="${cols[i]}"/><text x="${cx}" y="${H-10}" font-size="12" text-anchor="middle" fill="#241b4b" font-weight="700">${l}</text>`;});
  svg+=`</svg>`;
  const i=rnd(0,labels.length-1);let j;do{j=rnd(0,labels.length-1);}while(j===i);
  const kind=rnd(0,3);
  if(kind===0)return{q:svg+`Wie hoch ist die Säule bei „${labels[i]}“?`,type:"num",answer:vals[i],
    hint:`Fahre von der Säulenspitze waagerecht nach links zur Zahlenleiste. Gestrichelte Linien sind Zwischenwerte (2, 6, 10 …).`,way:`Die Säule „${labels[i]}“ reicht bis ${vals[i]}.`};
  if(kind===1){const mx=labels[vals.indexOf(Math.max(...vals))];
    return{q:svg+`Welche Säule ist am höchsten?`,type:"choice",choices:labels,answer:mx,hint:`Vergleiche, welche Säule am weitesten nach oben reicht.`,way:`Am höchsten ist „${mx}“ mit ${Math.max(...vals)}.`};}
  if(kind===2)return{q:svg+`Wie viel mehr hat „${labels[i]}“ als „${labels[j]}“? (Unterschied)`,type:"num",answer:Math.abs(vals[i]-vals[j]),
    hint:`Lies beide Werte ab und rechne die größere minus die kleinere Zahl.`,
    way:`${labels[i]}: ${vals[i]}, ${labels[j]}: ${vals[j]}. Unterschied: ${Math.max(vals[i],vals[j])} − ${Math.min(vals[i],vals[j])} = ${Math.abs(vals[i]-vals[j])}.`};
  const sum=vals.reduce((a,b)=>a+b,0);
  return{q:svg+`Wie viel ist es insgesamt, wenn du alle Säulen zusammenzählst?`,type:"num",answer:sum,hint:`Lies jede Säule ab und addiere alle Werte.`,way:`${vals.join(" + ")} = ${sum}.`};
}
function genWahrsch(k){
  if(k<=4){
    const c=shuffle([["rote",rnd(1,3)],["blaue",rnd(4,6)],["gelbe",rnd(7,9)]]);
    const urn=c.map(x=>x[1]+" "+x[0]).join(", ");
    const mx=c.reduce((a,b)=>b[1]>a[1]?b:a);
    return{q:`In einem Beutel liegen ${urn} Kugeln. Du ziehst blind eine Kugel. Welche Farbe ziehst du am wahrscheinlichsten?`,type:"choice",
      choices:c.map(x=>x[0]),answer:mx[0],hint:"Die Farbe mit den meisten Kugeln wird am wahrscheinlichsten gezogen.",way:`Von den ${mx[0]}n gibt es ${mx[1]} Kugeln, das sind die meisten.`};
  }
  if(k<=8||Math.random()<.4){
    const r=rnd(1,6),b=rnd(1,8),n=r+b,g=gcd(r,n);
    return{q:`In einer Urne liegen ${r} rote und ${b} blaue Kugeln. Wie groß ist die Wahrscheinlichkeit, eine rote Kugel zu ziehen? (als Bruch, z. B. 2/5)`,
      type:"frac",answer:{n:r,d:n},show:`${r/g}/${n/g}`,
      hint:"Wahrscheinlichkeit = günstige Fälle : alle Fälle.",way:`Günstig: ${r} rote. Alle: ${r}+${b} = ${n}. Also ${r}/${n}${g>1?` = ${r/g}/${n/g}`:""}.`};
  }
  const v=rnd(0,2);
  if(v===0){const n=rnd(3,6);let f=1;for(let i=2;i<=n;i++)f*=i;
    return{q:`Auf wie viele Arten können ${n} Personen in einer Reihe stehen?`,type:"num",answer:f,hint:"Für den ersten Platz gibt es n Möglichkeiten, dann n−1 usw.",way:`${n}! = ${Array.from({length:n},(_,i)=>n-i).join(" · ")} = ${f}.`};}
  if(v===1){const n=rnd(4,9),m=rnd(2,3);let c=1;for(let i=1;i<=m;i++)c=c*(n-m+i)/i;
    return{q:`Wie viel ist „${n} über ${m}“ (Binomialkoeffizient)? Das ist die Anzahl der Möglichkeiten, ${m} aus ${n} Dingen ohne Beachtung der Reihenfolge auszuwählen.`,type:"num",answer:c,
      hint:`(n über k) = n·(n−1)·… : k!`,way:`${n} über ${m} = ${c}.`};}
  const a=rnd(2,5),b=rnd(2,5);
  return{q:`Wie viele verschiedene Outfits gibt es mit ${a} Hosen und ${b} Oberteilen?`,type:"num",answer:a*b,hint:"Zählprinzip: Möglichkeiten multiplizieren.",way:`${a} · ${b} = ${a*b}.`};
}
function simp(n,d){const g=gcd(n,d);return[n/g,d/g];}
function genBrueche(k){
  const kinds=k<=5?["kuerzen","erweitern","gleichn","von"]:k===6?["kuerzen","erweitern","gleichn","ungleichn","von"]:["ungleichn","von","mal","geteilt"];
  const kind=pick(kinds);
  if(kind==="kuerzen"){
    let p,q;do{q=rnd(2,12);p=rnd(1,q-1);}while(gcd(p,q)!==1);const m=rnd(2,6);
    return{q:`Kürze so weit wie möglich: ${F(p*m,q*m)} (Antwort als Bruch, z. B. 3/4)`,type:"frac",answer:{n:p,d:q},reduced:true,show:`${p}/${q}`,
      hint:"Teile Zähler und Nenner durch dieselbe Zahl (größter gemeinsamer Teiler).",way:`${p*m}/${q*m}: beide durch ${m} geteilt ergibt ${p}/${q}.`};
  }
  if(kind==="erweitern"){
    const q=rnd(2,8),p=rnd(1,q-1),m=rnd(2,6);
    return{q:`Erweitere: ${F(p,q)} = ${F("?",q*m)}`,type:"num",answer:p*m,hint:`Der Nenner wurde mit ${m} multipliziert. Mach das auch mit dem Zähler.`,way:`${q} · ${m} = ${q*m}, also ${p} · ${m} = ${p*m} im Zähler.`};
  }
  if(kind==="gleichn"){
    const d=rnd(3,12),a=rnd(1,d-2),b=rnd(1,d-1-a);const [rn,rd]=simp(a+b,d);
    return{q:`${F(a,d)} + ${F(b,d)} = ? (Antwort als Bruch)`,type:"frac",answer:{n:a+b,d:d},show:`${rn}/${rd}`,
      hint:"Gleicher Nenner: Zähler addieren, Nenner bleibt.",way:`${a}+${b} = ${a+b}, Nenner ${d}: ${a+b}/${d}${rd!==d?` = ${rn}/${rd}`:""}.`};
  }
  if(kind==="ungleichn"){
    const ds=[2,3,4,5,6];let d1,d2;do{d1=pick(ds);d2=pick(ds);}while(d1===d2);
    const a=rnd(1,d1-1),b=rnd(1,d2-1),L=lcm(d1,d2);const n=a*L/d1+b*L/d2;const [rn,rd]=simp(n,L);
    return{q:`${F(a,d1)} + ${F(b,d2)} = ? (Antwort als Bruch)`,type:"frac",answer:{n:n,d:L},show:`${rn}/${rd}`,
      hint:"Suche einen gemeinsamen Nenner (kleinstes gemeinsames Vielfaches) und erweitere beide Brüche.",
      way:`Hauptnenner ${L}: ${a*L/d1}/${L} + ${b*L/d2}/${L} = ${n}/${L}${rd!==L?` = ${rn}/${rd}`:""}.`};
  }
  if(kind==="mal"){
    const a=rnd(1,5),b=rnd(2,7),c=rnd(1,5),d=rnd(2,7);const [rn,rd]=simp(a*c,b*d);
    return{q:`${F(a,b)} · ${F(c,d)} = ? (Antwort als Bruch)`,type:"frac",answer:{n:a*c,d:b*d},show:`${rn}/${rd}`,
      hint:"Zähler mal Zähler, Nenner mal Nenner. Danach kürzen.",way:`${a}·${c} = ${a*c}, ${b}·${d} = ${b*d}: ${a*c}/${b*d}${rd!==b*d?` = ${rn}/${rd}`:""}.`};
  }
  if(kind==="geteilt"){
    const a=rnd(1,5),b=rnd(2,7),c=rnd(1,5),d=rnd(2,7);const n=a*d,m=b*c;const [rn,rd]=simp(n,m);
    return{q:`${F(a,b)} : ${F(c,d)} = ? (Antwort als Bruch)`,type:"frac",answer:{n:n,d:m},show:`${rn}/${rd}`,
      hint:"Durch einen Bruch teilen heißt: mit dem Kehrbruch malnehmen.",way:`${a}/${b} · ${d}/${c} = ${n}/${m}${rd!==m?` = ${rn}/${rd}`:""}.`};
  }
  const d=rnd(2,8),p=rnd(1,d-1),G=d*rnd(2,9);
  return{q:`Wie viel ist ${F(p,d)} von ${G}?`,type:"num",answer:G/d*p,hint:`Teile ${G} durch ${d}, dann mal ${p}.`,way:`${G} : ${d} = ${G/d}, mal ${p} = ${G/d*p}.`};
}
function genDezimal(k){
  const kind=rnd(0,5);
  if(kind===0){const a=rnd(11,990)/10,b=rnd(11,990)/10;const s=r3(a+b);return{q:`${fmt(a)} + ${fmt(b)} = ?`,type:"num",answer:s,hint:"Schreibe die Kommas untereinander und rechne wie bei ganzen Zahlen.",way:`${fmt(a)} + ${fmt(b)} = ${fmt(s)}.`};}
  if(kind===1){const a=rnd(200,990)/10,b=rnd(11,Math.floor(a*10)-10)/10;const s=r3(a-b);return{q:`${fmt(a)} − ${fmt(b)} = ?`,type:"num",answer:s,hint:"Schreibe die Kommas untereinander.",way:`${fmt(a)} − ${fmt(b)} = ${fmt(s)}.`};}
  if(kind===2){const a=rnd(11,999)/100,p=pick([10,100,1000]);const s=r3(a*p);return{q:`${fmt(a)} · ${p} = ?`,type:"num",answer:s,hint:`Das Komma wandert um ${String(p).length-1} Stelle(n) nach rechts.`,way:`${fmt(a)} · ${p} = ${fmt(s)}.`};}
  if(kind===3){const a=rnd(11,999),p=pick([10,100]);const s=r3(a/p);return{q:`${a} : ${p} = ?`,type:"num",answer:s,hint:`Das Komma wandert um ${String(p).length-1} Stelle(n) nach links.`,way:`${a} : ${p} = ${fmt(s)}.`};}
  if(kind===4){const f=pick([[1,2,.5],[1,4,.25],[3,4,.75],[1,5,.2],[2,5,.4],[3,5,.6],[1,10,.1],[7,10,.7],[1,8,.125]]);
    return{q:`Schreibe als Dezimalzahl: ${F(f[0],f[1])}`,type:"num",answer:f[2],hint:`Teile den Zähler durch den Nenner: ${f[0]} : ${f[1]}.`,way:`${f[0]} : ${f[1]} = ${fmt(f[2])}.`};}
  const a=rnd(1001,9999)/1000,d=pick([1,2]);const s=Number(a.toFixed(d));
  return{q:`Runde ${fmt(a)} auf ${d} Nachkommastelle${d>1?"n":""}.`,type:"num",answer:s,hint:"Schau auf die Ziffer rechts der Rundungsstelle: ab 5 wird aufgerundet.",way:`${fmt(a)} ≈ ${fmt(s)}.`};
}
function genProzent(k){
  const ps=[5,10,15,20,25,30,40,50,60,75,80],G=rnd(1,25)*20;
  const kinds=k<=6?["von","satz","wert"]:["von","satz","wert","zins","preis"];
  const kind=pick(kinds),p=pick(ps);
  if(kind==="von")return{q:`Wie viel sind ${p} % von ${G}?`,type:"num",answer:G*p/100,hint:`Berechne erst 1 % (${G} : 100) und dann mal ${p}.`,way:`1 % = ${fmt(G/100)}, ${p} % = ${fmt(G*p/100)}.`};
  if(kind==="satz")return{q:`${G*p/100} von ${G} sind wie viel Prozent?`,type:"num",unit:"%",answer:p,hint:`Prozentsatz = Teil : Ganzes · 100.`,way:`${G*p/100} : ${G} = ${fmt(p/100)} = ${p} %.`};
  if(kind==="wert")return{q:`${p} % von einer Zahl sind ${G*p/100}. Wie groß ist die Zahl (der Grundwert)?`,type:"num",answer:G,hint:`${p} % entsprechen ${G*p/100}. Rechne erst auf 1 % und dann auf 100 % um.`,way:`1 % = ${fmt(G*p/100/p)}, 100 % = ${G}.`};
  if(kind==="zins"){const K=rnd(1,20)*100,pr=rnd(1,8),t=rnd(1,3);return{q:`Du legst ${K} € für ${t} Jahr${t>1?"e":""} zu ${pr} % Zinsen im Jahr an. Wie viel Zinsen (in €) bekommst du insgesamt?`,type:"num",unit:"€",answer:K*pr*t/100,
    hint:"Zinsen = Kapital · Zinssatz · Jahre (Zinssatz als Hundertstel).",way:`${K} · ${pr}/100 · ${t} = ${K*pr*t/100} €.`};}
  const g=rnd(1,20)*20,pp=pick([10,20,25,50]);
  return{q:`Ein Preis von ${g} € steigt um ${pp} %. Wie hoch ist der neue Preis (in €)?`,type:"num",unit:"€",answer:g+g*pp/100,hint:`Berechne erst ${pp} % von ${g} und zähle es dazu.`,way:`${pp} % von ${g} = ${g*pp/100}. Neuer Preis: ${g} + ${g*pp/100} = ${g+g*pp/100} €.`};
}
function genNegativ(k){
  const a=rnd(-20,20)||5,b=rnd(-20,20)||-4;
  if(k<=6||Math.random()<.4){
    if(Math.random()<.5)return{q:`${par(a)} + ${par(b)} = ?`,type:"num",answer:a+b,hint:"Zeichne einen Zahlenstrahl: plus nach rechts, minus nach links.",way:`${a} + ${par(b)} = ${sg(a+b)}.`};
    return{q:`${par(a)} − ${par(b)} = ?`,type:"num",answer:a-b,hint:"Minus eine Zahl abziehen heißt: die Gegenzahl addieren.",way:`${sg(a)} − ${par(b)} = ${sg(a)} + ${par(-b)} = ${sg(a-b)}.`};
  }
  const x=rnd(-9,9)||3,y=rnd(-9,9)||-2;
  if(Math.random()<.5)return{q:`${par(x)} · ${par(y)} = ?`,type:"num",answer:x*y,hint:"Gleiche Vorzeichen: Ergebnis positiv. Verschiedene: negativ.",way:`${Math.abs(x)} · ${Math.abs(y)} = ${Math.abs(x*y)}, Vorzeichen ${x*y<0?"−":"+"}: ${sg(x*y)}.`};
  return{q:`${par(x*y)} : ${par(y)} = ?`,type:"num",answer:x,hint:"Vorzeichenregel wie beim Malnehmen.",way:`${sg(x*y)} : ${par(y)} = ${sg(x)}.`};
}
const primesTo=n=>{const r=[];for(let i=2;i<=n;i++){let p=true;for(let j=2;j*j<=i;j++)if(i%j===0){p=false;break;}if(p)r.push(i);}return r;};
const nTeiler=n=>{let c=0;for(let i=1;i<=n;i++)if(n%i===0)c++;return c;};
function genTeilbar(k){
  const kind=rnd(0,3);
  if(kind===0){const d=pick([2,3,4,5,6,9,10]);const base=d*rnd(12,90);
    const ch=new Set([String(base)]);while(ch.size<4){const x=base+rnd(1,d-1)+d*rnd(-8,8);if(x>10&&x%d!==0)ch.add(String(x));}
    return{q:`Welche Zahl ist durch ${d} teilbar?`,type:"choice",choices:shuffle([...ch]),answer:String(base),
      hint:{2:"Gerade Endziffer.",3:"Quersumme durch 3 teilbar.",4:"Letzte zwei Ziffern durch 4 teilbar.",5:"Endziffer 0 oder 5.",6:"Durch 2 und durch 3 teilbar.",9:"Quersumme durch 9 teilbar.",10:"Endziffer 0."}[d],way:`${base} : ${d} = ${base/d}.`};}
  if(kind===1){const pr=primesTo(60),pool=pr.filter(x=>x>10);const a=pick(pool);
    const comp=[];while(comp.length<3){const x=rnd(12,80);if(!pr.includes(x)&&!comp.includes(x))comp.push(x);}
    return{q:`Welche Zahl ist eine Primzahl?`,type:"choice",choices:shuffle([a,...comp].map(String)),answer:String(a),hint:"Eine Primzahl hat genau zwei Teiler: 1 und sich selbst.",way:`${a} ist nur durch 1 und ${a} teilbar.`};}
  if(kind===2){const g=rnd(2,9);let x,y;do{x=rnd(2,8);y=rnd(2,8);}while(gcd(x,y)!==1||x===y);
    return{q:`Bestimme den ggT (größten gemeinsamen Teiler) von ${g*x} und ${g*y}.`,type:"num",answer:g,hint:"Zerlege beide Zahlen in Primfaktoren oder suche die größte Zahl, die in beide passt.",way:`${g*x} = ${g}·${x}, ${g*y} = ${g}·${y}. Der ggT ist ${g}.`};}
  const a=rnd(2,12);let b;do{b=rnd(2,12);}while(b===a);
  return{q:`Bestimme das kgV (kleinste gemeinsame Vielfache) von ${a} und ${b}.`,type:"num",answer:lcm(a,b),hint:`Schreibe die Vielfachen von ${Math.max(a,b)} auf und prüfe, wann ${Math.min(a,b)} auch hineinpasst.`,way:`Das kleinste gemeinsame Vielfache ist ${lcm(a,b)}.`};
}
function genGleichung(k){
  const hi=k>=7;
  const kind=rnd(0,hi?5:3);
  if(kind===0){const x=rnd(1,30),a=rnd(1,30);return{q:`x + ${a} = ${x+a}`,type:"num",answer:x,hint:"Mach die Gegenrechnung: ziehe auf beiden Seiten das Gleiche ab.",way:`x = ${x+a} − ${a} = ${x}.`};}
  if(kind===1){const x=rnd(2,12),a=rnd(2,9);return{q:`${a}x = ${a*x}`,type:"num",answer:x,hint:"Teile beide Seiten durch die Zahl vor dem x.",way:`x = ${a*x} : ${a} = ${x}.`};}
  if(kind===2){const x=rnd(2,12),a=rnd(2,9),b=rnd(1,20);return{q:`${a}x + ${b} = ${a*x+b}`,type:"num",answer:x,hint:"Erst auf beiden Seiten das Plus-Glied abziehen, dann durch die Zahl vor dem x teilen.",way:`${a}x = ${a*x+b} − ${b} = ${a*x}, also x = ${x}.`};}
  if(kind===3){const x=rnd(1,10),a=rnd(2,6);return{q:`Berechne den Wert des Terms ${a}x + 3 für x = ${x}.`,type:"num",answer:a*x+3,hint:"Setze für x die Zahl ein und rechne.",way:`${a} · ${x} + 3 = ${a*x+3}.`};}
  if(kind===4){const x=rnd(-6,10),b=rnd(-5,8),a=rnd(2,6);
    return{q:`${a}(x ${b<0?"−":"+"} ${Math.abs(b)||1}) = ${a*(x+(b||1))}`,type:"num",answer:x,hint:"Teile erst beide Seiten durch die Zahl vor der Klammer.",way:`x ${b<0?"−":"+"} ${Math.abs(b)||1} = ${x+(b||1)}, also x = ${x}.`};}
  const x=rnd(-6,10),a=rnd(3,7),c=rnd(1,a-1),b=rnd(-8,8);const d=a*x+b-c*x;
  return{q:`${a}x ${b<0?"−":"+"} ${Math.abs(b)} = ${c}x ${d<0?"−":"+"} ${Math.abs(d)}`,type:"num",answer:x,hint:"Bringe alle x auf eine Seite und alle Zahlen auf die andere.",
    way:`${a-c}x = ${d-b}, also x = ${x}.`};
}
function genDreisatz(k){
  if(Math.random()<.6){
    const n1=rnd(2,6);let n2;do{n2=rnd(2,10);}while(n2===n1);const u=rnd(2,19)*5;
    const it=pick(["Hefte","Brötchen","Stifte","Äpfel"]);
    return{q:`${n1} ${it} kosten ${money(n1*u/100)} €. Wie viel kosten ${n2} ${it}? (in €, z. B. 3,50)`,type:"num",unit:"€",answer:r3(n2*u/100),show:money(n2*u/100),
      hint:`Rechne erst den Preis für 1 Stück aus, dann mal ${n2}.`,way:`1 Stück: ${money(n1*u/100)} : ${n1} = ${money(u/100)} €. ${n2} Stück: ${money(n2*u/100)} €.`};
  }
  const W=pick([12,24,36,48,60]);const dv=[...Array(W).keys()].map(i=>i+1).filter(x=>W%x===0&&x>1&&x<W);
  const w1=pick(dv);let w2;do{w2=pick(dv);}while(w2===w1);
  return{q:`${w1} Arbeiter brauchen ${W/w1} Tage für eine Arbeit. Wie viele Tage brauchen ${w2} Arbeiter?`,type:"num",unit:"Tage",answer:W/w2,
    hint:"Mehr Arbeiter brauchen weniger Zeit (umgekehrt proportional). Rechne zuerst die Gesamtarbeit aus.",way:`Gesamt: ${w1} · ${W/w1} = ${W} Arbeitertage. ${W} : ${w2} = ${W/w2} Tage.`};
}
function genPotenz(k){
  const kind=rnd(0,k>=9?4:2);
  if(kind===0){const a=pick([2,3,4,5,10]),n=a===10?rnd(2,5):rnd(2,4);const v=Math.pow(a,n);return{q:`${a}${sup(n)} = ?`,type:"num",answer:v,hint:`Multipliziere ${a} genau ${n}-mal mit sich selbst.`,way:`${Array(n).fill(a).join(" · ")} = ${v}.`};}
  if(kind===1){const r=rnd(2,15);return{q:`√${r*r} = ?`,type:"num",answer:r,hint:`Welche Zahl mal sich selbst ergibt ${r*r}?`,way:`${r} · ${r} = ${r*r}, also √${r*r} = ${r}.`};}
  if(kind===2){const a=pick([2,3,5]),m=rnd(2,5),n=rnd(2,5);return{q:`${a}${sup(m)} · ${a}${sup(n)} = ${a}^?`,type:"num",answer:m+n,hint:"Gleiche Basis: Exponenten addieren.",way:`${m} + ${n} = ${m+n}.`};}
  if(kind===3){const c=pick([[2,2,.25],[2,3,.125],[5,2,.04],[10,2,.01],[10,3,.001],[4,1,.25]]);
    return{q:`${c[0]}^(−${c[1]}) = ? (als Dezimalzahl)`,type:"num",answer:c[2],hint:"Negativer Exponent bedeutet Kehrwert: a^(−n) = 1 : aⁿ.",way:`1 : ${Math.pow(c[0],c[1])} = ${fmt(c[2])}.`};}
  const p=pick([[2,8,4],[3,12,6],[2,18,6],[5,20,10],[12,3,6],[7,28,14]]);
  return{q:`√${p[0]} · √${p[1]} = ?`,type:"num",answer:p[2],hint:"Wurzeln multiplizieren: √a · √b = √(a·b).",way:`√(${p[0]}·${p[1]}) = √${p[0]*p[1]} = ${p[2]}.`};
}
function genLinear(k){
  const kind=rnd(0,3);
  if(kind===0){const m=rnd(-4,5)||2,b=rnd(-6,8),x=rnd(-4,6);return{q:`Gegeben ist f(x) = ${poly([m,b])}. Berechne f(${x}).`,type:"num",answer:m*x+b,hint:"Setze x in die Funktion ein und rechne.",way:`f(${x}) = ${m}·${par(x)} + ${par(b)} = ${sg(m*x+b)}.`};}
  if(kind===1){const x1=rnd(-4,4),m=rnd(-4,5)||2,dx=rnd(1,4),y1=rnd(-5,6),x2=x1+dx,y2=y1+m*dx;
    return{q:`Eine Gerade geht durch P(${x1} | ${y1}) und Q(${x2} | ${y2}). Wie groß ist die Steigung?`,type:"num",answer:m,hint:"Steigung m = (y₂ − y₁) : (x₂ − x₁).",way:`(${y2} − ${par(y1)}) : (${x2} − ${par(x1)}) = ${sg(y2-y1)} : ${dx} = ${sg(m)}.`};}
  if(kind===2){const m=rnd(-4,5)||2,x0=rnd(-5,6),b=-m*x0;return{q:`Bestimme die Nullstelle von f(x) = ${poly([m,b])}.`,type:"num",answer:x0,hint:"Setze f(x) = 0 und löse nach x auf.",way:`${poly([m,b])} = 0 → ${m}x = ${sg(-b)} → x = ${sg(x0)}.`};}
  const m=rnd(-3,4)||2,x1=rnd(-3,4),y1=rnd(-6,7),b=y1-m*x1;
  return{q:`Eine Gerade mit der Steigung m = ${sg(m)} geht durch P(${x1} | ${y1}). Wie groß ist der y-Achsenabschnitt b?`,type:"num",answer:b,hint:"Setze P in y = m·x + b ein und löse nach b auf.",way:`${y1} = ${m}·${par(x1)} + b → b = ${sg(b)}.`};
}
function genLGS(k){
  let x=rnd(-5,8),y=rnd(-5,8),a1,b1,a2,b2;
  do{a1=rnd(1,4);b1=rnd(-4,4)||1;a2=rnd(1,4);b2=rnd(-4,4)||2;}while(a1*b2-a2*b1===0);
  const term=(a,b)=>`${a===1?"":a}x ${b<0?"−":"+"} ${Math.abs(b)===1?"":Math.abs(b)}y`;
  const ask=pick(["x","y"]);
  return{q:`Löse das Gleichungssystem und gib ${ask} an:<br>I: ${term(a1,b1)} = ${a1*x+b1*y}<br>II: ${term(a2,b2)} = ${a2*x+b2*y}`,type:"num",answer:ask==="x"?x:y,
    hint:"Additionsverfahren: Multipliziere eine Gleichung so, dass beim Addieren eine Variable wegfällt. Oder Einsetzungsverfahren.",
    way:`Die Lösung ist x = ${sg(x)} und y = ${sg(y)}. Probe in Gleichung I: ${a1}·${par(x)} + ${par(b1)}·${par(y)} = ${a1*x+b1*y} ✔`};
}
function genQuad(k){
  const kind=rnd(0,3);
  if(kind===0){const r=rnd(2,12);return{q:`Wie lautet die positive Lösung von x² = ${r*r}?`,type:"num",answer:r,hint:"Ziehe die Wurzel.",way:`x = √${r*r} = ${r} (und −${r}).`};}
  if(kind===1){let r1=rnd(-6,5),r2=rnd(r1+1,8);const b=-(r1+r2),c=r1*r2;const big=Math.random()<.5;
    return{q:`Löse x² ${b<0?"−":"+"} ${Math.abs(b)||0}x ${c<0?"−":"+"} ${Math.abs(c)} = 0. Wie lautet die ${big?"größere":"kleinere"} Lösung?`.replace("x² + 0x ","x² "),type:"num",answer:big?r2:r1,
      hint:"pq-Formel: x = −p/2 ± √((p/2)² − q), oder suche zwei Zahlen mit Summe −p und Produkt q (Satz von Vieta).",
      way:`Die Lösungen sind ${sg(r1)} und ${sg(r2)}. (Summe ${sg(r1+r2)}, Produkt ${sg(r1*r2)}.)`};}
  if(kind===2){const p=rnd(1,6),q=rnd(-8,8),a=pick([1,1,2]);const c=[a,-2*a*p,a*p*p+q];
    return{q:`Gegeben ist f(x) = ${poly(c)}. Wie lautet die x-Koordinate des Scheitelpunkts?`,type:"num",answer:p,
      hint:"Scheitelform f(x) = a(x − d)² + e. Die x-Koordinate ist d. Oder: x = −b : (2a).",way:`x = −(${sg(c[1])}) : (2·${a}) = ${p}.`};}
  const b=rnd(-6,6),c=rnd(-6,10),D=b*b-4*c;
  return{q:`Wie viele Lösungen hat x² ${b<0?"−":"+"} ${Math.abs(b)}x ${c<0?"−":"+"} ${Math.abs(c)} = 0?`,type:"choice",choices:["keine","eine","zwei"],answer:D<0?"keine":D===0?"eine":"zwei",
    hint:"Berechne die Diskriminante D = b² − 4c: D < 0 keine, D = 0 eine, D > 0 zwei Lösungen.",way:`D = ${b}² − 4·${par(c)} = ${D}.`};
}
function genPyth(k){
  const tr=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10]]);const m=tr[2]===10?1:rnd(1,3);
  const [a,b,c]=tr.map(x=>x*m);
  if(k>=9&&Math.random()<.4){
    const p=pick([["sin 30°","0,5"],["cos 60°","0,5"],["sin 90°","1"],["cos 0°","1"],["tan 45°","1"],["sin 0°","0"],["cos 90°","0"]]);
    return{q:`Wie groß ist ${p[0]}?`,type:"choice",choices:["0","0,5","1","√2"],answer:p[1],hint:"Denke an den Einheitskreis oder die Werte der Standardwinkel.",way:`${p[0]} = ${p[1]}.`};
  }
  const v=rnd(0,2);
  if(v===0)return{q:`Ein rechtwinkliges Dreieck hat die Katheten ${a} cm und ${b} cm. Wie lang ist die Hypotenuse?`,type:"num",unit:"cm",answer:c,hint:"Satz des Pythagoras: a² + b² = c².",way:`${a}² + ${b}² = ${a*a+b*b} = ${c}², also c = ${c} cm.`};
  if(v===1)return{q:`In einem rechtwinkligen Dreieck ist die Hypotenuse ${c} cm und eine Kathete ${a} cm lang. Wie lang ist die andere Kathete?`,type:"num",unit:"cm",answer:b,hint:"b² = c² − a².",way:`${c}² − ${a}² = ${c*c-a*a} = ${b}², also b = ${b} cm.`};
  return{q:`Ein Rechteck ist ${a} cm lang und ${b} cm breit. Wie lang ist die Diagonale?`,type:"num",unit:"cm",answer:c,hint:"Die Diagonale ist die Hypotenuse im rechtwinkligen Dreieck aus Länge und Breite.",way:`√(${a}² + ${b}²) = √${a*a+b*b} = ${c} cm.`};
}
function genAbleitung(k){
  const kind=rnd(0,2);
  if(kind===0){const n=pick([2,3]),a=rnd(1,5),b=rnd(-5,6),x0=rnd(1,4);
    const c=n===2?[a,b,rnd(-4,6)]:[a,0,b,rnd(-4,6)];
    return{q:`Gegeben ist f(x) = ${poly(c)}. Berechne f′(${x0}).`,type:"num",answer:a*n*Math.pow(x0,n-1)+b,
      hint:"Ableitungsregel: (xⁿ)′ = n·xⁿ⁻¹. Konstanten fallen weg.",way:`f′(x) = ${n===2?`${2*a}x`:`${3*a}x²`} ${b<0?"−":"+"} ${Math.abs(b)}, also f′(${x0}) = ${sg(a*n*Math.pow(x0,n-1)+b)}.`.replace(" + 0","")};}
  if(kind===1){const a=3*rnd(1,4),b=rnd(1,4);
    return{q:`Berechne das Integral von 0 bis ${b} über ${a}x² dx.`,type:"num",answer:a*b*b*b/3,hint:"Stammfunktion von ax² ist a·x³/3. Dann obere Grenze einsetzen und untere abziehen.",way:`F(x) = ${a/3}x³; F(${b}) − F(0) = ${a/3}·${b*b*b} = ${a*b*b*b/3}.`};}
  const n=pick([2,3,4]),x0=rnd(1,3);
  return{q:`Wie groß ist die Steigung der Tangente an f(x) = x${sup(n)} an der Stelle x = ${x0}?`,type:"num",answer:n*Math.pow(x0,n-1),hint:"Die Tangentensteigung ist die Ableitung f′(x₀).",way:`f′(x) = ${n}x${n-1>1?sup(n-1):""}, also f′(${x0}) = ${n*Math.pow(x0,n-1)}.`};
}
function genVektor(k){
  const kind=rnd(0,2);
  const v3=(a)=>`(${a.join(" | ")})`;
  if(kind===0){const a=[rnd(-4,5),rnd(-4,5),rnd(-3,4)],b=[rnd(-4,5),rnd(-4,5),rnd(-3,4)];const s=a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
    return{q:`Berechne das Skalarprodukt von a = ${v3(a)} und b = ${v3(b)}.`,type:"num",answer:s,hint:"Skalarprodukt = a₁b₁ + a₂b₂ + a₃b₃.",way:`${par(a[0])}·${par(b[0])} + ${par(a[1])}·${par(b[1])} + ${par(a[2])}·${par(b[2])} = ${sg(s)}.`};}
  if(kind===1){const p=pick([[3,4,0,5],[6,8,0,10],[2,3,6,7],[1,2,2,3],[2,6,9,11]]);
    return{q:`Wie lang ist der Vektor v = ${v3(p.slice(0,3))}?`,type:"num",answer:p[3],hint:"Betrag = √(v₁² + v₂² + v₃²).",way:`√(${p[0]}² + ${p[1]}² + ${p[2]}²) = √${p[0]**2+p[1]**2+p[2]**2} = ${p[3]}.`};}
  const a2=rnd(1,6),b2=rnd(-5,5)||2;const t=-a2*b2;
  return{q:`Für welches t sind a = (1 | ${a2}) und b = (t | ${b2}) orthogonal (senkrecht)?`.replace("| "+b2+")","| "+sg(b2)+")"),type:"num",answer:t,hint:"Orthogonal bedeutet: Skalarprodukt = 0.",way:`1·t + ${a2}·${par(b2)} = 0 → t = ${sg(t)}.`};
}

/* ---------- Themen (von Klasse … bis Klasse; 0 = Vorschule) ---------- */
const GROUPS=["Zahlen und Rechnen","Größen und Einheiten","Geometrie","Daten und Zufall","Terme und Gleichungen","Funktionen und Analysis"];
const TOPICS=[
 {id:"zaehlen",ic:"🔢",name:"Zählen und Mengen",group:0,from:0,to:1,gen:genZaehlen,explain:`<p>Zähle jeden Gegenstand <b>genau einmal</b>. Tipp: Tippe mit dem Finger auf jedes Bild.</p><div class="ex">🍎 🍎 🍎 → 3 Äpfel</div>`},
 {id:"vergleich",ic:"↔️",name:"Zahlen vergleichen",group:0,from:0,to:4,gen:genVergleich,explain:`<p>Auf dem <b>Zahlenstrahl</b> steht die größere Zahl weiter rechts. Vorgänger ist eine Zahl kleiner, Nachfolger eine größer.</p><div class="ex">7 &lt; 12, Nachfolger von 7 ist 8</div>`},
 {id:"plus",ic:"➕",name:"Plus rechnen",group:0,from:0,to:4,gen:genPlus,explain:`<p>Rechne in <b>Schritten</b>: erst Hunderter, dann Zehner, dann Einer. Kleine Zahlen kannst du vom größeren Summanden aus weiterzählen.</p><div class="ex">347 + 215<br>347 + 200 = 547<br>547 + 10 = 557<br>557 + 5 = <b>562</b></div>`},
 {id:"minus",ic:"➖",name:"Minus rechnen",group:0,from:1,to:4,gen:genMinus,explain:`<p>Beim Minus nimmst du Schritt für Schritt weg. Mit der <b>Probe</b> kontrollierst du: Ergebnis + abgezogene Zahl = Startzahl.</p><div class="ex">652 − 238<br>652 − 200 = 452<br>452 − 30 = 422<br>422 − 8 = <b>414</b><br>Probe: 414 + 238 = 652 ✔</div>`},
 {id:"mal",ic:"✖️",name:"Einmaleins",group:0,from:2,to:4,gen:genMal,explain:`<p>Du kannst Aufgaben <b>ableiten</b>: Kennst du 6 · 7 nicht, rechne 6 · 6 + 6. Tauschaufgaben haben dasselbe Ergebnis: 3 · 8 = 8 · 3.</p><div class="ex">7 · 8 = 7 · 7 + 7 = 49 + 7 = <b>56</b></div>`},
 {id:"geteilt",ic:"➗",name:"Geteilt rechnen",group:0,from:2,to:4,gen:genGeteilt,explain:`<p>Teilen ist die <b>Umkehrung</b> vom Malnehmen. Frag dich bei 42 : 6: Welche Zahl mal 6 ergibt 42?</p><div class="ex">6 · 7 = 42, also 42 : 6 = <b>7</b></div>`},
 {id:"schriftlich",ic:"🧮",name:"Malnehmen und Teilen mit großen Zahlen",group:0,from:4,to:6,gen:genSchriftlich,explain:`<p><b>Halbschriftlich</b> multiplizieren: zerlege eine Zahl. <b>Teilen</b>: Schritt für Schritt, am Ende die Probe mit Malnehmen.</p><div class="ex">36 · 14 = 36·10 + 36·4 = 360 + 144 = <b>504</b></div>`},
 {id:"runden",ic:"🎯",name:"Runden",group:0,from:3,to:6,gen:genRunden,explain:`<p>Schau auf die Ziffer <b>rechts</b> der Stelle, auf die du rundest: 0–4 abrunden, 5–9 aufrunden.</p><div class="ex">3 478 auf Hunderter → Ziffer 7 → aufrunden → <b>3 500</b></div>`},
 {id:"brueche",ic:"🍕",name:"Brüche",group:0,from:5,to:8,gen:genBrueche,explain:`<p><b>Kürzen</b>: Zähler und Nenner durch dieselbe Zahl teilen. <b>Erweitern</b>: mit derselben Zahl malnehmen. Beim Addieren braucht man einen <b>gemeinsamen Nenner</b>. Beim Malnehmen: Zähler mal Zähler, Nenner mal Nenner. Teilen heißt mit dem <b>Kehrbruch</b> malnehmen.</p><div class="ex">1/2 + 1/3 = 3/6 + 2/6 = <b>5/6</b></div><p>Antworten als Bruch schreibst du mit Schrägstrich, zum Beispiel 5/6.</p>`},
 {id:"dezimal",ic:"🔹",name:"Dezimalzahlen",group:0,from:5,to:7,gen:genDezimal,explain:`<p>Beim Addieren und Subtrahieren stehen die <b>Kommas untereinander</b>. Mal 10, 100, 1000: das Komma wandert nach <b>rechts</b>, beim Teilen nach <b>links</b>.</p><div class="ex">2,45 · 100 = <b>245</b><br>1/4 = 1 : 4 = <b>0,25</b></div>`},
 {id:"prozent",ic:"💯",name:"Prozentrechnung und Zinsen",group:0,from:5,to:10,gen:genProzent,explain:`<p>1 % ist ein Hundertstel. <b>Prozentwert</b> = Grundwert · Prozentsatz. Von 1 % kannst du immer auf andere Prozente hochrechnen.</p><div class="ex">25 % von 80: 1 % = 0,8 → 25 · 0,8 = <b>20</b></div><p>Zinsen = Kapital · Zinssatz · Zeit in Jahren.</p>`},
 {id:"negativ",ic:"🌡️",name:"Negative Zahlen",group:0,from:5,to:8,gen:genNegativ,explain:`<p>Auf dem Zahlenstrahl gehen negative Zahlen nach <b>links</b>. Minus eine negative Zahl heißt <b>plus</b>. Beim Malnehmen und Teilen: gleiche Vorzeichen → <b>+</b>, verschiedene → <b>−</b>.</p><div class="ex">(−3) · (−4) = <b>12</b><br>5 − (−2) = 5 + 2 = <b>7</b></div><p>Du kannst auch „−“ mit der normalen Minustaste eingeben.</p>`},
 {id:"teilbar",ic:"🔑",name:"Teilbarkeit und Primzahlen",group:0,from:5,to:7,gen:genTeilbar,explain:`<p>Teilbarkeitsregeln: durch 2 (gerade), 3 (Quersumme), 5 (Endziffer 0/5), 9 (Quersumme), 10 (Endziffer 0). Eine <b>Primzahl</b> hat genau zwei Teiler. Der <b>ggT</b> ist der größte gemeinsame Teiler, das <b>kgV</b> das kleinste gemeinsame Vielfache.</p><div class="ex">ggT(12, 18) = 6, kgV(4, 6) = 12</div>`},
 {id:"dreisatz",ic:"⚖️",name:"Dreisatz",group:0,from:5,to:9,gen:genDreisatz,explain:`<p>Beim Dreisatz rechnest du erst auf <b>1</b> und dann auf die gewünschte Menge. Bei <b>je mehr, desto mehr</b> teilst du zuerst durch die gegebene Menge und nimmst dann mal die gesuchte Menge. Bei <b>je mehr, desto weniger</b> (umgekehrt) rechnest du die Gesamtmenge aus und teilst.</p><div class="ex">3 Hefte 4,50 € → 1 Heft 1,50 € → 5 Hefte <b>7,50 €</b></div>`},
 {id:"potenz",ic:"⬆️",name:"Potenzen und Wurzeln",group:0,from:7,to:13,gen:genPotenz,explain:`<p>aⁿ heißt: a genau n-mal mit sich selbst malnehmen. Gleiche Basis: Exponenten <b>addieren</b> beim Malnehmen. Negativer Exponent: Kehrwert. Die Wurzel ist die Umkehrung des Quadrierens.</p><div class="ex">2³ · 2⁴ = 2⁷, √49 = 7, 10^(−2) = 0,01</div>`},
 {id:"geld",ic:"💶",name:"Geld und Rückgeld",group:1,from:1,to:4,gen:genGeld,explain:`<p>1 € sind 100 Cent. Beim Einkaufen zählst du die Preise zusammen. Das <b>Rückgeld</b> ist bezahlt minus Preis.</p><div class="ex">Eis 120 Cent + Stift 45 Cent = 165 Cent<br>200 − 165 = <b>35 Cent</b> zurück</div>`},
 {id:"laenge",ic:"📏",name:"Längen umrechnen",group:1,from:1,to:6,gen:genLaenge,explain:`<p>Merke dir:</p><div class="ex">1 km = 1000 m<br>1 m = 100 cm<br>1 cm = 10 mm</div><p>Von der <b>großen</b> zur kleinen Einheit rechnest du <b>mal</b>, von klein zu groß <b>geteilt</b>.</p>`},
 {id:"gewicht",ic:"⚗️",name:"Gewichte und Hohlmaße",group:1,from:3,to:6,gen:genGewicht,explain:`<p>1 kg = 1000 g, 1 t = 1000 kg, 1 l = 1000 ml. Auch hier: große → kleine Einheit <b>mal 1000</b>, kleine → große <b>geteilt durch 1000</b>.</p><div class="ex">2,5 kg = 2,5 · 1000 = <b>2500 g</b></div>`},
 {id:"uhr",ic:"🕒",name:"Uhrzeit und Zeitspannen",group:1,from:1,to:4,gen:genUhr,explain:`<p>1 Stunde hat 60 Minuten. Der kurze Zeiger zeigt die Stunde, der lange die Minuten. Bei Zeitspannen gehst du bis zur <b>vollen Stunde</b> und rechnest dann den Rest.</p><div class="ex">14:40 + 50 Min.: bis 15:00 sind es 20 Min., noch 30 Min. → <b>15:30</b></div>`},
 {id:"geo",ic:"🔷",name:"Formen, Flächen und Körper",group:2,from:1,to:6,gen:genGeo,explain:`<p><b>Umfang</b> = alle Seiten zusammen. <b>Fläche</b> Rechteck = Länge · Breite, Dreieck = Grundseite · Höhe : 2. <b>Volumen</b> Quader = Länge · Breite · Höhe. Winkelsumme im Dreieck: 180°.</p><div class="ex">Rechteck 5 × 3 cm: Umfang <b>16 cm</b>, Fläche <b>15 cm²</b></div>`},
 {id:"pyth",ic:"📐",name:"Pythagoras und Winkelwerte",group:2,from:8,to:13,gen:genPyth,explain:`<p>Im rechtwinkligen Dreieck gilt <b>a² + b² = c²</b> (c ist die längste Seite, die Hypotenuse). Bekannte Zahlentripel: 3-4-5, 5-12-13, 8-15-17.</p><div class="ex">3² + 4² = 9 + 16 = 25 = 5²</div><p>Wichtige Winkelwerte: sin 30° = 0,5, cos 60° = 0,5, tan 45° = 1.</p>`},
 {id:"vektor",ic:"➡️",name:"Vektoren",group:2,from:11,to:13,gen:genVektor,explain:`<p><b>Skalarprodukt</b>: a·b = a₁b₁ + a₂b₂ + a₃b₃. Ist es 0, stehen die Vektoren <b>senkrecht</b> aufeinander. Die <b>Länge</b> ist √(a₁² + a₂² + a₃²).</p><div class="ex">(1|2|2): Länge √(1+4+4) = 3</div>`},
 {id:"diagramm",ic:"📊",name:"Diagramme und Mittelwert",group:3,from:2,to:6,gen:genDiagramm,explain:`<p>Bei einem Säulendiagramm gehst du von der Säulenspitze <b>waagerecht nach links</b> zur Zahlenleiste. Der <b>Mittelwert</b> ist die Summe aller Werte geteilt durch die Anzahl.</p><div class="ex">Mittelwert von 4, 8, 6 = 18 : 3 = <b>6</b></div>`},
 {id:"wahrsch",ic:"🎲",name:"Wahrscheinlichkeit und Zählen",group:3,from:3,to:13,gen:genWahrsch,explain:`<p><b>Wahrscheinlichkeit</b> = günstige Fälle : alle Fälle. Beim <b>Zählprinzip</b> multiplizierst du die Möglichkeiten. n! (n Fakultät) zählt die Reihenfolgen.</p><div class="ex">3 rote, 2 blaue Kugeln: P(rot) = <b>3/5</b></div>`},
 {id:"gleichung",ic:"⚙️",name:"Terme und Gleichungen",group:4,from:5,to:10,gen:genGleichung,explain:`<p>Bei einer Gleichung machst du auf <b>beiden Seiten</b> dasselbe: Gegenrechnung, bis x allein steht.</p><div class="ex">3x + 5 = 20<br>3x = 15 (−5)<br>x = <b>5</b> (:3)</div>`},
 {id:"lgs",ic:"🔗",name:"Lineare Gleichungssysteme",group:4,from:8,to:13,gen:genLGS,explain:`<p>Zwei Gleichungen, zwei Unbekannte. <b>Einsetzen</b>: eine Gleichung nach x oder y umstellen und in die andere einsetzen. <b>Additionsverfahren</b>: Gleichungen so multiplizieren, dass eine Variable beim Addieren wegfällt.</p><div class="ex">x + y = 5 und x − y = 1 → 2x = 6 → x = <b>3</b>, y = <b>2</b></div>`},
 {id:"quad",ic:"🌀",name:"Quadratische Gleichungen und Funktionen",group:4,from:9,to:13,gen:genQuad,explain:`<p>x² + px + q = 0 löst du mit der <b>pq-Formel</b>: x = −p/2 ± √((p/2)² − q). Der Term unter der Wurzel entscheidet über die Anzahl der Lösungen. Bei f(x) = ax² + bx + c liegt der Scheitelpunkt bei x = −b/(2a).</p><div class="ex">x² − 5x + 6 = 0 → Lösungen <b>2</b> und <b>3</b></div>`},
 {id:"linear",ic:"📈",name:"Lineare Funktionen",group:5,from:7,to:13,gen:genLinear,explain:`<p>f(x) = <b>m</b>x + <b>b</b>: m ist die Steigung, b der y-Achsenabschnitt. Steigung aus zwei Punkten: m = (y₂ − y₁) : (x₂ − x₁). Nullstelle: f(x) = 0 setzen.</p><div class="ex">f(x) = 2x − 6 → Nullstelle x = <b>3</b></div>`},
 {id:"ableit",ic:"∂",name:"Ableitung und Integral",group:5,from:11,to:13,gen:genAbleitung,explain:`<p><b>Ableiten</b>: (xⁿ)′ = n·xⁿ⁻¹. Die Ableitung ist die Steigung der Tangente. <b>Integrieren</b> ist die Umkehrung: ∫ xⁿ dx = xⁿ⁺¹/(n+1). Bei einem bestimmten Integral setzt du die Grenzen in die Stammfunktion ein.</p><div class="ex">f(x) = x³ → f′(x) = <b>3x²</b></div>`}
];
