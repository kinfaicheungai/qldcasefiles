/* 昆州判案錄 — story engine
   Cases register themselves with QCF.register({...}) from cases/*.js.
   Text markup inside scripts: {{termKey}} = bilingual term chip, **x** = emphasis, $n = money. */
(function(){
const QCF = window.QCF = {cases:[], register(c){this.cases.push(c)}};
const $ = s => document.querySelector(s);
const KEY = "qcf2";
const CAT = {classic:"經典", estate:"遺產", dv:"家暴", debt:"錢債", biz:"生意", family:"家事", visa:"簽證", crim:"刑事", neighbour:"鄰舍", work:"僱傭", injury:"傷亡索償", scam:"詐騙"};

/* ---------- courts: which level of the system each step happens in ---------- */
const COURTS = {
  mag:{zh:"裁判法院",en:"Magistrates Court",bench:"一位裁判官",bg:"bg_magistrates"},
  dc:{zh:"區域法院",en:"District Court of Queensland",bench:"一位法官",bg:"bg_court"},
  sc:{zh:"最高法院",en:"Supreme Court of Queensland",bench:"一位法官",bg:"bg_court"},
  qca:{zh:"上訴庭",en:"Queensland Court of Appeal",bench:"三位上訴法官",bg:"bg_appeal"},
  nswdc:{zh:"新州區域法院",en:"NSW District Court",bench:"一位法官",bg:"bg_court"},
  nswsc:{zh:"新州最高法院",en:"NSW Supreme Court",bench:"一位法官",bg:"bg_court"},
  nswca:{zh:"新州上訴庭",en:"NSW Court of Appeal",bench:"三位上訴法官",bg:"bg_appeal"},
  sasc:{zh:"南澳最高法院",en:"Supreme Court of South Australia",bench:"一位法官",bg:"bg_court"},
  wamag:{zh:"西澳家事法院（裁判官）",en:"Family Court of WA, Magistrate",bench:"一位裁判官",bg:"bg_magistrates"},
  wafull:{zh:"西澳家事法院合議庭",en:"Full Court, Family Court of WA",bench:"三位法官",bg:"bg_appeal"},
  fmc:{zh:"聯邦裁判法院",en:"Federal Magistrates Court",bench:"一位聯邦裁判官",bg:"bg_court"},
  fcc:{zh:"聯邦巡迴法院",en:"Federal Circuit Court",bench:"一位法官",bg:"bg_court"},
  famfull:{zh:"家事法院合議庭",en:"Full Court of the Family Court",bench:"三位法官",bg:"bg_appeal"},
  fca:{zh:"聯邦法院",en:"Federal Court of Australia",bench:"一位法官",bg:"bg_court"},
  hca:{zh:"澳洲高等法院",en:"High Court of Australia",bench:"五至七位大法官",bg:"bg_hca"},
  qcat:{zh:"QCAT 審裁處",en:"Qld Civil and Administrative Tribunal",bench:"一位審裁員"},
  qcata:{zh:"QCAT 上訴審裁處",en:"QCAT Appeal Tribunal",bench:"一位上訴審裁員"},
  aat:{zh:"行政上訴審裁處",en:"Administrative Appeals Tribunal",bench:"一位審裁員"},
  rrt:{zh:"難民覆核審裁處",en:"Refugee Review Tribunal",bench:"一位審裁員"},
  fwc:{zh:"公平工作委員會",en:"Fair Work Commission",bench:"一位委員"},
  qirc:{zh:"昆州勞資關係委員會",en:"Qld Industrial Relations Commission",bench:"一位委員"},
  afca:{zh:"澳洲金融投訴局（唔係法院）",en:"Australian Financial Complaints Authority",bench:"一位裁決者"}
};
const ROLE = {
  trial:{zh:"一審",tier:1}, tribunal:{zh:"審裁處",tier:1}, review:{zh:"覆核",tier:2},
  appeal:{zh:"上訴",tier:2}, final:{zh:"終審",tier:3}
};
function courtAt(i){ for(let j=i;j>=0;j--) if(S[j].court) return S[j].court; return null; }
function courtLabel(code){ if(!code) return null; const [c,r]=code.split(":"); return {c:COURTS[c], r:ROLE[r]||ROLE.trial, role:r}; }
function showCourt(){
  const p=$("#courtPlate"); if(!p) return;
  const code=courtAt(st.i); const L=courtLabel(code);
  if(!L||!L.c){ p.hidden=true; return null; }
  const dots=[1,2,3].map(t=>`<i class="${t<=L.r.tier?"on":""}"></i>`).join("");
  p.className="courtplate tier"+L.r.tier+(L.role==="tribunal"||L.role==="review"?" trib":"");
  p.innerHTML=`<span class="cp-role">${L.r.zh}</span><span class="cp-name"><b>${L.c.zh}</b><small>${L.c.en}</small></span><span class="cp-ladder" aria-label="法院層級 ${L.r.tier} / 3">${dots}</span>`;
  p.hidden=false; return L;
}

/* ---------- persistent store ---------- */
let store = {dict:[], best:{}, prog:{}};
try{ const d = JSON.parse(localStorage.getItem(KEY)||"null"); if(d) store = Object.assign(store,d); }catch(e){}
function persist(){ try{ localStorage.setItem(KEY, JSON.stringify(store)); }catch(e){} }

/* ---------- helpers ---------- */
const imgSrc = k => (window.QCF_IMG && window.QCF_IMG[k]) || `img/${k}.webp`;
let G = {}; // merged glossary
let C = null, E = {}, S = [], st = null;

function money(s){ return s.replace(/\$[\d,]+(?:\.\d+)?/g, m => `<span class="money">${m}</span>`); }
function fmt(s){
  if(!s) return "";
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = money(s);
  return s.replace(/\{\{(\w+)(?:\|([^}]+))?\}\}/g, (m,k,shown) => { const g=G[k]; if(!g) return shown||k;
    return `<button type="button" class="term" data-k="${k}"><i>${shown||g.en}</i><small>${g.zh}</small></button>`; });
}
/* plain English for speech: {{k|shown}} -> shown, {{k}} -> term */
function plain(s){
  return s.replace(/\{\{(\w+)(?:\|([^}]+))?\}\}/g,(m,k,shown)=>shown||(G[k]?G[k].en.split(" / ")[0].replace(/\s*\(.*?\)/g,""):k)).replace(/\*\*/g,"");
}
/* ---------- speech (Web Speech API, works offline on iOS) ---------- */
let voice=null;
function pickVoice(){ const vs=(window.speechSynthesis&&speechSynthesis.getVoices())||[];
  voice = vs.find(v=>/en-AU/i.test(v.lang)) || vs.find(v=>/en-GB/i.test(v.lang)) || vs.find(v=>/^en/i.test(v.lang)) || null; }
