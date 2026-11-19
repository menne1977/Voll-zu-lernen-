
/* ======================================================================
   Mehr: Einstellungen, Lernstand, Fehlerheft, Methoden
   ====================================================================== */
store.stat=store.stat||{};store.wrong=store.wrong||[];
function applyLook(){
  document.body.classList.toggle("dark",!!store.dark);
  if(document.documentElement)document.documentElement.style.fontSize=((+store.fs)||100)+"%";
  applyReadMode();
}
function recordStat(t,cur,ok,firstTry){
  try{
    const id=cur.topicId||t.id;
    if(!String(id).startsWith("mix-")&&!String(id).startsWith("web-")&&id!=="fehlerheft"){
      const s=store.stat[id]||(store.stat[id]={r:0,f:0});
      if(ok&&firstTry)s.r++;else s.f++;
    }
    if(!String(id).startsWith("web-")){
      const key=String(cur.q),i=store.wrong.findIndex(w=>w.key===key);
      if(!ok){if(i<0){store.wrong.unshift({key,id,q:JSON.parse(JSON.stringify(cur))});if(store.wrong.length>80)store.wrong.pop();}}
      else if(i>=0&&firstTry)store.wrong.splice(i,1);
    }
    save();
  }catch(e){}
}
const rateOf=s=>{const n=s.r+s.f;return n?Math.round(s.r/n*100):0;};
const bar=(p,c)=>`<div style="background:var(--line);border-radius:8px;height:12px;overflow:hidden"><i style="display:block;height:100%;width:${p}%;background:${c||"var(--pri)"}"></i></div>`;

/* weitere Methoden zu Lesen und Rechtschreibung */
const SENT=["Die Katze schläft auf dem Sofa.","Im Sommer fahren wir ans Meer.","Mein Bruder spielt gern Fußball.","Heute scheint die Sonne.","Wir essen zusammen zu Mittag.","Der Hund läuft schnell durch den Garten.","Am Wochenende besuche ich meine Oma.","Die Kinder spielen auf dem Spielplatz.","Ich lese gern spannende Bücher.","Im Winter liegt oft Schnee."];
G("lrs-abschr","deutsch","Abschreiben (Wörter und Sätze)","📝",1,13,"Beim <b>Abschreiben</b> schaust du dir das Wort genau an, prägst es dir ein und schreibst es dann fehlerfrei auf. Das Wort bleibt sichtbar. Achte auf Groß- und Kleinschreibung, auf Satzzeichen und auf jeden Buchstaben.",()=>{
  const sentence=Math.random()<.35;const w=sentence?pick(SENT):pick(ALLWORDS);
  return mkT(`Schreibe ab:<div class="clz"><b>${esc(w)}</b></div>`,w,sentence?"Lies den Satz in Teilen und schreibe Stück für Stück ab.":`Sprich das Wort in Silben und schreibe sie nacheinander.`,true,{say:w});});
const FEHLERQ=[[L_DOPP,w=>w.replace(/([^aeiouäöüy])\1/,"$1")],[L_IE,w=>rep(w,"ie","ei")],[L_EI,w=>rep(w,"ei","ie")],[L_H,w=>w.replace(/([aeiouäöü])h/,"$1")],[L_SS,w=>w.replace("ß","ss")],[L_SSD,w=>w.replace("ss","ß")],[L_CK,w=>w.replace("ck","kk")],[L_TZ,w=>w.replace("tz","zz")],[L_AEU,w=>rep(w,"äu","eu")],[L_EU,w=>rep(w,"eu","äu")]];
G("lrs-fehler","deutsch","Fehler finden","🔍",2,13,"Bei dieser Methode suchst du den <b>Fehler</b>. Von drei Wörtern ist eines falsch geschrieben. Lies jedes Wort langsam und prüfe es mit den Regeln, die du kennst. Fehler suchen schärft den Blick für die richtige Schreibweise.",()=>{
  for(let i=0;i<20;i++){const [list,fn]=pick(FEHLERQ);const w=pick(list),bad=fn(w);if(bad===w)continue;
    const good=others(list,w,2);if(good.length<2)continue;
    return mkC("Welches Wort ist falsch geschrieben?",bad,good,"Prüfe jedes Wort: Ist der Selbstlaut lang oder kurz? Gibt es eine Regel dazu?",`Richtig geschrieben heißt es: ${w}.`);}
  return mkC("Welches Wort ist falsch geschrieben?","Kate",["Katze","Hase"],"Prüfe jedes Wort.");});
