/* Case 22 — Baharom v Master Butchers Co-operative Ltd [2024] FWC 2706 */
(function(){
const T = {
  redundancy:{en:"redundancy",zh:"裁員",d:"僱主唔再需要任何人做嗰份工，而終止僱用。"},
  genuine:{en:"genuine redundancy (s 389)",zh:"真正裁員",d:"要符合三樣：份工唔再需要任何人做；有遵守行業裁決或協議嘅諮詢責任；冇合理可行嘅調職機會。真正裁員唔可以申請不公平解僱。"},
  consultation:{en:"consultation obligation",zh:"諮詢責任",d:"行業裁決規定，重大變動（例如裁員）前，僱主要通知員工、提供資料、同佢討論點樣減少影響。"},
  redeploy:{en:"redeployment",zh:"調職",d:"將員工安排去機構內其他職位，代替裁員。"},
  bridging:{en:"Bridging Visa A",zh:"過渡簽證 A",d:"申請其他簽證期間持有嘅臨時簽證，有時附有工作權利。"},
  manufacturing:{en:"Manufacturing Award",zh:"製造業裁決",d:"規管製造業員工最低工資同條件嘅現代行業裁決，包括裁員諮詢條款。"},
  separation:{en:"separation certificate",zh:"離職證明",d:"僱主發出、說明員工點解離職嘅文件，會影響申請福利。"},
  contingency:{en:"contingency",zh:"不確定因素扣減",d:"計算賠償時，考慮將來可能發生嘅事（例如本來都會被真正裁員）而作出嘅調整。"},
  vulnerability:{en:"vulnerability",zh:"弱勢處境",d:"例如英文有限、簽證身份不穩定。委員會可以將佢視為「其他相關事項」考慮。"}
};
const E = {
  B1:{t:"英文有限、母語係馬來文",s:"for",side:"對員工有利",d:"馬來西亞人，持過渡簽證 A，英文程度一般，經傳譯作供。",ref:"判詞第 8、24–25 段"},
  B2:{t:"冇預告、全英文嘅會議",s:"for",side:"對員工有利",d:"2024 年 6 月 11 日突然被叫入會議，即場被告知終止僱用。全程英文，冇提供傳譯或支援人士。",ref:"判詞第 46–51 段"},
  B3:{t:"同時請咗新人",s:"for",side:"對員工有利",d:"2024 年 6 月初，公司請咗一個新嘅工廠工人，直到聆訊時仲做緊同一份工。",ref:"判詞第 39、101、111 段"},
  B4:{t:"真係蝕錢",s:"against",side:"對員工不利",d:"2024 年 1 至 4 月因國際牛油價格虧損，5 月仲有禽流感爆發。",ref:"判詞第 34–37 段"},
  B5:{t:"考唔到叉車牌",s:"against",side:"對員工不利",d:"佢兩次考叉車牌都唔合格，但公司照樣俾佢揸叉車將近兩年。",ref:"判詞第 30–32、108–109 段"},
  B6:{t:"每週 37.5 小時加大量加班",s:"for",side:"對員工有利",d:"臨時工，合約每週 37.5 小時，經常大量加班。佢曾經拒絕轉為長工。",ref:"判詞第 28–29 段"},
  B7:{t:"離職證明寫「解僱」",s:"for",side:"對員工有利",d:"離職證明寫嘅係「解僱」，唔係裁員；一星期通知期工資仲未俾。",ref:"判詞第 130–131 段"}
};
const S = [
 {ch:"第一幕", title:"叉車", sub:"南澳 Keith・肉類加工廠", bg:"bg_factory"},
 {who:"May 姐", img:"c_mentor", text:"呢單係南澳嘅案，但同你做傳譯好有關：一位英文有限嘅移民工人，喺一個全英文嘅會議入面被裁員。"},
 {who:"旁白", text:"Bakar 係馬來西亞人，持{{bridging}}，有工作權利。佢母語係馬來文，英文程度一般。", gain:"B1"},
 {who:"旁白", text:"2022 年 10 月起，佢喺一間肉類加工廠做臨時工廠工人，每週 37.5 小時，仲經常加班。", gain:"B6", terms:["manufacturing"]},
 {who:"旁白", text:"份工要求有叉車牌。Bakar 考咗兩次都唔合格，但公司照樣俾佢揸叉車將近兩年。", gain:"B5"},
 {who:"旁白", text:"2024 年頭，公司因為國際牛油價格虧損；5 月仲有禽流感爆發。", gain:"B4"},

 {ch:"第二幕", title:"一次會議", sub:"2024 年 6 月 11 日", bg:"bg_factory"},
 {who:"旁白", text:"Bakar 冇收到任何預告，突然被叫入辦公室。", gain:"B2"},
 {who:"人事經理", img:"b_hr", text:"因為業務原因，你嘅職位被裁。今日係你最後一日。"},
 {who:"Bakar", img:"b_worker", text:"點解係我？我做得好好地……"},
 {who:"旁白", text:"佢嘅反駁只換來簡短回應。會議全程英文，冇人問佢要唔要傳譯員或者支援人士，佢亦冇主動要求。", ref:"判詞第 51、117–118 段"},
 {q:"公司話係「裁員」。如果係{{genuine}}，Bakar 可唔可以申請不公平解僱？", img:"b_worker", opts:[
   {t:"可以，所有解僱都可以申請", fb:"真正裁員係法定例外。"},
   {t:"唔可以，真正裁員唔屬不公平解僱；所以關鍵係睇佢係咪「真正」裁員", ok:1, fb:"啱！所以委員會第一步係睇係咪符合 s 389 嘅三個條件。", ref:"判詞第 79、93 段"},
   {t:"要睇佢係咪澳洲公民", fb:"同公民身份無關。"}
 ]},
 {who:"旁白", text:"差唔多同一時間，公司請咗一個新嘅工廠工人。", gain:"B3"},

 {ch:"第三幕", title:"真正裁員？", sub:"Fair Work Commission", bg:"bg_qcat"},
 {who:"旁白", text:"Bakar 透過傳譯員作供。", ref:"判詞第 8 段", terms:["interpreter"]},
 {multi:2, q:"s 389 第一個條件係「份工唔再需要任何人做」。揀 2 張證據，最能推翻呢點同諮詢責任。", img:"l_member", pool:["B1","B2","B3","B4","B5","B6","B7"], right:["B3","B2"],
   fb:"同一時間請咗新人做工廠工人（B3），即係份工仍然需要人做。會議冇預告、即場終止、冇書面資料（B2），根本係「終止會議，唔係諮詢會議」，冇遵守裁決嘅{{consultation}}。", ref:"判詞第 84–89 段"},
 {q:"公司話揀佢係因為佢冇叉車牌。委員會點睇？", img:"l_member", opts:[
   {t:"好合理，冇牌就應該走", fb:"委員會只俾呢點有限份量。"},
   {t:"有一定份量，但公司容許佢無牌揸叉車將近兩年，所以份量有限", ok:1, fb:"啱！公司自己一直接受呢個情況，突然以此為理由，說服力有限。", ref:"判詞第 108–109 段"},
   {t:"完全無關", fb:"有一定關係。"}
 ]},
 {q:"Bakar 英文有限，委員會點樣考慮？", img:"l_member", opts:[
   {t:"唔考慮，人人平等", fb:"委員會可以考慮「其他相關事項」。"},
   {t:"佢嘅弱勢處境令解僱更傾向苛刻；公司連提供傳譯或支援人士呢啲簡單步驟都冇做", ok:1, fb:"啱！{{vulnerability}}被視為 s 387(h) 嘅其他相關事項。", ref:"判詞第 128–129 段"},
   {t:"英文唔好係佢自己問題", fb:"委員會唔係咁睇。"}
 ]},
 {who:"旁白", text:"另外，佢嘅{{separation}}寫「解僱」，唔係裁員；一星期通知期工資仲未俾。", gain:"B7"},

 {ch:"第四幕", title:"決定", sub:"2024 年 9 月 27 日", bg:"bg_qcat"},
 {predict:{img:"l_member", intro:"副主席準備作出決定。佢平均週薪大約 $1,522。輪到你估。", button:"宣佈決定",
   items:[{q:"係咪真正裁員？", short:"真正裁員", opts:["係，公司真係蝕錢","唔係，份工仍然需要人做、亦冇諮詢"], answer:1, pts:10}],
   slider:{label:"賠償（不計公積金）大約幾多？", min:0, max:40000, step:500, start:10000, answer:19786, near:2000, far:6000, ptsNear:20}}},
 {who:"副主席", img:"l_member", judge:1, ruling:{en:"The job was still required to be performed, and the award {{consultation}} was not complied with. This was not a case of {{genuine|genuine redundancy}}. It was a termination meeting, not a consultation meeting.", zh:"份工仍然需要有人做，而裁決嘅諮詢責任亦冇遵守。呢個唔係真正裁員。嗰個係終止會議，唔係諮詢會議。"}, ref:"判詞第 84–93 段"},
 {who:"副主席", img:"l_member", judge:1, ruling:{en:"The applicant's {{vulnerability}} as a migrant worker with limited English weighs towards a finding of harshness. The dismissal was unfair. Reinstatement is inappropriate. {{compensation|Compensation}} of $19,786 plus superannuation is ordered.", zh:"申請人作為英文有限嘅移民工人，其弱勢處境令解僱更傾向苛刻。解僱屬不公平。復職並不適當。命令賠償 $19,786 另加公積金。"}, ref:"判詞第 128–136、140–141、178 段"},
 {who:"May 姐", img:"c_mentor", text:"公司真係蝕錢，但都輸咗。因為佢一邊請新人、一邊話份工唔再需要；而且冇按裁決諮詢員工。"},
 {who:"May 姐", img:"c_mentor", text:"對傳譯員：有啲工作場合嘅會議，你嘅出現本身就係程序公平嘅一部分。對僱主：員工英文有限，重要會議應該提供傳譯，並預先俾書面資料。"},
 {end:1}
];
QCF.register({
  id:"c22", cat:"work", title:"全英文的會議", tagline:"英文有限嘅移民工人被裁員，係咪真正裁員？",
  court:"Fair Work Commission", cite:"Baharom v Master Butchers Co-operative [2024] FWC 2706",
  citeFull:"Baharom v Master Butchers Co-operative Ltd [2024] FWC 2706（Fair Work Commission，Deputy President Anderson，2024 年 9 月 27 日）",
  url:"https://fwc.gov.au/documents/decisionssigned/pdf/2024fwc2706.pdf",
  coverBg:"bg_factory",
  intro:"一位英文有限嘅馬來西亞工人，喺一個冇預告、全英文嘅會議入面被告知裁員。公司真係蝕緊錢，但同一時間請咗新人。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改；僱主名稱照判詞。",
    lessons:["{{genuine}}唔可以申請不公平解僱，但要符合三個條件。",
      "份工仍然需要人做（例如同時請新人），就唔係真正{{redundancy}}。",
      "行業裁決嘅{{consultation}}唔係形式：要預告、俾資料、真正討論。",
      "員工英文有限屬{{vulnerability}}，委員會會考慮；重要會議應提供傳譯。",
      "賠償會考慮{{contingency}}同減輕損失等因素。"]}
});
})();
