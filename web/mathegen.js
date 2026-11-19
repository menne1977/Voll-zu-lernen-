
/* ======================================================================
   Mathe erweitert: weitere Themen mit Endlos-Aufgaben und Lösungsweg
   ====================================================================== */
const MG=(id,ic,name,group,from,to,explain,gen)=>{const t={id,ic,name,group,from,to,explain:`<p>${explain}</p>`,gen,subj:"mathe",gens:true,reset(){}};TOPICS.push(t);ALL.push(t);return t;};
const nq=(q,a,hint,way,unit)=>({q,type:"num",answer:a,hint,way,unit});
const r2=x=>Math.round(x*100)/100;
const supH=(b,e)=>`${b}<sup>${e}</sup>`;

MG("stellenwert","🔟","Stellenwerte und Zahlen zerlegen",0,1,5,"Jede Ziffer hat einen <b>Stellenwert</b>: Einer (E), Zehner (Z), Hunderter (H), Tausender (T). In 472 stehen 4 Hunderter, 7 Zehner und 2 Einer.",k=>{
  const big=k>=3,n=big?rnd(1000,9999):k>=2?rnd(100,999):rnd(10,99);const s=String(n);const m=Math.random();
  const names=big?["Tausender","Hunderter","Zehner","Einer"]:s.length===3?["Hunderter","Zehner","Einer"]:["Zehner","Einer"];
  if(m<.4){const i=rnd(0,names.length-1);return nq(`Welche Ziffer steht bei ${n} an der ${names[i]}-Stelle?`,+s[i],"Lies die Zahl von links nach rechts und ordne die Stellen zu.",`${n} = ${names.map((nm,j)=>s[j]+" "+nm).join(", ")}. Die ${names[i]}-Ziffer ist ${s[i]}.`);}
  if(m<.7){const d=names.map(()=>rnd(0,9));d[0]=rnd(1,9);const v=+d.join("");return nq(`Schreibe als Zahl: ${names.map((nm,j)=>d[j]+" "+nm).join(", ")}`,v,"Schreibe die Ziffern in der Reihenfolge der Stellen hintereinander.",`${d.join("")} = ${v}.`);}
  const step=pick([1,10,100]);const w=step===1?"1 mehr":step===10?"10 mehr":"100 mehr";
  return nq(`Was ist ${w} als ${n}?`,n+step,step===1?"Ein Schritt weiter.":step===10?"Die Zehnerziffer wird um 1 größer.":"Die Hunderterziffer wird um 1 größer.",`${n} + ${step} = ${n+step}.`);
});
MG("klammer","🧩","Rechenregeln: Klammern, Punkt vor Strich",0,3,10,"<b>Klammern zuerst</b>, dann <b>Punkt vor Strich</b> (mal und geteilt vor plus und minus), sonst von links nach rechts. Beispiel: 3 + 4 · 2 = 3 + 8 = 11, aber (3 + 4) · 2 = 14.",()=>{
  const a=rnd(2,12),b=rnd(2,9),c=rnd(2,9),d=rnd(1,9);const t=rnd(0,5);
  if(t===0)return nq(`${a} + ${b} · ${c} = ?`,a+b*c,"Punkt vor Strich: Rechne zuerst das Mal.",`Zuerst ${b} · ${c} = ${b*c}. Dann ${a} + ${b*c} = ${a+b*c}.`);
  if(t===1)return nq(`(${a} + ${b}) · ${c} = ?`,(a+b)*c,"Klammer zuerst.",`Klammer: ${a} + ${b} = ${a+b}. Dann ${a+b} · ${c} = ${(a+b)*c}.`);
  if(t===2){const x=a*b+rnd(1,9);return nq(`${x} − ${a} · ${b} = ?`,x-a*b,"Punkt vor Strich.",`Zuerst ${a} · ${b} = ${a*b}. Dann ${x} − ${a*b} = ${x-a*b}.`);}
  if(t===3)return nq(`${a} · (${b} + ${c}) − ${d} = ?`,a*(b+c)-d,"Klammer, dann Mal, dann Minus.",`Klammer: ${b} + ${c} = ${b+c}. Mal: ${a} · ${b+c} = ${a*(b+c)}. Minus: ${a*(b+c)} − ${d} = ${a*(b+c)-d}.`);
  if(t===4){const x=b*c;return nq(`${a} + ${x} : ${b} · ${d} = ?`,a+x/b*d,"Mal und geteilt von links nach rechts, dann Plus.",`${x} : ${b} = ${x/b}. Dann · ${d} = ${x/b*d}. Dann ${a} + ${x/b*d} = ${a+x/b*d}.`);}
  return nq(`${a*b} : ${b} + ${c} · ${d} = ?`,a+c*d,"Zuerst alle Mal- und Geteilt-Aufgaben.",`${a*b} : ${b} = ${a}. ${c} · ${d} = ${c*d}. Summe: ${a} + ${c*d} = ${a+c*d}.`);
});
MG("folgen","➿","Zahlenfolgen",0,2,13,"Bei einer <b>Zahlenfolge</b> gibt es eine Regel. <b>Arithmetisch</b>: immer dasselbe addieren (3, 7, 11, 15, …). <b>Geometrisch</b>: immer mit derselben Zahl malnehmen (2, 6, 18, 54, …). Finde die Regel, dann die nächste Zahl.",k=>{
  const m=Math.random();
  if(k>=9&&m<.4){const s=rnd(1,10),d=rnd(2,7),n=rnd(8,15);return nq(`Eine arithmetische Folge beginnt mit a₁ = ${s} und hat den Abstand d = ${d}. Wie groß ist a(${n})?`,s+(n-1)*d,"Formel: aₙ = a₁ + (n − 1) · d.",`a(${n}) = ${s} + ${n-1} · ${d} = ${s+(n-1)*d}.`);}
  if(m<.4){const s=rnd(1,12),d=rnd(2,k<4?5:9),a=[0,1,2,3].map(i=>s+i*d);return nq(`Wie geht es weiter? ${a.join(", ")}, …`,s+4*d,"Rechne den Abstand zwischen zwei Zahlen aus.",`Immer + ${d}. Nächste Zahl: ${a[3]} + ${d} = ${s+4*d}.`);}
  if(m<.65){const s=rnd(1,5),q=pick([2,3,4,5]),a=[0,1,2,3].map(i=>s*q**i);return nq(`Wie geht es weiter? ${a.join(", ")}, …`,s*q**4,"Teile eine Zahl durch die vorherige.",`Immer · ${q}. Nächste Zahl: ${a[3]} · ${q} = ${s*q**4}.`);}
  if(m<.8)return nq(`Wie geht es weiter? 1, 4, 9, 16, 25, …`,36,"Das sind die Quadratzahlen.","1², 2², 3², 4², 5², also 6² = 36.");
  if(m<.9)return nq(`Wie geht es weiter? 1, 1, 2, 3, 5, 8, …`,13,"Addiere die letzten zwei Zahlen.","Fibonacci-Folge: 5 + 8 = 13.");
  const s=rnd(30,70),d=rnd(2,6);return nq(`Wie geht es weiter? ${s}, ${s-d}, ${s-2*d}, ${s-3*d}, …`,s-4*d,"Die Zahlen werden kleiner. Um wie viel?",`Immer − ${d}. Nächste Zahl: ${s-3*d} − ${d} = ${s-4*d}.`);
});
MG("winkel","📐","Winkel und Winkelsummen",2,4,10,"Im <b>Dreieck</b> ist die Winkelsumme <b>180°</b>, im <b>Viereck 360°</b>. <b>Nebenwinkel</b> ergeben zusammen 180°. <b>Scheitelwinkel</b> sind gleich groß. Der <b>Außenwinkel</b> des Dreiecks ist die Summe der beiden nicht anliegenden Innenwinkel.",k=>{
  const t=rnd(0,5);const a=rnd(20,80),b=rnd(20,90);
  if(t===0)return nq(`Im Dreieck ist α = ${a}° und β = ${b}°. Wie groß ist γ?`,180-a-b,"Winkelsumme im Dreieck: 180°.",`γ = 180° − ${a}° − ${b}° = ${180-a-b}°.`,"°");
  if(t===1){const c=rnd(60,120);return nq(`Im Viereck sind drei Winkel ${a}°, ${b}° und ${c}°. Wie groß ist der vierte?`,360-a-b-c,"Winkelsumme im Viereck: 360°.",`360° − ${a}° − ${b}° − ${c}° = ${360-a-b-c}°.`,"°");}
  if(t===2)return nq(`Zwei Nebenwinkel: Ein Winkel ist ${a}°. Wie groß ist der andere?`,180-a,"Nebenwinkel ergeben zusammen 180°.",`180° − ${a}° = ${180-a}°.`,"°");
  if(t===3)return nq(`Zwei Geraden schneiden sich. Ein Winkel ist ${a}°. Wie groß ist der Scheitelwinkel?`,a,"Scheitelwinkel liegen sich gegenüber und sind gleich groß.",`Scheitelwinkel sind gleich: ${a}°.`,"°");
  if(t===4){const p=2*rnd(10,40);return nq(`Ein gleichschenkliges Dreieck hat an der Spitze ${p}°. Wie groß ist ein Basiswinkel?`,(180-p)/2,"Die beiden Basiswinkel sind gleich groß.",`(180° − ${p}°) : 2 = ${(180-p)/2}°.`,"°");}
  return nq(`Im Dreieck sind α = ${a}° und β = ${b}°. Wie groß ist der Außenwinkel bei γ?`,a+b,"Außenwinkel = Summe der beiden anderen Innenwinkel.",`${a}° + ${b}° = ${a+b}°. (Kontrolle: γ = ${180-a-b}°, 180° − γ = ${a+b}°.)`,"°");
});
MG("kreis","⭕","Kreis: Umfang und Fläche",2,6,10,"Umfang <b>U = 2 · π · r</b>, Fläche <b>A = π · r²</b>. Der Durchmesser ist doppelt so lang wie der Radius (d = 2r). Hier rechnest du mit <b>π ≈ 3,14</b>.",()=>{
  const r=rnd(1,12);const t=rnd(0,3);
  if(t===0)return nq(`Kreis mit Radius r = ${r} cm. Wie groß ist der Umfang? (π ≈ 3,14)`,r2(2*3.14*r),"U = 2 · π · r",`U = 2 · 3,14 · ${r} = ${String(r2(2*3.14*r)).replace(".",",")} cm.`,"cm");
  if(t===1)return nq(`Kreis mit Radius r = ${r} cm. Wie groß ist die Fläche? (π ≈ 3,14)`,r2(3.14*r*r),"A = π · r · r (Radius zweimal malnehmen).",`A = 3,14 · ${r} · ${r} = 3,14 · ${r*r} = ${String(r2(3.14*r*r)).replace(".",",")} cm².`,"cm²");
  if(t===2)return nq(`Ein Kreis hat den Durchmesser d = ${2*r} cm. Wie groß ist der Radius?`,r,"Radius ist die Hälfte vom Durchmesser.",`r = ${2*r} : 2 = ${r} cm.`,"cm");
  return nq(`Kreis mit Durchmesser d = ${2*r} cm. Wie groß ist der Umfang? (π ≈ 3,14)`,r2(3.14*2*r),"U = π · d",`U = 3,14 · ${2*r} = ${String(r2(3.14*2*r)).replace(".",",")} cm.`,"cm");
});
MG("volumen","📦","Volumen und Oberfläche",2,5,10,"<b>Quader</b>: V = a · b · c, Oberfläche O = 2 · (ab + ac + bc). <b>Würfel</b>: V = a³, O = 6 · a². <b>Zylinder</b>: V = π · r² · h. Das Volumen sagt, wie viel hineinpasst; die Oberfläche ist die Außenhaut.",()=>{
  const t=rnd(0,4);const a=rnd(2,9),b=rnd(2,9),c=rnd(2,9);
  if(t===0)return nq(`Quader: ${a} cm lang, ${b} cm breit, ${c} cm hoch. Volumen?`,a*b*c,"V = Länge · Breite · Höhe.",`V = ${a} · ${b} · ${c} = ${a*b*c} cm³.`,"cm³");
  if(t===1)return nq(`Würfel mit Kantenlänge ${a} cm. Volumen?`,a**3,"V = a · a · a.",`V = ${a} · ${a} · ${a} = ${a**3} cm³.`,"cm³");
  if(t===2)return nq(`Würfel mit Kantenlänge ${a} cm. Oberfläche?`,6*a*a,"Ein Würfel hat 6 gleiche Quadrate.",`Eine Fläche: ${a} · ${a} = ${a*a}. Mal 6: ${6*a*a} cm².`,"cm²");
  if(t===3)return nq(`Quader: a = ${a} cm, b = ${b} cm, c = ${c} cm. Oberfläche?`,2*(a*b+a*c+b*c),"O = 2 · (a·b + a·c + b·c)",`${a}·${b} = ${a*b}, ${a}·${c} = ${a*c}, ${b}·${c} = ${b*c}. Summe ${a*b+a*c+b*c}, mal 2 = ${2*(a*b+a*c+b*c)} cm².`,"cm²");
  return nq(`Zylinder: r = ${a} cm, h = ${b} cm. Volumen? (π ≈ 3,14)`,r2(3.14*a*a*b),"V = π · r² · h",`V = 3,14 · ${a*a} · ${b} = ${String(r2(3.14*a*a*b)).replace(".",",")} cm³.`,"cm³");
});
MG("binom","✖️","Binomische Formeln",4,8,10,"<b>(a + b)² = a² + 2ab + b²</b>, <b>(a − b)² = a² − 2ab + b²</b>, <b>(a + b)(a − b) = a² − b²</b>. Nicht vergessen: das <b>Doppelte Produkt 2ab</b> in der Mitte!",()=>{
  const a=rnd(2,9);const t=rnd(0,4);
  const fm=(x,y)=>`x² ${y>=0?"+":"−"} ${Math.abs(y)===1?"":Math.abs(y)}x ${x>=0?"+":"−"} ${Math.abs(x)}`.replace(/ 1x/," x");
  if(t===0)return mkC(`(x + ${a})² = ?`,`x² + ${2*a}x + ${a*a}`,[`x² + ${a*a}`,`x² + ${a}x + ${a*a}`,`x² + ${2*a}x + ${2*a}`],"Erste Formel: Das Doppelte Produkt 2·x·"+a+" kommt in die Mitte.",`(x + ${a})² = x² + 2 · ${a} · x + ${a}² = x² + ${2*a}x + ${a*a}.`);
  if(t===1)return mkC(`(x − ${a})² = ?`,`x² − ${2*a}x + ${a*a}`,[`x² − ${a*a}`,`x² − ${2*a}x − ${a*a}`,`x² + ${2*a}x + ${a*a}`],"Zweite Formel: In der Mitte Minus, hinten immer Plus.",`(x − ${a})² = x² − 2 · ${a} · x + ${a}² = x² − ${2*a}x + ${a*a}.`);
  if(t===2)return mkC(`(x + ${a})(x − ${a}) = ?`,`x² − ${a*a}`,[`x² + ${a*a}`,`x² − ${2*a}x`,`x² − ${2*a}x + ${a*a}`],"Dritte Formel: Die Mitte fällt weg.",`(x + ${a})(x − ${a}) = x² − ${a}² = x² − ${a*a}.`);
  if(t===3)return mkC(`Faktorisiere: x² + ${2*a}x + ${a*a}`,`(x + ${a})²`,[`(x + ${2*a})²`,`(x − ${a})²`,`(x + ${a})(x − ${a})`],"Passt es zur ersten Formel? Wurzel aus dem letzten Glied.",`${a*a} = ${a}², ${2*a}x = 2 · ${a} · x. Also (x + ${a})².`);
  return mkC(`Faktorisiere: x² − ${a*a}`,`(x + ${a})(x − ${a})`,[`(x − ${a})²`,`(x + ${a})²`,`(x − ${a*a})(x + 1)`],"Differenz zweier Quadrate: dritte Formel.",`x² − ${a}² = (x + ${a})(x − ${a}).`);
});
MG("potgesetz","⚡","Potenzgesetze",4,8,13,"Gleiche Basis: <b>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></b> (Exponenten addieren), <b>a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup></b> (subtrahieren), <b>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></b> (multiplizieren). Außerdem a⁰ = 1 und a<sup>−n</sup> = 1 / a<sup>n</sup>.",k=>{
  const b=pick([2,3,5,7,10]),m=rnd(2,8),n=rnd(2,6);const t=rnd(0,k>=9?5:3);
  if(t===0)return nq(`${supH(b,m)} · ${supH(b,n)} = ${b}<sup>?</sup>  Welcher Exponent?`,m+n,"Gleiche Basis beim Malnehmen: Exponenten addieren.",`${m} + ${n} = ${m+n}.`);
  if(t===1){const mm=m+n;return nq(`${supH(b,mm)} : ${supH(b,n)} = ${b}<sup>?</sup>  Welcher Exponent?`,m,"Beim Teilen: Exponenten subtrahieren.",`${mm} − ${n} = ${m}.`);}
  if(t===2)return nq(`(${supH(b,m)})<sup>${n}</sup> = ${b}<sup>?</sup>  Welcher Exponent?`,m*n,"Potenz von Potenz: Exponenten multiplizieren.",`${m} · ${n} = ${m*n}.`);
  if(t===3){const bb=pick([2,3,5]),e=rnd(2,5);return nq(`Berechne ${supH(bb,e)}`,bb**e,"Multipliziere die Basis so oft, wie der Exponent sagt.",`${Array(e).fill(bb).join(" · ")} = ${bb**e}.`);}
  if(t===4)return nq(`Wie groß ist ${supH(b,0)}?`,1,"Jede Zahl hoch 0 ist 1.","a⁰ = 1.");
  const e=rnd(1,4);const bb=pick([2,5,10]);return mkC(`${supH(bb,"−"+e)} = ?`,`1/${bb**e}`,[`−${bb**e}`,`${bb*e}`,`−${bb*e}`],"Negativer Exponent: Kehrwert bilden.",`${supH(bb,"−"+e)} = 1 / ${supH(bb,e)} = 1/${bb**e}.`);
});
MG("zins","🏦","Zinsen und Zinseszins",4,7,13,"<b>Zinsen = Kapital · Zinssatz</b> pro Jahr. Beim <b>Zinseszins</b> werden die Zinsen mit verzinst: <b>K<sub>n</sub> = K · (1 + p/100)<sup>n</sup></b>. Der Wachstumsfaktor bei 5 % ist 1,05.",k=>{
  const K=pick([200,500,1000,2000,5000]),p=pick([2,4,5,10]);const t=rnd(0,3);
  if(t===0)return nq(`${K} € werden ein Jahr lang mit ${p} % verzinst. Wie hoch sind die Zinsen?`,K*p/100,"Zinsen = Kapital · Prozentsatz.",`${K} · ${p}/100 = ${K*p/100} €.`,"€");
  if(t===1)return nq(`Wie lautet der Wachstumsfaktor bei ${p} % Zinsen pro Jahr?`,1+p/100,"Wachstumsfaktor = 1 + Prozentsatz als Dezimalzahl.",`1 + ${p}/100 = ${String(1+p/100).replace(".",",")}.`);
  if(t===2){const n=pick([2,3]);return nq(`${K} € werden ${n} Jahre mit ${p} % Zinseszins angelegt. Endkapital? (auf Cent runden)`,r2(K*Math.pow(1+p/100,n)),"K · (1 + p/100)^n. Rechne mit dem Taschenrechner.",`${K} · ${String(1+p/100).replace(".",",")}^${n} = ${String(r2(K*Math.pow(1+p/100,n))).replace(".",",")} €.`,"€");}
  return nq(`${K} € werden 1 Jahr mit ${p} % verzinst. Wie viel Geld ist es am Ende?`,K+K*p/100,"Kapital plus Zinsen.",`${K} + ${K*p/100} = ${K+K*p/100} €.`,"€");
});
MG("expo","📈","Exponentielles Wachstum und Logarithmus",5,10,13,"Bei <b>exponentiellem Wachstum</b> wird immer mit demselben Faktor malgenommen: f(x) = a · b<sup>x</sup>. Der <b>Logarithmus</b> fragt nach dem Exponenten: log<sub>2</sub> 8 = 3, weil 2³ = 8.",()=>{
  const t=rnd(0,4);const L=(b)=>`log<span style="font-size:.7em;vertical-align:sub">${b}</span>`;
  if(t===0){const b=pick([2,3,5,10]),n=rnd(1,5);return nq(`${L(b)} ${b**n} = ?`,n,"Frage: b hoch welche Zahl ergibt das Ergebnis?",`${b}^${n} = ${b**n}, also ${n}.`);}
  if(t===1){const b=pick([2,3,4,5]),n=rnd(2,5);return nq(`Löse: ${b}<sup>x</sup> = ${b**n}`,n,"Auf beiden Seiten dieselbe Basis erkennen.",`${b**n} = ${b}^${n}, also x = ${n}.`);}
  if(t===2){const s=rnd(1,9)*5,n=rnd(2,5);return nq(`Eine Bakterienkultur hat ${s} Zellen und verdoppelt sich jede Stunde. Wie viele nach ${n} Stunden?`,s*2**n,"Nach jeder Stunde mal 2.",`${s} · 2^${n} = ${s} · ${2**n} = ${s*2**n}.`);}
  if(t===3){const s=pick([40,80,160,320]),n=rnd(2,4);return nq(`Ein Stoff halbiert sich in jeder Halbwertszeit. Start: ${s} g. Wie viel nach ${n} Halbwertszeiten?`,s/2**n,"Immer durch 2.",`${s} : 2^${n} = ${s} : ${2**n} = ${s/2**n} g.`,"g");}
  const n=rnd(1,4);return nq(`lg ${10**n} = ?  (lg ist der Logarithmus zur Basis 10)`,n,"Wie viele Nullen hat die Zahl?",`10^${n} = ${10**n}, also lg = ${n}.`);
});
MG("kuerzen","✂️","Brüche kürzen und erweitern",0,5,8,"<b>Kürzen</b>: Zähler und Nenner durch dieselbe Zahl teilen (12/18 : 6 = 2/3). <b>Erweitern</b>: beide mit derselben Zahl malnehmen (2/3 · 4 = 8/12). Der Wert des Bruchs bleibt gleich.",()=>{
  const f=pick([[1,2],[1,3],[2,3],[3,4],[2,5],[3,5],[5,6],[4,7],[3,8],[5,8]]);const m=rnd(2,6);const t=rnd(0,2);
  const fr=(a,b)=>`${a}/${b}`;
  if(t===0){const wrongs=[fr(f[0]+1,f[1]),fr(f[0],f[1]+1),fr(f[0]*m,f[1])];return mkC(`Kürze ${fr(f[0]*m,f[1]*m)} so weit wie möglich.`,fr(...f),wrongs,"Teile Zähler und Nenner durch dieselbe Zahl.",`Teile durch ${m}: ${fr(f[0]*m,f[1]*m)} = ${fr(...f)}.`);}
  if(t===1)return mkC(`Erweitere ${fr(...f)} mit ${m}.`,fr(f[0]*m,f[1]*m),[fr(f[0]*m,f[1]),fr(f[0]+m,f[1]+m),fr(f[0],f[1]*m)],"Zähler UND Nenner mit derselben Zahl malnehmen.",`${f[0]}·${m} = ${f[0]*m} und ${f[1]}·${m} = ${f[1]*m}.`);
  return nq(`${fr(...f)} = ?/${f[1]*m}  Welcher Zähler fehlt?`,f[0]*m,`Womit wurde der Nenner ${f[1]} erweitert?`,`${f[1]} · ${m} = ${f[1]*m}, also auch ${f[0]} · ${m} = ${f[0]*m}.`);
});
MG("textaufg","📖","Textaufgaben (endlos)",0,2,9,"Gehe immer so vor: <b>1. Lesen</b> und markieren, was gegeben ist. <b>2. Fragen</b>: Was wird gesucht? <b>3. Rechnung</b> aufschreiben. <b>4. Antwortsatz</b> und prüfen, ob die Zahl zur Geschichte passt.",k=>{
  const nm=pick(["Lena","Tom","Mia","Ben","Emma","Jonas","Sara","Paul"]);
  const low=[
   ()=>{const a=rnd(5,40),b=rnd(3,30);return nq(`${nm} hat ${a} Murmeln und bekommt ${b} dazu. Wie viele hat ${nm} jetzt?`,a+b,"„dazu“ heißt plus.",`Gegeben: ${a} und ${b}. Gesucht: Summe. ${a} + ${b} = ${a+b}.`);},
   ()=>{const a=rnd(20,60),b=rnd(3,19);return nq(`In der Klasse sind ${a} Kinder. ${b} sind krank. Wie viele sind da?`,a-b,"„krank“ heißt weg: minus.",`${a} − ${b} = ${a-b}.`);},
   ()=>{const a=rnd(3,12),b=rnd(2,9);return nq(`Eine Packung enthält ${a} Kekse. ${nm} kauft ${b} Packungen. Wie viele Kekse sind das?`,a*b,"Gleiche Mengen: mal.",`${a} · ${b} = ${a*b}.`);},
   ()=>{const b=rnd(2,9),c=rnd(2,9);return nq(`${b*c} Bonbons werden gerecht an ${b} Kinder verteilt. Wie viele bekommt jedes Kind?`,c,"Gerecht verteilen: geteilt.",`${b*c} : ${b} = ${c}.`);}
  ];
  const high=[
   ()=>{const a=pick([80,120,200,400,600]),p=pick([10,20,25,50]);return nq(`Ein Fahrrad kostet ${a} €. Es gibt ${p} % Rabatt. Wie viel kostet es jetzt?`,a-a*p/100,"Rechne zuerst den Rabatt in Euro aus.",`Rabatt: ${a} · ${p}/100 = ${a*p/100} €. Neuer Preis: ${a} − ${a*p/100} = ${a-a*p/100} €.`,"€");},
   ()=>{const n=rnd(2,5),pr=pick([1.5,2,2.5,3,4]),m=n+rnd(2,5);return nq(`${n} Hefte kosten ${String(r2(n*pr)).replace(".",",")} €. Was kosten ${m} Hefte?`,r2(m*pr),"Dreisatz: erst der Preis für 1 Heft.",`1 Heft: ${String(r2(n*pr)).replace(".",",")} : ${n} = ${String(pr).replace(".",",")} €. ${m} Hefte: ${String(pr).replace(".",",")} · ${m} = ${String(r2(m*pr)).replace(".",",")} €.`,"€");},
   ()=>{const v=pick([40,50,60,80,100]),t=rnd(2,5);return nq(`Ein Auto fährt ${t} Stunden mit ${v} km/h. Wie weit kommt es?`,v*t,"Strecke = Geschwindigkeit · Zeit.",`s = ${v} · ${t} = ${v*t} km.`,"km");},
   ()=>{const a=rnd(3,15),b=rnd(2,12);return nq(`Ein Rechteck ist ${a} cm lang und ${b} cm breit. Wie groß ist der Umfang?`,2*(a+b),"U = 2 · (Länge + Breite).",`2 · (${a} + ${b}) = ${2*(a+b)} cm.`,"cm");},
   ()=>{const x=rnd(3,12),d=rnd(2,6);return nq(`${nm} ist ${d} Jahre älter als ${nm==="Tom"?"Mia":"Tom"}. Zusammen sind sie ${2*x+d} Jahre alt. Wie alt ist der Jüngere?`,x,"Der Jüngere ist x Jahre alt, der Ältere x + "+d+".",`x + (x + ${d}) = ${2*x+d} → 2x = ${2*x} → x = ${x}.`);}
  ];
  return pick(k>=5?high.concat(low.slice(0,1)):low)();
});
MG("trick","⚡","Schnell rechnen mit Tricks",0,3,8,"Mit kleinen Tricks rechnest du im Kopf viel schneller: <b>mal 5</b> = halbieren, dann mal 10. <b>Mal 9</b> = mal 10 minus die Zahl. <b>Mal 11</b> bei zweistelligen Zahlen: Quersumme in die Mitte. <b>Quadrat von Zahlen mit 5 am Ende</b>: n · (n+1), dann 25 dahinter.",()=>{
  const t=rnd(0,4);
  if(t===0){const n=2*rnd(6,48);return nq(`${n} · 5 = ?  (Trick: halbieren, dann mal 10)`,n*5,"Halbiere die Zahl und hänge eine 0 an.",`${n} : 2 = ${n/2}, mal 10 = ${n*5}.`);}
  if(t===1){const n=rnd(12,60);return nq(`${n} · 9 = ?  (Trick: mal 10 minus die Zahl)`,n*9,"Rechne n · 10 und ziehe n ab.",`${n}·10 = ${n*10}, minus ${n} = ${n*9}.`);}
  if(t===2){let a,b;do{a=rnd(1,9);b=rnd(0,9);}while(a+b>9);const n=a*10+b;return nq(`${n} · 11 = ?  (Trick: ${a} … ${a+b} … ${b})`,n*11,"Schreibe die Quersumme zwischen die beiden Ziffern.",`${a} | ${a}+${b}=${a+b} | ${b} → ${n*11}.`);}
  if(t===3){const a=rnd(1,9);const n=a*10+5;return nq(`${n}² = ?  (Trick: ${a} · ${a+1}, dann 25 dahinter)`,n*n,"Multipliziere die Zehnerziffer mit ihrem Nachfolger und hänge 25 an.",`${a} · ${a+1} = ${a*(a+1)}, dahinter 25 → ${n*n}.`);}
  const n=4*rnd(3,30);return nq(`${n} · 25 = ?  (Trick: durch 4, dann mal 100)`,n*25,"25 ist ein Viertel von 100.",`${n} : 4 = ${n/4}, mal 100 = ${n*25}.`);
});
MG("terme","🔡","Terme vereinfachen",4,6,10,"Gleichartige Glieder darfst du <b>zusammenfassen</b>: 3x + 2x = 5x. Beim <b>Ausmultiplizieren</b> wird jedes Glied in der Klammer mit dem Faktor malgenommen: 2 · (x + 3) = 2x + 6.",()=>{
  const a=rnd(2,9),b=rnd(1,8),c=rnd(2,6),d=rnd(1,9);const t=rnd(0,3);
  if(t===0)return mkC(`${a}x + ${b}x = ?`,`${a+b}x`,[`${a*b}x`,`${a+b}x²`,`${a+b}`],"Gleiche Unbekannte: Zahlen davor addieren.",`${a}x + ${b}x = ${a+b}x.`);
  if(t===1)return mkC(`${c}(x + ${d}) = ?`,`${c}x + ${c*d}`,[`${c}x + ${d}`,`x + ${c*d}`,`${c+1}x + ${c*d}`],"Jedes Glied in der Klammer mit "+c+" malnehmen.",`${c}·x = ${c}x und ${c}·${d} = ${c*d}.`);
  if(t===2)return mkC(`${a+b}x + ${d} − ${b}x − ${d-1>0?d-1:0} = ?`,`${a}x + ${d-(d-1>0?d-1:0)}`,[`${a}x`,`${a+2*b}x + ${d}`,`${a}x + ${d}`].filter(x=>x!==`${a}x + ${d-(d-1>0?d-1:0)}`),"x-Glieder und Zahlen getrennt zusammenfassen.",`(${a+b}x − ${b}x) + (${d} − ${d-1>0?d-1:0}) = ${a}x + ${d-(d-1>0?d-1:0)}.`);
  return nq(`Setze x = ${b} ein: ${a}x + ${d} = ?`,a*b+d,"Ersetze x durch die Zahl und rechne.",`${a} · ${b} + ${d} = ${a*b+d}.`);
});
