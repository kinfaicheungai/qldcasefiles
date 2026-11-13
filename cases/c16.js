/* Case 16 — Moylan v Rickard [2010] QSC 327 */
(function(){
const T = {
  poa:{en:"Powers of Attorney Act 1998 (Qld)",zh:"《1998 年授權書法》（昆州）",d:"規管持久授權書同受權人責任嘅昆州法例。"},
  principal:{en:"principal",zh:"授權人",d:"簽授權書、將權力交俾受權人嘅人。"},
  s66:{en:"duty of honesty and reasonable diligence (s 66)",zh:"誠實及合理勤勉責任",d:"受權人行使權力時，必須誠實並以合理勤勉保障授權人利益。"},
  s88gift:{en:"gifts by an attorney (s 88)",zh:"受權人送禮的限制",d:"受權人只可以用授權人嘅錢送季節性或者特別場合嘅禮物，而且金額要合理。"},
  conflict:{en:"conflict transaction",zh:"利益衝突交易",d:"受權人嘅個人利益同授權人利益有衝突嘅交易，例如將錢俾自己。"},
  s106:{en:"compensation (s 106 / s 107)",zh:"賠償（第 106／107 條）",d:"受權人違反法例造成損失，法院可以命令佢賠償俾授權人遺產（s 106）或者受影響嘅受益人（s 107）。"},
  s105:{en:"relief for honest and reasonable conduct (s 105)",zh:"誠實合理行為的寬免",d:"如果受權人誠實而合理咁行事，法院可以免除佢嘅責任。"},
  ademption:{en:"ademption",zh:"遺贈失效",d:"遺囑送出嘅特定財產喺死前已經唔存在（例如賣咗），嗰份遺贈可能就失效。"},
  extension:{en:"extension of time",zh:"延長時限",d:"法院容許申請人喺法定期限過咗之後仍然提出申請。"},
  dementia:{en:"Alzheimer's disease",zh:"阿茲海默症",d:"一種認知障礙症，會逐漸影響記憶同判斷能力。"},
  residence:{en:"principal place of residence",zh:"主要居所",d:"遺囑用語，指死者主要居住嘅物業。"}
};
const E = {
  A1:{t:"1996 年遺囑：丈夫得 15%",s:"for",side:"對 Len 有利",d:"Sue 嘅遺囑將佢過身時主要居所淨售價嘅 15% 留俾丈夫 Len。",ref:"判詞第 22、44–56 段"},
  A2:{t:"仔女係受權人",s:"neutral",side:"背景",d:"1996 年，Sue 立持久授權書，委任兩個仔女做受權人。",ref:"判詞第 4 段"},
  A3:{t:"屋賣咗 $885,000",s:"against",side:"對 Len 不利",d:"Sue 入住護老院後，受權人 2006 年賣咗間屋。按字面，佢過身時已經冇「主要居所」。",ref:"判詞第 6–13、44–56 段"},
  A4:{t:"兩人各自送自己 $115,000",s:"for",side:"對 Len 有利",d:"售樓所得之中，$600,000 投資用嚟支付媽媽護理，Craig 收 $115,000，Rose 收 $129,476.14，其中 $115,000 係「禮物」。",ref:"判詞第 6–13 段"},
  A5:{t:"唔係季節性、金額唔合理",s:"for",side:"對 Len 有利",d:"呢兩筆唔係生日、聖誕等場合嘅禮物，金額亦唔合理。",ref:"判詞第 78 段"},
  A6:{t:"Len 一直唔知",s:"for",side:"對 Len 有利",d:"Len 早期冇任何資料知道有呢啲禮物。",ref:"判詞第 102–126 段"},
  A7:{t:"出售本身唔算違規",s:"against",side:"對 Len 不利",d:"法官認為冇證據顯示 Sue 會想保留間屋，所以賣屋本身唔係違反責任。",ref:"判詞第 82 段"}
};
const S = [
 {ch:"第一幕", title:"老屋", sub:"布里斯本 Wilston", bg:"bg_queenslander"},
 {who:"May 姐", img:"c_mentor", text:"持久授權書好有用，但亦係長者財務虐待最常見嘅途徑。今日呢單係昆州最高法院嘅案，睇吓受權人可以做咩、唔可以做咩。"},
 {who:"旁白", text:"Len 同 Sue 1979 年結婚，住喺 Sue 爸爸留低嘅一間布里斯本老屋。Sue 有兩個前段婚姻嘅仔女：Rose 同 Craig。", ref:"判詞第 1–3 段"},
 {who:"旁白", text:"1996 年，Sue 立咗遺囑，同時簽咗{{epoa}}，委任 Rose 同 Craig 做受權人。", gain:"A2"},
 {who:"旁白", text:"遺囑寫明：佢過身時嘅{{residence}}，淨售價嘅 15% 留俾丈夫 Len。", gain:"A1"},
 {who:"旁白", text:"大約 1999 年起，Sue 患上{{dementia}}，2000 年確診。", ref:"判詞第 4 段"},

 {ch:"第二幕", title:"賣屋", sub:"2004–2008", bg:"bg_queenslander"},
 {who:"旁白", text:"2004 年 Len 心臟病發，Sue 入住護老院。2005 年，兩個受權人決定賣屋，2006 年以 $885,000 賣出。", gain:"A3"},
 {who:"Rose", img:"m_daughter", text:"媽媽要錢住護老院。我哋投資咗 $600,000 俾佢用。"},
 {who:"旁白", text:"其餘嘅錢：Craig 收 $115,000，Rose 收 $129,476.14，其中 $115,000 寫明係「禮物」。", gain:"A4"},
 {q:"受權人用授權人嘅錢送禮俾自己，法律點睇？", img:"m_daughter", opts:[
   {t:"冇問題，反正將來都係佢哋繼承", fb:"呢個係最常見、亦係最危險嘅諗法。"},
   {t:"只可以送季節性或特別場合嘅禮物，而且金額要合理", ok:1, fb:"啱！{{s88gift}}限制好嚴。將錢俾自己仲係{{conflict}}。", ref:"判詞第 78 段", terms:["poa"]},
   {t:"只要授權人有認知障礙，受權人就可以自由處理", fb:"相反，授權人冇能力時，受權人責任更重。"}
 ]},
 {who:"旁白", text:"呢兩筆錢唔係生日、聖誕之類嘅禮物，金額亦遠超「合理」。", gain:"A5"},
 {who:"旁白", text:"2008 年 4 月 Sue 過身。兩人作為遺囑執行人，分配咗遺產。", ref:"判詞第 1–3 段"},
 {who:"Len", img:"m_step", text:"我遺囑寫明有 15%。但佢哋話：屋喺佢過身前已經賣咗，所以呢份嘢冇咗。", gain:"A6"},
 {q:"屋喺死前賣咗，Len 嗰 15% 仲有冇？", img:"m_step", opts:[
   {t:"冇，屋賣咗，遺贈就失效", fb:"呢個係{{ademption}}嘅論點，係答辯人嘅講法。"},
   {t:"視乎遺囑點寫：如果送嘅係一筆錢（按售價計），未必失效", ok:1, fb:"啱！法官認為嗰份遺贈係「一筆錢」，唔係特定物業，所以唔會因為賣咗而失效。", ref:"判詞第 34–43 段"},
   {t:"要睇 Len 有冇住喺嗰度", fb:"唔係關鍵。"}
 ]},

 {court:"sc:trial", ch:"第三幕", title:"最高法院", sub:"Supreme Court of Queensland", bg:"bg_court"},
 {who:"旁白", text:"Len 入紙最高法院，要求宣佈 15% 仍然有效，並根據{{s106}}追討賠償。", ref:"判詞第 22–31 段"},
 {who:"Rose", img:"m_daughter", text:"我哋係媽媽嘅仔女，佢一定會想俾我哋。我哋一直誠實行事，法院應該根據 s 105 免除責任。", ref:"判詞第 24–31、86–96 段", terms:["s105"]},
 {who:"法官", img:"c_judge", judge:1, text:"首先，賣屋本身唔係違規：冇證據顯示 Sue 會想保留間屋，而佢需要錢支付護理。問題在於賣屋之後啲錢去咗邊。", gain:"A7"},
 {multi:3, q:"揀 3 張證據，最能證明受權人違反責任。", img:"c_judge", pool:["A1","A2","A3","A4","A5","A6","A7"], right:["A4","A5","A1"], half:["A6"],
   fb:"法官認為：兩人將 $230,000 送俾自己（A4），唔係季節性禮物、金額亦唔合理（A5），違反{{s66}}同 s 88。呢啲禮物減少咗遺產，令 Len 按遺囑（A1）應得嘅部分受損。A6 支持延長時限。", ref:"判詞第 65–85 段"},
 {q:"法官准唔准受權人根據 s 105 免責？", img:"c_judge", opts:[
   {t:"准，佢哋係仔女，出於好意", fb:"法官唔係咁睇。"},
   {t:"唔准，佢哋冇誠實合理行事，而且自己得益", ok:1, fb:"啱！法官認為兩人冇誠實合理咁行事，而且從違規中得益，所以唔可以免責。", ref:"判詞第 89、91、96 段"},
   {t:"准一半", fb:"冇呢個做法。"}
 ]},

 {ch:"第四幕", title:"判決", sub:"2010 年 9 月 6 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"Len 嘅 15% 遺贈點樣處理？", short:"15%", opts:["因為賣咗屋而失效","有效，按售價計 15%"], answer:1, pts:10},
   {q:"已經過咗時限，法院准唔准 Len 追討？", short:"時限", opts:["唔准，過咗就冇得追","准，延長時限"], answer:1, pts:10}],
   slider:{label:"判 Len 得幾多（連利息）？", min:0, max:400000, step:5000, start:100000, answer:195370, near:20000, far:60000, ptsNear:20}}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The attorneys' gifts to themselves were not {{s88gift|permitted gifts}}. They breached their {{s66|duty of honesty and reasonable diligence}}, and they did not act honestly and reasonably, so no relief is available under {{s105|section 105}}.", zh:"受權人送俾自己嘅禮物並唔屬准許嘅禮物。佢哋違反咗誠實及合理勤勉嘅責任，亦冇誠實合理行事，所以唔可以根據第 105 條免責。"}, ref:"判詞第 65–96 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The applicant's gift was not adeemed. An {{extension}} is granted. There will be judgment for the applicant in the sum of $195,369.65, including {{interest}}, with {{indemnity|indemnity costs}} from 22 April 2010.", zh:"申請人嘅遺贈冇失效。批准延長時限。判申請人得 $195,369.65（包括利息），並由 2010 年 4 月 22 日起獲彌償基準訟費。"}, ref:"判詞第 34–56、102–129 段及命令"},
 {who:"May 姐", img:"c_mentor", text:"做受權人：分開戶口、保留所有收據、唔好將授權人啲錢俾自己。就算你覺得「將來都係我嘅」，法律上都唔係。"},
 {who:"May 姐", img:"c_mentor", text:"懷疑屋企長輩被受權人濫用財產：可以搵 Office of the Public Guardian，或者向 QCAT 申請。"},
 {end:1}
];
QCF.register({
  id:"c16", cat:"estate", title:"媽媽的老屋", tagline:"做受權人，可唔可以俾錢自己？",
  court:"Supreme Court", cite:"Moylan v Rickard [2010] QSC 327",
  citeFull:"Moylan v Rickard [2010] QSC 327（Supreme Court of Queensland，Peter Lyons J，2010 年 9 月 6 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qsc/2010/327",
  coverBg:"bg_queenslander",
  intro:"媽媽患認知障礙入住護老院，兩個仔女用授權書賣咗佢間屋，各自送咗十幾萬俾自己。媽媽過身後，繼父發現遺囑寫明有佢一份。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情取自判詞。",
    lessons:["{{epoa}}嘅受權人要遵守{{s66}}。",
      "{{s88gift}}好嚴：唔可以用授權人啲錢送大額禮物俾自己。",
      "受權人違規造成損失，要根據{{s106}}賠償。",
      "唔誠實或者自己得益，唔可以靠{{s105}}免責。",
      "遺贈係咪{{ademption}}，要睇遺囑點寫。"]}
});
})();