if(window.speechSynthesis){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
function speak(text,rate,onend){
  if(!window.speechSynthesis){ alertBox("呢部機唔支援朗讀功能。"); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang=voice?voice.lang:"en-AU"; if(voice) u.voice=voice; u.rate=rate||1;
  if(onend){ u.onend=onend; u.onerror=onend; }
  speechSynthesis.speak(u);
}
function alertBox(msg){ const d=document.createElement("div"); d.className="fb"; d.textContent=msg; $("#panel").prepend(d); }
function learn(k){ if(G[k] && !store.dict.includes(k)){ store.dict.push(k); persist(); } hud(); }
function learnIn(s){ (s||"").replace(/\{\{(\w+)(?:\|[^}]+)?\}\}/g,(m,k)=>{learn(k);return m}); }
function hud(){ if(!st) return; $("#score").textContent=st.score; $("#evN").textContent=st.ev.length; $("#dictN").textContent=store.dict.length; }
function save(){ if(C){ store.prog[C.id] = st; persist(); } }

function maxScore(c){
  let m=0;
  c.script.forEach(n=>{
    if(n.q && !n.multi) m+=10;
    if(n.multi) m+=n.multi*10;
    if(n.predict){ (n.predict.items||[]).forEach(it=>m+=it.pts||10); if(n.predict.slider) m+=n.predict.slider.ptsNear||20; }
  });
  return m;
}
function isProg(c){ const p=store.prog[c.id]; return !!(p && p.i>0 && c.script[p.i] && !c.script[p.i].end); }
function rankOf(p){ return p>=.85?"資深大律師 Senior Counsel":p>=.65?"執業律師 Solicitor":p>=.4?"實習律師 Graduate":"法律系新生 Law Student"; }

/* ---------- Hub ---------- */
let filter = "all", status = "all";
function showHub(){
  C=null; st=null; const bb=$("#backBtn"); if(bb) bb.hidden=true; const cp=$("#courtPlate"); if(cp) cp.hidden=true;
  document.querySelectorAll(".end,.cover,.sheet").forEach(x=>x.remove());
  const old=$("#hub"); if(old) old.remove();
  const total = QCF.cases.reduce((a,c)=>a+maxScore(c),0);
  const got = QCF.cases.reduce((a,c)=>a+(store.best[c.id]||0),0);
  const done = QCF.cases.filter(c=>store.best[c.id]!==undefined).length;
  const h=document.createElement("div"); h.className="hub"; h.id="hub";
  const cats=["all",...new Set(QCF.cases.map(c=>c.cat))];
  h.innerHTML=`<div class="hub-head" style="background-image:url(${imgSrc("bg_office")})"><div class="inner">
      <div class="eyebrow">Queensland Case Files</div><h1>昆州判案錄</h1>
      <div style="color:var(--muted);font-size:14px">真實昆士蘭判決改編・中文敘述＋英文法律術語</div><div class="ver">版本 v${window.QCF_VERSION||"?"}・${window.QCF_BUILD||""}</div></div></div>
    <div class="career"><div class="n">${got}</div><div class="grow"><div class="r">${rankOf(total?got/total:0)}</div>
      <div class="sub">已結案 ${done} / ${QCF.cases.length}・詞典 ${store.dict.length}</div><div class="bar"><i style="width:${total?Math.round(got/total*100):0}%"></i></div></div>
      <button class="pill" type="button" id="hubDict">詞典</button></div>
    <div class="tabs" role="tablist" aria-label="案件狀態">${[["all","全部",QCF.cases.length],["prog","進行中",QCF.cases.filter(isProg).length],["done","已完成",done]].map(([k,t,n])=>`<button type="button" role="tab" data-s="${k}" aria-selected="${status===k}">${t}<b>${n}</b></button>`).join("")}</div>
    <div class="filters" role="toolbar" aria-label="篩選範疇">${cats.map(k=>`<button type="button" data-f="${k}" aria-pressed="${filter===k}">${k==="all"?"全部":CAT[k]}</button>`).join("")}</div>
    <div class="cases" id="caseList"></div>
    <p class="fine" style="padding:8px max(20px,env(safe-area-inset-left,0px)) 0;margin:0;font-size:12px;color:#7d86a8">所有案件取材自公開判詞，人名已更改，每題附判詞段落出處。遊戲用作學習，唔係法律意見；遇到真實問題請諮詢律師或 Legal Aid Queensland（1300 65 11 88）。<br>昆州判案錄 v${window.QCF_VERSION||"?"}（${window.QCF_BUILD||""}）</p>`;
  $("#app").append(h);
  const list=h.querySelector("#caseList");
  const shown=QCF.cases.filter(c=>(filter==="all"||c.cat===filter)&&(status==="all"||(status==="prog"?isProg(c):store.best[c.id]!==undefined)));
  if(!shown.length){ const e=document.createElement("p"); e.className="empty"; e.style.padding="8px 0"; e.textContent=status==="prog"?"而家冇進行中嘅案件。揀一單開始啦。":status==="done"?"仲未完成任何案件。":"呢個分類暫時冇案件。"; list.append(e); }
  shown.forEach((c,ix)=>{
    const b=document.createElement("button"); b.type="button"; b.className="case";
    const best=store.best[c.id], prog=store.prog[c.id];
    const chNow = prog&&prog.i>0 ? (c.script.slice(0,prog.i+1).filter(n=>n.ch).pop()||{}).ch : null;
    const status = (isProg(c) ? `進行中・${chNow||""}` : "") + (best!==undefined ? `${isProg(c)?"　":""}最佳 ${best} / ${maxScore(c)}` : (isProg(c)?"":"未開始"));
    b.innerHTML=`<span class="no">${String(QCF.cases.indexOf(c)+1).padStart(2,"0")}</span>
      <span class="t">${c.title}</span>
      <span class="meta"><span class="chip ${c.cat}">${CAT[c.cat]}</span><span>${c.court}</span><span class="best">${status}</span></span>
      <span class="cite">${c.cite}</span>`;
    b.onclick=()=>openCase(c); list.append(b);
  });
  (window.QCF_SOON||[]).filter(s=>status==="all"&&(filter==="all"||s.cat===filter)).forEach(s=>{
    const d=document.createElement("div"); d.className="case soon";
    d.innerHTML=`<span class="no">··</span><span class="t">${s.title}</span><span class="meta"><span class="chip ${s.cat}">${CAT[s.cat]}</span><span>即將推出</span></span>`;
    list.append(d);
  });
  h.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{filter=b.dataset.f;showHub()});
  h.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{status=b.dataset.s;showHub()});
  h.querySelector("#hubDict").onclick=openDict;
  $("#chap").textContent="昆州判案錄";
}

