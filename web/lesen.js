
/* ======================================================================
   Lesen & Schreiben: Lernpfad, Tagesplan, Methoden aus „D lern“
   ====================================================================== */
const isKid=()=>store.who!=="erw";
const plainW=w=>w.replace(/\|/g,"");
const wordPool=()=>(isKid()?W_KID:W_ERW.concat(W_KID.filter((_,i)=>i%3===0)));
const CONF={b:"d",d:"b",p:"q",q:"p",m:"n",n:"m",a:"o",o:"a",e:"i",i:"e",u:"o",s:"z",z:"s",g:"k",k:"g",f:"v",v:"f",t:"d",ä:"e",ö:"o",ü:"u"};
function dlLaute(){
  const w=plainW(pick(wordPool()));const idx=[];[...w].forEach((c,i)=>{if(/[a-zäöüß]/i.test(c)&&CONF[c.toLowerCase()])idx.push(i);});
  const i=idx.length?pick(idx):0;const c=w[i];const lc=c.toLowerCase();const up=c!==lc;
  const pool=Object.keys(CONF).filter(x=>x!==lc);const wr=[CONF[lc],...shuffle(pool)].filter(x=>x&&x!==lc);
  const f=x=>up?x.toUpperCase():x;
  const shown=w.slice(0,i)+"_"+w.slice(i+1);
  return mkC(`Hör zu und finde den fehlenden Buchstaben.<br><button class="btn small ghost" onclick="speak('${w}')">🔊 Wort anhören</button><div class="clz" style="font-size:1.8rem;letter-spacing:.1em">${esc(shown)}</div>`,c,wr.slice(0,3).map(f),"Sprich das Wort langsam und höre auf den Laut an der Lücke.",`Das Wort heißt: ${w}.`);
}
function dlSilben(){
  const s=pick(wordPool().filter(x=>x.indexOf("|")>0));const parts=s.split("|"),w=parts.join("");
  const m=Math.random();
  if(m<.4)return mkC(`Klatsche das Wort „${w}“. Wie viele Silben hat es?`,String(parts.length),[String(parts.length+1),String(Math.max(1,parts.length-1)),String(parts.length+2)],"Sprich langsam und klatsche bei jeder Silbe.",`${parts.join(" – ")}: ${parts.length} Silben.`);
  if(m<.75){const sh=shuffle(parts.slice());if(sh.join("|")===parts.join("|")&&parts.length>1)sh.reverse();
    const wr=others(wordPool().map(plainW),w,3);return mkC(`Setze zusammen: <b>${sh.join(" · ")}</b>. Welches Wort ist das?`,w,wr,"Probiere die Silben in verschiedener Reihenfolge, bis ein Wort klingt.",`${parts.join(" – ")} = ${w}`);}
  const wrong=parts.length>1?[parts.slice(0,-1).join("")+"-"+parts[parts.length-1]]:[];const p2=parts.join("-");
  const v=[];if(parts.length>=3){v.push(parts[0]+"-"+parts.slice(1).join(""));}v.push(w.slice(0,1)+"-"+w.slice(1));v.push(w.slice(0,Math.ceil(w.length/2))+"-"+w.slice(Math.ceil(w.length/2)));
  return mkC(`Wie trennt man „${w}“ in Silben?`,p2,[...wrong,...v].filter(x=>x!==p2),"Jede Silbe hat einen Selbstlaut. Sprich langsam.",`Richtig: ${p2}`);
}
function dlParse(item,rule){
  const parts=item.split("#");const hint=parts[1]||"";const m=parts[0].match(/^(.*?)\[(.+?)\](.*)$/);
  if(!m)return null;const opts=m[2].split("/");const right=opts[0];
  const shown=m[1]+"_"+(right.length>1?"_".repeat(right.length-1):"")+m[3];
  return{q:`${rule.name}: Welche Schreibweise passt?<div class="clz" style="font-size:1.6rem">${esc(m[1]+"…"+m[3])}</div>`,right,opts,hint,full:m[1]+right+m[3],m};
}
function dlRegel(ruleId){
  const r=ruleId?RULE(ruleId):pick(RULES.filter(x=>x.id!=="stamm"));
  const it=dlParse(pick(r.items),r);if(!it)return dlRegel();
  const q=mkC(`${r.name}<div class="clz" style="font-size:1.7rem;letter-spacing:.05em">${esc(it.m[1])}<b style="color:var(--pri)">…</b>${esc(it.m[3])}</div>Welche Schreibweise passt?`,it.right,it.opts.slice(1),it.hint||(isKid()?r.kid:r.erw).replace(/<[^>]+>/g,""),`Richtig: ${it.full}. ${it.hint}`);
  q.cardWord=it.full;q.say=it.full;q.topicId="dl-regeln";return q;
}
function dlBlitz(){
  const w=plainW(pick(wordPool()));const ms=Math.max(500,1400-(store.blitzLv||0)*120);
  const wr=others(wordPool().map(plainW),w,3);
  const q=mkC(`Schau genau hin! Das Wort verschwindet gleich.<div id="flashw" class="clz" style="font-size:2.2rem;text-align:center;letter-spacing:.08em">${esc(w)}</div>Welches Wort hast du gesehen?`,w,wr,"Schau dir die Wortanfänge und Wortenden an.",`Das Wort war: ${w}.`);
  q.flash=ms;q.topicId="dl-blitz";return q;
}
function dlDiktat(){
  const sent=Math.random()<.4;const w=sent?pick(isKid()?S_KID:S_ERW):plainW(pick(wordPool()));
  const q=mkT(`${sent?"Höre den Satz":"Höre das Wort"} und schreibe es auf.<br><button class="btn small" onclick="speak('${w.replace(/'/g,"")}')">🔊 Anhören</button>`,w,sent?"Höre Stück für Stück und schreibe mit.":`Das Wort hat ${w.length} Buchstaben.`,true,{say:w,cardWord:w,topicId:"dl-diktat"});
  return q;
}
/* Fehlerkartei (Karten mit Boxen, kommen nach Plan wieder) */
const INT=[0,1,2,4,7,14];
const dayStr=d=>{d=d||new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");};
const dayPlus=n=>{const d=new Date();d.setDate(d.getDate()+n);return dayStr(d);};
store.karten=store.karten||[];
function addKarte(t){let c=store.karten.find(x=>x.t===t);if(c){c.box=1;c.due=dayPlus(INT[1]);}else store.karten.push({t,box:1,due:dayPlus(INT[1])});}
function cardResult(t,ok){const c=store.karten.find(x=>x.t===t);if(!c)return;if(ok){c.box=Math.min(5,c.box+1);c.due=dayPlus(INT[c.box]);}else{c.box=1;c.due=dayPlus(INT[1]);}}
const dueCards=()=>store.karten.filter(c=>c.due<=dayStr());
function dlKarte(){
  const d=dueCards();if(!d.length)return dlDiktat();const c=pick(d);const w=c.t;
  return mkT(`📓 Fehlerkartei: Höre und schreibe.<br><button class="btn small" onclick="speak('${w.replace(/'/g,"")}')">🔊 Anhören</button>`,w,`Das hat dir schon mal Schwierigkeiten gemacht. Sprich es in Silben: ${silben(w).join(" – ")}.`,true,{say:w,karteWord:w,topicId:"dl-karte"});
}
/* Themen registrieren */
const DLT={};
function DL(id,name,ic,desc,gen){const t={id,subj:"deutsch",name,ic,from:0,to:13,explain:`<p>${desc}</p>`,gen,gens:true,reset(){},hidden:true};DLT[id]=t;ALL.push(t);return t;}
DL("dl-laute","Laute hören und Buchstaben","👂","Wort hören, den fehlenden Buchstaben finden. Das trainiert genaues Hinhören.",dlLaute);
DL("dl-silben","Silben-Methode","🎵","Silben zählen und Wörter aus Silben bauen.",dlSilben);
DL("dl-regeln","Rechtschreib-Regeln (gemischt)","📏","Erst die Regel, dann üben.",()=>dlRegel());
DL("dl-stamm","Wortstamm und Verlängern","🌳","Hund → Hunde. Verlängern zeigt dir den richtigen Buchstaben am Wortende.",()=>dlRegel("stamm"));
DL("dl-blitz","Blitzlesen","⚡","Ein Wort blitzt kurz auf, dann findest du es wieder.",dlBlitz);
DL("dl-diktat","Hör-Diktat","✍️","Wort oder Satz hören und aufschreiben.",dlDiktat);
DL("dl-karte","Fehlerkartei","🗂️","Wörter, bei denen du Fehler gemacht hast, kommen nach Plan wieder.",dlKarte);
const METH=[["dl-laute","👂 Laute hören","Sehr gut belegt: Hören und Buchstaben zuordnen."],["dl-silben","🎵 Silben-Methode","Bewährt für lange Wörter."],["rules","📏 Rechtschreib-Regeln","Regel verstehen, dann üben."],["dl-stamm","🌳 Wortstamm","Verlängern und Ableiten."],["dl-blitz","⚡ Blitzlesen","Fürs Lesetempo."],["texts","📖 Wiederholtes Lesen","Texte mehrmals lesen, Zeit sehen."],["dl-diktat","✍️ Hör-Diktat","Hören und schreiben."],["dl-karte","🗂️ Fehlerkartei","Fehlerwörter kommen wieder."]];
function startDl(id){
  if(id==="rules"){rulesMenu();return;}
  if(id==="texts"){textsMenu();return;}
  const t=DLT[id];startEndless({...t,back:()=>lesenPage()});
}
function rulesMenu(){
  markTab("lesen");BACKFN=()=>lesenPage();
  app.innerHTML=`<button class="back" id="bk">← Lesen</button><header class="top"><h1>📏 Rechtschreib-Regeln</h1></header>
  ${RULES.map(r=>`<button class="resitem" data-r="${r.id}"><b>${r.name}</b><span>${r.items.length} Beispiele</span></button>`).join("")}
  <div class="row" style="margin-top:12px"><button class="btn" id="mx">♾️ Alle Regeln mischen</button></div>`;
  document.getElementById("bk").onclick=lesenPage;document.getElementById("mx").onclick=()=>startDl("dl-regeln");
  app.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>ruleOne(b.dataset.r));
}
function ruleOne(id){
  const r=RULE(id);BACKFN=()=>rulesMenu();
  app.innerHTML=`<button class="back" id="bk">← Regeln</button><div class="card explain"><h2>📏 ${r.name}</h2><p>${isKid()?r.kid:r.erw}</p>${r.merk?`<div class="ex"><b>Merke:</b> ${r.merk}</div>`:""}<div class="row"><button class="btn small ghost" id="vl">🔊 Vorlesen</button></div></div><div class="row"><button class="btn" id="go">♾️ Üben</button></div>`;
  document.getElementById("bk").onclick=rulesMenu;
  document.getElementById("vl").onclick=()=>speak(stripHtml(isKid()?r.kid:r.erw));
  document.getElementById("go").onclick=()=>startEndless({id:"dl-regel-"+id,subj:"deutsch",name:r.name,ic:"📏",endless:true,explain:"",back:()=>ruleOne(id),gen:()=>{const q=dlRegel(id);q.topicId="dl-regeln";return q;}});
}
function textsMenu(){
  markTab("lesen");BACKFN=()=>lesenPage();
  const list=BOOKS.filter(b=>b.silben&&(isKid()?b.id.startsWith("dk"):b.id.startsWith("de")));
  app.innerHTML=`<button class="back" id="bk">← Lesen</button><header class="top"><h1>📖 Wiederholtes Lesen</h1></header><div class="card"><p style="margin:0">Lies jeden Text dreimal: erst mit Vorlesen, dann selbst laut, dann ohne Hilfe. Danach beantwortest du Fragen. Die Silben sind farbig.</p></div>${list.map(b=>`<button class="resitem" data-b="${b.id}"><b>${b.ic} ${esc(b.t)}</b><span>${(store.books&&store.books[b.id]&&store.books[b.id].wpm)?store.books[b.id].wpm+" Wörter/Min.":"noch nicht gelesen"}</span></button>`).join("")}`;
  document.getElementById("bk").onclick=lesenPage;
  app.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>readBook(b.dataset.b,0));
}
/* Tagesplan */
function planQueue(){
  const q=[];const add=(f,n)=>{for(let i=0;i<n;i++)q.push(f());};
  add(dlLaute,3);add(dlSilben,3);add(()=>dlRegel(),3);add(()=>dlRegel("stamm"),2);add(dlBlitz,2);
  const d=dueCards();d.slice(0,3).forEach(c=>q.push(dlKarte()));add(dlDiktat,2);
  return q;
}
function startPlan(){
  const queue=planQueue();let i=0;
  const t={id:"dl-plan",subj:"deutsch",name:"Heute trainieren",ic:"🌟",explain:"",rounds:queue.length,back:()=>lesenPage(),gen(){return queue[i++%queue.length];}};
  quiz(t);
}
/* Deutsch-Lernpfad */
const PFAD=[
 ["Buchstaben und Laute","🔤",[["t","d-laute"],["t","d-bd"],["m","dl-laute"]]],
 ["Silben und erste Wörter","🎵",[["t","lrs-silben"],["m","dl-silben"],["m","dl-blitz"],["b","b1"],["b","b2"],["b","b3"]]],
 ["Wörter schreiben","✏️",[["t","lrs-dikt"],["t","lrs-abschr"],["t","d-artikel"],["m","dl-diktat"]]],
 ["Kurze Sätze und Geschichten lesen","📗",[["b","b4"],["b","b5"],["b","b6"],["x","m1"],["t","d-lesen"]]],
 ["Rechtschreibregeln","📏",[["t","lrs-dopp"],["t","lrs-ie"],["t","lrs-ss"],["t","lrs-ck"],["t","lrs-h"],["t","lrs-eu"],["t","lrs-gk"],["m","rules"],["t","lrs-fehler"]]],
 ["Wörter und Sätze verstehen","🧱",[["t","d-nomen"],["t","d-wortart"],["t","d-plural"],["t","d-verbform"],["t","d-verb"]]],
 ["Geschichten lesen","📘",[["b","b7"],["b","b8"],["b","b9"],["b","b10"],["x","m2"]]],
 ["Texte verstehen und lesen wie ein Profi","🎓",[["b","b11"],["b","b12"],["b","b13"],["x","m3"],["t","d-lesen"]]]
];
function pfadPage(){
  markTab("lesen");BACKFN=()=>lesenPage();
  const rate=id=>{const s=store.stat[id];return s&&s.r+s.f>=3?rateOf(s):null;};
  app.innerHTML=`<button class="back" id="bk">← Lesen</button><header class="top"><h1>🧭 Deutsch von A bis Z</h1></header>
  <div class="card"><p style="margin:0">Von den ersten Buchstaben bis zum sicheren Lesen und Schreiben. Gehe Stufe für Stufe vor. Du darfst aber auch springen.</p></div>
  ${PFAD.map((st,i)=>{const rs=st[2].filter(x=>x[0]==="t").map(x=>rate(x[1])).filter(x=>x!==null);const avg=rs.length?Math.round(rs.reduce((a,b)=>a+b,0)/rs.length):null;
   const books=st[2].filter(x=>x[0]==="b");const done=books.filter(x=>store.books&&store.books[x[1]]).length;
   return `<div class="card"><h3 style="margin-top:0">${st[1]} Stufe ${i+1}: ${st[0]}</h3>${avg!==null?`<div style="color:var(--mute);margin-bottom:4px">Trefferquote: ${avg} %</div>${bar(avg,avg>=75?"var(--ok)":"var(--warn)")}`:""}${books.length?`<div style="color:var(--mute);margin:6px 0">Gelesen: ${done} von ${books.length}</div>`:""}
   <div class="row" style="margin-top:8px">${st[2].map((x,j)=>{const lab=x[0]==="t"?(ALL.find(t=>t.id===x[1])||{name:x[1],ic:"•"}):x[0]==="b"?{ic:BOOKS.find(b=>b.id===x[1]).ic,name:BOOKS.find(b=>b.id===x[1]).t}:x[0]==="x"?{ic:"🎌",name:MANGA.find(m=>m.id===x[1]).t}:{ic:"",name:(METH.find(m=>m[0]===x[1])||[0,x[1]])[1]};
     return `<button class="chip" data-i="${i}" data-j="${j}">${lab.ic||""} ${esc(lab.name)}</button>`;}).join("")}</div></div>`;}).join("")}`;
  document.getElementById("bk").onclick=lesenPage;
  app.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{const x=PFAD[+b.dataset.i][2][+b.dataset.j];
    if(x[0]==="t"){S="deutsch";markTab("lernen");topicPage(x[1]);}
    else if(x[0]==="b")readBook(x[1],0);else if(x[0]==="x")readManga(x[1]);else startDl(x[1]);});
  window.scrollTo(0,0);
}
/* Leseverständnis (endlos, offline) */
G("d-lesen","deutsch","Leseverständnis: Text lesen, Fragen beantworten","🔎",1,13,"Lies den kurzen Text genau und beantworte die Frage dazu. Die Antwort steht im Text. Suche die passende Stelle.",k=>{
  const lv=k<=2?[1,2]:k<=4?[2,3]:k<=7?[3,4]:[4,5,6];
  const b=pick(BOOKS.filter(x=>lv.includes(x.lv)&&x.pages.join(" ").length<1100));const x=pick(b.q);
  return Object.assign(mkC(`<div class="clz">${esc(b.pages.join(" ").replace(/\|/g,""))}</div><b>${esc(x[0])}</b>`,x[1],x.slice(2),"Lies den Text noch einmal und suche die Stelle zur Frage.",`Richtig ist: ${x[1]}.`),{topicId:"d-lesen"});
}).hidden=false;
/* Lesen-Seite */
function lesenPage(){
  markTab("lesen");BACKFN=null;stopSpeak();
  const due=dueCards().length;
  app.innerHTML=`<header class="top"><h1>📖 Lesen und Schreiben</h1></header>
  <div class="card"><div class="row" style="gap:8px"><b>Wer übt?</b><button class="chip ${isKid()?"on":""}" data-w="kid">👧 Kind</button><button class="chip ${!isKid()?"on":""}" data-w="erw">🧑 Erwachsener</button></div></div>
  <button class="hero" id="plan" style="width:100%;text-align:left;border:0"><h2 style="margin:0">▶ Heute trainieren</h2><div>Ein bunter Plan mit etwa 15 Aufgaben aus den besten Methoden.${due?` ${due} Karten aus der Fehlerkartei warten.`:""}</div></button>
  <button class="resitem" id="pfad"><b>🧭 Deutsch von A bis Z</b><span>Lernpfad in 8 Stufen: Buchstaben, Silben, Wörter, Sätze, Regeln, Geschichten</span></button>
  <button class="resitem" id="books"><b>📚 Lesebücher</b><span>${BOOKS.length} Geschichten in 6 Stufen von ganz leicht bis schwer, mit Fragen</span></button>
  <button class="resitem" id="manga"><b>🎌 Manga mit viel Text</b><span>${MANGA.length} Folgen mit Kiko, Mira und dem Roboter Bolt</span></button>
  <button class="resitem" id="bcz"><b>♾️ Lückentexte aus den Geschichten</b><span>Endlose Übung, funktioniert offline</span></button>
  <button class="resitem" id="off"><b>📥 Offline-Bibliothek</b><span>Gelesene Wiki-Texte ohne Internet lesen und üben</span></button>
  <h3 class="group">Methoden einzeln</h3>
  ${METH.map(m=>`<button class="resitem" data-m="${m[0]}"><b>${m[1]}</b><span>${m[2]}</span></button>`).join("")}
  <h3 class="group">Auswertung</h3>
  <button class="resitem" id="aus"><b>📊 Was hilft am besten?</b><span>Dein Lernstand und die Auswertung der Methoden</span></button>`;
  const $=i=>document.getElementById(i);
  app.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>{store.who=b.dataset.w;save();lesenPage();});
  $("plan").onclick=startPlan;$("pfad").onclick=pfadPage;$("books").onclick=booksPage;$("manga").onclick=mangaPage;$("bcz").onclick=bookCloze;$("off").onclick=offlinePage;$("aus").onclick=lernstandPage;
  app.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>startDl(b.dataset.m));
  window.scrollTo(0,0);
}
/* Anbindung */
(function(){
  const i=TABS.findIndex(t=>t[0]==="katalog");if(i>=0)TABS.splice(i,1,["lesen","📖","Lesen"]);
  const _s=showTab;showTab=function(n){if(n==="lesen"){BACKFN=null;lesenPage();}else _s(n);};
  const _sp=searchPage;searchPage=function(){_sp.apply(null,arguments);const h=app.querySelector&&app.querySelector("header.top");
    if(h){h.insertAdjacentHTML("afterend",`<div class="row" style="margin-bottom:8px"><button class="btn small ghost" id="tocat">📋 Lehrplan-Katalog</button></div>`);const b=document.getElementById("tocat");if(b)b.onclick=()=>{markTab("suche");catalogPage();};}};
  const _h=home;home=function(){_h.apply(null,arguments);const hero=app.querySelector&&app.querySelector(".hero");
    if(hero){hero.insertAdjacentHTML("afterend",`<div class="row" style="margin:10px 0"><button class="btn small" id="hl">📖 Lesen und Schreiben</button><button class="btn small ghost" id="hb">📚 Lesebücher</button><button class="btn small ghost" id="hm2">🎌 Manga</button></div>`);
      const g=i=>document.getElementById(i);if(g("hl"))g("hl").onclick=lesenPage;if(g("hb"))g("hb").onclick=booksPage;if(g("hm2"))g("hm2").onclick=mangaPage;}};
})();
