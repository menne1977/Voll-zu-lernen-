/* ======================================================================
   Lehrbuch-Kapitel (Klasse 5-10): Text, Bilder, Beispiele,
   Erklär-Folien (animiert, offline) und Übungsaufgaben mit Lösung.
   Kapitel anlegen mit lbx(fach, klasse, titel, {intro, teile, merke, fo, ue})
   ====================================================================== */
(function(){
  const st=document.createElement("style");
  st.textContent=`
  .foan{background:#fff;border:2px solid var(--line);border-radius:16px;padding:8px;animation:foIn .5s}
  .foan svg{margin:0 auto}
  .focap{font-size:1.1rem;font-weight:600;margin:8px 6px 4px;cursor:pointer}
  .pop{opacity:0;animation:foPop .6s forwards}
  @keyframes foIn{from{opacity:.2;transform:translateX(24px)}to{opacity:1;transform:none}}
  @keyframes foPop{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  .dots{display:flex;gap:6px;justify-content:center;margin:8px 0}
  .dots i{width:10px;height:10px;border-radius:50%;background:var(--line)}
  .dots i.on{background:var(--pri)}
  .ueq{border-top:2px solid var(--line);padding:12px 0}
  .ueq input{font:inherit;font-size:1.1rem;font-weight:700;padding:8px;border:3px solid var(--line);border-radius:12px;width:160px}
  .uef{margin-top:6px;font-weight:600}
  .uef.ok{color:var(--ok)}.uef.no{color:var(--bad)}
  body.dark .foan{background:var(--card)}
  `;
  document.head.appendChild(st);
})();

/* ---------- Zeichen-Helfer für Bilder ---------- */
const DEFS=`<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#241b4b"/></marker></defs>`;
const sv2=(inner,h)=>sv(DEFS+inner,h);
const P=(i,x)=>`<g class="pop" style="animation-delay:${(i*.5).toFixed(2)}s">${x}</g>`;
const bx=(x,y,w,h,t,c,sz)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c||"#e0e7ff"}" stroke="#241b4b" stroke-width="2"/>`+T_(x+w/2,y+h/2+5,t,sz||13);
const ar=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#241b4b" stroke-width="2.5" marker-end="url(#ah)"/>`;
const ln=(x1,y1,x2,y2,c,w)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c||"#241b4b"}" stroke-width="${w||2}"/>`;
const tx=(x,y,t,sz,col,an)=>T_(x,y,t,sz,col,an);
const COL={a:"#c7d2fe",b:"#fde68a",c:"#bbf7d0",d:"#fecaca",e:"#fbcfe8",f:"#bae6fd"};

/* ---------- Kapitel anlegen ---------- */
function lbx(s,k,t,o){
  let h="";
  if(o.intro)h+=`<p>${o.intro}</p>`;
  (o.teile||[]).forEach(x=>{h+=(x.h?`<h3>${x.h}</h3>`:"")+(x.p?`<p>${x.p}</p>`:"")+(x.svg||"")+(x.bsp?`<div class="ex"><b>Beispiel:</b> ${x.bsp}</div>`:"");});
  if(o.merke)h+=`<div class="ex"><b>Merke:</b> ${o.merke}</div>`;
  sb(s,k,t,h);
  const c=SB[SB.length-1];c.fo=o.fo;c.ue=o.ue;c.lb=1;
}

/* ---------- Folien-Player ---------- */
function foPlay(box,fo){
  let i=0,timer=null;
  const stop=()=>{if(timer){clearTimeout(timer);timer=null;}};
  function show(){
    stop();
    box.innerHTML=`<h3>🎬 Erklär-Folien</h3><div class="foan">${fo[i].svg||""}<p class="focap" id="fcap">${fo[i].txt}</p></div><div class="dots">${fo.map((_,j)=>`<i class="${j===i?"on":""}"></i>`).join("")}</div><div class="row"><button class="btn small ghost" id="fpv">◀</button><button class="btn small ghost" id="fpl">▶ Automatisch</button><button class="btn small" id="fnx">Weiter ▶</button><span style="color:var(--mute)">${i+1} / ${fo.length}</span></div><p style="color:var(--mute);font-size:.85rem;margin:6px 0 0">Tippe auf den Text, dann liest er ihn vor.</p>`;
    const g=x=>box.querySelector("#"+x);
    g("fpv").onclick=()=>{if(i>0){i--;show();}};
    g("fnx").onclick=()=>{if(i<fo.length-1){i++;show();}};
    g("fcap").onclick=()=>speak(stripHtml(fo[i].txt));
    g("fpl").onclick=()=>{
      const step=()=>{ if(!document.body.contains(box))return; if(i<fo.length-1){i++;show();timer=setTimeout(step,4500+fo[i].txt.length*45);} };
      timer=setTimeout(step,1200);g("fpl").textContent="Läuft …";
    };
  }
  show();
}

