/* Case 05 — Babstock Pty Ltd v Laurel Star Pty Ltd (No 5) [2024] QCA 3 */
(function(){
const T = {
  rentroll:{en:"rent roll",zh:"物業管理權（租賃管理名冊）",d:"地產代理代業主管理出租物業嘅業務，可以買賣。價值來自每個物業嘅管理費收入。"},
  ecr:{en:"entry condition report",zh:"入住狀況報告",d:"租約開始時記錄物業狀況嘅文件，要由租客同代理簽署（昆州租務法 s 65）。"},
  acl:{en:"Australian Consumer Law",zh:"《澳洲消費者法》",d:"全國適用。s 18 禁止喺商業活動中作出誤導或欺騙性行為。"},
  mdc:{en:"misleading or deceptive conduct",zh:"誤導或欺騙性行為",d:"ACL s 18。唔需要證明故意；但要索償，仲要證明依賴、因果關係同損失。"},
  dd:{en:"due diligence",zh:"盡職調查",d:"買方喺落實交易前，自行核實資料嘅程序。"},
  reliance:{en:"reliance",zh:"依賴",d:"買方係咪因為相信咗嗰個陳述先簽約。"},
  causation:{en:"causation",zh:"因果關係",d:"損失係咪由誤導行為造成。中間如果有其他因素，因果鏈可能被切斷。"},
  voidab:{en:"void ab initio",zh:"自始無效",d:"合約當作從來冇成立過。"},
  s237:{en:"ACL s 237 orders",zh:"補償令（s 237）",d:"法院可以為受誤導嘅一方作出補救命令，包括宣佈合約無效，但前提係有損失或者可能有損失。"},
  disclaimer:{en:"disclaimer",zh:"免責聲明",d:"例如「買家應自行核實資料」。法院會連同所有證據一齊考慮。"},
  counterclaim:{en:"counterclaim",zh:"反申索",d:"被告反過嚟向原告提出申索。"},
  guarantor:{en:"guarantor",zh:"擔保人",d:"承諾如果主要債務人唔履行，就由自己負責嘅人。"},
  termination:{en:"termination",zh:"終止合約",d:"一方宣佈合約結束。如果冇合法理由終止，本身可能構成違約。"}
};
const E = {
  B1:{t:"宣傳冊上嘅「100%」",s:"for",side:"對買家有利",d:"賣方中介嘅銷售冊寫：100% 現有入住狀況報告存檔；100% 由所有租客同職員簽妥。",ref:"判詞第 24 段"},
  B2:{t:"合約入面嘅補救條款",s:"against",side:"對買家不利",d:"盡職調查期內可以終止；可以指出文件唔合規嘅物業，要求賣方補救，補救唔到可以剔走；交收後仍然可以要求補文件，否則剔走並退款。",ref:"判詞第 39–40 段"},
  B3:{t:"盡職調查報告",s:"against",side:"對買家不利",d:"2017 年 12 月 8 日，買家自己請嘅代理報告：有幾個檔案喺水浸時唔見咗，其餘有簽或者有簡簽。",ref:"判詞第 50 段"},
  B4:{t:"冇追問就接受",s:"against",side:"對買家不利",d:"Al 明白有啲報告有問題，但冇再問。12 月 21 日提出六條問題，冇一條關報告事；當晚指示律師接受盡職調查。",ref:"判詞第 51–56 段"},
  B5:{t:"交收前一日終止",s:"against",side:"對買家不利",d:"交收一再延期。2018 年 5 月 10 日下晝，即係交收前一日，買家宣佈終止兩份合約。",ref:"判詞第 8 段"},
  B6:{t:"真實數字：13 / 148",s:"for",side:"對買家有利",d:"上訴庭點數：148 個物業之中，3 份報告唔見，10 份冇齊簽，共 13 份有問題。宣傳冊確實有誤導。",ref:"判詞第 26–29 段"}
};
const S = [
 {ch:"第一幕", title:"一本宣傳冊", sub:"一盤地產代理生意", bg:"bg_realestate"},
 {who:"旁白", text:"今次 May 姐介紹你去一間商業律師行實習兩星期。第一個檔案：一單買賣生意嘅官司。"},
 {who:"旁白", text:"2017 年 12 月 1 日，Al 同太太 Dot 透過家族信託公司，買入一盤地產代理生意。交易分兩份合約：生意本身 $5,000；{{rentroll}}大約 $820,000，涵蓋 148 個出租物業。", ref:"判詞第 6 段"},
 {who:"Al", img:"b_buyer", text:"我以前做過一盤生意，啲{{ecr}}一塌糊塗，搞到好多麻煩。所以文件唔係近乎完美，我唔會買。", ref:"判詞第 48 段"},
 {who:"Al", img:"b_buyer", text:"賣方中介本冊寫到明，100% 齊、100% 簽妥。", gain:"B1"},
 {q:"如果宣傳冊寫錯，買家最可能引用咩法律？", img:"b_buyer", opts:[
   {t:"Australian Consumer Law s 18：誤導或欺騙性行為", ok:1, fb:"啱！{{acl}} s 18 禁止喺商業活動中作出{{mdc}}。", terms:["acl","mdc"]},
   {t:"Succession Act 1981", fb:"呢條係遺產法例。"},
   {t:"租務法 s 65", fb:"呢條規定入住狀況報告點樣簽，但唔係買家向賣方索償嘅依據。"}
 ]},
 {who:"旁白", text:"合約本身都有保障買家嘅條款。", gain:"B2"},

 {ch:"第二幕", title:"盡職調查", sub:"2017 年 12 月", bg:"bg_realestate"},
 {who:"旁白", text:"2017 年 12 月 8 日，買家自己請嘅{{dd}}代理交報告：", quote:{en:"“there is a few files that were lost in the floods”", zh:"「有幾個檔案喺水浸嗰陣唔見咗」", src:"盡職調查報告，引於判詞第 50 段"}, gain:"B3"},
 {who:"Al", img:"b_buyer", text:"我明白有啲報告有問題，唔係個個都完美。", ref:"判詞第 51 段"},
 {who:"旁白", text:"Al 冇再問任何關於報告嘅問題。12 月 21 日，佢哋提出六條問題，冇一條關報告事。當晚 7:12，佢哋指示律師接受盡職調查。", gain:"B4"},
 {q:"如果你係買家律師，呢個時候最聰明嘅做法係？", img:"b_buyer", opts:[
   {t:"乜都唔理，照接受盡職調查", fb:"呢個正正係買家做嘅事，之後變成致命弱點。"},
   {t:"用合約機制：要求賣方列明有問題嘅物業，補救或者剔走", ok:1, fb:"啱！合約已經有條款處理文件唔合規嘅物業。", ref:"判詞第 39–40 段"},
   {t:"即刻入紙告賣方誤導", fb:"未有損失、合約仲有補救機制，太早。"}
 ]},
 {who:"旁白", text:"交收日一再延期。2018 年 4 月，Al 親自睇檔案；5 月 4 日，買家律師列出 35 項報告問題。", ref:"判詞第 8、59 段"},
 {who:"旁白", text:"2018 年 5 月 10 日下晝，即係交收前一日，買家宣佈{{termination}}兩份合約。賣方唔接受，堅持合約有效；5 月 18 日，賣方反過嚟終止租賃管理權合約。", gain:"B5", ref:"判詞第 8、21 段"},

 {ch:"第三幕", title:"一審", sub:"District Court of Queensland", bg:"bg_court"},
 {who:"旁白", text:"雙方鬧上區域法院。買家話被誤導，要求退返按金；賣方提出{{counterclaim}}，追討按金餘額同損失。Dot 仲係買方嘅{{guarantor}}。"},
 {q:"根據 ACL，要成功索償，淨係證明「宣傳冊寫錯」夠唔夠？", img:"c_judge", opts:[
   {t:"夠，寫錯就要賠", fb:"錯。誤導只係第一步。"},
   {t:"唔夠，仲要證明依賴、因果關係同損失", ok:1, fb:"啱！買方要證明佢{{reliance}}咗嗰個陳述先簽約、誤導同損失之間有{{causation}}，同埋有損失。", ref:"判詞第 34–78 段"},
   {t:"要證明賣方故意呃人", fb:"s 18 唔需要證明故意。"}
 ]},
 {who:"旁白", text:"（呢場官司之前已經上訴過一次，再發還區域法院重審。）重審法官數到最少 19 份報告簽得唔妥、2 份唔見。佢亦將中介本冊嘅{{disclaimer}}讀成唔影響賣方責任。", ref:"判詞第 26、31 段"},
 {q:"你估區域法院（重審）判邊個贏？", img:"c_judge", opts:[
   {t:"買家贏：合約自始無效，賣方要退按金", ok:1, fb:"啱！2023 年 2 月，一審法官宣佈兩份合約{{voidab}}，判賣方退還按金，並駁回賣方嘅反申索。", ref:"判詞第 15 段"},
   {t:"賣方贏：買家要賠償", fb:"一審唔係咁判。不過，故事未完。"},
   {t:"打和，各自承擔損失", fb:"一審有明確贏家。"}
 ]},
 {who:"旁白", text:"賣方上訴。呢場官司打咗好多年，上訴庭呢份判詞已經係同一宗案嘅第 5 份（No 5）。"},

 {ch:"第四幕", title:"上訴庭", sub:"Queensland Court of Appeal", bg:"bg_court"},
 {who:"法官", img:"c_judge", judge:1, text:"本庭重新點數：148 個物業之中，3 份報告唔見，10 份未有齊簽，共 13 份有問題。宣傳冊嘅陳述的確屬誤導。", gain:"B6"},
 {who:"法官", img:"c_judge", judge:1, text:"但問題係：買方公司係咪真係**依賴**咗呢個陳述先簽約？Dot 係公司唯一董事，而佢嘅證供——", quote:{en:"“extraordinarily unhelpful”", zh:"「極之冇幫助」", src:"Dalton JA 對買方董事證供嘅評價，判詞第 46 段"}},
 {multi:3, q:"揀 3 張證據，最能推翻買家嘅「依賴」同「因果關係」。", img:"c_judge", pool:["B1","B2","B3","B4","B5","B6"], right:["B2","B3","B4"], half:["B5"],
   fb:"上訴庭認為：買家自己嘅盡職調查報告已經提到有問題（B3）；Al 知道唔係完美，但冇追問就接受（B4），所以唔可以話依賴「100%」嗰句。合約本身容許剔走有問題嘅物業（B2），所以亦證明唔到有損失。B5 顯示買家嘅終止有問題，但唔係關於依賴。", ref:"判詞第 46–78 段"},
 {who:"法官", img:"c_judge", judge:1, text:"至於因果關係：", quote:{en:"“The receipt of the information from CRESQ broke the causal chain.”", zh:"「（買方）收到盡職調查代理嘅資料，已經切斷咗因果鏈。」", src:"判詞第 74 段"}},
 {who:"法官", img:"c_judge", judge:1, text:"合約已經容許剔走有問題嘅物業。冇證據顯示剔走 13 個物業會令交易唔划算。冇損失，就唔可以根據{{s237}}宣佈合約無效。", ref:"判詞第 76–78 段"},

 {ch:"第五幕", title:"判決", sub:"2024 年 1 月 25 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"上訴庭準備宣判。輪到你估。", button:"宣判", items:[
   {q:"上訴結果？", short:"上訴結果", opts:["維持一審，買家贏","推翻一審，賣方贏"], answer:1, pts:10}],
   slider:{label:"如果賣方贏，買家要賠幾多（連利息計到一審判決日）？", min:0, max:400000, step:5000, start:100000, answer:189228, near:20000, far:60000, ptsNear:20}}},
 {who:"法官", img:"c_judge", judge:1, text:"上訴得直。判賣方勝訴，買方須支付 **$189,227.65**，另加之後嘅利息，並負擔上訴同區域法院嘅訟費。", ref:"判詞第 22–23、80、82 段"},
 {who:"May 姐", img:"c_mentor", text:"拆開嚟睇：按金餘額 $41,500，加收入損失 $86,729.30，加管理權價值損失 $43,633.83，共 $171,863.13；計埋利息到 2023 年 2 月 10 日，就係 $189,227.65。", ref:"判詞第 22–23 段"},
 {who:"May 姐", img:"c_mentor", text:"Dot 係擔保人，冇另外提出論點，所以擔保部分跟住同一個結果。", ref:"判詞第 79 段"},
 {who:"May 姐", img:"c_mentor", text:"教訓：盡職調查見到嘅問題，就算你冇追問，法院都會當你知道。用盡合約機制，唔好等到交收前一日先發難。"},
 {end:1}
];
QCF.register({
  id:"c05", cat:"biz", title:"完美的宣傳冊", tagline:"寫錯咗，買家就一定贏？",
  court:"District Court → Court of Appeal", cite:"Babstock v Laurel Star (No 5) [2024] QCA 3",
  citeFull:"Babstock Pty Ltd & Anor v Laurel Star Pty Ltd & Anor (No 5) [2024] QCA 3（Queensland Court of Appeal，Dalton JA，Mullins P 及 Bond JA 同意，2024 年 1 月 25 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qca/2024/3",
  coverBg:"bg_realestate",
  intro:"一對夫婦用八十幾萬買入一盤地產代理生意，宣傳冊話文件「100% 齊全」。結果唔係。一審佢哋贏，但上訴庭反轉成個判決。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內個人名字已更改；公司及法官名稱照判詞。",
    lessons:["{{acl}} s 18 禁止{{mdc}}，唔需要證明故意。",
      "要索償，仲要證明{{reliance}}、{{causation}}同損失，缺一不可。",
      "{{dd}}發現嘅問題，就算冇追問，都可能切斷因果鏈。",
      "合約如果已經有補救機制（例如剔走有問題嘅物業），就好難話有損失。",
      "一審贏唔代表最終贏。輸咗上訴，可能要賠對方損失加埋兩級法院嘅訟費。"]}
});
})();