/* ---------- Case cover ---------- */
function openCase(c){
  C=c; E=c.evidence||{}; S=c.script; G=Object.assign({},window.QCF_GLOSSARY,c.terms||{});
  const prog=store.prog[c.id];
  const cv=document.createElement("div"); cv.className="cover";
  cv.style.backgroundImage=`url(${imgSrc(c.coverBg||c.script[0].bg)})`;
  cv.innerHTML=`<div class="inner">
    <div><button class="back" type="button" id="cvBack">‹ 案件檔案櫃</button></div>
    <div class="eyebrow">${CAT[c.cat]} · ${c.court}</div>
    <h1>${c.title}</h1>
    <div class="case">${c.tagline||""}</div>
    <p>${c.intro}</p>
    ${c.warning?`<div class="cw">${c.warning}</div>`:""}
    <div class="row"><button class="big" id="startBtn" type="button">${prog&&prog.i>0&&!S[prog.i].end?"重新開始":"開始辦案"}</button>
    ${prog&&prog.i>0&&!S[prog.i].end?`<button class="ghost" id="resumeBtn" type="button">繼續上次進度</button>`:""}</div>
    <p class="fine">改編自 ${c.cite}。人名已更改。</p></div>`;
  $("#app").append(cv);
  $("#hub")&&$("#hub").remove();
  cv.querySelector("#cvBack").onclick=()=>{cv.remove();showHub()};
  cv.querySelector("#startBtn").onclick=()=>{ st={i:0,score:0,ev:[],answers:{},pred:null,bg:null}; cv.remove(); hud(); render(); };
  const r=cv.querySelector("#resumeBtn"); if(r) r.onclick=()=>{ st=prog; cv.remove(); hud(); render(); };
}

