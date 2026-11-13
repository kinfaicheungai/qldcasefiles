/* Case 15 — Collyer v Daniells [2024] QCAT 229 */
(function(){
const T = {
  ndact:{en:"Neighbourhood Disputes (Dividing Fences and Trees) Act 2011 (Qld)",zh:"《2011 年鄰里糾紛（分隔圍欄及樹木）法》（昆州）",d:"處理鄰居之間圍欄同樹木糾紛嘅昆州法例，由 QCAT 處理。"},
  treekeeper:{en:"tree-keeper",zh:"樹木管理人",d:"樹木所在土地嘅註冊業主，負責管理樹木。"},
  overhang:{en:"overhanging branches",zh:"越界樹枝",d:"伸過圍欄嘅樹枝。"},
  substantial:{en:"substantial, ongoing and unreasonable interference",zh:"重大、持續及不合理的干擾",d:"樹木影響鄰居用地嘅其中一個法定門檻，要求好高。"},
  viewob:{en:"severe obstruction of a view",zh:"嚴重阻擋景觀",d:"樹要高過 2.5 米，而且要嚴重阻擋鄰居入住時已經存在、由住宅望出去嘅景觀。"},
  nearly:{en:"nearly blocked out",zh:"幾乎完全遮擋",d:"「嚴重」嘅門檻：景觀要差唔多完全被擋住。"},
  arborist:{en:"arborist",zh:"樹藝師",d:"樹木專家。QCAT 可以委任獨立樹藝師評估。"},
  lastresort:{en:"removal as a last resort",zh:"移除樹木屬最後手段",d:"法例要求先考慮修剪等其他方法，砍樹係最後選擇。"},
  balancing:{en:"balancing the parties' interests",zh:"平衡雙方利益",d:"即使有影響，審裁處都要考慮樹嘅價值、私隱等，再決定係咪要下命令。"},
  onpapers2:{en:"decided on the papers",zh:"書面審理",d:"唔開庭，根據文件、相片同專家報告作決定。"}
};
const E = {
  P1:{t:"1997 年買樓時有景觀",s:"for",side:"對申請人有利",d:"申請人話 1997 年買樓時，由屋企可以望到向南嘅景觀。",ref:"判詞第 1、25 段"},
  P2:{t:"一排金蒲葵",s:"for",side:"對申請人有利",d:"鄰居嘅金蒲葵（Golden Cane palm）形成密集樹籬，全部喺鄰居地內，高過 2.5 米。",ref:"判詞第 13、16 段"},
  P3:{t:"2017 年拆屋重建",s:"against",side:"對申請人不利",d:"申請人 2017 年拆咗舊屋，起咗間更闊更長嘅新屋，露台更高、更貼近圍欄。",ref:"判詞第 38、42、62 段"},
  P4:{t:"重建前冇投訴",s:"against",side:"對申請人不利",d:"鄰居話啲樹已經種咗超過 15 年；申請人喺 2017 年重建之前冇提過景觀問題。",ref:"判詞第 3、46 段"},
  P5:{t:"自己啲樹都擋",s:"against",side:"對申請人不利",d:"樹藝師發現，申請人自己嘅樹都部分遮擋同一個景觀。",ref:"判詞第 16、50 段"},
  P6:{t:"相片角度唔同",s:"against",side:"對申請人不利",d:"雙方提交嘅相片由唔同角度影，好難比較。",ref:"判詞第 44–45 段"},
  P7:{t:"樹籬提供私隱",s:"against",side:"對申請人不利",d:"樹木健康，為鄰居提供私隱，尤其係面對申請人新建嘅大露台。",ref:"判詞第 16、56、63 段"}
};
const S = [
 {ch:"第一幕", title:"被擋住的景觀", sub:"昆州・鄰舍糾紛", bg:"bg_palms"},
 {who:"May 姐", img:"c_mentor", text:"昆州鄰居之間最常見嘅糾紛：樹。今日呢單由投訴嘅一方開始，你會慢慢發現故事唔止一面。"},
 {who:"Peter", img:"n_deck", text:"我 1997 年買呢間屋，由屋企望出去，向南有好靚嘅景觀。", gain:"P1"},
 {who:"Peter", img:"n_deck", text:"而家隔籬嗰排金蒲葵，又高又密，擋晒我啲景！", gain:"P2"},
 {who:"Peter", img:"n_deck", text:"我要求佢修剪，之後每年維持最高 5 米。啲樹根推歪圍欄嘅都要清走。", ref:"判詞第 2 段"},
 {q:"鄰居棵樹擋住景觀，昆州法例點處理？", img:"n_deck", opts:[
   {t:"一定要斬，景觀係業主權利", fb:"錯。法例冇保障一般景觀權利，而且斬樹係最後手段。"},
   {t:"可以申請 QCAT，但要符合嚴格條件：樹高過 2.5 米，嚴重阻擋入住時已存在嘅景觀", ok:1, fb:"啱！{{ndact}}對{{viewob}}有好嚴格嘅條件。", ref:"判詞第 13 段"},
   {t:"只可以報警", fb:"呢個係民事糾紛，唔係刑事。"}
 ]},

 {ch:"第二幕", title:"另一面", sub:"鄰居嘅回應", bg:"bg_palms"},
 {who:"Margaret", img:"n_palm", text:"呢排樹已經種咗超過 15 年。佢 2017 年之前從來冇投訴過景觀。", gain:"P4", terms:["treekeeper"]},
 {who:"Margaret", img:"n_palm", text:"佢 2017 年拆咗舊屋，起咗間大好多嘅新屋，個露台又高又近圍欄。我需要呢排樹保住私隱。", gain:"P3"},
 {who:"旁白", text:"雙方提交咗好多相片，但係由唔同角度影，好難比較。", gain:"P6"},
 {q:"呢個時候，審裁處最需要咩？", img:"n_palm", opts:[
   {t:"再聽多啲雙方講法", fb:"雙方講法已經好清楚，問題係客觀證據。"},
   {t:"獨立樹藝師到場評估", ok:1, fb:"啱！審裁處委任獨立{{arborist}}到兩邊物業視察並寫報告。", ref:"判詞第 15–16 段"},
   {t:"直接睇 Google 地圖", fb:"唔夠準確，亦唔係正式證據。"}
 ]},
 {who:"樹藝師", img:"n_arborist", text:"啲樹好健康。佢哋的確遮住咗由二樓露台向南嘅景觀。不過，申請人自己啲樹都部分遮擋緊同一個景觀。", gain:"P5", ref:"判詞第 16 段"},
 {who:"樹藝師", img:"n_arborist", text:"啲樹提供私隱。可以疏剪降低高度，唔需要專業樹藝師處理，最終高度要量好視線先定。", gain:"P7", ref:"判詞第 16、57 段"},

 {court:"qcat:tribunal", ch:"第三幕", title:"三步測試", sub:"QCAT・書面審理", bg:"bg_qcat"},
 {who:"旁白", text:"案件以{{onpapers2}}處理。審裁員用三步：一、買樓時景觀係點；二、樹係咪「嚴重」阻擋；三、平衡雙方利益。", ref:"判詞第 17、28–31 段"},
 {who:"審裁員", img:"l_member", judge:1, text:"國會辯論時形容「嚴重」嘅門檻：", quote:{en:"“the view must be nearly blocked out”", zh:"「景觀必須幾乎被完全遮擋」", src:"引於判詞第 47 段"}},
 {multi:3, q:"揀 3 張證據，最能削弱 Peter 嘅申請。", img:"l_member", pool:["P1","P2","P3","P4","P5","P6","P7"], right:["P3","P4","P5"], half:["P6","P7"],
   fb:"審裁員認為：Peter 2017 年重建，新屋更闊、露台更高更近圍欄（P3），而且證據顯示唔到舊露台喺邊，所以分唔清景觀係被樹擋定係被新屋改變；重建前從冇投訴（P4）；佢自己啲樹都擋（P5）。相片角度唔同（P6）同私隱需要（P7）亦削弱佢嘅申請。", ref:"判詞第 38–49、61–63 段"},
 {q:"即使樹真係擋住景觀，審裁處仲要考慮咩？", img:"l_member", opts:[
   {t:"唔使考慮其他，擋到就要剪", fb:"唔係。仲要平衡雙方利益。"},
   {t:"景觀價值、樹嘅價值、鄰居私隱等，平衡雙方利益", ok:1, fb:"啱！審裁員指出景觀唔係標誌性景觀、冇明顯金錢價值，而且買樓時已經部分被遮擋；鄰居保留樹籬保護私隱係合理。", ref:"判詞第 33–35、61–63 段", terms:["balancing"]},
   {t:"邊個住得耐啲", fb:"唔係關鍵。"}
 ]},

 {ch:"第四幕", title:"決定", sub:"2024 年 5 月 30 日", bg:"bg_qcat"},
 {predict:{img:"l_member", intro:"審裁員準備作出決定。輪到你估。", button:"宣佈決定", items:[
   {q:"Peter 嘅申請結果？", short:"結果", opts:["鄰居要修剪到 5 米","鄰居要斬晒啲樹","申請駁回，唔使做任何嘢"], answer:2, pts:20},
   {q:"審裁處有冇考慮過「斬樹」？", short:"斬樹", opts:["有，係首選","斬樹屬最後手段，本案唔適用"], answer:1, pts:10}]}},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"The Tribunal is not satisfied that the trees severely obstruct the view that existed when the applicant took possession. The applicant's own rebuild, with a higher deck closer to the fence, may account for the change. Even if there were an obstruction, the interference is not {{substantial|substantial and unreasonable}}.", zh:"本審裁處唔信納啲樹嚴重阻擋申請人入住時已經存在嘅景觀。申請人自己重建、露台更高更貼近圍欄，可能先係改變嘅原因。即使有遮擋，干擾亦唔屬重大及不合理。"}, ref:"判詞第 43–49、66–67 段"},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"The respondent may reasonably retain the palms for privacy. No orders are made, and the application is {{dismissed}}.", zh:"答辯人保留棕櫚樹以保護私隱屬合理。本審裁處不作任何命令，申請駁回。"}, ref:"判詞第 63、69 段"},
 {who:"May 姐", img:"c_mentor", text:"教訓：同鄰居傾樹之前，先諗清楚自己有冇改變過情況（例如加建、重建）。申請 QCAT 之前，要有買樓時嘅相片做對比。"},
 {who:"May 姐", img:"c_mentor", text:"如果係樹枝越界、樹根整爛嘢、或者有安全危險，條件就唔同，通常比景觀問題容易處理。", ref:"判詞第 8、11、23 段", terms:["overhang"]},
 {end:1}
];
QCF.register({
  id:"c15", cat:"neighbour", title:"被擋住的景觀", tagline:"鄰居排樹擋住我個景，可唔可以叫佢斬？",
  court:"QCAT", cite:"Collyer v Daniells [2024] QCAT 229",
  citeFull:"Collyer v Daniells [2024] QCAT 229（QCAT，Member D Brown，2024 年 5 月 30 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qcat/2024/229",
  coverBg:"bg_palms",
  intro:"一位業主投訴鄰居排棕櫚樹擋住佢由露台望出去嘅景觀，要求修剪。獨立樹藝師到場之後，故事出現另一面。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情取自判詞。",
    lessons:["昆州樹木糾紛由 QCAT 根據{{ndact}}處理。",
      "{{viewob}}要求好高：樹高過 2.5 米，景觀要{{nearly}}，而且係入住時已經存在。",
      "審裁處會委任獨立{{arborist}}，並{{balancing}}。",
      "{{lastresort}}：通常先考慮修剪。",
      "自己重建或者加建，可能先係景觀改變嘅原因。"]}
});
})();
