
/* ================= Online-Funktionen, Suche, Katalog, Schule, Merkliste ================= */
const hasAndroid=typeof Android!=="undefined";
function openUrl(u){
  try{ if(hasAndroid&&Android.openUrl){Android.openUrl(u);return;} }catch(e){}
  window.open(u,"_blank","noopener");
}
let speaking=false;
function speak(text){
  try{
    if(hasAndroid&&Android.speak){ if(speaking){Android.stopSpeak();speaking=false;return;} Android.speak(text);speaking=true;return; }
    if("speechSynthesis" in window){
      if(speaking){speechSynthesis.cancel();speaking=false;return;}
      const u=new SpeechSynthesisUtterance(text);u.lang="de-DE";u.onend=()=>{speaking=false;};speechSynthesis.speak(u);speaking=true;
    }
  }catch(e){}
}
function stopSpeak(){try{if(hasAndroid&&Android.stopSpeak)Android.stopSpeak();else if("speechSynthesis" in window)speechSynthesis.cancel();}catch(e){}speaking=false;}
const enc=encodeURIComponent;
const isOnline=()=>{try{return hasAndroid&&Android.isOnline?Android.isOnline():navigator.onLine;}catch(e){return navigator.onLine;}};

/* ---------- Links zu Videos und Suche ---------- */
const LINKS={
  youtube:q=>"https://m.youtube.com/results?search_query="+enc(q),
  google:q=>"https://www.google.com/search?q="+enc(q),
  planet:q=>"https://www.google.com/search?q="+enc(q+" site:planet-schule.de"),
  alpha:q=>"https://www.google.com/search?q="+enc(q+" site:ardmediathek.de ARD alpha"),
  image:q=>"https://www.google.com/search?tbm=isch&q="+enc(q),
  serlo:q=>"https://www.google.com/search?q="+enc(q+" site:de.serlo.org")
};
const levelWord=k=>k===null||k===undefined?"":k===0?"Vorschule":"Klasse "+k;
function videoQuery(q,k){return (q+" "+levelWord(k)+" einfach erklärt").trim();}

/* ---------- Wikis (Wikipedia, Klexikon, Wikibooks, Wikiversity) ---------- */
const WIKIS={
  wikipedia:{name:"Wikipedia",api:"https://de.wikipedia.org/w/api.php",page:t=>"https://de.wikipedia.org/wiki/"+enc(t.replace(/ /g,"_")),info:"ausführlich"},
  klexikon:{name:"Klexikon (für Kinder)",api:"https://klexikon.zum.de/api.php",page:t=>"https://klexikon.zum.de/wiki/"+enc(t.replace(/ /g,"_")),info:"einfach erklärt"},
  wikibooks:{name:"Wikibooks (Lehrbücher)",api:"https://de.wikibooks.org/w/api.php",page:t=>"https://de.wikibooks.org/wiki/"+enc(t.replace(/ /g,"_")),info:"Lehrbücher"},
  wikiversity:{name:"Wikiversity (Kurse)",api:"https://de.wikiversity.org/w/api.php",page:t=>"https://de.wikiversity.org/wiki/"+enc(t.replace(/ /g,"_")),info:"Lernkurse"}
};
async function wikiSearch(src,q){
  const w=WIKIS[src];
  const r=await fetch(`${w.api}?action=query&list=search&srsearch=${enc(q)}&srlimit=10&format=json&origin=*`);
  const j=await r.json();
  return (j.query&&j.query.search||[]).map(x=>({title:x.title,snippet:x.snippet.replace(/<[^>]+>/g,"").replace(/&quot;/g,'"').replace(/&amp;/g,"&")}));
}
async function wikiPage(src,title){
  const w=WIKIS[src];
  try{
    const r=await fetch(`${w.api}?action=query&prop=extracts&explaintext=1&exsectionformat=plain&redirects=1&titles=${enc(title)}&format=json&origin=*`);
    const j=await r.json();const pages=j.query&&j.query.pages||{};const p=pages[Object.keys(pages)[0]];
    if(p&&p.extract&&p.extract.trim().length>40)return p.extract.trim();
  }catch(e){}
  const r2=await fetch(`${w.api}?action=parse&page=${enc(title)}&prop=text&redirects=1&format=json&origin=*`);
  const j2=await r2.json();
  if(!j2.parse)return"";
  const d=new DOMParser().parseFromString(j2.parse.text["*"],"text/html");
  d.querySelectorAll("style,script,table,.mw-editsection,.reference,sup").forEach(x=>x.remove());
  return [...d.querySelectorAll("p,h2,h3,li")].map(x=>(x.tagName==="H2"||x.tagName==="H3"?"\n":"")+x.textContent.trim()).filter(Boolean).join("\n\n");
}