/* ---------- Stage ---------- */
function setBg(k){ if(k) st.bg=k; $("#stage").style.backgroundImage = st.bg?`url(${imgSrc(st.bg)})`:""; }
function setPortrait(k){ const p=$("#portrait"); if(!k){p.hidden=true;return}
  if(p.dataset.k!==k){ p.style.backgroundImage=`url(${imgSrc(k)})`; p.dataset.k=k; p.classList.remove("pop"); void p.offsetWidth; p.classList.add("pop"); } p.hidden=false; }
function chapterOf(i){ for(let j=i;j>=0;j--) if(S[j].ch) return S[j]; return null; }

function render(){
  if(window.speechSynthesis) speechSynthesis.cancel();
  const bb=$("#backBtn"); if(bb) bb.hidden = !(st && st.i>0 && !S[st.i].end);
  const n=S[st.i]; const panel=$("#panel"); panel.innerHTML="";
  const c=chapterOf(st.i); if(c){ $("#chap").textContent=`${c.ch}・${c.title}`; setBg(c.bg); }
  if(n.bg) setBg(n.bg);
  const L=showCourt();
  if(L && L.c.bg && (st.bg==="bg_court"||st.bg==="bg_magistrates"||n.court)) setBg(L.c.bg);
  const prevCode=st.i>0?courtAt(st.i-1):null, curCode=courtAt(st.i);
  const moved = curCode && curCode!==prevCode && !n.ch;
  $("#chapcard").hidden=true;
  if(n.ch){ setPortrait(null); const cc=$("#chapcard"); cc.innerHTML=`<div class="num">${n.ch}</div><h2>${n.title}</h2><p>${n.sub||""}</p>${L?`<div class="cc-court"><span>${L.r.zh}</span>${L.c.zh}・${L.c.bench}</div>`:""}`; cc.hidden=false; panel.append(nextBtn()); save(); return; }
  if(moved){ const L2=courtLabel(curCode); const b=document.createElement("div"); b.className="courtmove tier"+L2.r.tier;
    b.innerHTML=`<span class="cm-arrow">⇧</span><div><b>案件轉到：${L2.c.zh}</b><small>${L2.r.zh}・${L2.c.en}・${L2.c.bench}</small></div>`; panel.append(b); }
  if(n.end) return showEnd();
  if(n.predict) return renderPredict(n.predict);
  setPortrait(n.img||null);
  if(n.q) return n.multi?renderMulti(n):renderChoice(n);
  if(n.ruling) return renderRuling(n);
  const narr = n.who==="旁白"||n.who==="回憶"||!n.who;
  const who=document.createElement("div"); who.className="who"+(narr?" narr":"")+(n.judge?" judge":""); who.textContent=n.who||"旁白"; panel.append(who);
  const t=document.createElement("div"); t.className="text"; t.innerHTML=fmt(n.text); panel.append(t); learnIn(n.text); (n.terms||[]).forEach(learn);
  if(n.quote) panel.append(quoteEl(n.quote));
  if(n.ref){ const r=document.createElement("div"); r.className="fb"; r.innerHTML=`<span class="ref" style="margin:0">出處：${n.ref}</span>`; panel.append(r); }
  if(n.gain){ if(!st.ev.includes(n.gain)){ st.ev.push(n.gain); hud(); } panel.append(gainEl(n.gain)); }
  panel.append(nextBtn()); panel.scrollTop=0; save();
}
function renderRuling(n){
  const panel=$("#panel");
  const who=document.createElement("div"); who.className="who judge"; who.textContent=n.who; panel.append(who);
  const box=document.createElement("div"); box.className="ruling";
  box.innerHTML=`<div class="rl-label">JUDGMENT · 判決（英文摘要）</div><div class="rl-en">${fmt(n.ruling.en)}</div>
    <div class="rl-ctrl"><button type="button" class="say" data-r="1">▶ 朗讀</button><button type="button" class="say" data-r="0.75">慢速</button><button type="button" class="zhbtn" aria-expanded="false">中文意思</button></div>
    <div class="rl-zh" hidden>${money(n.ruling.zh)}</div>`;
  panel.append(box); learnIn(n.ruling.en);
  const text=plain(n.ruling.en);
  box.querySelectorAll(".say").forEach(b=>b.onclick=()=>{
    const playing=b.classList.contains("on"); speechSynthesis&&speechSynthesis.cancel(); box.querySelectorAll(".say").forEach(x=>x.classList.remove("on"));
    if(playing) return; b.classList.add("on"); speak(text,+b.dataset.r,()=>b.classList.remove("on")); });
  const zb=box.querySelector(".zhbtn"), zh=box.querySelector(".rl-zh");
  zb.onclick=()=>{ zh.hidden=!zh.hidden; zb.setAttribute("aria-expanded",String(!zh.hidden)); };
  if(n.ref){ const r=document.createElement("div"); r.className="fb"; r.innerHTML=`<span class="ref" style="margin:0">出處：${n.ref}</span>`; panel.append(r); }
  const nb=nextBtn(); const old=nb.onclick; nb.onclick=()=>{ if(window.speechSynthesis) speechSynthesis.cancel(); old(); };
  panel.append(nb); panel.scrollTop=0; save();
}
function quoteEl(q){ const d=document.createElement("div"); d.className="quote"; d.innerHTML=`<div class="en">${q.en}</div><div class="zh">${q.zh}</div><div class="src">${q.src}</div>`; return d; }
function gainEl(k){ const d=document.createElement("div"); d.className="gain"; d.innerHTML=`<span class="badge">證據</span><div><b>${E[k].t}</b><div style="font-size:13px;color:var(--muted)">已收入證據夾</div></div>`; return d; }
function nextBtn(dis){ const b=document.createElement("button"); b.className="next"; b.type="button"; b.textContent="繼續"; b.disabled=!!dis; b.onclick=()=>{st.i++;render()}; return b; }

