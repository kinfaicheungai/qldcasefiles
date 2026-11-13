/* Case 02 — Re Nichol; Nichol v Nichol & Anor [2017] QSC 220 */
(function(){
const T = {
  intestacy:{en:"intestacy",zh:"無遺囑死亡",d:"死者冇留低有效遺囑。財產會按法例公式分俾配偶、子女等近親。"},
  loa:{en:"letters of administration",zh:"遺產管理書",d:"冇遺囑（或遺囑冇指定執行人）時，法院委任某人做遺產管理人嘅文件。"},
  execution:{en:"formal execution requirements",zh:"遺囑簽立要求",d:"昆州 s 10：遺囑要書面、由立遺囑人簽名，兩名見證人同時在場見證並簽名。"},
  informal:{en:"informal will (s 18)",zh:"非正式遺囑",d:"唔符合簽立要求嘅文件，只要法院信納死者有意佢成為遺囑，法院可以根據 s 18 接納。"},
  document:{en:"document",zh:"文件",d:"法律上唔限於紙張，電子記錄（例如手機短訊）都可以係「文件」。"},
  capacity:{en:"testamentary capacity",zh:"立遺囑能力",d:"立遺囑時心智上明白自己做緊咩、財產有咩、邊個有申索。"},
  banks:{en:"Banks v Goodfellow test",zh:"Banks v Goodfellow 能力測試",d:"1870 年英國案例定下嘅四項：明白立遺囑嘅性質、知道財產範圍、知道可能有申索嘅人、能夠衡量佢哋。"},
  supreme:{en:"Supreme Court of Queensland",zh:"昆士蘭最高法院",d:"昆州最高層嘅審訊法院，處理遺囑認證同重大民事案件。"},
  beneficiary:{en:"beneficiary",zh:"受益人",d:"根據遺囑或法例會分到遺產嘅人。佢哋嘅證供法院會特別小心。"}
};
const E = {
  N1:{t:"短訊內容",s:"against",side:"對 Jo 不利",d:"屋、super 同所有嘢留俾細佬 Dave 同姪仔 Jay；骨灰撒喺後花園；Jo 只可以攞走自己嘅嘢；交代咗現金同銀行資料。",ref:"判詞第 13 段"},
  N2:{t:"結尾「My will」",s:"against",side:"對 Jo 不利",d:"短訊結尾有 Matt 名字縮寫加出生日期嘅代碼、日期 10/10/2016，同埋「My will」兩個字。",ref:"判詞第 14 段"},
  N3:{t:"短訊從未發出",s:"for",side:"對 Jo 有利",d:"鑑證專家確認短訊只係儲存咗做草稿，冇發出。手機入面冇其他相關文件。",ref:"判詞第 23–24 段"},
  N4:{t:"Matt 曾經抑鬱",s:"for",side:"對 Jo 有利",d:"離世前幾個月曾經企圖自殺，之後接受輔導。法院面前冇醫學證據講佢當時嘅精神狀態。",ref:"判詞第 36–37 段"},
  N5:{t:"夫妻關係反覆",s:"neutral",side:"中性",d:"兩人結婚約一年。Jo 最少離開過 Matt 三次，最後一次係佢離世前大約兩日。",ref:"判詞第 31–32 段"},
  N6:{t:"復活節講過嘅說話",s:"against",side:"對 Jo 不利",d:"Dave 作證：2016 年復活節，Matt 話想將屋、super 同所有嘢留俾 Dave 同 Jay，Jo 乜都冇。",ref:"判詞第 29 段"},
  N7:{t:"離世前嘅日常",s:"against",side:"對 Jo 不利",d:"離世前一個週末，Matt 同 Jo 一齊執花園、將書裝箱捐俾 Lifeline；佢仲叫 Jo 第二日幫手餵狗。冇證據顯示佢行為反常。",ref:"判詞第 2、52、54 段"}
};
const S = [
 {ch:"第一幕", title:"沒有遺囑？", sub:"布里斯本・社區法律中心", bg:"bg_office"},
 {who:"旁白", text:"2016 年 10 月，布里斯本。"},
 {who:"May 姐", img:"c_mentor", text:"今日嘅 client 啱啱失去丈夫。佢先生自殺離世，冇立正式遺囑。講嘢溫柔啲，慢慢嚟。"},
 {who:"Jo", img:"n_widow", text:"我叫 Jo。我同 Matt 結婚啱啱一年，一齊咗三年幾。佢……冇留低遺囑。"},
 {who:"Jo", img:"n_widow", text:"佢有個仔 Tony，兩父子冇乜來往。我想知道，間屋同佢嘅 super 會點處理？"},
 {q:"冇有效遺囑就過身，法律上叫做咩？", img:"n_widow", opts:[
   {t:"intestacy（無遺囑死亡）", ok:1, fb:"啱！財產會按法例公式分配。本案如果冇遺囑，遺產就會由 Jo（配偶）同 Tony（兒子）分。", ref:"判詞第 27 段", terms:["intestacy"]},
   {t:"probate（遺囑認證）", fb:"Probate 係法院確認一份遺囑有效嘅程序，前提係有遺囑。"},
   {t:"family provision（家庭供養）", fb:"呢個係覺得遺囑（或者無遺囑分配）冇足夠供養時嘅申請，唔係講「冇遺囑」本身。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"Jo 可以申請{{loa}}，由佢做遺產管理人，按法例分配。"},
 {who:"旁白", text:"幾日之後，Jo 再打電話嚟，聲音好激動。"},
 {who:"Jo", img:"n_widow", text:"Matt 嘅細佬 Dave 話，Matt 部手機入面有條**冇發出**嘅短訊，寫住「My will」。佢哋要法院當佢係遺囑！"},

 {ch:"第二幕", title:"手機裏的草稿", sub:"一條冇發出嘅短訊", bg:"bg_home"},
 {who:"旁白", text:"Matt 部手機喺佢身邊被發現。Jo 請朋友幫手打開，發現一條草稿短訊，收件人係細佬 Dave。", ref:"判詞第 12–13 段"},
 {who:"旁白", text:"短訊大意係：屋、super 同所有嘢留俾 Dave 同姪仔 Jay；骨灰撒喺後花園；Jo 只可以攞走佢自己嘅嘢。仲交代咗電視後面有現金，同埋銀行資料。", gain:"N1"},
 {who:"旁白", text:"短訊結尾有一串代碼：Matt 名字縮寫加出生日期，一個日期 10/10/2016。最後兩個字係——", quote:{en:"“My will”", zh:"「我的遺囑」", src:"短訊結尾，判詞第 14 段"}, gain:"N2"},
 {who:"旁白", text:"Dave 一方請咗鑑證專家檢查部手機：短訊儲存咗做草稿，**從來冇發出**。", gain:"N3"},
 {who:"May 姐", img:"c_mentor", text:"正式遺囑要符合{{execution}}：書面、立遺囑人簽名、兩個見證人同時在場見證兼簽名。條短訊一樣都冇。"},
 {q:"咁條短訊係咪一定無效？", img:"c_mentor", opts:[
   {t:"係，冇簽名、冇見證人就一定無效", fb:"以前可能係，但而家昆州法例有後備條文。"},
   {t:"唔一定，法院可以根據 s 18 豁免簽立要求", ok:1, fb:"啱！只要法院信納死者有意將份文件作為佢嘅遺囑，就可以接納佢做{{informal}}。", ref:"Succession Act 1981 (Qld) s 18；判詞第 6 段"},
   {t:"只有律師草擬嘅遺囑先有效", fb:"錯。自己寫嘅遺囑只要符合簽立要求都有效。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"法院通常問三條問題：一、有冇一份{{document}}？二、份文件係咪表達咗死者死後點分財產嘅意願？三、死者係咪有意佢成為自己嘅遺囑？", ref:"判詞第 7 段"},
 {q:"第一關：一條手機短訊，算唔算法律上嘅「文件」？", img:"c_mentor", opts:[
   {t:"唔算，一定要印出嚟、有紙本", fb:"錯。法律上嘅文件包括電子記錄。"},
   {t:"算，電子記錄都係文件", ok:1, fb:"啱！法官引用早前案例同《法律釋義法》嘅定義，認定短訊係電子文件。", ref:"判詞第 40–41 段"},
   {t:"要發送咗先算", fb:"發唔發送，同佢係咪「文件」無關。發送與否係第三關（意圖）先考慮。"}
 ]},
 {who:"Jo", img:"n_widow", text:"我承認條短訊講緊遺產。但佢冇發出去！即係佢未決定。而且佢幾個月前試過自殺，一直有抑鬱，佢嗰陣夠唔夠清醒都唔知。", gain:"N4", ref:"判詞第 16–18 段"},
 {who:"旁白", text:"Jo 都講咗自己同 Matt 嘅關係：佢最少離開過 Matt 三次，最後一次就係佢離世前兩日左右。", gain:"N5"},
 {who:"Dave", img:"n_brother", text:"今年復活節，Matt 已經同我講過：屋、super、所有嘢留俾我同 Jay，Jo 乜都冇。", gain:"N6"},
 {who:"May 姐", img:"c_mentor", text:"小心：Dave 同 Jay 係{{beneficiary}}，佢哋嘅證供法院會特別小心處理。", ref:"判詞第 66 段"},
 {who:"旁白", text:"另一方面，離世前一個週末，Matt 同 Jo 仲一齊執花園、將書裝箱捐俾 Lifeline。離世前一日，佢叫 Jo 第二日幫手餵狗。", gain:"N7"},
 {q:"關鍵問題：邊個要證明 Matt 有{{capacity}}？", img:"c_mentor", opts:[
   {t:"Jo 要證明 Matt 冇能力", fb:"如果係一份正式簽妥嘅遺囑，法院會推定立遺囑人有能力，咁就要反對嘅人證明。但呢度唔係。"},
   {t:"Dave 一方要證明 Matt 有能力", ok:1, fb:"啱！非正式遺囑冇「推定有能力」，舉證責任喺想用份文件嘅一方，即係 Dave 同 Jay。", ref:"判詞第 8、12 段"},
   {t:"法院自動假設有，唔使任何人證明", fb:"只有正式簽妥嘅遺囑先有呢個推定。"}
 ]},

 {court:"sc:trial", ch:"第三幕", title:"開庭", sub:"Supreme Court of Queensland", bg:"bg_court"},
 {who:"旁白", text:"2017 年 6 月，{{supreme}}。Jo 申請按無遺囑分配；Dave 同 Jay 申請宣佈短訊係遺囑。Matt 嘅兒子支持 Jo；Matt 嘅媽媽同另一個細佬支持 Dave。", ref:"判詞第 2–4 段"},
 {who:"法官", img:"c_judge", judge:1, text:"能力測試源自{{banks}}：明白自己做緊咩、知道財產大概有咩、知道邊啲人可能有申索，同埋識得衡量佢哋。呢個係程度問題。", ref:"判詞第 11 段"},
 {who:"法官", img:"c_judge", judge:1, text:"申請人提到死者嘅抑鬱同自殺。本庭要指出：自殺本身唔會令法院推定死者冇能力。", ref:"判詞第 51 段"},
 {multi:3, q:"揀 3 張證據，最能支持「Matt 寫短訊時有立遺囑能力」。", img:"c_judge", pool:["N1","N2","N3","N4","N5","N6","N7"], right:["N1","N2","N7"], half:["N6"],
   fb:"法官認為：冇證據顯示 Matt 離世前行為反常或者唔理性（N7）；短訊本身顯示佢明白份文件嘅意義（N2「My will」），知道自己有咩財產、考慮過邊個應該或唔應該得益（N1）。抑鬱同關係問題只反映佢唔開心，唔等於冇能力。N6 有用，但法官主要用佢支持「意圖」。", ref:"判詞第 52–57 段"},
 {q:"第三關：Matt 冇發出短訊，係咪代表佢唔想佢生效？", img:"c_judge", opts:[
   {t:"係，冇發出即係未決定", fb:"呢個係 Jo 嘅論點，但法官唔接納。"},
   {t:"唔係，冇發出同佢唔想驚動細佬嘅推論一致", ok:1, fb:"啱！法官認為：短訊喺佢諗住離世嘅時候寫，交代埋骨灰安排；部手機喺佢身邊；佢寫明「My will」。如果佢發出咗，Dave 可能會即刻嚟阻止佢。", ref:"判詞第 59–61 段"},
   {t:"法院唔會理死者嘅意圖", fb:"相反，意圖正正係 s 18 嘅核心。"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"至於點解冇留俾配偶同兒子：兩夫婦關係短暫、啱啱分開；兩父子亦疏遠。呢啲都解釋得到短訊嘅安排。", ref:"判詞第 63–64 段"},

 {ch:"第四幕", title:"判決", sub:"2017 年 10 月 9 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"呢條冇發出嘅短訊，算唔算 Matt 嘅遺囑？", short:"短訊算唔算遺囑", opts:["算，法院根據 s 18 接納","唔算，遺產按無遺囑分配俾 Jo 同 Tony"], answer:0, pts:20},
   {q:"Jo 輸咗嘅話，佢嘅訟費點算？", short:"Jo 嘅訟費", opts:["大部分由遺產支付","Jo 自己全數負擔","Jo 要連對方訟費一齊俾"], answer:0, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{satisfied}} the unsent text message is a {{document}} that embodies the deceased's testamentary intentions, that he had {{capacity}}, and that he intended it to operate as his will.", zh:"本庭信納：該條未發出嘅短訊係一份表達死者遺囑意願嘅文件；死者有立遺囑能力；而且佢有意令佢成為自己嘅遺囑。"}, ref:"判詞第 41、47、57、67 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{pursuant|Pursuant to}} section 18 of the {{succession}}, the requirements for {{execution|execution}} are {{dispensed}}, and the text message is admitted to {{probate|probate}} as the will of the deceased.", zh:"根據《繼承法》第 18 條，豁免簽立要求，該短訊作為死者嘅遺囑獲得認證。"}, ref:"判詞第 72 段，命令第 1–3 項"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The {{costs}} of all parties are to be paid out of the estate on an {{indemnity|indemnity basis}}, save that the applicant is to bear her own costs of the adjourned hearing.", zh:"各方訟費以彌償基準由遺產支付；不過押後聆訊嗰次，申請人須自行負擔訟費。"}, ref:"判詞第 69–72 段"},
 {who:"May 姐", img:"c_mentor", text:"對 Jo 嚟講好難受。但呢單案之後，全澳洲嘅律師都講同一句：**快啲立一份正式遺囑。**"},
 {who:"May 姐", img:"c_mentor", text:"仲有一點：Jo 係配偶，理論上仍然可以考慮提出{{fpa}}。判詞冇講佢之後有冇咁做，不過時限一樣係 9 個月。"},
 {end:1}
];
QCF.register({
  id:"c02", cat:"estate", title:"一條未發出的短訊", tagline:"手機草稿可以係遺囑？",
  court:"Supreme Court", cite:"Re Nichol; Nichol v Nichol [2017] QSC 220",
  citeFull:"Re Nichol; Nichol v Nichol & Anor [2017] QSC 220（Supreme Court of Queensland，Brown J，2017 年 10 月 9 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qsc/2017/220",
  coverBg:"bg_home",
  intro:"一位男士離世，冇立正式遺囑。佢太太以為會按法例分遺產，直至佢細佬喺手機入面搵到一條從未發出嘅短訊。",
  warning:"本案涉及自殺。如果你需要傾訴，可以致電 Lifeline 13 11 14（24 小時）。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情取自判詞。呢單係全國知名嘅「短訊遺囑」案例。",
    lessons:["正式遺囑要符合{{execution}}。唔符合嘅話，法院仍然可以根據 s 18 接納{{informal}}。",
      "法院問三條問題：有冇{{document}}、係咪講死後財產安排、死者係咪有意佢成為遺囑。",
      "非正式遺囑冇「推定有能力」，想用份文件嘅一方要證明死者有{{capacity}}。",
      "自殺或者抑鬱本身唔會令人自動被視為冇能力，法院睇實際證據。",
      "最好嘅保障係立一份正式遺囑，並且喺人生大事（結婚、分開）之後更新。"]}
});
})();