/* ---------- Merkliste und Notizen ---------- */
store.fav=store.fav||[];store.notes=store.notes||[];
function toggleFav(item){
  const i=store.fav.findIndex(f=>f.key===item.key);
  if(i>=0)store.fav.splice(i,1);else store.fav.unshift(item);
  save();return i<0;
}
const isFav=key=>store.fav.some(f=>f.key===key);

/* ---------- Navigation (Tabs) ---------- */
let BACKFN=null;
const TABS=[["lernen","🎓","Lernen"],["suche","🔎","Suche"],["katalog","📋","Katalog"],["schule","🏫","Schule"],["merk","⭐","Merkliste"]];
let TAB="lernen";
function markTab(n){
  TAB=n;
  const nav=document.getElementById("tabs");if(!nav)return;
  nav.innerHTML=TABS.map(t=>`<button data-t="${t[0]}" class="${t[0]===n?"on":""}"><span>${t[1]}</span>${t[2]}</button>`).join("");
  nav.querySelectorAll("button").forEach(b=>b.onclick=()=>{stopSpeak();showTab(b.dataset.t);});
}
function showTab(n){
  BACKFN=null;
  if(n==="lernen")home();else if(n==="suche")searchPage();else if(n==="katalog")catalogPage();else if(n==="schule")schoolPage();else if(n==="merk")favPage();
}
window.appBack=function(){
  try{ if(BACKFN){const f=BACKFN;BACKFN=null;f();return true;} }catch(e){}
  if(TAB!=="lernen"){showTab("lernen");return true;}
  if(S!==null){home();return true;}
  return false;
};
const subjName=id=>{const s=SUBJECTS.find(x=>x.id===id);return s?s.name:id;};
const subjIc=id=>{const s=SUBJECTS.find(x=>x.id===id);return s?s.ic:"📘";};
const clsRange=(a,b)=>a===b?CLASS_LABEL(a):(a===0?"Vorschule":a)+"–"+b+(b>=13?"":"")+". Klasse";
const stripHtml=h=>String(h).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();