function renderChoice(n){
  const panel=$("#panel"); const q=document.createElement("div"); q.className="q"; q.innerHTML=fmt(n.q); learnIn(n.q); panel.append(q);
  const box=document.createElement("div"); box.className="opts"; panel.append(box);
  const nb=nextBtn(true); const prev=st.answers[st.i];
  n.opts.forEach((o,ix)=>{ const b=document.createElement("button"); b.type="button"; b.className="opt";
    b.innerHTML=`<span class="k">${"ABCD"[ix]}</span><span>${fmt(o.t)}</span>`; learnIn(o.t); b.onclick=()=>pick(ix); box.append(b); });
  function pick(ix){
    if(st.answers[st.i]===undefined){ st.answers[st.i]=ix; if(n.opts[ix].ok) st.score+=10; hud(); }
    const a=st.answers[st.i];
    [...box.children].forEach((b,j)=>{ b.disabled=true; if(n.opts[j].ok) b.classList.add("ok"); else if(j===a) b.classList.add("bad"); });
    const o=n.opts[a], right=n.opts.find(x=>x.ok);
    const fb=document.createElement("div"); fb.className="fb "+(o.ok?"good":"miss");
    const ref=o.ok?o.ref:right.ref;
    fb.innerHTML=`<span class="tag">${o.ok?"正確 +10":"未中"}</span>${fmt(o.fb)}${!o.ok?`<br><br><b>正確答案係「${fmt(right.t)}」：</b>${fmt(right.fb.replace(/^啱！/,""))}`:""}${ref?`<span class="ref">出處：${ref}</span>`:""}`;
    learnIn(o.fb); learnIn(right.fb); (right.terms||[]).forEach(learn);
    panel.insertBefore(fb,nb); nb.disabled=false; save(); fb.scrollIntoView({block:"nearest",behavior:"smooth"});
  }
  panel.append(nb); if(prev!==undefined) pick(prev);
}

