/* Case 11 — Wysocki v Etri [2024] QCATA 104 */
(function(){
const T = {
  rtraa:{en:"Residential Tenancies and Rooming Accommodation Act 2008 (Qld)",zh:"《2008 年住宅租賃法》（昆州）",d:"昆州租務嘅主要法例。"},
  bond:{en:"rental bond",zh:"租務按金",d:"由 RTA（住宅租務局）保管，唔係業主自己袋住。退租時雙方同意或者 QCAT 決定點分。"},
  gta:{en:"General Tenancy Agreement",zh:"一般租約",d:"昆州標準住宅租約（Form 18a）。"},
  lessor:{en:"lessor",zh:"業主／出租人",d:"昆州法例用 lessor，唔係 landlord。"},
  fwt:{en:"fair wear and tear",zh:"正常損耗",d:"正常使用造成嘅損耗，例如陽光令油漆褪色。租客唔使負責。"},
  s188:{en:"section 188",zh:"第 188 條",d:"退租時，租客要盡量將物業還原到租約開始時嘅狀況，正常損耗除外。"},
  breaklease:{en:"break lease",zh:"提早解約",d:"租客喺固定租期完結前搬走。業主可以追討損失，但要證明有盡力減少損失。"},
  mitigation:{en:"mitigation",zh:"減輕損失",d:"索償一方有責任採取合理步驟減少自己嘅損失，例如盡快再放租。"},
  freshev:{en:"fresh evidence",zh:"新證據",d:"上訴時先提交嘅證據。要證明原審時合理地拎唔到，先可能被接納。"},
  absence:{en:"hearing in absence",zh:"缺席聆訊",d:"一方冇出席，審裁處可以照樣聆訊同作出決定。"},
  ecr2:{en:"entry condition report",zh:"入住狀況報告",d:"租約開始時記錄物業狀況。冇呢份報告，業主好難證明損壞係租客造成。"}
};
const E = {
  R1:{t:"冇入住狀況報告",s:"for",side:"對租客有利",d:"審裁處面前冇入住狀況報告，冇辦法比較租約開始同完結時嘅狀況。",ref:"判詞第 27 段"},
  R2:{t:"退租相片",s:"against",side:"對租客不利",d:"業主有 7 月 6 日同 8 日影嘅相，同退租狀況報告。",ref:"判詞第 12 段"},
  R3:{t:"清潔、維修發票",s:"against",side:"對租客不利",d:"有花園、清潔（$735）同雜工發票，但點解要做，冇清楚解釋。",ref:"判詞第 12、28 段"},
  R4:{t:"車房油漬",s:"against",side:"對租客不利",d:"租客承認車房地下有油漬。",ref:"判詞第 11 段"},
  R5:{t:"業主冇出席聆訊",s:"for",side:"對租客有利",d:"審裁處打咗三次電話俾業主，佢都冇出席，聆訊照常進行。",ref:"判詞第 3、10 段"},
  R6:{t:"冇證明有盡力再放租",s:"for",side:"對租客有利",d:"業主追討提早解約損失，但冇提交有減輕損失嘅證據。",ref:"判詞第 25–26 段"}
};
const S = [
 {ch:"第一幕", title:"退租", sub:"昆士蘭", bg:"bg_rental"},
 {who:"May 姐", img:"c_mentor", text:"租樓爭按金，係 QCAT 最常見嘅案件之一。今日呢單由業主一方睇，你會發現一份文件有幾重要。"},
 {who:"旁白", text:"2022 年 2 月，三位租客簽咗{{gta}}，租期至 9 月，每星期租金 $685，{{bond}} $2,740。", ref:"判詞第 7 段"},
 {who:"旁白", text:"7 月 6 日，租客提早兩星期通知後搬走。", ref:"判詞第 7 段", terms:["breaklease"]},
 {who:"業主", img:"r_lessor", text:"佢哋未夠期就走，間屋又要清潔、維修。我要追：租金損失 $3,914、清潔 $120、維修 $770、地板 $250、再放租 $880、廣告 $220。", ref:"判詞第 8 段"},
 {who:"租客", img:"r_tenant", text:"我哋申請退返按金。之前代理話過可以提早走、唔使罰。", ref:"判詞第 4、8 段"},
 {q:"按金由邊個保管？", img:"r_tenant", opts:[
   {t:"業主自己袋住", fb:"昆州唔係咁。"},
   {t:"住宅租務局（RTA）", ok:1, fb:"啱！按金存放喺 RTA。雙方同意先會發放；有爭議就由 QCAT 決定。"},
   {t:"地產代理", fb:"代理收咗按金之後要交俾 RTA。"}
 ]},

 {ch:"第二幕", title:"證據", sub:"QCAT・小額租務糾紛", bg:"bg_qcat"},
 {who:"業主", img:"r_lessor", text:"我有退租時影嘅相、退租狀況報告，仲有清潔同維修發票。", gain:"R2"},
 {who:"旁白", text:"發票包括花園、$735 嘅清潔同雜工，不過點解要做呢啲工作，冇清楚解釋。", gain:"R3"},
 {who:"旁白", text:"但係，審裁處面前冇{{ecr2}}。", gain:"R1"},
 {q:"點解冇入住狀況報告咁致命？", img:"r_lessor", opts:[
   {t:"因為法例規定冇報告就唔可以追任何錢", fb:"唔係絕對，但會令舉證非常困難。"},
   {t:"因為業主要證明租客違反 s 188，冇「開始時嘅狀況」就冇得比較", ok:1, fb:"啱！{{s188}}要求租客還原到租約開始時嘅狀況（{{fwt}}除外）。冇入住報告，就證明唔到損壞係租住期間造成。", ref:"判詞第 20、27 段"},
   {t:"因為相片唔可以做證據", fb:"相片可以做證據，但要有對比。"}
 ]},
 {who:"旁白", text:"2022 年 9 月 27 日聆訊。審裁處打咗三次電話俾業主，佢都冇出席。", gain:"R5", terms:["absence"]},
 {who:"租客", img:"r_tenant", text:"車房地下嗰笪油漬，我承認係我哋整嘅。", gain:"R4"},
 {who:"旁白", text:"至於提早解約嘅損失，業主冇提交任何有盡力再放租、減輕損失嘅證據。", gain:"R6", terms:["mitigation"]},
 {multi:3, q:"揀 3 張證據，最能解釋點解業主大部分索償失敗。", img:"l_member", pool:["R1","R2","R3","R4","R5","R6"], right:["R1","R6","R3"], half:["R5"],
   fb:"冇入住報告，證明唔到租客違反 s 188（R1）；維修同清潔點解需要，冇解釋清楚（R3）；提早解約嘅損失，冇證據顯示業主有{{mitigation}}（R6）。業主冇出席（R5）都令佢失去解釋嘅機會。", ref:"判詞第 25–28 段"},
 {who:"審裁員", img:"l_member", judge:1, text:"答辯人（業主）缺席。租客承認車房油漬，判 $100。其餘索償不獲批准，按金餘額 $2,640 退還租客。", ref:"判詞第 1、11 段"},

 {ch:"第三幕", title:"上訴", sub:"QCAT 上訴審裁處", bg:"bg_qcat"},
 {who:"業主", img:"r_lessor", text:"我要上訴！我仲有新證據：再放租發票 $1,100、上訴費收據、新租客幾時入住。", ref:"判詞第 14 段"},
 {q:"上訴時先拎出嚟嘅新證據，審裁處會唔會接納？", img:"l_member", opts:[
   {t:"一定會，越多證據越好", fb:"上訴唔係補交功課嘅機會。"},
   {t:"要證明原審時合理地拎唔到、會影響結果、而且可信", ok:1, fb:"啱！{{freshev}}有嚴格條件。再放租發票日期係 8 月 15 日，聆訊前六個星期已經有，所以唔接納。", ref:"判詞第 15–16 段"},
   {t:"只要律師簽名就會接納", fb:"同律師簽名無關。"}
 ]},
 {predict:{img:"l_member", intro:"上訴審裁員準備作出決定。輪到你估。", button:"宣佈決定", items:[
   {q:"業主上訴結果？", short:"上訴結果", opts:["批准上訴，業主追返損失","上訴許可被拒，原判維持"], answer:1, pts:20},
   {q:"業主仲有冇其他出路？", short:"其他出路", opts:["完全冇","可以考慮另行提出賠償申索，但隔咗咁耐好難證明"], answer:1, pts:10}]}},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"Without an {{ecr2}}, the lessor could not prove a breach of {{s188}}. There was no evidence of {{mitigation}} of loss. The {{freshev}} was reasonably available at the hearing.", zh:"冇入住狀況報告，業主未能證明租客違反第 188 條。亦冇減輕損失嘅證據。而新證據喺聆訊時已經可以合理取得。"}, ref:"判詞第 16、25–28 段"},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"{{leave}} is refused, and the application is {{dismissed}}.", zh:"上訴許可被拒，申請駁回。"}, ref:"判詞第 31 段"},
 {who:"May 姐", img:"c_mentor", text:"租樓嘅教訓：入住時影晒相、睇清楚入住狀況報告、有唔同意就寫低並交返。退租時再影一次。業主同租客都適用。"},
 {who:"May 姐", img:"c_mentor", text:"另外，聆訊一定要出席。唔出席，就等於放棄講解嘅機會。"},
 {end:1}
];
QCF.register({
  id:"c11", cat:"debt", title:"沒有入住報告", tagline:"業主有相有發票，點解追唔到錢？",
  court:"QCAT", cite:"Wysocki v Etri [2024] QCATA 104",
  citeFull:"Wysocki v Etri [2024] QCATA 104（QCAT Appeal Tribunal，A/Senior Member Lember，2024 年）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qcata/2024/104",
  coverBg:"bg_rental",
  intro:"租客提早搬走，業主追討租金、清潔同維修共六千幾蚊。佢有相、有發票，但缺少一份最基本嘅文件。",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情取自上訴判詞。",
    lessons:["昆州租務由{{rtraa}}規管，{{bond}}由 RTA 保管。",
      "{{s188}}：租客要還原物業，但{{fwt}}除外。",
      "冇{{ecr2}}，業主好難證明損壞係租住期間造成。",
      "追討{{breaklease}}損失，要證明有{{mitigation}}。",
      "上訴唔係補交證據嘅機會；{{freshev}}條件好嚴。聆訊一定要出席。"]}
});
})();
