
/* ======================================================================
   Manga zum Lesen (selbst gezeichnet, eigene Figuren, viel Text)
   Figuren: Kiko (Schüler), Mira (Freundin), Bolt (Roboter), Frau Sommer (Lehrerin)
   ====================================================================== */
const CH_COL={kiko:{hair:"#1f2430",shirt:"#ef4444",skin:"#ffd9b8"},mira:{hair:"#7c3a1d",shirt:"#3b82f6",skin:"#ffd9b8"},sommer:{hair:"#9ca3af",shirt:"#16a34a",skin:"#f6cfa8"}};
function mouth(e,cx,cy){
  if(e==="happy")return `<path d="M${cx-9} ${cy} Q${cx} ${cy+10} ${cx+9} ${cy}" stroke="#7f1d1d" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  if(e==="surprised")return `<ellipse cx="${cx}" cy="${cy+3}" rx="5" ry="7" fill="#7f1d1d"/>`;
  if(e==="sad")return `<path d="M${cx-8} ${cy+6} Q${cx} ${cy-3} ${cx+8} ${cy+6}" stroke="#7f1d1d" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  if(e==="angry")return `<path d="M${cx-8} ${cy+4} L${cx+8} ${cy+4}" stroke="#7f1d1d" stroke-width="3" stroke-linecap="round"/>`;
  if(e==="laugh")return `<path d="M${cx-10} ${cy-1} Q${cx} ${cy+16} ${cx+10} ${cy-1} Z" fill="#7f1d1d"/><path d="M${cx-6} ${cy+3} Q${cx} ${cy+8} ${cx+6} ${cy+3}" fill="#fecaca"/>`;
  return `<path d="M${cx-6} ${cy+3} L${cx+6} ${cy+3}" stroke="#7f1d1d" stroke-width="2.5" stroke-linecap="round"/>`;
}
function eyes(e,cx,cy,col){
  const brow=e==="angry"?`<path d="M${cx-24} ${cy-14} L${cx-8} ${cy-8} M${cx+24} ${cy-14} L${cx+8} ${cy-8}" stroke="#222" stroke-width="3" stroke-linecap="round"/>`:e==="sad"?`<path d="M${cx-24} ${cy-8} L${cx-8} ${cy-14} M${cx+24} ${cy-8} L${cx+8} ${cy-14}" stroke="#222" stroke-width="3" stroke-linecap="round"/>`:e==="surprised"?`<path d="M${cx-22} ${cy-17} Q${cx-14} ${cy-22} ${cx-6} ${cy-17} M${cx+22} ${cy-17} Q${cx+14} ${cy-22} ${cx+6} ${cy-17}" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>`:"";
  const r=e==="surprised"?10:8;
  const one=x=>e==="laugh"?`<path d="M${x-8} ${cy+2} Q${x} ${cy-8} ${x+8} ${cy+2}" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`:`<ellipse cx="${x}" cy="${cy}" rx="${r}" ry="${r+3}" fill="#fff" stroke="#222" stroke-width="1.5"/><ellipse cx="${x}" cy="${cy+1}" rx="${r-3}" ry="${r}" fill="${col||"#1e3a8a"}"/><circle cx="${x-2}" cy="${cy-3}" r="2.5" fill="#fff"/>`;
  return brow+one(cx-15)+one(cx+15)+(e==="sad"?`<path d="M${cx-20} ${cy+14} q-2 8 0 10" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round"/>`:"");
}
function person(k,e,x,y,s,flip){
  const c=CH_COL[k];const hy=y-62;
  let hair="";
  if(k==="kiko")hair=`<path d="M${-36} ${-8} L${-30} ${-44} L${-18} ${-26} L${-8} ${-50} L${2} ${-28} L${14} ${-52} L${22} ${-26} L${34} ${-42} L${36} ${-6} Q${0} ${-24} ${-36} ${-8} Z" fill="${c.hair}"/>`;
  else if(k==="mira")hair=`<path d="M-38 -4 Q-40 -48 0 -48 Q40 -48 38 -4 Q0 -28 -38 -4 Z" fill="${c.hair}"/><circle cx="40" cy="-14" r="13" fill="${c.hair}"/><circle cx="40" cy="-14" r="5" fill="#f43f5e"/>`;
  else hair=`<path d="M-38 0 Q-42 -50 0 -50 Q42 -50 38 0 Q34 -26 0 -28 Q-34 -26 -38 0 Z" fill="${c.hair}"/><circle cx="0" cy="-48" r="14" fill="${c.hair}"/>`;
  const extra=k==="sommer"?`<circle cx="-15" cy="6" r="12" fill="none" stroke="#374151" stroke-width="2.5"/><circle cx="15" cy="6" r="12" fill="none" stroke="#374151" stroke-width="2.5"/><path d="M-3 6 L3 6" stroke="#374151" stroke-width="2.5"/>`:"";
  return `<g transform="translate(${x} ${y}) scale(${flip?-s:s} ${s})">
   <rect x="-26" y="-18" width="52" height="64" rx="14" fill="${c.shirt}"/><rect x="-44" y="-10" width="18" height="46" rx="9" fill="${c.shirt}"/><rect x="26" y="-10" width="18" height="46" rx="9" fill="${c.shirt}"/>
   <rect x="-20" y="46" width="16" height="30" rx="6" fill="#334155"/><rect x="4" y="46" width="16" height="30" rx="6" fill="#334155"/>
   <g transform="translate(0 -44)"><circle cx="0" cy="0" r="38" fill="${c.skin}" stroke="#222" stroke-width="2"/>${hair}${eyes(e,0,4,k==="mira"?"#065f46":"#1e3a8a")}${extra}${mouth(e,0,26)}</g></g>`;
}
function bolt(e,x,y,s){
  const col=e==="happy"||e==="laugh"?"#fde047":e==="sad"?"#60a5fa":e==="angry"?"#f87171":e==="surprised"?"#f0abfc":"#67e8f9";
  const mo=e==="happy"||e==="laugh"?`<path d="M-14 24 Q0 36 14 24" stroke="#111827" stroke-width="3" fill="none" stroke-linecap="round"/>`:e==="sad"?`<path d="M-12 30 Q0 20 12 30" stroke="#111827" stroke-width="3" fill="none" stroke-linecap="round"/>`:e==="surprised"?`<rect x="-6" y="22" width="12" height="12" rx="3" fill="#111827"/>`:`<path d="M-12 28 L12 28" stroke="#111827" stroke-width="3" stroke-linecap="round"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})"><line x1="0" y1="-84" x2="0" y2="-64" stroke="#475569" stroke-width="4"/><circle cx="0" cy="-88" r="6" fill="${col}" stroke="#111" stroke-width="1.5"/>
   <rect x="-34" y="-66" width="68" height="62" rx="16" fill="#cbd5e1" stroke="#222" stroke-width="2"/><rect x="-24" y="-52" width="48" height="26" rx="8" fill="#0f172a"/>
   <rect x="-17" y="-47" width="12" height="${e==="surprised"?18:14}" rx="3" fill="${col}"/><rect x="5" y="-47" width="12" height="${e==="surprised"?18:14}" rx="3" fill="${col}"/>${mo.replace(/translate/,"")}
   <rect x="-30" y="0" width="60" height="50" rx="10" fill="#94a3b8" stroke="#222" stroke-width="2"/><circle cx="0" cy="24" r="8" fill="${col}" stroke="#111" stroke-width="1.5"/>
   <rect x="-48" y="6" width="16" height="34" rx="8" fill="#cbd5e1" stroke="#222" stroke-width="2"/><rect x="32" y="6" width="16" height="34" rx="8" fill="#cbd5e1" stroke="#222" stroke-width="2"/>
   <circle cx="-18" cy="62" r="12" fill="#475569"/><circle cx="18" cy="62" r="12" fill="#475569"/></g>`;
}
function scene(n){
  return{
   school:(i)=>`<rect width="300" height="200" fill="#bae6fd"/><rect x="20" y="40" width="260" height="110" fill="#fca5a5" stroke="#222" stroke-width="2"/><polygon points="10,40 150,6 290,40" fill="#b91c1c" stroke="#222" stroke-width="2"/>${[40,100,160,220].map(x=>`<rect x="${x}" y="64" width="34" height="34" fill="#fef9c3" stroke="#222" stroke-width="2"/>`).join("")}<rect x="132" y="104" width="36" height="46" fill="#7c2d12" stroke="#222" stroke-width="2"/><rect y="150" width="300" height="50" fill="#86efac"/>`,
   park:(i)=>`<rect width="300" height="200" fill="#bae6fd"/><circle cx="250" cy="34" r="20" fill="#fde047"/><ellipse cx="150" cy="190" rx="220" ry="70" fill="#86efac"/><rect x="40" y="90" width="12" height="60" fill="#92400e"/><circle cx="46" cy="80" r="34" fill="#22c55e" stroke="#166534" stroke-width="2"/><rect x="230" y="100" width="10" height="50" fill="#92400e"/><circle cx="235" cy="92" r="28" fill="#16a34a" stroke="#166534" stroke-width="2"/>`,
   room:(i)=>`<rect width="300" height="200" fill="#fde68a"/><rect y="150" width="300" height="50" fill="#a16207"/><rect x="190" y="30" width="80" height="70" fill="#7dd3fc" stroke="#222" stroke-width="3"/><path d="M230 30 V100 M190 65 H270" stroke="#222" stroke-width="3"/><rect x="20" y="40" width="70" height="90" fill="#b45309" stroke="#222" stroke-width="2"/><path d="M20 70H90M20 100H90" stroke="#222" stroke-width="2"/>`,
   night:(i)=>`<rect width="300" height="200" fill="#1e1b4b"/><circle cx="240" cy="40" r="22" fill="#fef9c3"/>${[[30,30],[80,60],[130,22],[180,50],[60,100],[270,90],[110,90]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="2" fill="#fff"/>`).join("")}<rect y="150" width="300" height="50" fill="#14532d"/>`,
   lab:(i)=>`<rect width="300" height="200" fill="#e0e7ff"/><rect y="150" width="300" height="50" fill="#94a3b8"/><rect x="20" y="30" width="110" height="10" fill="#475569"/><rect x="30" y="10" width="14" height="20" fill="#34d399"/><rect x="60" y="14" width="14" height="16" fill="#f472b6"/><rect x="200" y="40" width="80" height="60" rx="6" fill="#0f172a" stroke="#222" stroke-width="2"/><path d="M210 80 L230 60 L250 74 L270 50" stroke="#4ade80" stroke-width="3" fill="none"/>`,
   storm:(i)=>`<rect width="300" height="200" fill="#475569"/><ellipse cx="80" cy="40" rx="70" ry="26" fill="#334155"/><ellipse cx="220" cy="50" rx="70" ry="28" fill="#1e293b"/><path d="M150 60 L135 100 L155 100 L140 140" stroke="#fde047" stroke-width="5" fill="none"/>${Array.from({length:30},(_,k)=>`<line x1="${(k*37)%300}" y1="${(k*53)%160}" x2="${(k*37)%300-6}" y2="${(k*53)%160+16}" stroke="#bae6fd" stroke-width="2"/>`).join("")}<rect y="150" width="300" height="50" fill="#374151"/>`
  }[n];
}
const MANGA=[];
const MG_=(id,t,lv,sub,panels)=>MANGA.push({id,t,lv,sub,panels});
MG_("m1","Kiko und der stumme Roboter",2,"Folge 1",[
 {s:"school",c:[["kiko","happy",90,1,0],["mira","happy",210,1,1]],cap:"Montagmorgen vor der Schule. Die Sonne scheint, und Kiko hat gute Laune.",b:[[0,"Guten Morgen, Mira! Heute habe ich Pausenbrot mit Käse dabei."],[1,"Guten Morgen, Kiko! Ich habe etwas Seltsames im Park gesehen."]]},
 {s:"park",c:[["bolt","neutral",200,1],["kiko","surprised",90,1,0]],cap:"Nach der Schule laufen die beiden in den Park.",b:[[0,"Da! Hinter dem Busch! Ist das etwa ein Roboter?"],[1,"Er bewegt sich nicht. Vielleicht ist seine Batterie leer."]]},
 {s:"park",c:[["mira","think",80,1,0],["bolt","neutral",210,1]],cap:"Mira betrachtet den Roboter von allen Seiten.",b:[[0,"Auf seiner Brust steht ein Name: B-O-L-T. Er heißt Bolt."],[1,"Wir bringen ihn zu mir nach Hause. Mein Papa hat ein Ladekabel."]]},
 {s:"room",c:[["bolt","neutral",200,1],["kiko","happy",100,1,0]],cap:"Zu Hause stecken sie Bolt an die Steckdose. Ein leises Summen ertönt.",b:[[0,"Seine Augen leuchten! Er wird wach!"],[1,"Bitte … mehr … Strom … Danke."]]},
 {s:"room",c:[["bolt","happy",200,1],["mira","surprised",90,1,0]],cap:"Bolt sieht sich verwundert um. Er kann sprechen, aber nur sehr leise und langsam.",b:[[0,"Du kannst ja sprechen! Warum warst du so still?"],[1,"Ich hatte … keine Energie. Und ich … wusste nicht … wohin."]]},
 {s:"room",c:[["kiko","happy",90,1,0],["bolt","happy",210,1]],cap:"Kiko hat eine Idee, und sie gefällt ihm sehr.",b:[[0,"Du kannst bei uns wohnen! Wir zeigen dir die Stadt."],[1,"Danke, Kiko. Ich … habe jetzt zwei Freunde. Das ist neu für mich."]]},
 {s:"night",c:[["kiko","happy",80,1,0],["mira","happy",150,1,0],["bolt","happy",230,1]],cap:"Am Abend sitzen die drei auf dem Dach und sehen in den Sternenhimmel. Ein neues Abenteuer beginnt.",b:[[0,"Morgen zeigen wir dir die Schule!"],[1,"Da bin ich gespannt. Roboter dürfen doch in die Schule, oder?"]]}
]);
MG_("m2","Das verschwundene Pausenbrot",3,"Folge 2",[
 {s:"school",c:[["kiko","sad",100,1,0],["mira","think",210,1,1]],cap:"In der großen Pause stellt Kiko etwas Schreckliches fest. Sein Pausenbrot ist weg!",b:[[0,"Mein Brot! Ich habe es doch heute früh in meine Tasche gelegt!"],[1,"Das sieht nach einem Fall für uns aus. Wir ermitteln!"]]},
 {s:"school",c:[["bolt","neutral",90,1],["mira","think",210,1,1]],cap:"Bolt scannt den Boden mit seinen Augen. Er findet etwas.",b:[[0,"Ich sehe Krümel. Sie führen zum Schulhof."],[1,"Gut gemacht, Bolt! Folgen wir der Spur."]]},
 {s:"park",c:[["kiko","surprised",90,1,0],["bolt","neutral",210,1]],cap:"Die Spur führt hinter den Geräteschuppen. Dort raschelt es verdächtig.",b:[[0,"Pssst! Da bewegt sich etwas im Gebüsch."],[1,"Ich messe vierunddreißig Zentimeter Körperlänge. Es ist kein Mensch."]]},
 {s:"park",c:[["mira","laugh",100,1,0],["kiko","happy",210,1]],cap:"Heraus kommt ein kleiner, zerzauster Hund mit Käse im Maul.",b:[[0,"Haha! Der Dieb ist ein Hund! Er sieht richtig stolz aus."],[1,"Du kleiner Räuber! Hast du so großen Hunger gehabt?"]]},
 {s:"park",c:[["kiko","happy",90,1,0],["mira","think",190,1],["bolt","happy",250,0.8]],cap:"Der Hund wedelt mit dem Schwanz. Er hat kein Halsband und sieht sehr dünn aus.",b:[[0,"Der arme Kerl hat wohl niemanden. Wir müssen ihm helfen."],[1,"Frau Sommer kennt bestimmt jemanden vom Tierheim."]]},
 {s:"school",c:[["sommer","happy",210,1,1],["kiko","happy",90,1,0]],cap:"Die Klassenlehrerin hört der Geschichte aufmerksam zu.",b:[[0,"Das habt ihr richtig gemacht. Ich rufe sofort das Tierheim an."],[1,"Und wenn niemand ihn abholt, darf er dann bei uns bleiben?"]]},
 {s:"room",c:[["kiko","laugh",80,1,0],["mira","happy",160,1],["bolt","happy",240,0.9]],cap:"Zwei Wochen später: Niemand hat sich gemeldet. Der Hund Käsi wohnt jetzt bei Kiko.",b:[[0,"Käsi hat mein Pausenbrot gefressen und trotzdem mein Herz gewonnen!"],[1,"Fall gelöst. Ergebnis: ein neuer Freund."]]}
]);
MG_("m3","Sturm über der Schule",4,"Folge 3",[
 {s:"storm",c:[["sommer","surprised",90,1,0],["kiko","surprised",210,1,1]],cap:"Mitten im Unterricht zieht ein schwerer Sturm auf. Der Himmel wird schwarz, Donner rollt über das Schulgebäude.",b:[[0,"Bleibt bitte alle ruhig und setzt euch hin. Das Gewitter zieht bald vorbei."],[1,"Frau Sommer, warum ist das Licht ausgegangen?"]]},
 {s:"lab",c:[["bolt","angry",100,1],["mira","think",210,1,1]],cap:"Im Keller liegt der Sicherungskasten. Bolt hat sofort eine Vermutung.",b:[[0,"Der Blitz hat wahrscheinlich die Hauptsicherung beschädigt. Ohne Strom funktioniert auch die Heizung nicht mehr."],[1,"Dann wird es bald sehr kalt. Und die Kleinen haben Angst."]]},
 {s:"lab",c:[["kiko","happy",90,1,0],["bolt","neutral",210,1]],cap:"Kiko fasst einen Entschluss. Er wird gemeinsam mit Bolt in den Keller gehen.",b:[[0,"Bolt, du kennst dich mit Strom aus. Kannst du die Sicherung austauschen?"],[1,"Theoretisch ja. Aber ich benötige Licht und eine ruhige Hand. Kiko, du leuchtest."]]},
 {s:"lab",c:[["kiko","surprised",90,1,0],["bolt","neutral",210,1]],cap:"Im dunklen Keller zittert der Lichtkegel der Taschenlampe. Über ihnen kracht der Donner.",b:[[0,"Mir klopft das Herz bis zum Hals! Hoffentlich schaffen wir das."],[1,"Keine Sorge. Ich zähle ruhig mit: Schraube eins, Schraube zwei, Kabel lösen."]]},
 {s:"lab",c:[["bolt","happy",150,1],["kiko","laugh",240,0.9]],cap:"Plötzlich flackert die Deckenlampe und geht an. Aus den Klassenzimmern ertönt Jubel.",b:[[0,"Geschafft! Die Spannung ist wieder stabil."],[1,"Du bist unglaublich, Bolt! Das hast du richtig gut gemacht!"]]},
 {s:"school",c:[["sommer","happy",90,1,0],["mira","happy",210,1,1]],cap:"Als das Gewitter vorbei ist, versammelt sich die ganze Schule auf dem Hof.",b:[[0,"Ich bin stolz auf euch beide. Mut bedeutet nicht, keine Angst zu haben. Mut bedeutet, trotzdem zu handeln."],[1,"Und Bolt hat gezeigt, dass Roboter echte Freunde sein können."]]},
 {s:"night",c:[["kiko","happy",80,1,0],["mira","happy",150,1],["bolt","happy",230,1]],cap:"Am Abend leuchtet über der Schule ein Regenbogen im Mondlicht. Die drei Freunde lächeln. Der nächste Tag kann kommen.",b:[[0,"Was sollen wir als Nächstes erleben?"],[1,"Ich schlage vor: eine ganz ruhige Woche ohne Gewitter."]]}
]);
function panelSvg(p,idx){
  const sc=scene(p.s)(idx);
  const body=p.c.map(c=>c[0]==="bolt"?bolt(c[1],c[2],104,.72*(c[3]||1)):person(c[0],c[1],c[2],104,.8*(c[3]||1),!!c[4]&&c[2]>150)).join("");
  return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;display:block;border-radius:10px">${sc}${body}</svg>`;
}
function mangaPage(){
  markTab("lesen");BACKFN=()=>lesenPage();
  app.innerHTML=`<button class="back" id="bk">← Lesen</button><header class="top"><h1>🎌 Manga</h1></header>
  <div class="card"><p style="margin:0">Eigene Manga-Geschichten mit Kiko, Mira und dem Roboter Bolt. Viel Text, damit du beim Lesen übst. Tippe auf eine Sprechblase, dann wird sie vorgelesen.</p></div>
  ${MANGA.map(m=>`<button class="resitem" data-m="${m.id}"><b>${esc(m.t)}</b><span>${m.sub} · ${LEVELNAME[m.lv]} · ${m.panels.length} Bilder</span></button>`).join("")}`;
  document.getElementById("bk").onclick=lesenPage;
  app.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>readManga(b.dataset.m));
  window.scrollTo(0,0);
}
function readManga(id){
  const m=MANGA.find(x=>x.id===id);stopSpeak();BACKFN=()=>mangaPage();
  const all=m.panels.map(p=>[p.cap].concat(p.b.map(x=>x[1])).join(" ")).join(" ");
  app.innerHTML=`<button class="back" id="bk">← Manga</button><header class="top"><h1>${esc(m.t)}</h1></header>
  <div class="row"><button class="btn small" id="all">🔊 Alles vorlesen</button><button class="btn small ghost" id="stp">⏹ Stopp</button></div>
  ${m.panels.map((p,i)=>`<div class="mpanel"><div class="mnum">${i+1}</div>${panelSvg(p,id+i)}<div class="mcap" data-t="${esc(p.cap)}">${esc(p.cap)}</div>${p.b.map(x=>`<div class="mbub ${p.c[x[0]]&&p.c[x[0]][2]>150?"r":"l"}" data-t="${esc(x[1])}"><b>${esc({kiko:"Kiko",mira:"Mira",bolt:"Bolt",sommer:"Frau Sommer"}[(p.c[x[0]]||p.c[0])[0]])}:</b> ${esc(x[1])}</div>`).join("")}</div>`).join("")}
  <div class="card"><b>Ende der Folge.</b> Lies sie gern nochmal und achte auf Wörter, die du noch nicht kennst.</div>`;
  document.getElementById("bk").onclick=mangaPage;
  document.getElementById("all").onclick=()=>speak(all);document.getElementById("stp").onclick=stopSpeak;
  app.querySelectorAll("[data-t]").forEach(el=>el.onclick=()=>speak(el.dataset.t));
  window.scrollTo(0,0);
}