function renderMulti(n){
  const panel=$("#panel"); const q=document.createElement("div"); q.className="q"; q.innerHTML=fmt(n.q); learnIn(n.q); panel.append(q);
  const box=document.createElement("div"); box.className="opts"; panel.append(box);
  const sel=new Set(); const pool=n.pool.filter(k=>st.ev.includes(k));
  const go=document.createElement("button"); go.type="button"; go.className="next"; go.textContent="提交證據"; go.disabled=true;
  const nb=nextBtn(true);
  pool.forEach(k=>{ const b=document.createElement("button"); b.type="button"; b.className="opt"; b.dataset.k=k;
    b.innerHTML=`<span class="k">${k.replace(/\D/g,"")}</span><span><b>${E[k].t}</b><span class="ev">${money(E[k].d)}</span></span>`;
    b.onclick=()=>{ if(sel.has(k)) sel.delete(k); else if(sel.size<n.multi) sel.add(k); b.classList.toggle("sel",sel.has(k)); go.disabled=sel.size!==n.multi; }; box.append(b); });
  const pts = arr => arr.reduce((a,k)=>a+(n.right.includes(k)?10:(n.half||[]).includes(k)?5:0),0);
  go.onclick=()=>submit([...sel]);
  function submit(arr){
    if(st.answers[st.i]===undefined){ st.answers[st.i]=arr; st.score+=pts(arr); hud(); }
    const a=st.answers[st.i], p=pts(a);
    [...box.children].forEach(b=>{ b.disabled=true; const k=b.dataset.k; b.classList.remove("sel");
      if(n.right.includes(k)) b.classList.add("ok"); else if(a.includes(k)) b.classList.add((n.half||[]).includes(k)?"sel":"bad"); });
    go.remove(); const fb=document.createElement("div"); fb.className="fb "+(p>=n.multi*10*2/3?"good":"miss");
    fb.innerHTML=`<span class="tag">+${p} / ${n.multi*10}</span>${fmt(n.fb)}<span class="ref">出處：${n.ref}</span>`; learnIn(n.fb);
    panel.insertBefore(fb,nb); nb.disabled=false; save(); fb.scrollIntoView({block:"nearest",behavior:"smooth"});
  }
  panel.append(go,nb); if(st.answers[st.i]!==undefined) submit(st.answers[st.i]);
}

