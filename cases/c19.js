/* Case 19 — Cho v Hui & Anor [2023] QDC 155 */
(function(){
const T = {
  ctp:{en:"CTP insurance",zh:"強制第三者保險",d:"昆州每架登記車輛都有嘅保險，賠償交通意外中嘅人身傷害。被告嘅保險公司通常會一齊被起訴。"},
  liabilityadm:{en:"liability admitted",zh:"承認責任",d:"被告一方承認意外係佢哋嘅責任，案件只爭賠幾多。"},
  quantum:{en:"quantum",zh:"賠償金額",d:"法院評估應該賠幾多錢。"},
  generaldam:{en:"general damages",zh:"一般損害賠償",d:"賠償痛楚、受苦同生活質素下降，唔係實際金錢損失。"},
  isv:{en:"ISV (injury scale value)",zh:"傷害等級值",d:"昆州用 0 至 100 嘅分數評估傷勢嚴重程度，再按表計算一般損害賠償。"},
  pastecon:{en:"past economic loss",zh:"過往經濟損失",d:"意外到審訊期間少賺咗嘅收入。"},
  futureecon:{en:"future economic loss",zh:"將來經濟損失",d:"因為傷勢，將來賺錢能力下降嘅損失。"},
  special:{en:"special damages",zh:"特別損害賠償",d:"實際開支，例如醫藥費、物理治療費。"},
  globalaward:{en:"global award",zh:"整體估算賠償",d:"損失無法準確計算時，法院按整體情況估一個數。"},
  preexist:{en:"pre-existing condition",zh:"原有病況",d:"意外前已經存在嘅傷病。被告只需賠償意外造成或者加重嘅部分。"},
  aggravation:{en:"aggravation",zh:"加劇",d:"意外令原有病況變差。"},
  credibility2:{en:"credibility and reliability",zh:"誠信與可靠性",d:"Credibility 係講證人有冇講真話；reliability 係講佢記憶準唔準。一個人可以誠實但記錯。"},
  medrecords:{en:"clinical records",zh:"診療紀錄",d:"醫生同物理治療師嘅紀錄。寫得簡短、有時唔完整，法院唔會當佢係完美證據。"}
};
const E = {
  H1:{t:"被告承認責任",s:"neutral",side:"背景",d:"倒車嘅司機同佢嘅保險公司承認責任，案件只爭賠償金額。",ref:"判詞第 1 段"},
  H2:{t:"凹陷嘅車尾",s:"for",side:"對原告有利",d:"相片顯示原告架車尾板凹陷；對方架 Hilux 只係保險槓有刮痕。對方司機估原告車速 30 至 40 公里。",ref:"判詞第 13、15、17 段"},
  H3:{t:"2018 年已有頸患",s:"against",side:"對原告不利",d:"意外前，原告已經有頸痛病史，2018 年有 C5/6 椎間盤突出。",ref:"判詞第 19–23 段"},
  H4:{t:"十日後已經投訴腰痛",s:"for",side:"對原告有利",d:"被告醫學專家話原告意外後六星期先投訴腰痛；但紀錄顯示，第十日已經同物理治療師講過。",ref:"判詞第 49 段"},
  H5:{t:"前後講法唔一致",s:"against",side:"對原告不利",d:"被告指原告對意外經過同之後嘅記憶前後唔一致，又質疑佢講自己嘅康樂活動。",ref:"判詞第 9–11 段"},
  H6:{t:"經傳譯作供",s:"neutral",side:"中性",d:"原告母語係韓文，透過傳譯員作供。",ref:"判詞第 2、6 段"},
  H7:{t:"意外後收入反而上升",s:"against",side:"對原告不利",d:"原告意外後嘅網約車收入上升；佢同時開始做地產經紀。",ref:"判詞第 69–76 段"}
};
const S = [
 {ch:"第一幕", title:"倒車", sub:"2020 年 11 月・布里斯本 Milton", bg:"bg_road"},
 {who:"May 姐", img:"c_mentor", text:"呢單同你份工好有關：原告係韓國人，經傳譯作供。對方保險公司嘅策略，就係話佢「講嘢前後唔一」。"},
 {who:"旁白", text:"2020 年 11 月 20 日，52 歲嘅 Park 先生做網約車司機，車上有一位乘客。佢由 Milton Road 轉入一條橫街，望住手機導航。", ref:"判詞第 13–14 段"},
 {who:"旁白", text:"一架 Hilux 由斜位泊車位倒車出嚟，撞中佢架 Camry 嘅車尾。", gain:"H2"},
 {who:"Park", img:"p_cho", text:"我條頸、膊頭同腰都痛，仲有頭痛。架車要修理，我三四個星期唔可以開工。", ref:"判詞第 5、77 段"},
 {q:"昆州交通意外受傷，通常向邊個索償？", img:"p_cho", opts:[
   {t:"自己嘅汽車保險", fb:"自己嘅車險通常賠車損，人身傷害主要由對方嘅強制保險負責。"},
   {t:"肇事車輛嘅強制第三者保險（CTP）", ok:1, fb:"啱！{{ctp}}負責賠償人身傷害。本案被告司機同佢嘅保險公司一齊被起訴。", ref:"判詞封面"},
   {t:"政府", fb:"唔係。"}
 ]},
 {who:"旁白", text:"被告一方{{liabilityadm}}。成單案只爭一件事：{{quantum}}。", gain:"H1"},
 {who:"旁白", text:"Park 先生追討 $263,359。保險公司話只值 $5,274.89。", ref:"判詞第 4 段"},

 {ch:"第二幕", title:"保險公司的攻勢", sub:"District Court・布里斯本", bg:"bg_court"},
 {who:"保險公司大律師", img:"p_barrister", text:"當時架車只係行緊時速五至十公里，咁嘅碰撞唔會令人受傷。", ref:"判詞第 17 段"},
 {who:"保險公司大律師", img:"p_barrister", text:"原告對意外經過同之後嘅記憶前後唔一致。佢講自己嘅康樂活動，同醫療紀錄都唔夾。", gain:"H5"},
 {who:"旁白", text:"Park 先生嘅母語係韓文，全程透過{{interpreter}}作供。", gain:"H6"},
 {q:"證人經傳譯作供、有啲細節講得唔一致，法官應該點睇？", img:"c_judge", opts:[
   {t:"即係講大話，證供唔可信", fb:"唔可以咁快下結論。"},
   {t:"要分清「誠實」同「記得準唔準」；唔一致唔等於講大話", ok:1, fb:"啱！法官要分開{{credibility2}}。法官仲指出，所有證人都冇完美記憶。", ref:"判詞第 6–9 段"},
   {t:"經傳譯嘅證供冇份量", fb:"錯。經傳譯作供同用英文作供一樣有效。"}
 ]},
 {who:"保險公司大律師", img:"p_barrister", text:"而且佢 2018 年已經有頸患。佢而家嘅問題係舊患，唔關意外事。", gain:"H3", terms:["preexist"]},
 {who:"保險公司大律師", img:"p_barrister", text:"佢意外後收入仲上升咗，邊度有經濟損失？", gain:"H7"},

 {ch:"第三幕", title:"紀錄裏的細節", sub:"醫學證據", bg:"bg_court"},
 {who:"旁白", text:"被告嘅醫學專家報告寫：原告意外後大約六星期先第一次投訴腰痛，所以同意外冇關。", ref:"判詞第 49 段"},
 {q:"如果你係原告律師，最應該做咩？", img:"p_cho", opts:[
   {t:"接受專家意見，放棄腰傷申索", fb:"太早放棄。"},
   {t:"翻查所有診療紀錄，睇吓第一次投訴腰痛係幾時", ok:1, fb:"啱！紀錄顯示，第十日已經同物理治療師講過腰痛。專家嘅前提錯咗。", ref:"判詞第 49 段", terms:["medrecords"]},
   {t:"要求換法官", fb:"冇理由。"}
 ]},
 {who:"旁白", text:"翻查紀錄：意外後第十日，Park 先生已經同物理治療師講過腰痛。", gain:"H4"},
 {multi:3, q:"揀 3 張證據，最能支持「腰傷係意外造成」同埋「原告可信」。", img:"c_judge", pool:["H1","H2","H3","H4","H5","H6","H7"], right:["H2","H4","H6"], half:["H1"],
   fb:"法官認為：車速唔係只有五至十公里，車尾凹陷、對方司機估三四十公里（H2），足以造成腰傷；第十日已經投訴腰痛（H4），時間上有足夠關連；經傳譯作供（H6）同記憶唔完美唔代表唔誠實。", ref:"判詞第 6–9、17、48–53 段"},

 {ch:"第四幕", title:"判決", sub:"2023 年 9 月 13 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"原告追討 $263,359，保險公司話 $5,274.89。輪到你估。", button:"宣判",
   items:[{q:"法官點睇 Park 先生嘅誠信？", short:"誠信", opts:["誠實、直接，記憶唔完美","閃爍其詞，唔可信"], answer:0, pts:10}],
   slider:{label:"總賠償大約幾多？", min:0, max:270000, step:2500, start:100000, answer:55505, near:10000, far:30000, ptsNear:20}}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"I found the plaintiff to be an honest and forthright witness. His first language is Korean. It is unsurprising that none of the witnesses had perfect recollections of the accident.", zh:"本庭認為原告係誠實、直接嘅證人。佢嘅母語係韓文。所有證人對意外都冇完美記憶，呢點並唔令人意外。"}, ref:"判詞第 6–8 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The accident caused a temporary {{aggravation}} of his neck condition and a lumbar injury with ongoing symptoms. Applying an ISV of 4, {{generaldam}} are $6,480. Future earning capacity is assessed as a {{globalaward}} of $35,000. There will be judgment for the plaintiff in the sum of $55,505.", zh:"意外令佢頸部病況暫時加劇，並造成腰傷，症狀持續。按傷害等級值 4，一般損害賠償 $6,480。將來賺錢能力損失以整體估算為 $35,000。判原告得 $55,505。"}, ref:"判詞第 32、52–53、63–65、101、105 段"},
 {who:"May 姐", img:"c_mentor", text:"兩邊都冇完全贏：保險公司話只值五千，結果要賠五萬幾；原告追二十六萬，只攞到五萬幾。法院逐項計：{{generaldam}}、{{pastecon}}、{{futureecon}}、{{special}}。"},
 {who:"May 姐", img:"c_mentor", text:"對傳譯員嘅提醒：你準確傳達證人嘅原話，包括佢嘅猶豫同唔肯定，比「修飾到通順」更重要。法官係根據你嘅傳譯去判斷佢係咪誠實。"},
 {end:1}
];
QCF.register({
  id:"c19", cat:"injury", title:"倒車", tagline:"經傳譯作供，保險公司話你講嘢唔一致",
  court:"District Court", cite:"Cho v Hui [2023] QDC 155",
  citeFull:"Cho v Hui & Anor [2023] QDC 155（District Court of Queensland，Rosengren DCJ，2023 年 9 月 13 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qdc/2023/155",
  coverBg:"bg_road",
  intro:"一位韓國籍網約車司機喺布里斯本被倒車撞到。對方承認責任，但保險公司話佢傷得好輕、講嘢前後唔一。佢經傳譯作供，法官點睇？",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情同數字取自判詞。",
    lessons:["交通意外人身傷害向肇事車輛嘅{{ctp}}索償；{{liabilityadm}}之後只爭{{quantum}}。",
      "賠償逐項計：{{generaldam}}（用{{isv}}）、{{pastecon}}、{{futureecon}}、{{special}}。",
      "有{{preexist}}都可以索償，但只賠意外造成嘅{{aggravation}}。",
      "{{credibility2}}要分開睇；經{{interpreter}}作供唔會令證人較唔可信。",
      "仔細查閱{{medrecords}}，可以推翻專家報告嘅錯誤前提。"]}
});
})();