/* ---------- Übungsaufgaben ---------- */
const ueNorm=s=>String(s).toLowerCase().replace(/\s+/g,"").replace(/,/g,".").replace(/\.$/,"").replace(/[„“"']/g,"");
function ueOk(inp,ans){
  const a=ueNorm(inp);if(!a)return false;
  return (Array.isArray(ans)?ans:[ans]).some(x=>{
    const b=ueNorm(x);if(a===b)return true;
    const na=Number(a),nb=Number(b);return a!==""&&b!==""&&!isNaN(na)&&!isNaN(nb)&&Math.abs(na-nb)<1e-9;
  });
}
function ueRender(box,ue){
  let done=new Set();
  box.innerHTML=`<h3>✏️ Übungsaufgaben</h3><p style="margin:0 0 4px;color:var(--mute)">Tippe deine Antwort ein. Bei Zahlen reicht die Zahl, Komma oder Punkt ist egal.</p>`+ue.map((u,i)=>`<div class="ueq" data-i="${i}"><p style="margin:0 0 8px"><b>${i+1}.</b> ${u[0]}</p><div class="row"><input autocomplete="off" autocapitalize="off" spellcheck="false"><button class="btn small" data-a="p">Prüfen</button>${u[2]?`<button class="btn small ghost" data-a="t">💡 Tipp</button>`:""}<button class="btn small ghost" data-a="l">Lösung</button></div><div class="uef"></div></div>`).join("")+`<p id="uesc" style="font-weight:700"></p>`;
  const upd=()=>{box.querySelector("#uesc").textContent=done.size?`⭐ ${done.size} von ${ue.length} richtig`:"";};
  box.querySelectorAll(".ueq").forEach(q=>{
    const i=+q.dataset.i,u=ue[i],inp=q.querySelector("input"),f=q.querySelector(".uef");let tries=0;
    const check=()=>{
      if(ueOk(inp.value,u[1])){f.className="uef ok";f.textContent="✅ Richtig!";done.add(i);upd();}
      else{tries++;f.className="uef no";f.textContent=tries>1?"❌ Noch nicht. Schau dir den Tipp oder die Lösung an.":"❌ Noch nicht ganz. Versuch es nochmal.";}
    };
    q.querySelectorAll("button").forEach(b=>b.onclick=()=>{
      if(b.dataset.a==="p")check();
      else if(b.dataset.a==="t"){f.className="uef";f.textContent="💡 "+u[2];}
      else{f.className="uef";f.textContent="Lösung: "+(Array.isArray(u[1])?u[1][0]:u[1]);}
    });
    inp.onkeydown=e=>{if(e.key==="Enter")check();};
  });
}

/* ---------- Kapitel-Ansicht erweitern ---------- */
(function(){
  const _r=sbRead;
  sbRead=function(id){
    _r(id);
    const c=SB.find(x=>x.id===id);if(!c||(!c.fo&&!c.ue))return;
    const t=document.getElementById("sbtxt");if(!t)return;
    t.insertAdjacentHTML("afterend",(c.fo?`<div id="fobox" style="margin:14px 0"></div>`:"")+(c.ue?`<div id="uebox" style="margin:14px 0"></div>`:""));
    if(c.fo)foPlay(document.getElementById("fobox"),c.fo);
    if(c.ue)ueRender(document.getElementById("uebox"),c.ue);
  };
  const _p=schulbuchPage;
  schulbuchPage=function(sid){
    _p(sid);
    if(!sid)return;
    const n=SB.filter(c=>c.s===sid&&c.lb).length;if(!n)return;
    const h=app.querySelector("header.top");
    if(h)h.insertAdjacentHTML("afterend",`<div class="card" style="margin-bottom:10px"><p style="margin:0">${n} Kapitel mit 🎬 Erklär-Folien und ✏️ Übungsaufgaben. Die Kapitel sind nach Klassenstufe sortiert.</p></div>`);
  };
})();
