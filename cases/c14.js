/* Case 14 — MRR v GR (2010) 240 CLR 461; [2010] HCA 4 */
(function(){
const T = {
  parenting:{en:"parenting orders",zh:"育兒令",d:"法院就子女同邊個住、幾時見另一方、點樣作決定等作出嘅命令。"},
  bestint:{en:"best interests of the child",zh:"子女最佳利益",d:"育兒案嘅首要考慮（s 60CA）。唔係父母邊個「應得」，而係對孩子點最好。"},
  esrp:{en:"equal shared parental responsibility",zh:"平等共同父母責任",d:"父母雙方一齊就子女嘅重大長遠事項作決定（例如教育、宗教、醫療）。同「住幾耐」係兩回事。"},
  equaltime:{en:"equal time",zh:"平均相處時間",d:"孩子同父母各住一半時間。"},
  practicable:{en:"reasonably practicable",zh:"合理可行",d:"s 65DAA：作平均時間命令前，法院必須考慮咁樣安排實際上係咪可行，例如兩個人住得幾遠、經濟同情緒狀況。"},
  presumption:{en:"presumption",zh:"推定",d:"法律預設某件事成立，除非有證據推翻。"},
  relocation:{en:"relocation",zh:"搬遷",d:"分開後一方想帶子女搬去另一個城市或州。"},
  interim:{en:"interim orders",zh:"臨時命令",d:"正式判決前嘅暫時安排。"},
  fedmag:{en:"Federal Magistrates Court",zh:"聯邦裁判法院",d:"當年處理大部分家事案嘅法院，之後改名聯邦巡迴法院，2021 年再併入聯邦巡迴及家事法院。"},
  mandatory:{en:"mandatory consideration",zh:"必須考慮的事項",d:"法例規定法院一定要考慮嘅問題。漏咗就係法律錯誤。"}
};
const E = {
  M1:{t:"一家人為工作搬去 Mount Isa",s:"neutral",side:"背景",d:"2007 年 1 月，為咗爸爸嘅工作經驗，一家由悉尼搬去昆州 Mount Isa。2007 年 8 月父母分開。",ref:"判決摘要"},
  M2:{t:"爸爸唔會搬",s:"against",side:"對媽媽不利",d:"爸爸講明唔會放棄 Mount Isa 份工去悉尼，即使女兒同媽媽住喺悉尼。",ref:"判決摘要"},
  M3:{t:"媽媽住露營車公園",s:"for",side:"對媽媽有利",d:"媽媽喺 Mount Isa 住露營車公園，靠福利同散工維生。",ref:"判決摘要"},
  M4:{t:"抑鬱、孤立",s:"for",side:"對媽媽有利",d:"媽媽因為生活環境、冇工作、遠離悉尼嘅家人而患抑鬱。",ref:"判決摘要"},
  M5:{t:"臨時命令要媽媽返嚟",s:"against",side:"對媽媽不利",d:"分開後媽媽帶女去悉尼，但 2007 年 10 月按爸爸申請嘅臨時命令返回 Mount Isa。",ref:"判決摘要"},
  M6:{t:"女兒五歲",s:"neutral",side:"背景",d:"女兒 2002 年 8 月出世，判決時大約五歲。",ref:"判決摘要"}
};
const S = [
 {ch:"第一幕", title:"紅土小鎮", sub:"昆州 Mount Isa", bg:"bg_mountisa"},
 {who:"May 姐", img:"c_mentor", text:"今日嘅案發生喺昆州 Mount Isa，係全國處理子女搬遷案必讀嘅高等法院判決。佢問嘅問題好簡單：一人一半，係咪一定最公平？"},
 {who:"旁白", text:"Mel 同 Gary 喺悉尼一齊十幾年。2002 年 8 月，女兒出世。", gain:"M6"},
 {who:"旁白", text:"2007 年 1 月，為咗 Gary 嘅工作經驗，一家搬去 Mount Isa。同年 8 月，兩人分開。", gain:"M1"},
 {who:"Mel", img:"mr_mother", text:"分開之後我帶女返悉尼，我屋企人全部喺嗰邊。但 Gary 申請{{interim}}，我十月又要帶女返 Mount Isa。", gain:"M5"},
 {who:"Mel", img:"mr_mother", text:"我而家住露營車公園，靠福利同散工。冇朋友、冇家人，我好抑鬱。", gain:"M3"},
 {who:"旁白", text:"佢嘅抑鬱同生活環境、冇工作、遠離悉尼嘅家人有關。", gain:"M4"},
 {who:"Gary", img:"mr_father", text:"我份工喺度，我唔會搬去悉尼。我想個女一半時間同我住。", gain:"M2"},
 {q:"家事法院決定{{parenting}}時，首要考慮係咩？", img:"mr_father", opts:[
   {t:"父母雙方公平，一人一半", fb:"好多人咁諗，但法例嘅首要考慮唔係父母公平。"},
   {t:"子女最佳利益", ok:1, fb:"啱！{{bestint}}係首要考慮（s 60CA）。", ref:"Family Law Act s 60CA（當時版本）"},
   {t:"邊個收入高", fb:"收入唔係首要考慮。"}
 ]},

 {ch:"第二幕", title:"一人一半", sub:"Federal Magistrates Court・2008", bg:"bg_mountisa"},
 {who:"May 姐", img:"c_mentor", text:"當年法例有一個{{presumption}}：{{esrp}}符合子女最佳利益。如果父母共同負責，法院就要考慮{{equaltime}}。", ref:"s 61DA、s 65DAA（當時版本）"},
 {q:"「共同父母責任」同「平均時間」係咪同一回事？", img:"c_mentor", opts:[
   {t:"係，共同責任即係一人一半時間", fb:"呢個係好常見嘅誤解。"},
   {t:"唔係，責任係講重大決定，時間係講孩子同邊個住幾耐", ok:1, fb:"啱！共同責任係一齊決定教育、醫療等重大事項；同住時間要另外考慮。", ref:"s 61DA、s 65DAA（當時版本）"},
   {t:"冇分別，法院點叫都得", fb:"分別好大。"}
 ]},
 {court:"fmc:trial", who:"旁白", text:"2008 年 4 月 1 日，{{fedmag}}作出最終命令：父母有平等共同責任，女兒同父母各住一半時間。前提係兩個人都住喺 Mount Isa。", ref:"判決摘要"},
 {who:"Mel", img:"mr_mother", text:"即係我要繼續留喺呢度，住露營車公園，冇工開、冇家人。"},
 {court:"famfull:appeal", who:"旁白", text:"Mel 上訴到家事法院合議庭，被駁回。佢再獲批上訴到高等法院。", ref:"判決摘要", terms:["specialleave"]},

 {court:"hca:final", ch:"第三幕", title:"兩條問題", sub:"High Court of Australia", bg:"bg_court"},
 {who:"法官", img:"c_judge", judge:1, text:"s 65DAA 要求法院喺作出平均時間命令之前，考慮兩條問題：一、平均時間係咪符合子女最佳利益？二、平均時間係咪{{practicable}}？", ref:"判決摘要"},
 {q:"聯邦裁判官錯喺邊？", img:"c_judge", opts:[
   {t:"佢冇考慮女兒最佳利益", fb:"佢有考慮最佳利益。"},
   {t:"佢只考慮咗最佳利益，冇就「合理可行」作出裁斷", ok:1, fb:"啱！「合理可行」係{{mandatory}}，佢完全冇處理。", ref:"判決摘要"},
   {t:"佢唔應該俾爸爸任何時間", fb:"高等法院冇咁講。"}
 ]},
 {multi:3, q:"揀 3 張證據，最能顯示「平均時間」喺本案唔合理可行。", img:"c_judge", pool:["M1","M2","M3","M4","M5","M6"], right:["M2","M3","M4"], half:["M5"],
   fb:"平均時間要求父母都住喺 Mount Isa。但爸爸唔會搬（M2），而媽媽喺 Mount Isa 住露營車公園、靠福利（M3），仲因為孤立而抑鬱（M4）。高等法院認為，喺呢啲證據之下，根本唔可能裁定平均時間合理可行。", ref:"判決摘要"},

 {ch:"第四幕", title:"判決", sub:"2009 年 12 月（理由 2010 年 3 月公佈）", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"高等法院點處理平均時間命令？", short:"結果", opts:["維持，一人一半最公平","撤銷，發還重審"], answer:1, pts:20},
   {q:"高等法院有冇直接判媽媽可以搬返悉尼？", short:"搬遷", opts:["有，直接批准搬遷","冇，發還下級法院重新聆訊"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Before making an order for {{equaltime}}, the court must consider whether it is {{practicable}}. The Federal Magistrate made no such finding. On the evidence, equal time could not have been found reasonably practicable, so there was no power to make the order.", zh:"作出平均時間命令之前，法院必須考慮咁樣係咪合理可行。聯邦裁判官冇作出呢個裁斷。按證據，根本唔可能裁定平均時間合理可行，所以佢冇權作出該命令。"}, ref:"判決摘要"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{allowed|The appeal is allowed}}. The orders of the Federal Magistrates Court are {{setaside|set aside}}, and the matter is {{remit|remitted}} for rehearing.", zh:"上訴得直。撤銷聯邦裁判法院嘅命令，案件發還重新聆訊。"}, ref:"判決摘要（命令）"},
 {who:"May 姐", img:"c_mentor", text:"留意：高等法院冇話「媽媽可以搬」，只係話原審漏咗一條必須問嘅問題。之後點判，由重審決定。"},
 {who:"May 姐", img:"c_mentor", text:"2024 年起，《家事法》已經修改，刪除咗「平等共同責任推定」，最佳利益嘅考慮因素亦簡化咗。但「睇實際可唔可行」呢個道理，到今日都適用。", ref:"Family Law Amendment Act 2023（2024 年 5 月生效）"},
 {end:1}
];
QCF.register({
  id:"c14", cat:"family", title:"紅土小鎮", tagline:"一人一半，係咪一定最公平？",
  court:"High Court", cite:"MRR v GR (2010) 240 CLR 461",
  citeFull:"MRR v GR (2010) 240 CLR 461；[2010] HCA 4（High Court of Australia，2010 年 3 月 3 日公佈理由）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/2010/4.html",
  coverBg:"bg_mountisa",
  intro:"父母喺昆州 Mount Isa 分開。法院判女兒同父母各住一半時間，但媽媽住露營車公園、冇工、冇家人。呢個安排行唔行得通？",
  terms:T, evidence:E, script:S,
  ending:{source:"判決本身已用英文縮寫代替當事人姓名；遊戲再用化名。根據高等法院判決摘要改編。",
    lessons:["{{parenting}}嘅首要考慮係{{bestint}}，唔係父母公平。",
      "{{esrp}}（重大決定）同{{equaltime}}（同住時間）係兩回事。",
      "作平均時間命令前，法院必須考慮係咪{{practicable}}，漏咗就係法律錯誤。",
      "高等法院撤銷命令後發還重審，冇直接決定{{relocation}}。",
      "2024 年 5 月起法例有修改，但「實際可行」嘅道理仍然適用。"]}
});
})();
