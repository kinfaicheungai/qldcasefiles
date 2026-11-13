/* Case 08 — Thorne v Kennedy (2017) 263 CLR 85; [2017] HCA 49 */
(function(){
const T = {
  bfa:{en:"binding financial agreement",zh:"具約束力的財務協議",d:"《家事法》Part VIIIA 嘅協議，俗稱婚前協議（prenup），決定分開時財產點分。"},
  prenup:{en:"pre-nuptial agreement",zh:"婚前協議",d:"結婚前簽嘅財務協議。"},
  postnup:{en:"post-nuptial agreement",zh:"婚後協議",d:"結婚後簽嘅財務協議。"},
  duress:{en:"duress",zh:"脅迫",d:"用非法壓力逼人簽約。"},
  specialdis:{en:"special disadvantage",zh:"特殊不利處境",d:"一方處於嚴重劣勢，冇能力保護自己利益；對方知道而加以利用，就係不合良心。"},
  spousalmaint:{en:"spousal maintenance",zh:"配偶贍養費",d:"分開後一方俾另一方嘅生活費。"},
  propadj:{en:"property adjustment order",zh:"財產調整令",d:"法院重新分配夫妻財產嘅命令。"},
  setasideag:{en:"set aside an agreement",zh:"撤銷協議",d:"法院宣佈協議唔再有效。"},
  fcc:{en:"Federal Circuit Court",zh:"聯邦巡迴法院",d:"當時處理大部分家事案嘅聯邦法院（2021 年起併入聯邦巡迴及家事法院）。"}
};
const E = {
  K1:{t:"財富懸殊",s:"for",side:"對 Thorne 有利",d:"Kennedy 67 歲，地產發展商，資產超過 $1,800 萬；Thorne 36 歲，冇乜資產。",ref:"判詞摘要"},
  K2:{t:"一早講明「我啲錢係俾仔女」",s:"against",side:"對 Thorne 不利",d:"識咗冇耐，Kennedy 已經話結婚要簽份文件。",ref:"判詞摘要"},
  K3:{t:"婚禮前 11 日先拎出嚟",s:"for",side:"對 Thorne 有利",d:"婚禮前約 11 日，Kennedy 話唔簽就冇婚禮；4 日前簽署。Thorne 家人已經飛咗嚟澳洲。",ref:"判詞第 65 段；判詞摘要"},
  K4:{t:"律師話「完全不恰當」",s:"against",side:"對 Thorne 不利",d:"獨立律師勸佢唔好簽，形容協議「完全不恰當」，只保障 Kennedy。佢照簽。",ref:"判詞第 55 段"},
  K5:{t:"冇永久居留身份",s:"for",side:"對 Thorne 有利",d:"Thorne 喺澳洲冇永久身份，生活樣樣依賴 Kennedy。",ref:"判詞第 47 段"},
  K6:{t:"三年內分開，乜都冇",s:"for",side:"對 Thorne 有利",d:"協議規定三年內分開，Thorne 乜都攞唔到；之後嘅權益亦「極度不成比例地少」。",ref:"判詞第 55、121 段"},
  K7:{t:"婚後再簽，佢喺車度等",s:"for",side:"對 Thorne 有利",d:"婚後協議簽之前，Kennedy 坐喺車度等，仲打電話問律師仲要幾耐。",ref:"判詞第 118 段"}
};
const S = [
 {ch:"第一幕", title:"網上相識", sub:"2006 年", bg:"bg_office"},
 {who:"May 姐", img:"c_mentor", text:"今日睇一單家事法嘅經典案。呢單同你做傳譯成日見到嘅情況好似：一方由海外嚟，靠另一方生活。"},
 {who:"旁白", text:"2006 年，36 歲、住喺東歐嘅 Thorne，喺網上識咗 67 歲嘅澳洲地產發展商 Kennedy。佢資產超過 $1,800 萬，Thorne 冇乜資產。", gain:"K1", ref:"判詞摘要（當事人名本身已係化名）"},
 {who:"Kennedy", img:"t_groom", text:"如果我哋結婚，你要簽一份文件。我啲錢係俾我啲仔女嘅。", gain:"K2"},
 {who:"旁白", text:"識咗大約七個月，Thorne 搬嚟澳洲同 Kennedy 同住，準備結婚。佢冇永久居留身份，樣樣都靠 Kennedy。", gain:"K5"},

 {ch:"第二幕", title:"婚禮前十一日", sub:"2007 年 9 月", bg:"bg_wedding"},
 {who:"旁白", text:"婚禮場地訂好，Thorne 嘅家人已經飛嚟澳洲。婚禮前大約 11 日，Kennedy 帶佢去見律師。"},
 {who:"Kennedy", img:"t_groom", text:"唔簽呢份協議，就冇婚禮。", gain:"K3", terms:["prenup","bfa"]},
 {who:"旁白", text:"Thorne 嘅獨立律師勸佢唔好簽。", quote:{en:"“entirely inappropriate”", zh:"「完全不恰當」", src:"獨立律師對協議嘅評價，判詞第 55 段"}, gain:"K4"},
 {who:"旁白", text:"協議規定：如果三年內分開，Thorne 乜都攞唔到。", gain:"K6"},
 {who:"Thorne", img:"t_bride", text:"我覺得自己冇得揀。家人喺度，我冇身份，所有嘢都靠佢。", ref:"判詞第 57 段"},
 {who:"旁白", text:"2007 年 9 月 26 日，婚禮前四日，佢簽咗。協議要求婚後 30 日內再簽一份差唔多一樣嘅{{postnup}}。", ref:"判詞摘要"},
 {who:"旁白", text:"11 月，佢再簽婚後協議。律師見佢嘅時候，Kennedy 坐喺外面車度等，仲打電話問律師仲要幾耐。", gain:"K7"},
 {q:"按常識，Thorne 有律師意見、自己簽咗名，協議係咪一定有效？", img:"t_bride", opts:[
   {t:"係，有獨立律師就無得翻", fb:"大部分人都咁諗，但高等法院唔係咁睇。"},
   {t:"唔一定，法院會睇佢簽嘅時候係咪有真正自由意志", ok:1, fb:"啱！有律師意見唔等於冇{{undueinf}}或者冇被利用{{specialdis}}。", ref:"判詞第 47、65 段"},
   {t:"婚前協議喺澳洲一律無效", fb:"錯。符合法例嘅{{bfa}}一般係有效嘅。"}
 ]},

 {court:"fcc:trial", ch:"第三幕", title:"三級法院", sub:"2011–2017", bg:"bg_court"},
 {who:"旁白", text:"2011 年 8 月，結婚約四年後兩人分開。2012 年 4 月，Thorne 向{{fcc}}申請撤銷兩份協議，並申請{{propadj}}同{{spousalmaint}}。", ref:"判詞摘要"},
 {who:"旁白", text:"一審法官撤銷兩份協議，理由係{{duress}}。佢形容：所有籌碼同權力都喺 Kennedy 手上。", ref:"判詞第 47 段"},
 {court:"famfull:appeal", who:"旁白", text:"家事法院合議庭推翻：認為唔構成脅迫、不當影響或者不合良心。Thorne 上訴到高等法院。", ref:"判詞摘要"},
 {court:"hca:final", multi:4, q:"一審法官列出六個因素。揀 4 張證據，最能顯示 Thorne 簽約時冇真正自由意志。", img:"c_judge", pool:["K1","K2","K3","K4","K5","K6","K7"], right:["K1","K3","K5","K7"], half:["K6"],
   fb:"六個因素包括：財富懸殊（K1）、冇永久身份（K5）、樣樣依賴對方、情感投入同想做母親、為結婚做好心理準備、婚禮已經公開（K3）。K7 顯示婚後協議時嘅壓力。K6 顯示協議極不公平，亦係重要證據。K4 反而係 Kennedy 一方嘅論點。", ref:"判詞第 47、118–121 段"},
 {q:"高等法院點處理「有律師勸佢唔好簽，佢都照簽」？", img:"c_judge", opts:[
   {t:"證明佢自願，協議有效", fb:"呢個係 Kennedy 嘅論點。"},
   {t:"反而顯示佢處境有幾弱勢：明知係壞協議都覺得冇得揀", ok:1, fb:"啱！Gordon J 指出，律師話協議「好差」，反而突顯佢嘅{{specialdis}}。", ref:"判詞第 123 段"},
   {t:"律師失職，要賠償", fb:"判決冇咁講。"}
 ]},

 {ch:"第四幕", title:"判決", sub:"2017 年 11 月 8 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"兩份協議點樣處理？", short:"協議", opts:["有效，Thorne 受約束","撤銷，Thorne 可以申請分財產"], answer:1, pts:20},
   {q:"高等法院主要用咩理由？", short:"理由", opts:["脅迫（duress）","不當影響同不合良心行為"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Ms Thorne was subject to {{undueinf}}. She had no real choice, and her {{specialdis}} was known to Mr Kennedy. The agreements were also procured by {{unconscionable}} conduct.", zh:"Thorne 受到不當影響，佢實際上冇選擇，而 Kennedy 知道佢嘅特殊不利處境。兩份協議亦係透過不合良心嘅行為取得。"}, ref:"判詞第 47、65 段；判詞摘要"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{allowed|The appeal is allowed}}. Both financial agreements are {{setaside|set aside}}. The applications for property adjustment and spousal maintenance are remitted to the Federal Circuit Court.", zh:"上訴得直。兩份財務協議均予撤銷。財產調整同配偶贍養費嘅申請，發還聯邦巡迴法院處理。"}, ref:"判詞摘要（命令）"},
 {who:"May 姐", img:"c_mentor", text:"留意：法院冇話婚前協議無效。符合法例、雙方自願嘅協議一般都有效。問題係「點樣」簽：時間迫、身份依賴、冇得揀。"},
 {who:"May 姐", img:"c_mentor", text:"想協議企得穩：早啲傾、唔好喺婚禮前幾日先拎出嚟，條款要公平，雙方都要有獨立律師同足夠時間考慮。"},
 {end:1}
];
QCF.register({
  id:"c08", cat:"family", title:"婚禮前十一日", tagline:"有律師、簽咗名，婚前協議都可以被撤銷？",
  court:"High Court", cite:"Thorne v Kennedy (2017) 263 CLR 85",
  citeFull:"Thorne v Kennedy (2017) 263 CLR 85；[2017] HCA 49（High Court of Australia，Kiefel CJ, Bell, Gageler, Keane, Nettle, Gordon & Edelman JJ，2017 年 11 月 8 日）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/2017/49.html",
  coverBg:"bg_wedding",
  intro:"一位海外女士嚟澳洲結婚。婚禮前十一日，未婚夫拎出一份婚前協議：唔簽就冇婚禮。佢嘅律師叫佢唔好簽，佢照簽。",
  terms:T, evidence:E, script:S,
  ending:{source:"判詞本身已用 Thorne 同 Kennedy 做化名。",
    lessons:["澳洲嘅{{prenup}}（{{bfa}}）一般有效，但可以因為{{undueinf}}或者不合良心而被撤銷。",
      "有{{independent}}唔等於協議一定企得穩。",
      "法院會睇整體處境：財富懸殊、冇永久身份、婚禮迫近、家人已到。",
      "{{specialdis}}：對方知道你冇得揀而加以利用，就係不合良心。",
      "撤銷協議之後，仍然要另外申請{{propadj}}同{{spousalmaint}}。"]}
});
})();