function renderPredict(P){
  setPortrait(P.img||null); const panel=$("#panel");
  let html=`<div class="who judge">你嘅預測</div><div class="text">${fmt(P.intro)}</div>`;
  if(P.table) html+=`<div class="estate">${P.table.map(r=>`<span>${r[0]}</span><span>${r[1]}</span>`).join("")}</div>`;
  (P.items||[]).forEach((it,i)=>{ html+=`<div class="q">${i+1}. ${fmt(it.q)}</div><div class="opts" data-it="${i}">${it.opts.map((t,j)=>`<button type="button" class="opt" data-v="${j}"><span class="k">${"ABCD"[j]}</span><span>${fmt(t)}</span></button>`).join("")}</div>`; });
  if(P.slider){ const s=P.slider; html+=`<div class="q">${(P.items||[]).length+1}. ${s.label}</div><div class="slider"><div class="amt" id="amt">$${s.start.toLocaleString("en-AU")}</div><input id="amtR" type="range" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.start}" aria-label="${s.label}"></div>`; }
  panel.innerHTML=html;
  const go=document.createElement("button"); go.type="button"; go.className="next"; go.textContent=P.button||"宣判"; go.disabled=true; panel.append(go);
  const picks={}; const r=$("#amtR");
  if(r) r.oninput=()=>{ $("#amt").textContent="$"+(+r.value).toLocaleString("en-AU"); };
  panel.querySelectorAll(".opts[data-it]").forEach(box=>box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    picks[box.dataset.it]=+b.dataset.v; box.querySelectorAll(".opt").forEach(x=>x.classList.toggle("sel",x===b));
    go.disabled = Object.keys(picks).length < (P.items||[]).length; }));
  if(!(P.items||[]).length) go.disabled=false;
  go.onclick=()=>{
    if(!st.pred){ let pts=0; const lines=[];
      (P.items||[]).forEach((it,i)=>{ const ok=picks[i]===it.answer; if(ok) pts+=it.pts||10; lines.push(`${ok?"✓":"✗"} ${it.short||it.q}：真實係「${it.opts[it.answer]}」`); });
      let amt=null;
      if(P.slider){ const s=P.slider; amt=+r.value; const d=Math.abs(amt-s.answer);
        if(d<=s.near){ pts+=s.ptsNear||20; } else if(d<=s.far){ pts+=Math.round((s.ptsNear||20)/2); }
        lines.push(`你估 $${amt.toLocaleString("en-AU")}，真實 $${s.answer.toLocaleString("en-AU")}`); }
      st.pred={pts,lines}; st.score+=pts; hud(); }
    st.i++; render();
  };
}

function showEnd(){
  const max=maxScore(C); const prevBest=store.best[C.id];
  if(prevBest===undefined || st.score>prevBest) store.best[C.id]=st.score;
  save(); persist();
  const ev=document.createElement("div"); ev.className="end"; ev.id="endScr";
  const p=st.pred, e=C.ending;
  ev.innerHTML=`<div style="font-family:var(--f-law);font-style:italic;color:var(--jacaranda);letter-spacing:.14em;font-size:13px">CASE CLOSED · 結案</div>
  <h2>${C.title}</h2>
  <div class="rank"><div class="n">${st.score}<small> / ${max}</small></div><div><div class="r">${rankOf(st.score/max)}</div>
    <div style="color:var(--muted);font-size:14px">${p?p.lines.join("<br>"):""}</div></div></div>
  <h4>呢單案學到嘅嘢</h4><ul>${e.lessons.map(l=>`<li>${fmt(l)}</li>`).join("")}</ul>
  <h4>真實案件</h4>
  <p style="margin:0;font-size:15px"><i>${C.citeFull||C.cite}</i><br>${e.source}<br><a href="${C.url}" target="_blank" rel="noopener">睇完整判詞</a></p>
  <p class="fine" style="margin:0">呢個遊戲用作學習，唔係法律意見。法例可能有修訂，遇到真實問題請諮詢律師或 Legal Aid Queensland。</p>
  <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="big" type="button" id="toHub">返案件檔案櫃</button><button class="ghost" type="button" id="again">重玩呢單案</button><button class="ghost" type="button" id="endDict">詞典</button></div>`;
  $("#app").append(ev);
  learnIn(e.lessons.join(" "));
  ev.querySelector("#toHub").onclick=()=>{ delete store.prog[C.id]; persist(); showHub(); };
  ev.querySelector("#again").onclick=()=>{ const c=C; delete store.prog[c.id]; persist(); ev.remove(); openCase(c); };
  ev.querySelector("#endDict").onclick=openDict;
}

