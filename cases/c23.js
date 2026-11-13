/* Case 23 — Commercial Bank of Australia Ltd v Amadio (1983) 151 CLR 447; [1983] HCA 14 */
(function(){
const T = {
  unconsdealing:{en:"unconscionable dealing",zh:"不合良心的交易",d:"一方處於特殊不利處境，另一方知道（或應該知道）而加以利用。法院可以撤銷交易。"},
  specialdisadv:{en:"special disadvantage",zh:"特殊不利處境",d:"例如年老、英文有限、缺乏教育、依賴他人，令佢冇能力保護自己利益。"},
  wilful:{en:"wilful ignorance",zh:"故意視而不見",d:"明明應該知道，卻刻意唔去了解。法律上同「知道」有同樣後果。"},
  improvident:{en:"improvident transaction",zh:"不智的交易",d:"對一方明顯不利、唔划算嘅交易。"},
  misrep:{en:"misrepresentation",zh:"失實陳述",d:"講咗唔真實嘅事實，令對方作出決定。"},
  nondisclosure:{en:"non-disclosure",zh:"未有披露",d:"有責任講而冇講。本案銀行冇講出佢同兒子公司之間嘅特殊安排。"},
  onusshift:{en:"onus shifts",zh:"舉證責任轉移",d:"證明咗特殊不利處境同對方知情之後，就輪到強勢一方證明交易公平、公正、合理。"},
  mortgage:{en:"mortgage",zh:"按揭",d:"用物業作抵押，借款人還唔到錢，貸方可以賣物業。"},
  liquidation:{en:"liquidation",zh:"清盤",d:"公司無力償債，資產被變賣分配俾債權人。"}
};
const E = {
  M1:{t:"76 歲同 71 歲",s:"for",side:"對父母有利",d:"簽約時父親 76 歲、母親 71 歲。",ref:"判決事實部分"},
  M2:{t:"英文有限、教育程度低",s:"for",side:"對父母有利",d:"意大利移民，喺澳洲住咗四十幾年，但教育程度低，英文有限；母親作供要傳譯。",ref:"判決事實部分"},
  M3:{t:"兒子話：五萬、六個月",s:"for",side:"對父母有利",d:"兒子話擔保只係大約 $50,000、為期大約六個月。兩樣都唔真。",ref:"判決事實部分"},
  M4:{t:"銀行知道公司困難",s:"for",side:"對父母有利",d:"銀行經理知道兒子公司資不抵債，仲同兒子安排選擇性退票，令公司可以繼續運作。",ref:"判決事實部分"},
  M5:{t:"冇解釋，假設兒子講咗",s:"for",side:"對父母有利",d:"經理喺佢哋屋企拎住文件俾佢哋簽，冇解釋內容，以為兒子已經解釋咗。",ref:"判決事實部分"},
  M6:{t:"經理話冇六個月限期",s:"against",side:"對父母不利",d:"父親提到「六個月」，經理指出文件冇呢個限期。",ref:"判決事實部分"},
  M7:{t:"父親做過土地買賣",s:"against",side:"對父母不利",d:"父親以前係菜農，亦做過土地買賣，通常由兒子幫手。",ref:"判決事實部分"}
};
const S = [
 {ch:"第一幕", title:"兒子的請求", sub:"1977 年・阿德萊德", bg:"bg_kitchen70"},
 {who:"May 姐", img:"c_mentor", text:"呢單係全澳洲最出名嘅合約法案例之一，主角係一對英文有限嘅意大利移民老夫婦。做傳譯嘅你，會明白佢哋嘅處境。"},
 {who:"旁白", text:"Giovanni 同 Rosa 由意大利移民到澳洲四十幾年。Giovanni 以前係菜農，亦做過土地買賣，通常由兒子幫手。", gain:"M7"},
 {who:"旁白", text:"兩老教育程度低，英文有限。Rosa 喺法庭作供時要用傳譯。", gain:"M2"},
 {who:"旁白", text:"兒子 Vito 做地產發展，生活奢華，睇落好成功。其實佢間公司早已資不抵債，靠銀行經理同佢安排「選擇性退票」先撐得住。", gain:"M4"},
 {who:"旁白", text:"銀行話：如果父母做擔保，就可以將公司透支額提高到 $270,000。"},
 {who:"Vito", img:"am_son", text:"爸、媽，幫我簽份擔保啦。只係五萬蚊左右，六個月就得。", gain:"M3"},

 {ch:"第二幕", title:"廚房裏的簽名", sub:"1977 年 3 月 25 日", bg:"bg_kitchen70"},
 {who:"旁白", text:"當日，銀行經理親自上門，帶埋擔保書同按揭文件，喺廚房枱度俾兩老簽。", gain:"M5", terms:["mortgage"]},
 {who:"Giovanni", img:"am_father", text:"呢個係六個月嘅啫，係咪？"},
 {who:"銀行經理", img:"am_manager", text:"文件冇寫六個月。", gain:"M6"},
 {who:"旁白", text:"經理冇再講金額。兩老冇睇文件，經理亦冇解釋。文件其實寫明：公司而家同將來欠銀行嘅所有錢，兩老都要負責，冇上限，冇限期。", ref:"判決事實部分"},
 {who:"旁白", text:"兩老簽咗名，當時年紀分別係 76 歲同 71 歲。", gain:"M1"},
 {q:"兩老以為擔保只係五萬、六個月。呢個錯誤印象係邊個造成？", img:"am_father", opts:[
   {t:"銀行經理", fb:"經理冇講五萬同六個月，反而指出冇六個月限期。"},
   {t:"兒子", ok:1, fb:"啱！{{misrep}}係兒子講嘅。一審法官就係因為咁，認為銀行唔使負責。", ref:"判決事實部分"},
   {t:"冇人，係兩老自己估", fb:"兒子確實咁講過。"}
 ]},

 {ch:"第三幕", title:"倒閉", sub:"清盤之後", bg:"bg_bank"},
 {who:"旁白", text:"簽名後幾日，銀行兌現支票，令透支由 $189,000 升到超過 $270,000。之後公司{{liquidation}}，兒子破產。", ref:"判決事實部分"},
 {who:"旁白", text:"銀行向兩老追討，準備賣佢哋用嚟抵押嘅物業，並反申索 $239,830.85。", ref:"判決事實部分"},
 {court:"sasc:trial", q:"一審法官點判？", img:"c_judge", opts:[
   {t:"兩老贏", fb:"一審唔係咁判。"},
   {t:"銀行贏：交易係普通交易、冇不當影響，失實陳述係兒子講，唔關銀行事", ok:1, fb:"啱！一審判兩老要還錢。南澳上訴庭之後推翻，銀行再上訴到高等法院。", ref:"判決事實部分"},
   {t:"各負一半", fb:"一審冇咁判。"}
 ]},
 {court:"hca:final", who:"May 姐", img:"c_mentor", text:"高等法院關心嘅問題：銀行經理有冇利用兩老嘅弱勢？"},
 {multi:3, q:"揀 3 張證據，最能證明兩老處於「特殊不利處境」而銀行知情。", img:"c_judge", pool:["M1","M2","M3","M4","M5","M6","M7"], right:["M1","M2","M5"], half:["M4"],
   fb:"Mason J 同 Deane J 認為：兩老年老（M1）、英文有限同缺乏教育（M2），而且依賴兒子；經理親自上門，冇解釋就叫佢哋簽（M5），佢知道或應該知道佢哋嘅弱勢。經理亦知道公司困難（M4），令交易對兩老明顯不利。", ref:"Mason J、Deane J"},

 {ch:"第四幕", title:"判決", sub:"1983 年 5 月 12 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"兩老要唔要履行擔保同按揭？", short:"結果", opts:["要，簽咗名就要負責","唔使，銀行嘅做法屬不合良心交易"], answer:1, pts:20},
   {q:"高等法院有冇全體一致？", short:"票數", opts:["全體一致","多數決，有一位法官異議"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The respondents were under a {{specialdisadv}}: their age, their limited command of written English, and their reliance on their son. The bank's manager knew, or ought to have known, of it. {{wilful|Wilful ignorance}} is not to be distinguished from knowledge.", zh:"答辯人處於特殊不利處境：年紀大、書面英文能力有限，並且依賴兒子。銀行經理知道或應該知道。故意視而不見，同知道並無分別。"}, ref:"Mason J"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Once that disability was evident, the {{onusshift|onus shifted}} to the bank to show that the transaction was fair, just and reasonable. It has not done so. The appeal is {{dismissed}}, and the guarantee and mortgage cannot be enforced.", zh:"弱勢一經顯而易見，舉證責任就轉移到銀行，要證明交易公平、公正、合理。銀行未能做到。上訴駁回，擔保同按揭不能執行。"}, ref:"Deane J；判決結果"},
 {who:"May 姐", img:"c_mentor", text:"Dawson J 寫異議：佢認為銀行冇責任披露公司財務、冇失實陳述、亦冇不公平利用兩老。"},
 {who:"May 姐", img:"c_mentor", text:"Amadio 之後，「不合良心行為」寫入咗《澳洲消費者法》。銀行同長者、英文有限人士交易時，而家一般都要確保佢哋明白、最好有獨立意見同傳譯。", terms:["independent"]},
 {end:1}
];
QCF.register({
  id:"c23", cat:"classic", title:"廚房裏的簽名", tagline:"英文有限嘅老夫婦幫個仔擔保，一定要還？",
  court:"High Court", cite:"Commercial Bank of Australia v Amadio (1983) 151 CLR 447",
  citeFull:"Commercial Bank of Australia Ltd v Amadio (1983) 151 CLR 447；[1983] HCA 14（High Court of Australia，Gibbs CJ, Mason, Wilson, Deane JJ；Dawson J 異議，1983 年 5 月 12 日）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/1983/14.html",
  coverBg:"bg_kitchen70",
  intro:"一對七十幾歲、英文有限嘅意大利移民老夫婦，喺自己廚房簽咗份擔保。個仔話只係五萬、六個月。其實冇上限、冇限期。",
  terms:T, evidence:E, script:S,
  ending:{source:"高等法院經典案例。遊戲內人名已更改；判決原文可喺 AustLII 查閱，本案根據案例摘要改編。",
    lessons:["{{unconsdealing}}：一方有{{specialdisadv}}，另一方知道而加以利用。",
      "年老、英文有限、依賴家人，都可以構成特殊不利處境。",
      "{{wilful}}同知道有一樣嘅法律後果。",
      "證明咗弱勢同知情之後，{{onusshift}}，強勢一方要證明交易公平。",
      "幫屋企人擔保前，自己搵{{independent}}；英文有限就要求傳譯。"]}
});
})();
