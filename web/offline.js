
/* ======================================================================
   Offline-Bibliothek: gelesene Online-Texte bleiben auf dem Gerät
   (IndexedDB, Fallback: Speicher im Arbeitsspeicher)
   ====================================================================== */
const _mem={};
function idb(){return new Promise((res,rej)=>{try{const r=indexedDB.open("vzl_lib",1);r.onupgradeneeded=()=>r.result.createObjectStore("texts",{keyPath:"key"});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);}catch(e){rej(e);}});}
async function offlinePut(key,title,src,text){
  const rec={key,title,src,text,at:Date.now()};_mem[key]=rec;
  try{const db=await idb();await new Promise((res,rej)=>{const tx=db.transaction("texts","readwrite");tx.objectStore("texts").put(rec);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}catch(e){}
  return rec;
}
async function offlineGet(key){
  if(_mem[key])return _mem[key];
  try{const db=await idb();return await new Promise((res,rej)=>{const r=db.transaction("texts").objectStore("texts").get(key);r.onsuccess=()=>res(r.result||null);r.onerror=()=>rej(r.error);});}catch(e){return null;}
}
async function offlineAll(){
  try{const db=await idb();return await new Promise((res,rej)=>{const r=db.transaction("texts").objectStore("texts").getAll();r.onsuccess=()=>res((r.result||[]).sort((a,b)=>b.at-a.at));r.onerror=()=>rej(r.error);});}catch(e){return Object.values(_mem);}
}
async function offlineDel(key){delete _mem[key];try{const db=await idb();await new Promise(res=>{const tx=db.transaction("texts","readwrite");tx.objectStore("texts").delete(key);tx.oncomplete=res;tx.onerror=res;});}catch(e){}}
async function offlinePage(){
  markTab("lesen");BACKFN=()=>lesenPage();
  app.innerHTML=`<button class="back" id="bk">← Lesen</button><header class="top"><h1>📥 Offline-Bibliothek</h1></header><div class="card"><p style="margin:0">Hier liegen Texte aus Wikipedia, Klexikon und Co., die du schon gelesen oder gespeichert hast. Du kannst sie lesen, vorlesen lassen und daraus Lückenaufgaben machen, auch ohne Internet.</p></div><div id="ol">Lade …</div>`;
  document.getElementById("bk").onclick=lesenPage;
  const list=await offlineAll();const box=document.getElementById("ol");
  if(!list.length){box.innerHTML=`<div class="card">Noch nichts gespeichert. Öffne in der Suche einen Text, er wird automatisch gespeichert.</div>`;return;}
  box.innerHTML=`<div class="row" style="margin-bottom:10px"><button class="btn" id="cz">♾️ Lückentexte aus meinen Texten</button></div>`+list.map((x,i)=>`<div class="resitem"><b>${esc(x.title)}</b><span>${esc((WIKIS[x.src]||{name:x.src}).name)} · ${Math.round(x.text.length/1000)} Tsd. Zeichen</span><div class="row" style="margin-top:6px"><button class="btn small" data-r="${i}">Lesen</button><button class="btn small ghost" data-d="${i}">Löschen</button></div></div>`).join("");
  document.getElementById("cz").onclick=()=>clozeFromTexts(list.map(x=>({text:x.text,title:x.title,src:x.src})),"Meine Offline-Texte");
  box.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{const x=list[+b.dataset.r];offlineRead(x);});
  box.querySelectorAll("[data-d]").forEach(b=>b.onclick=async()=>{await offlineDel(list[+b.dataset.d].key);offlinePage();});
}
function offlineRead(x){
  stopSpeak();BACKFN=()=>offlinePage();
  app.innerHTML=`<button class="back" id="bk">← Bibliothek</button><div class="card reader"><h2>${esc(x.title)}</h2><div>${x.text.slice(0,12000).split(/\n+/).map(p=>`<p>${esc(p)}</p>`).join("")}</div><div class="row" style="margin-top:12px"><button class="btn small" id="ls">🔊 Vorlesen</button></div><p style="color:var(--mute);font-size:.8rem">Quelle: ${esc((WIKIS[x.src]||{name:x.src}).name)} – ${esc(x.title)} (CC BY-SA)</p></div>`;
  document.getElementById("bk").onclick=offlinePage;document.getElementById("ls").onclick=()=>speak(x.text.slice(0,4000));
}
/* Lückentexte endlos aus beliebigen Texten (offline) */
function clozeFromTexts(items,name,back){
  const joined=items.map(x=>x.text).join("\n");
  const {pool,all}=buildCloze(joined);
  if(pool.length<4){app.innerHTML=`<div class="card">Zu wenig Text für Aufgaben.</div>`;return;}
  let deck=[];
  const t={id:"web-offline",subj:"deutsch",name,ic:"📥",endless:true,explain:"",back:back||(()=>offlinePage()),gen(){
    if(!deck.length)deck=shuffle(pool);const p=deck.pop();
    const blank=p.s.slice(0,p.i)+"_____"+p.s.slice(p.i+p.w.length);const up=/^[A-ZÄÖÜ]/.test(p.w);
    const cand=shuffle(all.filter(w=>w!==p.w&&/^[A-ZÄÖÜ]/.test(w)===up&&Math.abs(w.length-p.w.length)<=4)).slice(0,3);
    if(Math.random()<.25)return mkT(`Schreibe das fehlende Wort.<div class="clz">${esc(blank)}</div>`,p.w,`Das Wort beginnt mit „${p.w[0]}“ und hat ${p.w.length} Buchstaben.`,false);
    return mkC(`Welches Wort fehlt in der Lücke?<div class="clz">${esc(blank)}</div>`,p.w,cand,`Das Wort beginnt mit „${p.w[0]}“ und hat ${p.w.length} Buchstaben.`);}};
  quiz(t);
}
function bookCloze(){
  const items=BOOKS.map(b=>({text:b.pages.join(" ").replace(/\|/g,"")}));
  clozeFromTexts(items,"Lückentexte aus den Lesebüchern",()=>lesenPage());
}
