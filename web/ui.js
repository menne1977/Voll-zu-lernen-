
TOPICS.forEach(t=>{t.subj="mathe";});
const ALL=TOPICS.concat(BANK);
const SUBJECTS=[
 {id:"mathe",name:"Mathematik",ic:"🧮"},{id:"deutsch",name:"Deutsch",ic:"📚"},{id:"englisch",name:"Englisch",ic:"🇬🇧"},
 {id:"sachunterricht",name:"Sachunterricht",ic:"🌳"},{id:"biologie",name:"Biologie",ic:"🌿"},{id:"physik",name:"Physik",ic:"⚡"},
 {id:"chemie",name:"Chemie",ic:"🧪"},{id:"geschichte",name:"Geschichte",ic:"🏛️"},{id:"geographie",name:"Geographie",ic:"🌍"},
 {id:"franzoesisch",name:"Französisch",ic:"🇫🇷"},{id:"latein",name:"Latein",ic:"🏺"},{id:"spanisch",name:"Spanisch",ic:"🇪🇸"},
 {id:"musik",name:"Musik",ic:"🎵"},{id:"lern",name:"Lern- und Arbeitstechniken",ic:"🧠"},{id:"kreativ",name:"Kreativität und Bewegung",ic:"🎨"}
];
const CLASS_LABEL=k=>k===0?"Vorschule":"Klasse "+k;
const topicsFor=(k,sid)=>ALL.filter(t=>t.from<=k&&k<=t.to&&(!sid||t.subj===sid));

/* ---------- Anzeige ---------- */
const app=document.getElementById("app");
const starStr=(n,total=3)=>`<span class="stars">${"⭐".repeat(n)}<span class="off">${"⭐".repeat(total-n)}</span></span>`;
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const isHtml=q=>/<(svg|span|br|div|sup|b)[ >\/]/.test(q);
let K=(typeof store.k==="number")?store.k:null;
let S=null;