/* ---------- Online-Lernhilfe-Leiste (wiederverwendbar) ---------- */
function helpBar(q,k,idp){
  const id=idp||"h"+Math.random().toString(36).slice(2,7);
  return `<div class="helpbar" data-q="${esc(q)}" data-k="${k===null||k===undefined?"":k}">
    <button class="btn small" data-a="yt">▶ Videos (YouTube)</button>
    <button class="btn small ghost" data-a="wiki">📖 Ausführlich</button>
    <button class="btn small ghost" data-a="kinder">🧸 Einfach erklärt</button>
    <button class="btn small ghost" data-a="more">⋯ Mehr</button></div>`;
}
function bindHelpBars(root){
  (root||document).querySelectorAll(".helpbar").forEach(h=>{
    const q=h.dataset.q,k=h.dataset.k===""?null:+h.dataset.k;
    h.querySelectorAll("button").forEach(b=>b.onclick=()=>{
      const a=b.dataset.a;
      if(a==="yt")openUrl(LINKS.youtube(videoQuery(q,k)));
      else if(a==="wiki")readerSearch("wikipedia",q);
      else if(a==="kinder")readerSearch("klexikon",q);
      else if(a==="more")moreSheet(q,k);
    });
  });
}
function moreSheet(q,k){
  const items=[["▶ YouTube: "+videoQuery(q,k),LINKS.youtube(videoQuery(q,k))],["🎬 Planet Schule",LINKS.planet(q)],["🎬 ARD alpha",LINKS.alpha(q)],
    ["🧮 Serlo (Mathe-Lernplattform)",LINKS.serlo(q)],["🖼 Bilder",LINKS.image(q)],["🔎 Google: "+q+" Schule",LINKS.google(q+" Schule erklärt")],
    ["📚 Wikibooks",null,"wikibooks"],["🎓 Wikiversity",null,"wikiversity"]];
  const d=document.createElement("div");d.className="sheet";
  d.innerHTML=`<div class="sheetbox"><h3>Mehr zu „${esc(q)}“</h3>${items.map((it,i)=>`<button class="sheetbtn" data-i="${i}">${esc(it[0])}</button>`).join("")}<button class="btn ghost" style="width:100%;margin-top:8px" id="sx">Schließen</button></div>`;
  document.body.appendChild(d);
  d.onclick=e=>{if(e.target===d)d.remove();};
  d.querySelector("#sx").onclick=()=>d.remove();
  d.querySelectorAll(".sheetbtn").forEach(b=>b.onclick=()=>{const it=items[+b.dataset.i];d.remove();if(it[1])openUrl(it[1]);else readerSearch(it[2],q);});
}

