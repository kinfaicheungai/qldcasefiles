/* Case 21 — "Mr T" v HSBC (AFCA determination, 2024) & ASIC v HSBC Bank Australia Ltd [2026] FCA 847 */
(function(){
const T = {
  spoofing:{en:"SMS spoofing",zh:"短訊偽冒",d:"騙徒偽造發送者名稱，令假短訊出現喺你同銀行嘅真短訊對話入面。"},
  impersonation:{en:"impersonation scam",zh:"冒充詐騙",d:"騙徒扮銀行、政府或者警察，製造緊急感，叫你提供資料或者轉錢。"},
  passcode:{en:"passcode",zh:"一次性密碼／驗證碼",d:"銀行用嚟確認身份或者授權交易嘅代碼。"},
  epayments:{en:"ePayments Code",zh:"《電子支付守則》",d:"規管電子交易責任嘅守則：未經授權交易，客戶一般唔使負責，除非客戶自願透露密碼等。"},
  unauthorised:{en:"unauthorised transaction",zh:"未經授權交易",d:"唔係由客戶本人進行、亦冇得到客戶同意嘅交易。"},
  voluntarily:{en:"voluntarily disclose",zh:"自願透露",d:"《電子支付守則》冇定義。AFCA 認為，如果騙徒嘅手段構成脅迫、影響自由意志，就唔算「自願」。"},
  afca:{en:"Australian Financial Complaints Authority (AFCA)",zh:"澳洲金融投訴局",d:"免費處理銀行、保險等金融投訴嘅機構。決定對金融機構有約束力；客戶唔接受仍然可以去法院。"},
  determination:{en:"determination",zh:"裁定",d:"AFCA 對投訴作出嘅正式決定。"},
  bankingcode:{en:"Banking Code of Practice",zh:"《銀行業守則》",d:"銀行承諾遵守嘅服務標準，包括點樣處理客戶投訴同協助。"},
  nonfinancial:{en:"non-financial loss",zh:"非財務損失",d:"例如壓力、不便。AFCA 可以為此判一筆補償。"},
  civilpenalty:{en:"civil penalty",zh:"民事罰款",d:"監管機構（例如 ASIC）向法院申請，對違法公司判處嘅罰款。"},
  efh:{en:"efficiently, honestly and fairly",zh:"有效率、誠實及公平",d:"金融服務牌照持有人嘅法定責任。"},
  remediation:{en:"remediation",zh:"補救賠償計劃",d:"公司主動向受影響客戶作出嘅賠償安排。"},
  asic:{en:"ASIC",zh:"澳洲證券及投資委員會",d:"監管銀行同金融服務嘅聯邦機構。"}
};
const E = {
  Z1:{t:"短訊出現喺真銀行對話",s:"for",side:"對客戶有利",d:"短訊喺手機入面同 HSBC 以前嘅真短訊排喺一齊，警告有一筆 $740 Amazon 付款。",ref:"Information Age 報道 AFCA 決定"},
  Z2:{t:"電話語音同真銀行一樣",s:"for",side:"對客戶有利",d:"打去短訊上嘅 1300 號碼，自動語音系統同 HSBC 真正嘅電話線一模一樣。",ref:"Information Age 報道 AFCA 決定"},
  Z3:{t:"畀咗兩個驗證碼",s:"against",side:"對客戶不利",d:"Mr T 喺電話中提供咗兩個六位數驗證碼。",ref:"Information Age 報道 AFCA 決定"},
  Z4:{t:"個 1300 號碼唔係銀行嘅",s:"against",side:"對客戶不利",d:"HSBC 指出，個號碼根本唔屬於銀行。",ref:"Information Age 報道 AFCA 決定"},
  Z5:{t:"知道佢個名、製造緊急感",s:"for",side:"對客戶有利",d:"騙徒知道 Mr T 嘅名字，令佢覺得要即刻行動，否則會損失金錢。",ref:"Bright Law 及 Information Age 報道"},
  Z6:{t:"$47,178.54 被轉走",s:"neutral",side:"背景",d:"一筆 $47,178.54 嘅交易喺佢嘅抵銷戶口出現。",ref:"Information Age 報道 AFCA 決定"},
  Z7:{t:"報失之後銀行處理唔達標",s:"for",side:"對客戶有利",d:"Mr T 通知銀行之後，銀行處理冇達到《銀行業守則》嘅標準。",ref:"Bright Law 報道 AFCA 決定"}
};
const S = [
 {ch:"第一幕", title:"一個短訊", sub:"2023 年 6 月", bg:"bg_scam"},
 {who:"May 姐", img:"c_mentor", text:"詐騙案越來越多，好多受害人係長者或者英文唔太好嘅人。今日睇一單銀行冒充詐騙：錢俾人呃咗，銀行使唔使賠？"},
 {who:"旁白", text:"2023 年 6 月，Mr T 收到一個短訊，出現喺佢同 HSBC 一直以嚟嘅短訊對話入面：有一筆 $740 嘅 Amazon 付款，如果唔係你，請致電 1300 號碼。", gain:"Z1", terms:["spoofing"]},
 {who:"Mr T", img:"z_victim", text:"我打過去，自動語音同平時打去銀行一模一樣。", gain:"Z2"},
 {who:"旁白", text:"「職員」知道佢個名，話要即刻保護佢個戶口，叫佢讀出收到嘅驗證碼。", gain:"Z5"},
 {who:"Mr T", img:"z_victim", text:"我讀咗兩個六位數驗證碼俾佢。", gain:"Z3", terms:["passcode"]},
 {who:"旁白", text:"之後，佢嘅抵銷戶口出現一筆 $47,178.54 嘅交易。", gain:"Z6"},
 {q:"呢類騙案叫咩？", img:"z_victim", opts:[
   {t:"冒充詐騙（impersonation scam）", ok:1, fb:"啱！騙徒扮銀行，製造緊急感，令受害人主動提供資料。", terms:["impersonation"]},
   {t:"投資詐騙", fb:"投資詐騙係用高回報引誘你投資。"},
   {t:"愛情詐騙", fb:"愛情詐騙係網上扮戀人。"}
 ]},

 {ch:"第二幕", title:"銀行的立場", sub:"投訴", bg:"bg_scam"},
 {who:"旁白", text:"Mr T 即刻通知銀行。不過，銀行之後嘅處理冇達到{{bankingcode}}嘅標準。", gain:"Z7"},
 {who:"銀行代表", img:"z_bank", text:"根據{{epayments}}，客戶如果{{voluntarily}}密碼，就要自己負責。你自己讀咗驗證碼出嚟。"},
 {who:"銀行代表", img:"z_bank", text:"而且嗰個 1300 號碼唔係我哋嘅。", gain:"Z4"},
 {q:"Mr T 唔同意銀行，佢可以去邊度投訴，又唔使俾錢？", img:"z_victim", opts:[
   {t:"直接入稟最高法院", fb:"可以，但好貴、好耐。"},
   {t:"澳洲金融投訴局（AFCA）", ok:1, fb:"啱！{{afca}}免費處理。決定對銀行有約束力，客戶唔接受仍然可以去法院。"},
   {t:"報警，警察會叫銀行賠", fb:"報警係處理刑事部分，唔會決定銀行使唔使賠。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"關鍵在一個字：「自願」。守則冇定義乜嘢叫自願。"},

 {court:"afca:tribunal", ch:"第三幕", title:"自願？", sub:"AFCA", bg:"bg_qcat"},
 {multi:3, q:"揀 3 張證據，最能支持「Mr T 唔係自願透露驗證碼」。", img:"l_member", pool:["Z1","Z2","Z3","Z4","Z5","Z6","Z7"], right:["Z1","Z2","Z5"], half:["Z7"],
   fb:"AFCA 認為：假短訊插入咗真銀行嘅對話（Z1），電話語音同真銀行一樣（Z2），騙徒知道佢個名、製造緊急感（Z5）。呢啲手段構成一定程度嘅脅迫，影響咗佢嘅自由意志。Z7 則係另外判非財務損失賠償嘅原因。", ref:"Bright Law 及 Information Age 報道"},
 {q:"銀行話「個號碼唔係我哋嘅」，AFCA 點睇？", img:"l_member", opts:[
   {t:"客戶應該自己核實號碼，所以要負責", fb:"AFCA 唔係咁睇。"},
   {t:"短訊出現喺銀行真對話入面，要求普通客戶識別假號碼唔合理", ok:1, fb:"啱！溝通渠道睇落就係銀行嘅，期望客戶認出假 1300 號碼並唔合理。", ref:"Information Age 報道 AFCA 決定"},
   {t:"號碼唔重要", fb:"號碼係銀行嘅主要論點之一，AFCA 有處理。"}
 ]},
 {predict:{img:"l_member", intro:"AFCA 準備作出裁定。輪到你估。", button:"宣佈裁定", items:[
   {q:"銀行使唔使賠？", short:"結果", opts:["唔使，客戶自己畀驗證碼","要賠：交易金額減 $150，加利息、非財務損失同律師費"], answer:1, pts:20},
   {q:"AFCA 點解讀「自願」？", short:"自願", opts:["講咗就算自願","騙徒嘅脅迫影響自由意志，就唔算自願"], answer:1, pts:10}]}},
 {who:"AFCA", img:"l_member", judge:1, ruling:{en:"The complainant did not {{voluntarily}} his passcodes. The scammer's tactics created a degree of coercion that overrode his free will. The transaction was an {{unauthorised}}.", zh:"投訴人並非自願透露密碼。騙徒嘅手段構成一定程度嘅脅迫，凌駕咗佢嘅自由意志。該交易屬未經授權交易。"}, ref:"Bright Law 及 Information Age 報道"},
 {who:"AFCA", img:"l_member", judge:1, ruling:{en:"The bank must refund $47,028.45, being the disputed transaction less the $150 limited customer liability, plus interest, $1,000 for {{nonfinancial}} and $5,000 towards legal costs.", zh:"銀行須退還 $47,028.45（即爭議交易金額減去客戶有限責任 $150），另加利息、$1,000 非財務損失補償，以及 $5,000 律師費。"}, ref:"Bright Law 報道 AFCA 決定"},

 {court:"fca:trial", ch:"第四幕", title:"後續", sub:"Federal Court・2026 年", bg:"bg_court"},
 {who:"旁白", text:"Mr T 唔係唯一一個。{{asic}}之後入稟聯邦法院，指 HSBC 冇{{efh}}提供服務。", ref:"[2026] FCA 847 第 1、56 段"},
 {who:"旁白", text:"HSBC 承認：2020 至 2024 年收到 1,022 宗未經授權交易報告，97% 至少有一項唔符合《電子支付守則》；73% 調查超過 21 日。", ref:"[2026] FCA 847 第 35、47–50 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"HSBC is ordered to pay a total {{civilpenalty}} of $35 million. The penalty is somewhat on the lower side of what is acceptable, but well within the range of appropriate penalties.", zh:"HSBC 須支付總額 3,500 萬元民事罰款。呢個罰款屬可接受範圍嘅較低一端，但仍然完全喺適當範圍之內。"}, ref:"[2026] FCA 847 第 108、114 段"},
 {who:"May 姐", img:"c_mentor", text:"到 2026 年 5 月，HSBC 已經透過{{remediation}}向客戶賠咗超過 2,790 萬元。", ref:"[2026] FCA 847 第 103 段"},
 {who:"May 姐", img:"c_mentor", text:"防騙三步：一、銀行唔會叫你讀出驗證碼；二、收到可疑短訊，掛線，自己搵銀行官方號碼打返去；三、被騙即刻通知銀行同報警，再搵 AFCA。唔好因為怕醜而唔講。"},
 {end:1}
];
QCF.register({
  id:"c21", cat:"scam", title:"假銀行短訊", tagline:"自己讀出驗證碼，銀行使唔使賠？",
  court:"AFCA → Federal Court", cite:"AFCA (Mr T v HSBC) 2024; ASIC v HSBC [2026] FCA 847",
  citeFull:"AFCA 裁定（Mr T v HSBC，2024 年報道）；Australian Securities and Investments Commission v HSBC Bank Australia Ltd [2026] FCA 847（Federal Court，Bennett J，2026 年 6 月 18 日）",
  url:"https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/2026/2026fca0847",
  coverBg:"bg_scam",
  intro:"一個睇落係銀行發嘅短訊，一通聽落同銀行一模一樣嘅電話，四萬七千蚊冇咗。銀行話你自己讀出驗證碼，所以唔賠。",
  terms:T, evidence:E, script:S,
  ending:{source:"AFCA 部分根據公開報道（Information Age、Bright Law）；聯邦法院部分根據判詞。AFCA 投訴人身份冇公開。",
    lessons:["{{impersonation}}常用{{spoofing}}，令假短訊出現喺真銀行對話入面。",
      "{{epayments}}：{{unauthorised}}客戶一般唔使負責，除非{{voluntarily}}密碼。",
      "被騙之後可以免費向{{afca}}投訴。",
      "銀行有責任處理報告；做得唔好可以被{{asic}}追究{{civilpenalty}}。",
      "銀行唔會叫你讀出驗證碼。掛線，自己打返官方號碼。"]}
});
})();
