/* Case 20 — Stable v Workers' Compensation Regulator [2024] QIRC 274 */
(function(){
const T = {
  workcomp:{en:"workers' compensation",zh:"工傷賠償",d:"員工因工受傷，可以向工傷保險（昆州係 WorkCover Queensland）申請賠償，唔需要證明僱主疏忽。"},
  wcra:{en:"Workers' Compensation and Rehabilitation Act 2003 (Qld)",zh:"《2003 年工傷賠償及康復法》（昆州）",d:"昆州工傷制度嘅主要法例。"},
  regulator:{en:"Workers' Compensation Regulator",zh:"工傷賠償監管機構",d:"覆核 WorkCover 決定嘅機構。對覆核結果唔滿意，可以上訴到 QIRC。"},
  qirc:{en:"Queensland Industrial Relations Commission",zh:"昆士蘭勞資關係委員會",d:"處理昆州工傷上訴同州政府僱員勞資糾紛嘅機構。"},
  s32:{en:"injury (s 32)",zh:"工傷的定義",d:"因工作而產生嘅個人傷害，而工作係傷害嘅重要促成因素。心理傷害另有排除條款。"},
  sigfactor:{en:"significant contributing factor",zh:"重要促成因素",d:"工作要係傷害嘅重要成因，唔係只係其中一個好細嘅因素。"},
  psychinj:{en:"psychological injury",zh:"心理傷害",d:"例如適應障礙、抑鬱、焦慮。"},
  rma:{en:"reasonable management action taken in a reasonable way",zh:"以合理方式採取的合理管理行動",d:"s 32(5)：如果心理傷害係由合理嘅管理決定（例如分配工作、調職、紀律處分）引起，就唔屬於工傷。"},
  stressor:{en:"stressor",zh:"壓力源",d:"引致心理傷害嘅事件或情況。法院會逐一分辨邊啲係管理行動、邊啲唔係。"},
  adjustment:{en:"adjustment disorder",zh:"適應障礙",d:"對生活壓力反應過度而出現嘅情緒困擾，例如焦慮、抑鬱。"},
  brownedunn:{en:"rule in Browne v Dunn",zh:"Browne v Dunn 規則",d:"如果要反駁證人嘅證供，要喺盤問時俾佢機會回應；否則相關證據嘅份量可能減低。"}
};
const E = {
  X1:{t:"三個行為有挑戰嘅學生",s:"for",side:"對老師有利",d:"2021 年佢班入面有三個行為有挑戰嘅學生（A、B、C）。",ref:"判詞第 11、13 段"},
  X2:{t:"醫生：學校支援不足",s:"for",side:"對老師有利",d:"家庭醫生同精神科醫生都將傷害同學生行為、同佢覺得學校支援不足連繫起嚟。",ref:"判詞第 74–87 段"},
  X3:{t:"2014 年起有精神病史",s:"against",side:"對老師不利",d:"佢 2014 年起有精神病史，不過 2020 年尾狀況穩定。",ref:"判詞第 72、81–82、137 段"},
  X4:{t:"分班係平衡多方因素",s:"against",side:"對老師不利",d:"校長將三個學生分去佢班，係平衡咗好多競爭因素之後嘅決定。",ref:"判詞第 173–177 段"},
  X5:{t:"學校有提供支援",s:"against",side:"對老師不利",d:"學校有被動同主動嘅支援；資源有限，而且佢唔係唯一處理呢班學生嘅人。",ref:"判詞第 203–236 段"},
  X6:{t:"家長面談、學生覺得唔安全",s:"for",side:"對老師有利",d:"非管理嘅壓力源：學生行為、家長面談、計劃轉變、其他學生覺得唔安全。",ref:"判詞第 105–106、119–120 段"}
};
const S = [
 {ch:"第一幕", title:"一年級", sub:"2021 年・昆州一間州立小學", bg:"bg_classroom"},
 {who:"May 姐", img:"c_mentor", text:"工傷唔止係跌親、整親。今日講心理傷害，同一個好多人都唔知嘅例外：「合理管理行動」。"},
 {who:"旁白", text:"Lara 係一位經驗豐富嘅一年級老師。2021 年，佢班有三個行為非常有挑戰嘅學生。", gain:"X1"},
 {who:"Lara", img:"x_teacher", text:"佢哋會發脾氣、搞破壞，其他學生覺得唔安全，家長又不停投訴。我覺得學校冇俾足夠支援我。", gain:"X6"},
 {who:"旁白", text:"2021 年 3 月尾，Lara 被診斷患上{{adjustment}}，伴有焦慮同抑鬱情緒。4 月，佢申請{{workcomp}}。", ref:"判詞第 14、17、91 段"},
 {q:"喺昆州，心理傷害要算工傷，最基本要證明咩？", img:"x_teacher", opts:[
   {t:"要證明僱主有疏忽", fb:"工傷制度唔需要證明疏忽。"},
   {t:"傷害因工作而起，而且工作係重大促成因素", ok:1, fb:"啱！{{s32}}要求工作係{{sigfactor}}。", ref:"判詞第 2、4 段", terms:["wcra","psychinj"]},
   {t:"要有身體受傷", fb:"心理傷害都可以係工傷。"}
 ]},
 {who:"旁白", text:"工傷賠償被拒。覆核後，{{regulator}}維持拒絕。Lara 上訴到{{qirc}}。", ref:"判詞第 1 段"},

 {court:"qirc:appeal", ch:"第二幕", title:"壓力從哪裏來", sub:"QIRC・2022 年 10 月聆訊", bg:"bg_qcat"},
 {who:"精神科醫生", text:"佢嘅傷害同學生行為、同佢覺得學校冇支援佢有關。", gain:"X2"},
 {who:"監管機構律師", text:"佢 2014 年已經有精神病史。", gain:"X3"},
 {who:"旁白", text:"委員接納：佢 2020 年尾狀況穩定；佢有心理傷害，而傷害係因工作而起。", ref:"判詞第 6、81–82 段"},
 {q:"咁 Lara 係咪已經贏？", img:"l_member", opts:[
   {t:"係，因工作而起就一定賠", fb:"心理傷害仲有一個重要例外。"},
   {t:"未，仲要睇係咪由「合理管理行動」引起", ok:1, fb:"啱！s 32(5) 規定，如果心理傷害係由{{rma}}引起，就唔屬於工傷。", ref:"判詞第 5、21 段"},
   {t:"未，要證明校長故意", fb:"唔需要證明故意。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"委員會將每個{{stressor}}分兩類：管理行動（例如分班、支援安排）同非管理事項（例如學生行為、家長面談）。"},

 {ch:"第三幕", title:"分班與支援", sub:"逐一分析", bg:"bg_classroom"},
 {who:"校長", img:"x_principal", text:"分班要平衡好多因素：學生需要、老師經驗、班嘅組合。最後我決定將呢三個學生放喺 Lara 班。", gain:"X4"},
 {who:"校長", img:"x_principal", text:"我哋有提供支援：特殊教育同事、行為支援、應急安排。資源有限，但唔係得佢一個人處理。", gain:"X5"},
 {who:"旁白", text:"有部分證據冇喺盤問時俾 Lara 回應，委員只俾佢有限份量。", ref:"判詞第 196 段", terms:["brownedunn"]},
 {multi:2, q:"揀 2 張證據，最能支持「管理行動係合理而且以合理方式採取」。", img:"l_member", pool:["X1","X2","X3","X4","X5","X6"], right:["X4","X5"],
   fb:"委員認為：分班決定平衡咗好多競爭因素，屬合理（X4）；學校嘅支援喺資源有限下亦屬合理（X5）。", ref:"判詞第 173–177、203–236 段"},
 {q:"傷害有部分來自非管理壓力源（學生行為等），部分來自合理管理行動。結果會點？", img:"l_member", opts:[
   {t:"有非管理因素，就一定賠", fb:"委員唔係咁判。"},
   {t:"如果冇咗管理壓力源，申索本來會成功；但因為傷害部分由合理管理行動引起，被 s 32(5) 排除", ok:1, fb:"啱！委員明確講：如果冇管理壓力源，申索會被接納；但因為有合理管理行動嘅成分，就被排除。", ref:"判詞第 249–250 段"},
   {t:"按比例賠一半", fb:"工傷制度冇呢個做法。"}
 ]},

 {ch:"第四幕", title:"決定", sub:"2024 年 11 月 26 日", bg:"bg_qcat"},
 {predict:{img:"l_member", intro:"委員準備作出決定。輪到你估。", button:"宣佈決定", items:[
   {q:"Lara 嘅上訴結果？", short:"結果", opts:["上訴得直，獲工傷賠償","上訴駁回，維持拒絕"], answer:1, pts:20},
   {q:"委員有冇接納佢有因工作而起嘅心理傷害？", short:"心理傷害", opts:["有接納","冇接納，認為係舊病"], answer:0, pts:10}]}},
 {who:"委員", img:"l_member", judge:1, ruling:{en:"The appellant suffered a {{psychinj}} arising out of her employment. The decision to allocate the students to her class, and the support provided, were reasonable management action taken in a reasonable way.", zh:"上訴人受到因工作而起嘅心理傷害。將學生分到佢班嘅決定，以及學校提供嘅支援，都屬以合理方式採取嘅合理管理行動。"}, ref:"判詞第 6、173–177、236 段"},
 {who:"委員", img:"l_member", judge:1, ruling:{en:"Had the management stressors not existed, the claim would have been accepted. Because the injury arose in part from reasonable management action, it is excluded by section 32(5). The appeal is {{dismissed}}.", zh:"如果冇管理方面嘅壓力源，申索本來會被接納。但由於傷害部分由合理管理行動引起，故被第 32(5) 條排除。上訴駁回。"}, ref:"判詞第 249–251 段"},
 {who:"May 姐", img:"c_mentor", text:"最反直覺嘅地方：Lara 真係因工作受傷，醫生都話學校支援不足係主因。但委員認為學校嘅支援喺資源有限下已經合理，所以呢個「合理」反而令佢唔可以獲賠。"},
 {who:"May 姐", img:"c_mentor", text:"實用提醒：申請心理工傷時，要清楚列出所有壓力源，特別係非管理嘅部分（例如工作量、客人或學生行為、職場欺凌）。"},
 {end:1}
];
QCF.register({
  id:"c20", cat:"work", title:"一年級", tagline:"因工作受咗心理傷害，點解唔算工傷？",
  court:"QIRC", cite:"Stable v Workers' Compensation Regulator [2024] QIRC 274",
  citeFull:"Stable v Workers' Compensation Regulator [2024] QIRC 274（Queensland Industrial Relations Commission，Power IC，2024 年 11 月 26 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qirc/2024/274",
  coverBg:"bg_classroom",
  intro:"一位小學老師班上有三個行為好有挑戰嘅學生，佢因此患上適應障礙。醫生都話學校支援不足係主因。佢申請工傷賠償被拒，上訴會點？",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，學校名稱判詞已禁止公開。",
    lessons:["{{workcomp}}唔需要證明僱主疏忽，但要符合{{s32}}。",
      "{{psychinj}}都可以係工傷，工作要係{{sigfactor}}。",
      "由{{rma}}引起嘅心理傷害唔屬工傷，即使工作確實造成傷害。",
      "委員會逐一分析每個{{stressor}}，分開管理同非管理因素。",
      "上訴途徑：WorkCover → {{regulator}}覆核 → {{qirc}}。"]}
});
})();