/* ---------- Leseansicht (Online-Suche in Wikis) ---------- */
function offlineNote(){return isOnline()?"":`<div class="fb tip"><b>Du bist offline.</b>Die Online-Suche braucht Internet. Gelernte Themen und Übungen funktionieren auch ohne.</div>`;}
async function readerSearch(src,q){
  stopSpeak();
  BACKFN=()=>showTab(TAB);
  const w=WIKIS[src];
  app.innerHTML=`<button class="back" id="bk">← Zurück</button><header class="top"><h1>🔎 ${esc(w.name)}</h1></header>
  <div class="card"><div class="row"><input class="ans" id="qq" style="width:100%;font-size:1.1rem;font-weight:600" value="${esc(q)}"><button class="btn" id="go">Suchen</button></div>
  <div class="row" style="margin-top:10px">${Object.keys(WIKIS).map(k=>`<button class="chip ${k===src?"on":""}" data-s="${k}">${WIKIS[k].name.split(" (")[0]}</button>`).join("")}</div></div><div id="res">${offlineNote()}<p style="color:var(--mute)">Suche läuft …</p></div>`;
  document.getElementById("bk").onclick=()=>{BACKFN=null;showTab(TAB);};
  const run=()=>readerSearch(src,document.getElementById("qq").value.trim()||q);
  document.getElementById("go").onclick=run;
  document.getElementById("qq").onkeydown=e=>{if(e.key==="Enter")run();};
  app.querySelectorAll(".chip").forEach(c=>c.onclick=()=>readerSearch(c.dataset.s,document.getElementById("qq").value.trim()||q));
  const res=document.getElementById("res");
  try{
    const list=await wikiSearch(src,q);
    if(!list.length){res.innerHTML=`<div class="card">Keine Treffer in ${esc(w.name)}. Probiere eine andere Quelle oder ein anderes Wort.</div>`;return;}
    res.innerHTML=list.map((x,i)=>`<button class="resitem" data-i="${i}"><b>${esc(x.title)}</b><span>${esc(x.snippet)} …</span></button>`).join("");
    res.querySelectorAll(".resitem").forEach(b=>b.onclick=()=>readerPage(src,list[+b.dataset.i].title,q));
    if(list.length===1||list[0].title.toLowerCase()===q.toLowerCase()){/* Treffer gleich Anfrage: Liste bleibt, Nutzer wählt */}
  }catch(e){
    res.innerHTML=offlineNote()+`<div class="fb bad"><b>Suche nicht möglich</b>Prüfe deine Internetverbindung. Du kannst die Suche auch im Browser öffnen.</div><button class="btn ghost" id="ext">Im Browser suchen</button>`;
    const x=document.getElementById("ext");if(x)x.onclick=()=>openUrl(LINKS.google(q+" "+w.name));
  }
}
async function readerPage(src,title,q){
  stopSpeak();
  const w=WIKIS[src];
  BACKFN=()=>readerSearch(src,q);
  app.innerHTML=`<button class="back" id="bk">← Trefferliste</button><div class="card reader"><h2>${esc(title)}</h2><div id="txt" style="color:var(--mute)">Lade …</div></div>`;
  document.getElementById("bk").onclick=()=>{BACKFN=null;readerSearch(src,q);};
  try{
    const text=await wikiPage(src,title);
    const box=document.getElementById("txt");
    if(!text){box.textContent="Kein Text gefunden. Öffne die Seite im Browser.";}
    else{
      const limit=9000;const shown=text.length>limit?text.slice(0,limit).replace(/\s+\S*$/,"")+" …":text;
      box.style.color="var(--ink)";
      box.innerHTML=shown.split(/\n{1,}/).map(p=>/^[^.!?]{3,60}$/.test(p.trim())&&p.trim().length<60?`<h3>${esc(p.trim())}</h3>`:`<p>${esc(p)}</p>`).join("");
      window.__lastText=text.slice(0,4000);
    }
    const key="wiki:"+src+":"+title;
    const bar=document.createElement("div");bar.className="row";bar.style.marginTop="12px";
    bar.innerHTML=`<button class="btn small" id="lis">🔊 Vorlesen</button><button class="btn small ghost" id="fav">${isFav(key)?"★ Gemerkt":"☆ Merken"}</button><button class="btn small ghost" id="vid">▶ Videos</button><button class="btn small ghost" id="web">🌐 Ganze Seite</button>`;
    box.parentNode.appendChild(bar);
    const note=document.createElement("p");note.style.cssText="color:var(--mute);font-size:.8rem;margin-top:10px";
    note.textContent=`Quelle: ${w.name} – Texte unter freier Lizenz (CC BY-SA). Autoren siehe Originalseite.`;
    box.parentNode.appendChild(note);
    document.getElementById("lis").onclick=()=>speak(window.__lastText||"");
    document.getElementById("fav").onclick=e=>{const on=toggleFav({key,type:"wiki",src,title,q});e.target.textContent=on?"★ Gemerkt":"☆ Merken";};
    document.getElementById("vid").onclick=()=>openUrl(LINKS.youtube(videoQuery(title,K)));
    document.getElementById("web").onclick=()=>openUrl(w.page(title));
  }catch(e){
    document.getElementById("txt").innerHTML=`<div class="fb bad"><b>Konnte nicht laden</b>Prüfe deine Internetverbindung.</div>`;
  }
}

