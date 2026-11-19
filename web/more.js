
/* ======================================================================
   Üben-Bereich: Endlos-Modus, Fach-Mix, Lesen und Rechtschreibung,
   Übungen aus dem Internet, Lesemodus
   ====================================================================== */
const RSTOPICS=["lrs-dopp","lrs-ie","lrs-h","lrs-ss","lrs-ck","lrs-eu","lrs-gk","lrs-dikt","lrs-silben","d-artikel","d-plural"];
function applyReadMode(){document.body.classList.toggle("lrs",!!store.readmode);}
function onQuestion(cur){
  if(cur.flash){setTimeout(()=>{const f=document.getElementById("flashw");if(f)f.textContent="• • • • •";},cur.flash);}
  if(store.speakq){const t=cur.say||stripHtml(cur.q).replace(/_+/g," ");speak(t);}
}
/* Endlos-Mix aus allen passenden Themen */
function makeMix(sid){
  const recent=[];
  const t={id:"mix-"+(sid||"alle"),subj:sid||"lern",name:sid?"Mix: "+subjName(sid):"Alles-Mix",ic:"♾️",endless:true,explain:"",
    back:()=>uebungPage(),
    gen(k){
      const list=topicsFor(k,sid).filter(x=>x.gen&&x.id!==t.id);
      for(let i=0;i<8;i++){
        const tt=pick(list);let q;
        try{q=tt.gen(k);}catch(e){continue;}
        const key=String(q.q);
        if(!recent.includes(key)||i===7){recent.push(key);if(recent.length>25)recent.shift();return Object.assign(q,{topicName:tt.name,topicId:tt.id});}
      }
      return list[0].gen(k);
    }};
  return t;
}
function startEndless(t){quiz(Object.assign({},t,{endless:true,back:t.back||(()=>topicPage(t.id))}));}

/* Übungen aus dem Internet: Lückentexte aus Klexikon/Wikipedia */
function buildCloze(text){
  const sents=text.replace(/\n+/g," ").replace(/([.!?])\s+(?=[A-ZÄÖÜ])/g,"$1\n").split("\n").map(s=>s.trim())
    .filter(s=>s.length>=45&&s.length<=230&&!/[=<>{}|\[\]]/.test(s)&&(s.match(/\d/g)||[]).length<6);
  const set=new Set();sents.forEach(s=>(s.match(/[A-Za-zÄÖÜäöüß]{6,}/g)||[]).forEach(w=>set.add(w)));
  const all=[...set],pool=[];
  sents.forEach(s=>{
    const ms=[...s.matchAll(/[A-Za-zÄÖÜäöüß]{6,}/g)].filter(m=>m.index>0);
    shuffle(ms).slice(0,3).forEach(m=>pool.push({s,w:m[0],i:m.index}));
  });
  return{pool,all};
}
async function webQuiz(term,src){
  term=(term||"").trim();if(!term)return;
  markTab("uebung");BACKFN=()=>uebungPage();
  if(!isOnline()){app.innerHTML=`<button class="back" id="bk">← Zurück</button><div class="card"><h2>🌐 Kein Internet</h2><p>Für diese Übung brauche ich Internet. Die anderen Übungen funktionieren auch ohne.</p></div>`;document.getElementById("bk").onclick=uebungPage;return;}
  app.innerHTML=`<div class="card"><h2>🌐 Übungen werden gebaut …</h2><p>Ich lese gerade Texte zu „${esc(term)}“ und mache daraus Aufgaben.</p></div>`;
  let text="",title="",used="";
  try{
    for(const s of (src?[src]:["klexikon","wikipedia"])){
      const l=await wikiSearch(s,term);
      for(const r of l.slice(0,2)){
        const tx=await wikiPage(s,r.title);
        if(tx&&tx.length>500){text=tx;title=r.title;used=s;break;}
      }
      if(text)break;
    }
  }catch(e){}
  const {pool,all}=buildCloze(text);
  if(pool.length<4){
    app.innerHTML=`<button class="back" id="bk">← Zurück</button><div class="card"><h2>😕 Nichts gefunden</h2><p>Zu „${esc(term)}“ konnte ich keinen passenden Text laden. Versuche ein anderes Wort oder eine andere Quelle.</p></div>`;
    document.getElementById("bk").onclick=uebungPage;return;
  }
  let deck=[];
  const t={id:"web-"+norm(term),subj:S||"lern",name:"Internet-Übung: "+term,ic:"🌐",endless:true,explain:"",back:()=>uebungPage(),
    gen(){
      if(!deck.length)deck=shuffle(pool);
      const p=deck.pop();
      const blank=p.s.slice(0,p.i)+"_____"+p.s.slice(p.i+p.w.length);
      const up=/^[A-ZÄÖÜ]/.test(p.w);
      const cand=shuffle(all.filter(w=>w!==p.w&&/^[A-ZÄÖÜ]/.test(w)===up&&Math.abs(w.length-p.w.length)<=4)).slice(0,3);
      const src=`<br><small>Quelle: ${WIKIS[used].name} – ${esc(title)} (CC BY-SA)</small>`;
      const q=`Welches Wort fehlt in der Lücke?<div class="clz">${esc(blank)}</div>${src}`;
      if(Math.random()<.25)return mkT(`Schreibe das fehlende Wort.<div class="clz">${esc(blank)}</div>${src}`,p.w,`Das Wort beginnt mit „${p.w[0]}“ und hat ${p.w.length} Buchstaben.`,false);
      return mkC(q,p.w,cand,`Das Wort beginnt mit „${p.w[0]}“ und hat ${p.w.length} Buchstaben.`);
    }};
  quiz(t);
}

