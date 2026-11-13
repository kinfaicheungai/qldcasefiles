/* Case 24 — Perera v Minister for Immigration and Multicultural Affairs [1999] FCA 507 */
(function(){
const T = {
  protectionvisa:{en:"protection visa",zh:"保護簽證",d:"俗稱難民簽證。申請人要證明返回原居國會受迫害。"},
  rrt:{en:"Refugee Review Tribunal",zh:"難民覆核審裁處",d:"當年覆核保護簽證拒簽嘅審裁處，後來併入 AAT，2024 年再由 ART 取代。"},
  naati:{en:"NAATI accreditation",zh:"NAATI 認證",d:"澳洲國家翻譯及傳譯認證機構嘅資格。當年有啲語言根本冇認證傳譯員。"},
  fairhearing:{en:"fair hearing",zh:"公平聆訊",d:"申請人要有真正機會陳述佢嘅情況。如果傳譯質素差到佢無法有效表達，就唔算公平聆訊。"},
  competent:{en:"competent interpretation",zh:"稱職的傳譯",d:"唔要求完美，但要準確、連貫、持續、中立。準確係核心。"},
  accuracy:{en:"accuracy",zh:"準確",d:"傳譯最核心嘅要求：忠實傳達原意。"},
  continuity:{en:"continuity",zh:"連續性",d:"所有內容都要傳譯，唔可以略過或者只講大意。"},
  impartiality:{en:"impartiality",zh:"中立",d:"傳譯員唔可以加入自己意見，亦唔可以代答或者解釋。"},
  credibilityfind:{en:"adverse credibility finding",zh:"不利的可信度裁斷",d:"審裁者認為申請人講嘅唔可信。如果係建基於錯誤傳譯，就唔可以成立。"},
  transcript:{en:"transcript",zh:"聆訊紀錄",d:"聆訊嘅逐字紀錄。可以用嚟顯示傳譯問題：答非所問、前後矛盾、傳譯員明顯困惑。"},
  jurisdictional:{en:"jurisdictional error",zh:"管轄權錯誤",d:"審裁處違反法律要求，令決定無效。法院可以撤銷並發還重審。"},
  disqualify:{en:"disqualify",zh:"迴避",d:"原本嘅審裁者退出，由另一位處理，避免先入為主。"}
};
const E = {
  P1:{t:"冇 NAATI 認證嘅僧伽羅語傳譯員",s:"for",side:"對申請人有利",d:"移民代理事後寫信：當時根本冇 NAATI 認證嘅僧伽羅語傳譯員，傳譯員多次混亂。",ref:"判詞第 8 段"},
  P2:{t:"答非所問",s:"for",side:"對申請人有利",d:"紀錄顯示好多答案同問題無關，有啲語無倫次；問一件事，答另一件事。",ref:"判詞第 14 段"},
  P3:{t:"傳譯員反問審裁員",s:"for",side:"對申請人有利",d:"傳譯員似乎唔明審裁員問乜，曾經問：「你係咪想要案件詳情？」",ref:"判詞第 14 段"},
  P4:{t:"政黨名稱前後唔同",s:"for",side:"對申請人有利",d:"傳譯員對同一個政黨同議員用咗唔同名稱，冇人解釋。",ref:"判詞第 15 段"},
  P5:{t:"兩日內投訴",s:"for",side:"對申請人有利",d:"申請人喺聆訊後兩日內已經投訴傳譯問題。",ref:"判詞第 43 段"},
  P6:{t:"審裁員：傳譯冇問題",s:"against",side:"對申請人不利",d:"審裁處喺決定入面話，唔接納傳譯員未能稱職傳譯。",ref:"判詞第 11 段"},
  P7:{t:"冇專家證明具體誤譯",s:"against",side:"對申請人不利",d:"法院面前冇專家證據指出邊一句具體譯錯。",ref:"判詞第 38 段"}
};
const S = [
 {ch:"第一幕", title:"失真的聲音", sub:"1996 年・墨爾本", bg:"bg_rrt"},
 {who:"May 姐", img:"c_mentor", text:"今日呢單，同你嘅工作關係最直接：傳譯質素差到一個地步，法院話成個聆訊唔公平。"},
 {who:"旁白", text:"Mr P 係斯里蘭卡人，自稱人權律師，支持一個反對派政黨，擔心返國會被殺。1996 年 9 月，佢持商務簽證到澳洲，之後申請{{protectionvisa}}。", ref:"判詞第 1–3 段"},
 {court:"rrt:review", who:"旁白", text:"申請被拒。1997 年 10 月，佢喺{{rrt}}聆訊，用僧伽羅語作供，有傳譯員同移民代理在場。", ref:"判詞第 8 段"},
 {who:"Mr P", img:"rr_applicant", text:"我講嘅嘢，好似去到審裁員度就變咗樣。"},
 {who:"旁白", text:"1997 年 11 月，審裁處維持拒簽。理由主要係：唔相信佢嘅講法，覺得佢誇大。", ref:"判詞第 8–11 段", terms:["credibilityfind"]},

 {ch:"第二幕", title:"紀錄", sub:"翻查聆訊錄音紀錄", bg:"bg_rrt"},
 {who:"旁白", text:"移民代理寫信投訴：當時根本冇{{naati}}嘅僧伽羅語傳譯員，傳譯員幾次都好混亂。", gain:"P1"},
 {who:"旁白", text:"申請人喺聆訊後兩日內已經投訴。", gain:"P5"},
 {who:"May 姐", img:"c_mentor", text:"我哋翻查{{transcript}}。你係傳譯員，睇吓有咩唔妥。"},
 {who:"旁白", text:"紀錄顯示：好多答案同問題無關，有啲語無倫次。審裁員問一件事，答案講另一件事。", gain:"P2"},
 {who:"旁白", text:"有一次，傳譯員似乎唔明審裁員問乜，反問：「你係咪想要案件詳情？」", gain:"P3", terms:["impartiality"]},
 {who:"旁白", text:"同一個政黨同議員，傳譯員用咗唔同嘅名稱，冇人解釋。紀錄仲有好多「（聽不清）」，審裁員有一次直接放棄追問。", gain:"P4"},
 {q:"作為傳譯員，你點睇「傳譯員反問審裁員」呢個做法？", img:"rr_interp", opts:[
   {t:"冇問題，傳譯員應該幫手澄清", fb:"傳譯員唔清楚時可以要求重複，但唔應該自己改變問題或者代答。"},
   {t:"顯示傳譯員本身唔明問題；應該請審裁員重複或澄清，而唔係自己詮釋", ok:1, fb:"啱！稱職傳譯要準確、連續、中立。傳譯員困惑，申請人收到嘅問題就已經變咗。", ref:"判詞第 14、28–29 段", terms:["continuity"]},
   {t:"傳譯員可以直接簡化問題", fb:"簡化就會失真。"}
 ]},

 {court:"fca:review", ch:"第三幕", title:"聯邦法院", sub:"Federal Court・Kenny J", bg:"bg_court"},
 {who:"法官", img:"c_judge", judge:1, text:"申請人唔識英文，審裁處就必須提供傳譯。傳譯唔係機械式工作，亦好少可以完美。", ref:"判詞第 20–21、25–26 段"},
 {who:"法官", img:"c_judge", judge:1, text:"本庭參考加拿大最高法院 R v Tran 嘅標準：連續性、精確、中立、稱職。當中{{accuracy}}最核心。", ref:"判詞第 28–29 段", terms:["competent"]},
 {who:"審裁處一方", text:"審裁員已經喺決定入面話，唔接納傳譯有問題。而且冇專家指出邊一句具體譯錯。", gain:"P6"},
 {who:"旁白", text:"（確實冇專家證據指出具體誤譯。）", gain:"P7"},
 {q:"冇專家證據，法院仲可唔可以判定傳譯唔稱職？", img:"c_judge", opts:[
   {t:"唔可以，一定要專家", fb:"法官唔係咁睇。"},
   {t:"可以，聆訊紀錄本身就可以顯示：答非所問、語無倫次、傳譯員明顯困惑", ok:1, fb:"啱！法院可以根據紀錄判斷。審裁處自己點評傳譯質素，亦唔係最終決定。", ref:"判詞第 37–38、41 段"},
   {t:"只有申請人作供先可以", fb:"唔係。"}
 ]},
 {multi:3, q:"揀 3 張證據，最能顯示傳譯唔稱職、影響咗重要事項。", img:"c_judge", pool:["P1","P2","P3","P4","P5","P6","P7"], right:["P2","P3","P4"], half:["P1","P5"],
   fb:"法官根據紀錄：答非所問同語無倫次（P2）、傳譯員明顯困惑（P3）、名稱前後不一（P4）。呢啲問題涉及重要事項，例如政黨嘅合法地位同政府嘅敵意。P1 同 P5 顯示投訴及時，亦有幫助。", ref:"判詞第 38–46 段"},

 {ch:"第四幕", title:"判決", sub:"1999 年 4 月 28 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"審裁處嘅決定點處理？", short:"結果", opts:["維持，傳譯唔完美好正常","撤銷，發還重新考慮"], answer:1, pts:20},
   {q:"建基於差劣傳譯嘅「唔可信」裁斷，可唔可以成立？", short:"可信度", opts:["可以","唔可以"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Interpretation is not a mere mechanical exercise, and perfection is rarely possible. But the {{transcript}} shows answers that were unresponsive and incoherent, and an interpreter who was evidently confused. The applicant was denied a {{fairhearing}}.", zh:"傳譯唔係單純機械式工作，亦好少可以完美。但聆訊紀錄顯示答案答非所問、語無倫次，傳譯員明顯困惑。申請人被剝奪咗公平聆訊。"}, ref:"判詞第 25–26、38–46 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Credibility findings drawn from poorly interpreted answers cannot be relied upon. The decision of the Tribunal is {{setaside|set aside}} and the matter is {{remit|remitted}}. The member who heard the matter should {{disqualify}} herself.", zh:"建基於差劣傳譯答案嘅可信度裁斷不能依賴。審裁處嘅決定撤銷，案件發還重審。原本嘅審裁員應該迴避。"}, ref:"判詞第 48–50 段及命令"},
 {who:"May 姐", img:"c_mentor", text:"呢單案之後，「傳譯質素」成為公平聆訊嘅一部分。法院冇要求完美，但要求準確、完整、中立。"},
 {who:"May 姐", img:"c_mentor", text:"俾你嘅三個專業提醒：一、聽唔清或者唔明，請對方重複，唔好估；二、專有名詞前後一致；三、唔好代答、唔好解釋，原文係乜就譯乜。"},
 {end:1}
];
QCF.register({
  id:"c24", cat:"visa", title:"失真的聲音", tagline:"傳譯出錯，聆訊仲公唔公平？",
  court:"Federal Court", cite:"Perera v Minister for Immigration [1999] FCA 507",
  citeFull:"Perera v Minister for Immigration and Multicultural Affairs [1999] FCA 507（Federal Court of Australia，Kenny J，1999 年 4 月 28 日）",
  url:"https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/1999/1999fca0507",
  coverBg:"bg_rrt",
  intro:"一位斯里蘭卡人喺難民覆核聆訊用僧伽羅語作供。審裁員話唔信佢。翻查紀錄，問題可能唔喺佢身上，而係喺傳譯。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情取自判詞。",
    lessons:["唔識英文嘅申請人有權得到傳譯；傳譯質素係{{fairhearing}}嘅一部分。",
      "{{competent}}唔要求完美，但要{{accuracy}}、{{continuity}}、{{impartiality}}。",
      "法院可以根據{{transcript}}判斷傳譯係咪稱職，唔一定要專家。",
      "建基於差劣傳譯嘅{{credibilityfind}}唔可以成立。",
      "傳譯員：唔明就請對方重複；專有名詞一致；唔代答、唔解釋。"]}
});
})();