/* ---------- Suche (Lernstoff offline + online) ---------- */
const norm=s=>String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
const stemOf=w=>{const x=w.replace(/(rechnung|rechnen|lehre|ungen|ung|en|er|e|n|s)$/,"");return x.length>=4?x:w;};
const hit=(hay,w)=>hay.includes(w)||hay.includes(stemOf(w));
function offlineSearch(q){
  const words=norm(q).split(/\s+/).filter(w=>w.length>1);
  if(!words.length)return[];
  const out=[];
  ALL.forEach(t=>{
    let hay=norm(t.name+" "+stripHtml(t.explain)+" "+subjName(t.subj));
    if(t.items)hay+=" "+norm(t.items.join(" ").replace(/\|/g," "));
    let sc=0;words.forEach(w=>{if(hit(norm(t.name),w))sc+=5;if(hit(hay,w))sc+=1;});
    if(sc&&words.every(w=>hit(hay,w)))out.push({kind:"topic",t,sc:sc+3});else if(sc>=5)out.push({kind:"topic",t,sc});
  });
  CATALOG.forEach(c=>{
    const hay=norm(c.title+" "+c.subs.join(" ")+" "+subjName(c.subj));
    let sc=0;words.forEach(w=>{if(hit(hay,w))sc+=2;});
    if(sc&&words.every(w=>hit(hay,w)))out.push({kind:"cat",c,sc:sc+2});
  });
  return out.sort((a,b)=>b.sc-a.sc).slice(0,12);
}
function searchPage(prefill){
  markTab("suche");S=null;
  const q0=typeof prefill==="string"?prefill:"";
  app.innerHTML=`<header class="top"><h1>🔎 Was brauchst du gerade?</h1></header>
  <div class="card"><div style="color:var(--mute);margin-bottom:8px">Schreibe das Thema aus der Schule, eine Frage oder ein Stichwort. Zum Beispiel: Bruchrechnen, Photosynthese, Present Perfect.</div>
  <div class="row"><input class="ans" id="q" style="width:100%;font-size:1.15rem;font-weight:600" placeholder="Thema oder Frage" value="${esc(q0)}"><button class="btn" id="go">Suchen</button></div>
  <div class="row" style="margin-top:10px"><label style="color:var(--mute)">Klasse:</label><select id="kk" class="sel">${Array.from({length:14},(_,i)=>`<option value="${i}" ${K===i?"selected":""}>${CLASS_LABEL(i)}</option>`).join("")}</select></div></div><div id="out"></div>`;
  const go=()=>{
    const q=document.getElementById("q").value.trim();if(!q)return;
    const k=+document.getElementById("kk").value;
    const res=offlineSearch(q);
    let html=`<h3 class="group">Online Hilfe</h3><div class="card">${helpBar(q,k)}</div>`;
    html+=`<h3 class="group">In der App gefunden</h3>`;
    if(!res.length)html+=`<div class="card" style="color:var(--mute)">Dazu gibt es noch kein eigenes Thema in der App. Nutze die Online-Hilfe oben.</div>`;
    else html+=res.map((r,i)=>r.kind==="topic"
      ?`<button class="resitem" data-i="${i}"><b>${r.t.ic} ${esc(r.t.name)}</b><span>${esc(subjName(r.t.subj))} · ${esc(clsRange(r.t.from,r.t.to))} · Übungen und Erklärung</span></button>`
      :`<button class="resitem" data-i="${i}"><b>📋 ${esc(r.c.title)}</b><span>${esc(subjName(r.c.subj))} · ${esc(clsRange(r.c.from,r.c.to))} · Lehrplan-Thema</span></button>`).join("");
    const out=document.getElementById("out");out.innerHTML=html;bindHelpBars(out);
    out.querySelectorAll(".resitem").forEach(b=>b.onclick=()=>{
      const r=res[+b.dataset.i];
      if(r.kind==="topic"){if(K===null)K=r.t.from;S=r.t.subj;if(!(r.t.from<=K&&K<=r.t.to)){K=Math.min(Math.max(K,r.t.from),r.t.to);}topicPage(r.t.id);}
      else catDetail(r.c);
    });
  };
  document.getElementById("go").onclick=go;
  document.getElementById("q").onkeydown=e=>{if(e.key==="Enter")go();};
  if(q0)go();
}