function classPage(){
  markTab("lernen");BACKFN=null;
  let html=`<header class="top"><h1>🎓 Lernwelt</h1></header>
  <div class="hero"><h2>Wähle deine Klasse</h2><div>Alle Fächer von der Vorschule bis Klasse 13. Du bekommst nur die Themen, die zu deiner Klasse passen.</div></div><div class="classes">`;
  for(let k=0;k<=13;k++){html+=`<button class="cls" data-k="${k}"><b>${k===0?"Vor-<br>schule":k+"."}</b><small>${k===0?"":"Klasse"}</small></button>`;}
  html+=`</div><p class="footer">Alle Fragen und Aufgaben sind selbst geschrieben. Die Fächer und Themen folgen dem üblichen Lehrplan für Deutschland.</p>`;
  app.innerHTML=html;
  app.querySelectorAll(".cls").forEach(b=>b.onclick=()=>{K=+b.dataset.k;store.k=K;save();home();});
  window.scrollTo(0,0);
}
function home(){
  if(K===null)return classPage();
  markTab("lernen");BACKFN=null;
  S=null;
  const all=topicsFor(K);
  const total=all.reduce((s,t)=>s+starsOf(t.id,K),0),max=all.length*3;
  let html=`<header class="top"><h1>🎓 Lernwelt</h1><span class="pill">⭐ ${total}/${max}</span></header>
  <div class="hero"><div class="row" style="justify-content:space-between"><h2>${CLASS_LABEL(K)}</h2><button class="btn ghost small" id="chg">Klasse wechseln</button></div><div>Wähle ein Fach. Übe 10 Fragen pro Thema und sammle bis zu 3 Sterne.</div><div class="bar"><i style="width:${max?Math.round(total/max*100):0}%"></i></div></div><div class="grid">`;
  SUBJECTS.forEach(s=>{
    const ts=topicsFor(K,s.id);if(!ts.length)return;
    const st=ts.reduce((a,t)=>a+starsOf(t.id,K),0);
    html+=`<button class="topic" data-s="${s.id}"><span class="ic">${s.ic}</span><b>${s.name}</b><span style="color:var(--mute);font-size:.9rem">${ts.length} Thema${ts.length>1?"en":""} · ⭐ ${st}/${ts.length*3}</span></button>`;
  });
  html+=`</div><p class="footer">Dein Fortschritt bleibt in diesem Browser gespeichert.</p>`;
  app.innerHTML=html;
  document.getElementById("chg").onclick=classPage;
  app.querySelectorAll(".topic").forEach(b=>b.onclick=()=>subjectPage(b.dataset.s));
  window.scrollTo(0,0);
}
function subjectPage(sid){
  S=sid;markTab("lernen");BACKFN=()=>home();
  const sub=SUBJECTS.find(x=>x.id===sid);
  const list=topicsFor(K,sid);
  let html=`<button class="back" id="bk">← Alle Fächer</button><header class="top"><h1>${sub.ic} ${sub.name}</h1><span class="pill">${CLASS_LABEL(K)}</span></header>`;
  const card=t=>`<button class="topic" data-id="${t.id}"><span class="ic">${t.ic}</span><b>${t.name}</b>${starStr(starsOf(t.id,K))}</button>`;
  if(sid==="mathe"){
    GROUPS.forEach((g,gi)=>{
      const ts=list.filter(t=>t.group===gi);if(!ts.length)return;
      html+=`<h3 class="group">${g}</h3><div class="grid">${ts.map(card).join("")}</div>`;
    });
  }else html+=`<div class="grid">${list.map(card).join("")}</div>`;
  app.innerHTML=html;
  document.getElementById("bk").onclick=home;
  app.querySelectorAll(".topic").forEach(b=>b.onclick=()=>topicPage(b.dataset.id));
  window.scrollTo(0,0);
}
function roundsOf(t){const n=+(store.rounds)||ROUNDS;return t.bank?Math.min(n,t.items.length):n;}
function topicPage(id){
  const t=ALL.find(x=>x.id===id);
  S=t.subj;markTab("lernen");BACKFN=()=>subjectPage(t.subj);stopSpeak();
  app.innerHTML=`<button class="back" id="bk">← Zurück zur Themenliste</button>
  <div class="card explain"><h2>${t.ic} ${t.name}</h2><div style="color:var(--mute);margin-bottom:6px">${CLASS_LABEL(K)}</div>${t.explain}</div>
  <div class="row"><button class="btn" id="go">Üben starten (${roundsOf(t)} Aufgaben)</button><span>${starStr(starsOf(id,K))}</span></div>
  <h3 class="group">Mehr verstehen (online)</h3><div class="card">${helpBar(t.name+(t.subj==="mathe"?" Mathe":""),K)}<div class="row" style="margin-top:10px"><button class="btn small ghost" id="fv">${isFav("topic:"+t.id)?"★ Gemerkt":"☆ Merken"}</button><button class="btn small ghost" id="vl">🔊 Erklärung vorlesen</button></div></div>`;
  bindHelpBars(app);
  document.getElementById("fv").onclick=e=>{const on=toggleFav({key:"topic:"+t.id,type:"topic",id:t.id,title:t.name,subj:t.subj,k:K});e.target.textContent=on?"★ Gemerkt":"☆ Merken";};
  document.getElementById("vl").onclick=()=>speak(stripHtml(t.explain));
  document.getElementById("bk").onclick=()=>subjectPage(t.subj);
  document.getElementById("go").onclick=()=>quiz(t);
  window.scrollTo(0,0);
}
function sameFrac(a,b,reduced){
  if(a.d===0||b.d===0)return false;
  if(a.n*b.d!==b.n*a.d)return false;
  if(reduced&&gcd(a.n,a.d)!==1)return false;
  return true;
}
function quiz(t){
  const R=t.endless?1e9:roundsOf(t);
  markTab("lernen");const goBack=()=>t.back?t.back():topicPage(t.id);BACKFN=goBack;
  if(t.reset)t.reset();
  let n=0,score=0,cur,attempts,done;
  function next(){
    if(n>=R)return result();
    cur=t.gen(K);attempts=0;done=false;n++;draw();
  }
  function draw(){
    const q=isHtml(cur.q)?cur.q:esc(cur.q);
    let input;
    if(cur.type!=="choice"){
      input=`<div class="row"><input class="ans" id="in" ${cur.type==="text"?'style="width:min(100%,320px)"':""} inputmode="${cur.type==="num"?"decimal":"text"}" autocomplete="off" autocapitalize="off" aria-label="Deine Antwort">${cur.unit?`<span class="unit">${cur.unit}</span>`:""}<button class="btn" id="chk">Prüfen</button></div>`;
    }else{
      input=`<div class="choices">${cur.choices.map(c=>`<button class="choice" data-v="${esc(c)}">${esc(c)}</button>`).join("")}</div>`;
    }
    app.innerHTML=`<button class="back" id="bk">← Abbrechen</button>
    <div class="progress"><i style="width:${(n-1)/R*100}%"></i></div>
    <div class="card"><div style="color:var(--mute);font-weight:700">${t.name} · Aufgabe ${n}${t.endless?" · "+String(score).replace(".",",")+" Punkte":" von "+R}</div><div class="q">${q}</div>${input}<div id="fb"></div>
    <div class="spacer"></div><div class="row"><button class="btn ghost small" id="tip">💡 Tipp</button></div></div>`;
    document.getElementById("bk").onclick=()=>t.endless?endEnd():goBack();
    document.getElementById("tip").onclick=()=>{const el=document.getElementById("fb");const old=el.querySelector(".next");
      el.innerHTML=`<div class="fb tip"><b>Tipp</b>${cur.hint}</div>`+(old?old.outerHTML:"");bindNext();};
    if(cur.type!=="choice"){
      const inp=document.getElementById("in");inp.focus();
      document.getElementById("chk").onclick=check;
      inp.onkeydown=e=>{if(e.key==="Enter")check();};
    }else{
      app.querySelectorAll(".choice").forEach(b=>b.onclick=()=>checkChoice(b));
    }
    if(typeof onQuestion==="function")onQuestion(cur);
  }
  function bindNext(){const b=document.querySelector(".next");if(b)b.onclick=next;}
  function finish(ok,firstTry){
    done=true;
    if(typeof recordStat==="function")recordStat(t,cur,ok,firstTry);
    if(ok)score+=firstTry?1:.5;
    document.getElementById("fb").insertAdjacentHTML("beforeend",`<div class="spacer"></div><button class="btn next">${n>=R?"Ergebnis ansehen":"Weiter →"}</button>`);bindNext();
    const inp=document.getElementById("in"),chk=document.getElementById("chk");
    if(inp)inp.disabled=true;if(chk)chk.disabled=true;
    app.querySelectorAll(".choice").forEach(b=>b.disabled=true);
  }
  function showAns(){
    if(cur.show)return cur.show;
    if(cur.type==="num")return fmt(cur.answer);
    return String(cur.answer);
  }
  function handle(ok,showRight){
    attempts++;
    if(ok){
      document.getElementById("fb").innerHTML=`<div class="fb ok"><b>Richtig! 🎉</b>${attempts===1?"Super, gleich beim ersten Mal.":"Klasse, beim zweiten Versuch geschafft."}</div>`;
      finish(true,attempts===1);
    }else if(attempts===1&&store.second!==false){
      document.getElementById("fb").innerHTML=`<div class="fb tip"><b>Fast – versuch es nochmal!</b>${cur.hint}</div>`;
    }else{
      document.getElementById("fb").innerHTML=`<div class="fb bad"><b>Das war leider nicht richtig.</b>Richtig ist: <b style="display:inline">${esc(showAns())}${cur.unit?" "+cur.unit:""}</b><br>${store.noway?"":cur.way}</div>`;
      if(showRight)showRight();
      finish(false,false);
    }
  }
  function check(){
    if(done)return;
    const inp=document.getElementById("in");
    const rawFull=inp.value.trim();
    if(!rawFull){inp.focus();return;}
    let ok=false;
    if(cur.type==="text"){
      ok=cur.strict?rawFull===cur.answer:cur.answers.includes(normT(rawFull));
    }else{
      const raw=rawFull.replace(/[−–]/g,"-");
      if(cur.type==="num"){
        const v=parseFloat(raw.replace(",","."));
        if(isNaN(v)){inp.focus();return;}
        ok=Math.abs(v-Number(cur.answer))<1e-6;
      }else{
        const m=raw.match(/^(-?\d+)\s*[\/:]\s*(\d+)$/);
        let f;
        if(m)f={n:+m[1],d:+m[2]};
        else if(/^-?\d+$/.test(raw))f={n:+raw,d:1};
        else{inp.focus();return;}
        ok=sameFrac(f,cur.answer,cur.reduced);
      }
    }
    handle(ok);
    if(!done)inp.select();
  }
  function checkChoice(btn){
    if(done)return;
    const ok=btn.dataset.v===String(cur.answer);
    if(ok)btn.classList.add("right");else{btn.classList.add("wrong");btn.disabled=true;}
    handle(ok,()=>{app.querySelectorAll(".choice").forEach(b=>{if(b.dataset.v===String(cur.answer))b.classList.add("right");});});
  }
  function endEnd(){
    stopSpeak();const asked=n-(done?0:1);
    app.innerHTML=`<div class="card result"><h2>${t.ic} ${t.name}</h2><div class="big">${asked>=5&&score>=asked*.8?"🏆":"💪"}</div><div class="score">${String(score).replace(".",",")} Punkte bei ${asked} Aufgaben</div><p>Es gibt immer neue Aufgaben. Du kannst jederzeit weiterüben.</p><div class="row" style="justify-content:center"><button class="btn" id="again">Weiter üben</button><button class="btn ghost" id="hm">Zurück</button></div></div>`;
    document.getElementById("again").onclick=()=>quiz(t);document.getElementById("hm").onclick=goBack;window.scrollTo(0,0);
  }
  function result(){
    const pts=score/R*10;
    const stars=pts>=9?3:pts>=7?2:pts>=5?1:0;
    const key=skey(t.id,K);const s=store[key]||{stars:0,best:0};
    s.stars=Math.max(s.stars,stars);s.best=Math.max(s.best,score);store[key]=s;save();
    const msg=stars===3?"Fantastisch! Du bist ein Profi! 🏆":stars===2?"Sehr gut! Fast alles richtig.":stars===1?"Gut gemacht! Mit etwas Übung wird es noch besser.":"Nicht schlimm! Lies die Erklärung nochmal und probier es gleich nochmal.";
    app.innerHTML=`<div class="card result"><h2>${t.ic} ${t.name}</h2><div class="big">${"⭐".repeat(stars)||"💪"}</div>
    <div class="score">${String(score).replace(".",",")} von ${R} Punkten</div><p>${msg}</p>
    <div class="row" style="justify-content:center"><button class="btn" id="again">Nochmal üben</button><button class="btn ghost" id="exp">Erklärung</button><button class="btn ghost" id="hm">Themenliste</button></div><div class="row" style="justify-content:center;margin-top:12px"><button class="btn small ghost" id="rv">▶ Erklärvideos zum Thema</button></div></div>`;
    document.getElementById("rv").onclick=()=>openUrl(LINKS.youtube(videoQuery(t.name,K)));
    document.getElementById("again").onclick=()=>quiz(t);
    document.getElementById("exp").onclick=()=>topicPage(t.id);
    BACKFN=()=>subjectPage(t.subj);
    document.getElementById("hm").onclick=()=>subjectPage(t.subj);
    window.scrollTo(0,0);
  }
  next();
}