/* Seite „Üben“ */
function uebungPage(){
  markTab("uebung");BACKFN=null;stopSpeak();
  if(K===null||K===undefined){
    app.innerHTML=`<div class="card"><h2>🔁 Üben</h2><p>Wähle zuerst auf der Startseite deine Klasse.</p><button class="btn" id="hm">Zur Startseite</button></div>`;
    document.getElementById("hm").onclick=()=>showTab("lernen");return;
  }
  const subs=SUBJECTS.filter(s=>topicsFor(K,s.id).some(t=>t.gen));
  const rs=RSTOPICS.map(id=>ALL.find(t=>t.id===id)).filter(t=>t&&t.from<=K&&K<=t.to);
  const myTopic=(S&&S!==null)?"":"";
  app.innerHTML=`<header class="top"><h1>🔁 Üben ohne Ende</h1><span class="pill">${CLASS_LABEL(K)}</span></header>
  <div class="card"><p style="margin-top:0">Hier gibt es <b>immer neue Aufgaben</b>. Du kannst so lange üben, wie du möchtest. Mit „Beenden“ siehst du deine Punkte.</p>
  <button class="btn" id="mixall">♾️ Alles-Mix starten</button></div>
  <h3 class="group">Mix nach Fach</h3><div class="grid">${subs.map(s=>`<button class="topic" data-mix="${s.id}"><span class="ic">${s.ic}</span><b>${s.name}</b></button>`).join("")}</div>
  <h3 class="group">Lesen und Rechtschreibung</h3>
  <div class="card"><p style="margin-top:0">Übungen zu Rechtschreibung, Silben, Artikeln und Hören und Schreiben. Mit Vorlesen und gut lesbarer Schrift.</p>
  <label class="switch"><input type="checkbox" id="rm" ${store.readmode?"checked":""}> Gut lesbare Schrift (größer, mehr Abstand, warmer Hintergrund)</label>
  <label class="switch"><input type="checkbox" id="sq" ${store.speakq?"checked":""}> Aufgaben automatisch vorlesen</label>
  <div class="grid">${rs.map(t=>`<button class="topic" data-id="${t.id}"><span class="ic">${t.ic}</span><b>${t.name}</b></button>`).join("")||"<p>Für diese Klasse gibt es hier noch nichts.</p>"}</div></div>
  <h3 class="group">🌐 Übungen aus dem Internet</h3>
  <div class="card"><p style="margin-top:0">Gib ein Thema ein, zum Beispiel „Vulkane“ oder „Römer“. Ich lese einen Text dazu und baue endlos Lückenaufgaben daraus.</p>
  <div class="row"><input class="ans" id="wt" style="width:min(100%,320px)" placeholder="Thema eingeben" autocomplete="off"></div>
  <div class="row" style="margin-top:10px"><button class="btn small" data-w="klexikon">Einfach (Klexikon)</button><button class="btn small ghost" data-w="wikipedia">Ausführlich (Wikipedia)</button><button class="btn small ghost" data-w="wikibooks">Lehrbuch (Wikibooks)</button></div></div>
  <h3 class="group">Mehr Übungsblätter im Netz suchen</h3>
  <div class="card"><div class="row"><input class="ans" id="ut" style="width:min(100%,320px)" placeholder="Thema, z. B. Bruchrechnen" autocomplete="off"></div>
  <div class="row" style="margin-top:10px"><button class="btn small ghost" data-u="ab">📄 Arbeitsblätter</button><button class="btn small ghost" data-u="on">💻 Online-Übungen</button><button class="btn small ghost" data-u="la">🧩 LearningApps</button><button class="btn small ghost" data-u="se">📘 Serlo-Aufgaben</button></div></div>`;
  document.getElementById("mixall").onclick=()=>startEndless(makeMix(null));
  app.querySelectorAll("[data-mix]").forEach(b=>b.onclick=()=>startEndless(makeMix(b.dataset.mix)));
  app.querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>{const t=ALL.find(x=>x.id===b.dataset.id);S=t.subj;topicPage(t.id);});
  document.getElementById("rm").onchange=e=>{store.readmode=e.target.checked;save();applyReadMode();};
  document.getElementById("sq").onchange=e=>{store.speakq=e.target.checked;save();};
  app.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>webQuiz(document.getElementById("wt").value,b.dataset.w));
  document.getElementById("wt").onkeydown=e=>{if(e.key==="Enter")webQuiz(e.target.value,"klexikon");};
  app.querySelectorAll("[data-u]").forEach(b=>b.onclick=()=>{
    const q=document.getElementById("ut").value.trim();if(!q)return;const lv=levelWord(K);
    const m={ab:`${q} ${lv} Übungen Arbeitsblatt pdf`,on:`${q} ${lv} Übungen online interaktiv`,la:`${q} site:learningapps.org`,se:`${q} Aufgaben site:de.serlo.org`}[b.dataset.u];
    openUrl(LINKS.google(m));
  });
  window.scrollTo(0,0);
}