/* ---------- Sheets ---------- */
function sheet(title,html){
  const s=document.createElement("div"); s.className="sheet";
  s.innerHTML=`<div class="box" role="dialog" aria-label="${title}"><h3>${title}<button class="x" type="button">關閉</button></h3>${html}</div>`;
  s.onclick=e=>{ if(e.target===s||e.target.classList.contains("x")) s.remove(); }; $("#app").append(s);
}
function allTerms(){ const all=Object.assign({},window.QCF_GLOSSARY); QCF.cases.forEach(c=>Object.assign(all,c.terms||{})); return all; }
function openTerm(k){ learn(k); const g=G[k]||allTerms()[k];
  sheet("法律詞語",`<div class="entry"><div class="en">${g.en} <button type="button" class="say mini" id="sayTerm">▶ 讀音</button></div><div class="zh">${g.zh}</div><div class="d">${g.d}</div></div><div class="empty">已收入你嘅詞典（${store.dict.length} / ${Object.keys(allTerms()).length}）</div>`);
  const b=document.getElementById("sayTerm"); if(b) b.onclick=()=>speak(g.en.split(" / ")[0].replace(/\s*\(.*?\)/g,""),0.85); }
function openDict(){
  const all=allTerms(); const keys=Object.keys(all);
  const known=keys.filter(k=>store.dict.includes(k)), unknown=keys.length-known.length;
  const html=known.map(k=>`<div class="entry"><div class="en">${all[k].en}</div><div class="zh">${all[k].zh}</div><div class="d">${all[k].d}</div></div>`).join("")
    + (unknown?`<div class="entry locked"><div class="en">仲有 ${unknown} 個詞未解鎖</div><div class="d">繼續辦案就會收集到。</div></div>`:"");
  sheet(`詞典 ${known.length} / ${keys.length}`,html);
}
function openEv(){
  if(!st) return;
  const html=st.ev.length?st.ev.map(k=>`<div class="evc"><div class="s ${E[k].s}">${E[k].side||(E[k].s==="for"?"有利":"不利")}</div><div class="t">${E[k].t}</div><div style="font-size:14px">${money(E[k].d)}</div><div class="s">${E[k].ref}</div></div>`).join(""):`<div class="empty">仲未收集到證據。跟住劇情推進就會解鎖。</div>`;
  sheet(`證據夾 ${st.ev.length} / ${Object.keys(E).length}`,html);
}

document.addEventListener("click",e=>{ const t=e.target.closest(".term"); if(t){ e.preventDefault(); e.stopPropagation(); openTerm(t.dataset.k); } },true);
window.addEventListener("DOMContentLoaded",()=>{
  $("#dictBtn").onclick=openDict; $("#evBtn").onclick=openEv;
  $("#homeBtn").onclick=()=>{ if(st) save(); showHub(); };
  $("#backBtn").onclick=()=>{ if(!st||st.i<=0) return; document.querySelectorAll(".sheet").forEach(x=>x.remove()); st.i--; render(); };
  $("#scoreBtn").onclick=()=>{ if(!C) return; sheet("分數",`<div class="d" style="color:var(--muted)">選擇題每題 +10，證據題每張 +10，預測判決另計。呢單案滿分 ${maxScore(C)}。</div><div class="rank"><div class="n">${st.score}<small> / ${maxScore(C)}</small></div></div>`); };
  showHub();
});
})();
