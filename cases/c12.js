/* Case 12 — Beynon v Sands Family Trust t/a Fair Deal Car Sales [2024] QCAT 102 */
(function(){
const T = {
  cg:{en:"consumer guarantees",zh:"消費者保證",d:"《澳洲消費者法》自動提供嘅保障，商家唔可以用條款排除。"},
  acceptable:{en:"acceptable quality (s 54)",zh:"可接受質素",d:"貨品要適合用途、外觀可接受、冇缺陷、安全、耐用。標準視乎價錢、性質同狀況。"},
  majorfail:{en:"major failure",zh:"重大故障",d:"合理消費者知道就唔會買，或者貨品唔安全等。重大故障先可以要求退貨退款。"},
  remedy:{en:"opportunity to repair",zh:"維修機會",d:"如果唔係重大故障，消費者要先俾商家合理機會修理。"},
  warranty:{en:"statutory warranty",zh:"法定保養",d:"昆州車行賣二手車嘅法定保養。本案屬 B 級：1,000 公里或一個月，先到為準。"},
  defectnotice:{en:"defect notice",zh:"缺陷通知",d:"喺保養期內通知車行有問題。之後仲要將車交返俾車行修理。"},
  expert:{en:"expert evidence",zh:"專家證據",d:"例如技師報告，說明缺陷係乜、幾時出現、修理費幾多。"},
  perfection:{en:"not a standard of perfection",zh:"唔係完美標準",d:"可接受質素唔等於零缺陷，尤其係舊車。"},
  fta:{en:"Fair Trading Act 1989 (Qld)",zh:"《1989 年公平交易法》（昆州）",d:"QCAT 可以據此處理最高 $100,000 嘅汽車申索。"},
  onpapers:{en:"decided on the papers",zh:"書面審理",d:"唔開庭，根據雙方提交嘅文件作決定。"}
};
const E = {
  B1:{t:"2007/08 年 BMW，十萬公里",s:"against",side:"對買家不利",d:"$12,500 買入，里數 108,040 公里嘅舊車。",ref:"判詞第 1、25 段"},
  B2:{t:"驗車報告：兩項要再診斷",s:"for",side:"對買家有利",d:"買車後 12 日保養，發票列出波箱油問題同水撥噴嘴塞咗，需要再診斷。",ref:"判詞第 2 段"},
  B3:{t:"一長串問題",s:"for",side:"對買家有利",d:"買家列出：輪胎、避震、冷卻液漏、方向機油封、皮帶裂、泊車感應器壞等等。",ref:"判詞第 6 段"},
  B4:{t:"冇將車交返車行",s:"against",side:"對買家不利",d:"買家堅持先退錢先交車，拒絕車行多次要求檢查同修理。",ref:"判詞第 39–46、73 段"},
  B5:{t:"冇專家報告",s:"against",side:"對買家不利",d:"除咗一張保養發票，冇任何技師報告、修理報價或者驗車證據。",ref:"判詞第 59、66–67 段"},
  B6:{t:"已經揸咗 580 公里",s:"against",side:"對買家不利",d:"輪胎問題連唔返去交車時，因為買家已經揸咗幾百公里。",ref:"判詞第 2、69 段"},
  B7:{t:"保養期內通知",s:"for",side:"對買家有利",d:"買家喺法定保養期內通知車行有缺陷。",ref:"判詞第 27、37 段"}
};
const S = [
 {ch:"第一幕", title:"十二日", sub:"2022 年 8 月", bg:"bg_caryard"},
 {who:"May 姐", img:"c_mentor", text:"買二手車出事，係另一類好常見嘅糾紛。今日睇吓，點解一個覺得自己好冤嘅買家，最後一蚊都攞唔到。"},
 {who:"旁白", text:"2022 年 8 月 19 日，Kris 喺一間車行用 $12,500 買咗架 BMW 1 系列，十幾年車齡，里數 108,040 公里。", gain:"B1", ref:"判詞第 1 段"},
 {who:"旁白", text:"12 日後保養，發票寫住兩樣要再診斷：波箱油問題、水撥噴嘴塞咗。", gain:"B2"},
 {who:"Kris", img:"k_buyer", text:"仲有好多問題：輪胎、避震、漏冷卻液、皮帶裂、泊車感應器唔work……呢架車根本唔安全！", gain:"B3"},
 {who:"旁白", text:"8 月 31 日，佢電郵車行要求賠修理費；第二日改為要求全數退款。9 月 6 日，佢入紙 QCAT，追討 $13,590.80。", ref:"判詞第 3–5 段"},
 {q:"二手車喺《澳洲消費者法》下有冇保障？", img:"k_buyer", opts:[
   {t:"冇，二手車買咗就係買咗", fb:"錯。{{cg}}一樣適用於二手車。"},
   {t:"有，一樣要有可接受質素，但標準會考慮車齡、價錢同里數", ok:1, fb:"啱！{{acceptable}}係彈性標準。十幾年、十萬公里嘅車，合理買家會預期有啲機件問題。", ref:"判詞第 50–58 段"},
   {t:"有，而且一定要零缺陷", fb:"唔係，法院講明呢個{{perfection}}。"}
 ]},

 {ch:"第二幕", title:"車行的要求", sub:"保養期內", bg:"bg_caryard"},
 {who:"旁白", text:"架車屬{{warranty}}範圍：B 級，1,000 公里或一個月，先到為準。Kris 喺保養期內發出咗{{defectnotice}}。", gain:"B7", ref:"判詞第 25–27 段"},
 {who:"旁白", text:"車行多次要求 Kris 將車交返檢查同修理。", ref:"判詞第 39–42 段"},
 {who:"Kris", img:"k_buyer", text:"我唔信佢哋。你先退錢，我先交車。或者我搵個流動技師幫手睇。", gain:"B4"},
 {q:"Kris 呢個做法，法律上有咩問題？", img:"k_buyer", opts:[
   {t:"冇問題，消費者有權決定點樣處理", fb:"唔係咁簡單。"},
   {t:"如果唔係重大故障，消費者要先俾商家合理機會修理；保養亦要求交車修理", ok:1, fb:"啱！唔係{{majorfail}}嘅話，要先俾{{remedy}}。法定保養亦要求買家交車俾車行修理。", ref:"判詞第 30、34–35、73 段"},
   {t:"只要寄咗電郵就算完成責任", fb:"寄電郵通知只係第一步。佢仲用錯咗電郵地址。", ref:"判詞第 3 段"}
 ]},
 {who:"旁白", text:"聆訊押後之後，案件以{{onpapers}}處理。車行冇出席，聯絡到嘅董事話佢唔知件事、亦已經唔係董事。", ref:"判詞第 14–17、20 段"},
 {who:"May 姐", img:"c_mentor", text:"你以為車行缺席，買家一定贏？唔係。申索嘅一方仍然要證明自己嘅案。"},
 {who:"旁白", text:"Kris 嘅證據只有一張保養發票，冇{{expert}}，冇修理報價，冇驗車報告。", gain:"B5"},
 {who:"旁白", text:"而且買車之後，佢已經揸咗大約 580 公里。", gain:"B6"},
 {multi:3, q:"揀 3 張證據，最能解釋點解 Kris 輸。", img:"l_member", pool:["B1","B2","B3","B4","B5","B6","B7"], right:["B1","B4","B5"], half:["B6"],
   fb:"審裁員認為：舊車嘅合理期望較低（B1）；冇專家證據證明有重大故障或者唔安全（B5）；Kris 拒絕俾車行檢查同修理，所以保養同維修補救都用唔到（B4）。B6 令輪胎問題連唔返去交車時。", ref:"判詞第 46–47、55–73 段"},

 {ch:"第三幕", title:"決定", sub:"2024 年 3 月 5 日", bg:"bg_qcat"},
 {predict:{img:"l_member", intro:"審裁員準備作出決定。輪到你估。", button:"宣佈決定", items:[
   {q:"Kris 追討 $13,590.80，結果係？", short:"結果", opts:["全數退款","部分賠償修理費","申請駁回，一蚊都冇"], answer:2, pts:20},
   {q:"架車有冇「可接受質素」？", short:"可接受質素", opts:["有，以佢嘅車齡、價錢同里數嚟講","冇，有缺陷就唔合格"], answer:0, pts:10}]}},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"The standard of {{acceptable}} is {{perfection}}. This was an older used vehicle with high mileage. There is no evidence that it was unsafe or unfit for purpose, so it was of acceptable quality.", zh:"可接受質素唔係完美標準。呢架係高里數嘅舊二手車。冇證據顯示佢唔安全或者唔適合用途，所以屬可接受質素。"}, ref:"判詞第 54–60、70 段"},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"There is insufficient {{expert}} of a {{majorfail}}. The applicant refused the dealer an {{remedy}}, and did not deliver the vehicle under the {{warranty}}. The application is {{dismissed}}.", zh:"冇足夠專家證據證明有重大故障。申請人拒絕俾車行維修機會，亦冇按法定保養交車。申請駁回。"}, ref:"判詞第 46–47、71–75 段"},
 {who:"May 姐", img:"c_mentor", text:"買二手車出事：一、即刻書面通知車行（用合約上嘅聯絡方法）；二、俾佢合理機會修理；三、搵獨立技師寫報告；四、影相、留里數紀錄。"},
 {who:"May 姐", img:"c_mentor", text:"如果係新車、或者車行拒絕修理，結果可能好唔同。例如另一單案，新車交付時唔符合訂單描述，買家就成功退車退款。", ref:"Landis v Westpoint Autos [2023] QCAT 540"},
 {end:1}
];
QCF.register({
  id:"c12", cat:"debt", title:"二手車的期望", tagline:"買咗架問題車，點解退唔到錢？",
  court:"QCAT", cite:"Beynon v Fair Deal Car Sales [2024] QCAT 102",
  citeFull:"Beynon v Sands Family Trust t/a Fair Deal Car Sales [2024] QCAT 102（QCAT，Member D Brown，2024 年 3 月 5 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qcat/2024/102",
  coverBg:"bg_caryard",
  intro:"買咗架二手車，12 日就發現一大堆問題。車行冇出席聆訊，買家應該穩贏？結果出人意料。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改；車行名稱照判詞。",
    lessons:["二手車都有{{cg}}，但{{acceptable}}會考慮車齡、價錢同里數，{{perfection}}。",
      "要退貨退款，通常要證明{{majorfail}}。",
      "唔係重大故障，要先俾商家{{remedy}}；{{warranty}}亦要求交車修理。",
      "冇{{expert}}，好難證明缺陷嘅嚴重程度同出現時間。",
      "對方缺席唔等於自動贏，申索一方仍然要舉證。"]}
});
})();