/* Anbindung an bestehende Seiten */
TABS.splice(1,0,["uebung","🔁","Üben"]);
const _showTab=showTab;
showTab=function(n){if(n==="uebung"){BACKFN=null;uebungPage();}else _showTab(n);};
const _topicPage=topicPage;
topicPage=function(id){
  _topicPage(id);
  const t=ALL.find(x=>x.id===id);const go=document.getElementById("go");if(!go||!t)return;
  if(t.subj==="mathe"&&KB[id]){const card=document.querySelector(".card.explain");
    if(card){card.innerHTML=`<h2>${t.ic} ${t.name}</h2><div style="color:var(--mute);margin-bottom:6px">${CLASS_LABEL(K)}</div><div id="kbhost"></div>`;kbTabs(id,document.getElementById("kbhost"));}}
  go.insertAdjacentHTML("afterend",`<button class="btn ghost" id="endl">♾️ Endlos üben</button><button class="btn ghost" id="wq">🌐 Aus dem Internet üben</button>`);
  document.getElementById("endl").onclick=()=>{
    if(t.gen&&!t.bank)startEndless(t);
    else{ // Bank-Thema: mit passenden Generator-Themen des Fachs mischen
      const mix=makeMix(t.subj);const base=t;
      mix.name="Endlos: "+t.name;mix.back=()=>topicPage(id);
      const g=mix.gen;mix.gen=k=>Math.random()<.5?Object.assign(base.gen(k),{topicId:base.id}):g(k);
      startEndless(mix);
    }
  };
  document.getElementById("wq").onclick=()=>webQuiz(t.name,"klexikon");
};
const _subjectPage=subjectPage;
subjectPage=function(sid){
  _subjectPage(sid);
  const bk=document.getElementById("bk");if(!bk)return;
  if(!topicsFor(K,sid).length)return;
  bk.insertAdjacentHTML("afterend",`<div class="row" style="margin:6px 0 12px"><button class="btn small" id="smix">♾️ Endlos-Mix ${subjName(sid)}</button></div>`);
  document.getElementById("smix").onclick=()=>{const m=makeMix(sid);m.back=()=>subjectPage(sid);startEndless(m);};
  if(sid==="mathe"){document.getElementById("smix").insertAdjacentHTML("afterend",`<button class="btn small ghost" id="mwiss">📚 Mathe-Wissen (alle Erklärungen)</button>`);document.getElementById("mwiss").onclick=mathWissenPage;}
};
applyReadMode();