RSTOPICS.push("lrs-abschr","lrs-fehler");

function startFehlerheft(){
  if(!store.wrong.length){mehrPage(true);return;}
  const t={id:"fehlerheft",subj:"lern",name:"Fehlerheft",ic:"📓",endless:true,explain:"",back:()=>mehrPage(),
    gen(){const w=pick(store.wrong);const q=JSON.parse(JSON.stringify(w.q));if(q.type==="choice")q.choices=shuffle(q.choices);q.topicId=w.id;return q;}};
  quiz(t);
}
function mehrPage(emptyNote){
  markTab("mehr");BACKFN=null;stopSpeak();
  const tot=Object.values(store.stat).reduce((a,s)=>({r:a.r+s.r,f:a.f+s.f}),{r:0,f:0});
  app.innerHTML=`<header class="top"><h1>⚙️ Mehr</h1></header>
  ${emptyNote?`<div class="card"><p style="margin:0">🎉 Dein Fehlerheft ist leer. Es füllt sich, wenn du Aufgaben falsch beantwortest.</p></div>`:""}
  <button class="resitem" id="m-stat"><b>📊 Mein Lernstand</b><span>${tot.r+tot.f?`${tot.r+tot.f} Aufgaben beantwortet, ${rateOf(tot)} % gleich richtig`:"Hier siehst du, was gut klappt und was du noch üben solltest"}</span></button>
  <button class="resitem" id="m-fehl"><b>📓 Fehlerheft</b><span>${store.wrong.length} Aufgaben zum Wiederholen. Richtig beantwortete verschwinden.</span></button>
  <button class="resitem" id="m-set"><b>⚙️ Einstellungen</b><span>Aufgabenzahl, Schriftgröße, dunkles Design, Vorlesen, Hilfen</span></button>
  <button class="resitem" id="m-info"><b>ℹ️ Über die App</b><span>Hinweise zu Quellen und Datenspeicherung</span></button>`;
  document.getElementById("m-stat").onclick=lernstandPage;
  document.getElementById("m-fehl").onclick=startFehlerheft;
  document.getElementById("m-set").onclick=settingsPage;
  document.getElementById("m-info").onclick=infoPage;
  window.scrollTo(0,0);
}
function infoPage(){
  markTab("mehr");BACKFN=()=>mehrPage();
  app.innerHTML=`<button class="back" id="bk">← Zurück</button><div class="card"><h2>ℹ️ Über „Voll zu lernen“</h2>
  <p>Alle Aufgaben, Erklärungen und Übungen in dieser App sind selbst geschrieben oder werden beim Üben neu erzeugt.</p>
  <p><b>Online-Inhalte:</b> Texte aus Wikipedia, Klexikon, Wikibooks und Wikiversity stehen unter der Lizenz CC BY-SA. Die App zeigt immer die Quelle an. Videos und Seiten öffnen sich beim jeweiligen Anbieter.</p>
  <p><b>Datenspeicherung:</b> Sterne, Lernstand, Fehlerheft, Notizen und Einstellungen bleiben nur auf diesem Gerät. Es gibt kein Benutzerkonto.</p></div>`;
  document.getElementById("bk").onclick=()=>mehrPage();
}
function settingsPage(){
  markTab("mehr");BACKFN=()=>mehrPage();
  const sel=(id,opts,val)=>`<select class="sel" id="${id}">${opts.map(o=>`<option value="${o[0]}" ${String(o[0])===String(val)?"selected":""}>${o[1]}</option>`).join("")}</select>`;
  app.innerHTML=`<button class="back" id="bk">← Zurück</button><header class="top"><h1>⚙️ Einstellungen</h1></header>
  <div class="card">
   <label class="switch">Aufgaben pro Runde ${sel("o-r",[[5,"5"],[10,"10"],[15,"15"],[20,"20"]],store.rounds||10)}</label>
   <label class="switch">Schriftgröße ${sel("o-fs",[[100,"normal"],[115,"groß"],[130,"sehr groß"],[150,"riesig"]],store.fs||100)}</label>
   <label class="switch"><input type="checkbox" id="o-dark" ${store.dark?"checked":""}> Dunkles Design</label>
   <label class="switch"><input type="checkbox" id="o-read" ${store.readmode?"checked":""}> Gut lesbare Schrift (mehr Abstand, warmer Hintergrund)</label>
   <label class="switch"><input type="checkbox" id="o-speak" ${store.speakq?"checked":""}> Aufgaben automatisch vorlesen</label>
   <label class="switch"><input type="checkbox" id="o-sec" ${store.second!==false?"checked":""}> Zweiter Versuch bei Fehlern</label>
   <label class="switch"><input type="checkbox" id="o-way" ${store.noway?"":"checked"}> Lösungsweg nach Fehlern zeigen</label>
  </div>
  <div class="card"><div class="row"><button class="btn small ghost" id="o-cls">Klasse wechseln</button><button class="btn small ghost" id="o-reset">Lernstand zurücksetzen</button></div><div id="o-msg" style="margin-top:8px"></div></div>`;
  const $=id=>document.getElementById(id);
  $("bk").onclick=()=>mehrPage();
  $("o-r").onchange=e=>{store.rounds=+e.target.value;save();};
  $("o-fs").onchange=e=>{store.fs=+e.target.value;save();applyLook();};
  $("o-dark").onchange=e=>{store.dark=e.target.checked;save();applyLook();};
  $("o-read").onchange=e=>{store.readmode=e.target.checked;save();applyLook();};
  $("o-speak").onchange=e=>{store.speakq=e.target.checked;save();};
  $("o-sec").onchange=e=>{store.second=e.target.checked;save();};
  $("o-way").onchange=e=>{store.noway=!e.target.checked;save();};
  $("o-cls").onclick=()=>{K=null;delete store.k;save();showTab("lernen");};
  let armed=false;
  $("o-reset").onclick=()=>{
    if(!armed){armed=true;$("o-msg").innerHTML=`<b>Wirklich alles löschen?</b> Sterne, Lernstand und Fehlerheft gehen verloren. Tippe noch einmal auf „Lernstand zurücksetzen“.`;return;}
    Object.keys(store).forEach(k=>{if(k.includes("@")||k==="stat"||k==="wrong")delete store[k];});store.stat={};store.wrong=[];save();$("o-msg").innerHTML="✅ Zurückgesetzt.";armed=false;
  };
}
function lernstandPage(){
  markTab("mehr");BACKFN=()=>mehrPage();
  const tot=Object.values(store.stat).reduce((a,s)=>({r:a.r+s.r,f:a.f+s.f}),{r:0,f:0});
  const stars=Object.keys(store).filter(k=>k.includes("@")).reduce((a,k)=>a+(store[k].stars||0),0);
  const bySubj={};
  Object.keys(store.stat).forEach(id=>{const t=ALL.find(x=>x.id===id);if(!t)return;const o=bySubj[t.subj]||(bySubj[t.subj]={r:0,f:0});o.r+=store.stat[id].r;o.f+=store.stat[id].f;});
  const subjRows=SUBJECTS.filter(s=>bySubj[s.id]).map(s=>{const o=bySubj[s.id],p=rateOf(o);return `<div style="margin:10px 0"><div style="display:flex;justify-content:space-between"><b>${s.ic} ${s.name}</b><span>${p} % (${o.r+o.f})</span></div>${bar(p,p>=75?"var(--ok)":p>=50?"var(--warn)":"var(--bad)")}</div>`;}).join("");
  const weak=Object.keys(store.stat).map(id=>({id,t:ALL.find(x=>x.id===id),s:store.stat[id]})).filter(x=>x.t&&x.s.r+x.s.f>=5&&rateOf(x.s)<75).sort((a,b)=>rateOf(a.s)-rateOf(b.s)).slice(0,6);
  const rs=RSTOPICS.map(id=>({id,t:ALL.find(x=>x.id===id),s:store.stat[id]})).filter(x=>x.t&&x.s&&x.s.r+x.s.f>0);
  const rsOk=rs.filter(x=>x.s.r+x.s.f>=10).sort((a,b)=>rateOf(b.s)-rateOf(a.s));
  const rsRows=rs.map(x=>`<div style="margin:8px 0"><div style="display:flex;justify-content:space-between"><span>${x.t.ic} ${x.t.name}</span><b>${rateOf(x.s)} %</b></div>${bar(rateOf(x.s),rateOf(x.s)>=75?"var(--ok)":"var(--warn)")}</div>`).join("");
  app.innerHTML=`<button class="back" id="bk">← Zurück</button><header class="top"><h1>📊 Mein Lernstand</h1></header>
  <div class="card"><div class="score" style="font-size:1.4rem">${tot.r+tot.f} Aufgaben · ${tot.r+tot.f?rateOf(tot):0} % gleich beim ersten Mal richtig · ${stars} ⭐</div></div>
  ${subjRows?`<h3 class="group">Nach Fächern</h3><div class="card">${subjRows}</div>`:`<div class="card"><p style="margin:0">Noch keine Auswertung. Löse ein paar Aufgaben, dann siehst du hier deinen Fortschritt.</p></div>`}
  ${weak.length?`<h3 class="group">Das solltest du noch üben</h3>${weak.map(x=>`<button class="resitem" data-w="${x.id}"><b>${x.t.ic} ${x.t.name}</b><span>${rateOf(x.s)} % richtig bei ${x.s.r+x.s.f} Aufgaben</span></button>`).join("")}<div class="row" style="margin-top:10px"><button class="btn" id="wmix">♾️ Schwächen-Mix starten</button></div>`:""}
  ${rs.length?`<h3 class="group">Lesen und Rechtschreibung: Auswertung</h3><div class="card">${rsRows}${rsOk.length>=2?`<p style="margin-bottom:0"><b>Läuft am besten:</b> ${rsOk[0].t.name} (${rateOf(rsOk[0].s)} %).<br><b>Braucht mehr Übung:</b> ${rsOk[rsOk.length-1].t.name} (${rateOf(rsOk[rsOk.length-1].s)} %).</p>`:`<p style="margin-bottom:0;color:var(--mute)">Nach 10 Aufgaben pro Methode zeige ich dir, was am besten klappt.</p>`}</div>`:""}`;
  document.getElementById("bk").onclick=()=>mehrPage();
  app.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>{const t=ALL.find(x=>x.id===b.dataset.w);S=t.subj;markTab("lernen");topicPage(t.id);});
  const wm=document.getElementById("wmix");
  if(wm)wm.onclick=()=>{const ts=weak.map(x=>x.t).filter(t=>t.gen);
    startEndless({id:"mix-schwaechen",subj:"lern",name:"Schwächen-Mix",ic:"🎯",back:()=>lernstandPage(),gen(k){const t=pick(ts);return Object.assign(t.gen(K===null?t.from:Math.min(Math.max(K,t.from),t.to)),{topicId:t.id});}});};
  window.scrollTo(0,0);
}
/* Anbindung */
TABS.push(["mehr","⚙️","Mehr"]);
const _showTab2=showTab;
showTab=function(n){if(n==="mehr"){BACKFN=null;mehrPage();}else _showTab2(n);};
applyLook();