/* ---------- Katalog ---------- */
let catFilter={k:null,s:"",q:""};
function catalogPage(){
  markTab("katalog");S=null;
  if(catFilter.k===null)catFilter.k=K===null?-1:K;
  app.innerHTML=`<header class="top"><h1>📋 Lehrplan-Katalog</h1></header>
  <div class="card"><div style="color:var(--mute);margin-bottom:8px">Alle Themen der Schulfächer im Überblick. Tippe auf ein Thema und finde Videos und Erklärungen.</div>
  <div class="row"><select id="fk" class="sel"><option value="-1">Alle Klassen</option>${Array.from({length:14},(_,i)=>`<option value="${i}">${CLASS_LABEL(i)}</option>`).join("")}</select>
  <select id="fs" class="sel"><option value="">Alle Fächer</option>${SUBJECTS.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}</select></div>
  <div class="row" style="margin-top:10px"><input class="ans" id="fq" style="width:100%;font-size:1rem" placeholder="Filter, z. B. Bruch"></div></div><div id="list"></div>`;
  const fk=document.getElementById("fk"),fs=document.getElementById("fs"),fq=document.getElementById("fq");
  fk.value=String(catFilter.k);fs.value=catFilter.s;fq.value=catFilter.q;
  const render=()=>{
    catFilter={k:+fk.value,s:fs.value,q:fq.value};
    const w=norm(catFilter.q).split(/\s+/).filter(Boolean);
    const list=CATALOG.filter(c=>(catFilter.k<0||(c.from<=catFilter.k&&catFilter.k<=c.to))&&(!catFilter.s||c.subj===catFilter.s)&&w.every(x=>norm(c.title+" "+c.subs.join(" ")).includes(x)));
    document.getElementById("list").innerHTML=(list.length?`<div style="color:var(--mute);margin:6px 2px">${list.length} Themen</div>`:`<div class="card">Keine Themen gefunden.</div>`)+
      list.map((c,i)=>`<button class="resitem" data-i="${i}"><b>${subjIc(c.subj)} ${esc(c.title)}</b><span>${esc(subjName(c.subj))} · ${esc(clsRange(c.from,c.to))}${c.subs.length?" · "+c.subs.length+" Unterthemen":""}</span></button>`).join("");
    document.querySelectorAll("#list .resitem").forEach(b=>b.onclick=()=>catDetail(list[+b.dataset.i]));
  };
  fk.onchange=fs.onchange=render;fq.oninput=render;render();
}
function catDetail(c){
  stopSpeak();BACKFN=()=>catalogPage();
  const q0=c.title.split(/[:–-]/)[0].trim();
  const own=ALL.filter(t=>t.subj===c.subj&&t.from<=c.to&&t.to>=c.from&&norm(t.name+" "+stripHtml(t.explain)).split(/\W+/).some(w=>w.length>4&&norm(c.title).includes(w))).slice(0,4);
  const kk=K===null?c.from:Math.min(Math.max(K,c.from),c.to);
  const key="cat:"+c.subj+":"+c.title;
  app.innerHTML=`<button class="back" id="bk">← Katalog</button>
  <div class="card"><h2>${subjIc(c.subj)} ${esc(c.title)}</h2><div style="color:var(--mute)">${esc(subjName(c.subj))} · ${esc(clsRange(c.from,c.to))}</div>
  <div class="spacer"></div>${helpBar(q0,kk)}<div class="row" style="margin-top:10px"><button class="btn small ghost" id="fav">${isFav(key)?"★ Gemerkt":"☆ Merken"}</button></div></div>
  ${c.subs.length?`<h3 class="group">Unterthemen</h3><div class="card">${c.subs.map((s,i)=>`<div class="subrow"><span>${esc(s)}</span><span><button class="btn small ghost" data-v="${i}">▶</button> <button class="btn small ghost" data-w="${i}">📖</button></span></div>`).join("")}</div>`:""}
  ${own.length?`<h3 class="group">Dazu üben</h3>`+own.map((t,i)=>`<button class="resitem" data-o="${i}"><b>${t.ic} ${esc(t.name)}</b><span>Übungen in der App</span></button>`).join(""):""}`;
  document.getElementById("bk").onclick=()=>{BACKFN=null;catalogPage();};
  bindHelpBars(app);
  document.getElementById("fav").onclick=e=>{const on=toggleFav({key,type:"cat",title:c.title,subj:c.subj,from:c.from,to:c.to});e.target.textContent=on?"★ Gemerkt":"☆ Merken";};
  app.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>openUrl(LINKS.youtube(videoQuery(c.subs[+b.dataset.v]+" "+q0.split(" ")[0],kk))));
  app.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>readerSearch("wikipedia",c.subs[+b.dataset.w]));
  app.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>{const t=own[+b.dataset.o];K=kk;S=t.subj;store.k=K;save();markTab("lernen");topicPage(t.id);});
}

/* ---------- Schule: Lehrpläne und Schulamt ---------- */
const LAENDER=["Baden-Württemberg","Bayern","Berlin","Brandenburg","Bremen","Hamburg","Hessen","Mecklenburg-Vorpommern","Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz","Saarland","Sachsen","Sachsen-Anhalt","Schleswig-Holstein","Thüringen"];
const FORMEN=["Grundschule","Hauptschule","Realschule","Gymnasium","Gesamtschule","Oberstufe / Abitur"];
function schoolPage(){
  markTab("schule");S=null;
  const sv=store.school||{land:"Nordrhein-Westfalen",form:"Realschule",ort:"",fach:""};
  app.innerHTML=`<header class="top"><h1>🏫 Schule und Lehrplan</h1></header>
  <div class="card"><div style="color:var(--mute);margin-bottom:8px">Finde den Lehrplan für dein Bundesland, deine Schulform und dein Fach. Außerdem Schulamt, Prüfungen und Hilfe.</div>
  <div class="row"><select id="sl" class="sel">${LAENDER.map(l=>`<option ${l===sv.land?"selected":""}>${l}</option>`).join("")}</select>
  <select id="sf" class="sel">${FORMEN.map(l=>`<option ${l===sv.form?"selected":""}>${l}</option>`).join("")}</select></div>
  <div class="row" style="margin-top:10px"><input class="ans" id="sfa" style="width:100%;font-size:1rem" placeholder="Fach, z. B. Mathematik" value="${esc(sv.fach)}"></div>
  <div class="row" style="margin-top:10px"><input class="ans" id="so" style="width:100%;font-size:1rem" placeholder="Dein Ort (für Schulamt)" value="${esc(sv.ort)}"></div></div>
  <div id="sbtns"></div>
  <h3 class="group">Allgemeine Seiten</h3>
  <div class="card"><button class="sheetbtn" data-u="https://www.kmk.org">Kultusministerkonferenz (Bildungsstandards)</button>
  <button class="sheetbtn" data-u="https://www.bildungsserver.de">Deutscher Bildungsserver</button>
  <button class="sheetbtn" data-u="https://www.schulentwicklung.nrw.de/lehrplaene/">Lehrplannavigator Nordrhein-Westfalen</button>
  <button class="sheetbtn" data-u="https://www.planet-schule.de">Planet Schule (Videos und Material)</button></div>`;
  const get=()=>({land:document.getElementById("sl").value,form:document.getElementById("sf").value,fach:document.getElementById("sfa").value.trim(),ort:document.getElementById("so").value.trim()});
  const draw=()=>{
    const v=get();store.school=v;save();
    const fach=v.fach||"";
    const items=[
      ["📘 Lehrplan "+v.land+" "+v.form+(fach?" "+fach:""),LINKS.google(`Lehrplan ${v.land} ${v.form} ${fach}`.trim())],
      ["🎯 Kerncurriculum / Bildungsplan "+v.land,LINKS.google(`Kerncurriculum Bildungsplan ${v.land} ${v.form} ${fach}`.trim())],
      ["📝 Prüfungen und Abitur-Aufgaben "+v.land,LINKS.google(`Abschlussprüfung Aufgaben ${v.land} ${v.form} ${fach}`.trim())],
      ["🏢 Schulamt "+(v.ort||v.land),LINKS.google("Schulamt "+(v.ort||v.land))],
      ["🏫 Schulen in "+(v.ort||v.land),LINKS.google("Schulen "+(v.ort||v.land)+" "+v.form)],
      ["🗓 Ferien und Termine "+v.land,LINKS.google("Schulferien "+v.land)],
      ["📚 Zugelassene Schulbücher "+v.land,LINKS.google(`Schulbuchverzeichnis ${v.land} ${v.form} ${fach}`.trim())]
    ];
    const box=document.getElementById("sbtns");
    box.innerHTML=`<div class="card">${items.map((it,i)=>`<button class="sheetbtn" data-i="${i}">${esc(it[0])}</button>`).join("")}</div>`;
    box.querySelectorAll(".sheetbtn").forEach(b=>b.onclick=()=>openUrl(items[+b.dataset.i][1]));
  };
  ["sl","sf"].forEach(i=>document.getElementById(i).onchange=draw);
  ["sfa","so"].forEach(i=>document.getElementById(i).oninput=draw);
  app.querySelectorAll("[data-u]").forEach(b=>b.onclick=()=>openUrl(b.dataset.u));
  draw();
}

/* ---------- Merkliste und Notizen ---------- */
function favPage(){
  markTab("merk");S=null;
  const noteHtml=n=>`<div class="card note" data-id="${n.id}"><div class="row" style="justify-content:space-between"><b>${esc(n.title||"Notiz")}</b><button class="btn small ghost" data-del="${n.id}">Löschen</button></div>${n.img?`<img src="${n.img}" style="max-width:100%;border-radius:12px;margin:8px 0">`:""}<div style="white-space:pre-wrap">${esc(n.text||"")}</div></div>`;
  app.innerHTML=`<header class="top"><h1>⭐ Merkliste und Notizen</h1></header>
  <h3 class="group">Gemerkt</h3><div id="fl">${store.fav.length?store.fav.map((f,i)=>`<button class="resitem" data-i="${i}"><b>${f.type==="wiki"?"📖":f.type==="topic"?"🎯":"📋"} ${esc(f.title)}</b><span>${f.type==="wiki"?esc(WIKIS[f.src].name):esc(subjName(f.subj))}${f.type==="topic"?" · "+esc(CLASS_LABEL(f.k)):""}</span></button>`).join(""):`<div class="card" style="color:var(--mute)">Noch nichts gemerkt. Tippe bei Erklärungen und Themen auf „Merken“.</div>`}</div>
  <h3 class="group">Notizen</h3>
  <div class="card"><input class="ans" id="nt" style="width:100%;font-size:1rem" placeholder="Titel (z. B. Mathe Hausaufgabe)"><textarea id="nx" class="ta" placeholder="Notiz, Aufgabe oder Frage …"></textarea>
  <div class="row"><label class="btn small ghost" style="cursor:pointer">📷 Foto anhängen<input type="file" id="nf" accept="image/*" style="display:none"></label><button class="btn small" id="ns">Speichern</button></div><div id="np" style="margin-top:8px"></div></div>
  <div id="nl">${store.notes.map(noteHtml).join("")}</div>`;
  app.querySelectorAll("#fl .resitem").forEach(b=>b.onclick=()=>{
    const f=store.fav[+b.dataset.i];
    if(f.type==="wiki")readerPage(f.src,f.title,f.q||f.title);
    else if(f.type==="topic"){K=f.k;store.k=K;save();S=f.subj;markTab("lernen");topicPage(f.id);}
    else{const c=CATALOG.find(x=>x.title===f.title&&x.subj===f.subj);if(c)catDetail(c);}
  });
  let img=null;
  document.getElementById("nf").onchange=e=>{
    const file=e.target.files[0];if(!file)return;
    const rd=new FileReader();
    rd.onload=()=>{const im=new Image();im.onload=()=>{
      const sc=Math.min(1,900/Math.max(im.width,im.height));const c=document.createElement("canvas");c.width=im.width*sc;c.height=im.height*sc;
      c.getContext("2d").drawImage(im,0,0,c.width,c.height);img=c.toDataURL("image/jpeg",.6);
      document.getElementById("np").innerHTML=`<img src="${img}" style="max-width:60%;border-radius:10px">`;};im.src=rd.result;};
    rd.readAsDataURL(file);
  };
  document.getElementById("ns").onclick=()=>{
    const t=document.getElementById("nt").value.trim(),x=document.getElementById("nx").value.trim();
    if(!t&&!x&&!img)return;
    store.notes.unshift({id:Date.now(),title:t,text:x,img});save();favPage();
  };
  app.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{store.notes=store.notes.filter(n=>String(n.id)!==b.dataset.del);save();favPage();});
}

/* Offline-Hinweis beim Start */
window.addEventListener("offline",()=>{});
