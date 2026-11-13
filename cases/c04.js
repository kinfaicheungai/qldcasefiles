/* Case 04 — Lopez v Lopez [2018] QCATA 158 */
(function(){
const T = {
  qcat:{en:"QCAT",zh:"昆士蘭民事及行政審裁處",d:"Queensland Civil and Administrative Tribunal。處理小額錢債、租務、消費糾紛等，程序比法院簡單。"},
  mcd:{en:"minor civil dispute",zh:"小額民事糾紛",d:"QCAT 處理嘅小額案件，例如 $25,000 或以下嘅錢債（minor debt）。通常唔使律師。"},
  lod:{en:"letter of demand",zh:"追款信",d:"正式要求對方喺限期內還錢嘅信，通常係入紙前嘅第一步。"},
  advancement:{en:"presumption of advancement",zh:"贈與推定",d:"某啲關係（例如父母俾錢子女）之下，法律可能推定筆錢係送，唔係借。俾錢嘅一方要有證據推翻。"},
  legalrel:{en:"intention to create legal relations",zh:"建立法律關係的意圖",d:"雙方係咪有意令協議有法律約束力。家人之間嘅安排要有證據顯示呢個意圖。"},
  credit:{en:"credit / credibility",zh:"可信度",d:"證人講嘅嘢有幾可信。由聽證嘅審裁員判斷，上訴好少推翻。"},
  glaring:{en:"glaringly improbable",zh:"明顯不可能",d:"上訴推翻事實裁斷嘅高門檻：原審結論要明顯唔合理先會干預。"},
  adjudicator:{en:"adjudicator / member",zh:"審裁員",d:"QCAT 嘅決策者。小額案由 adjudicator 處理，上訴由 member 處理。"}
};
const E = {
  L1:{t:"2014 年嘅 $10,000",s:"neutral",side:"雙方都承認",d:"Dean 承認收過，但話係阿爸送嘅。Colin 話係借，Dean 應承分期還。",ref:"判詞第 1、5–6 段"},
  L2:{t:"唔見咗嘅收據",s:"against",side:"對 Colin 不利",d:"Colin 話第二筆 $5,000 有收據，但搵唔返，佢懷疑 Dean 喺佢屋企拎走咗文件。",ref:"判詞第 5 段"},
  L3:{t:"銀行提款紀錄",s:"for",side:"對 Colin 有利",d:"2015 年 7 月 17 日提款 $5,000。Colin 話 Dean 陪佢一齊去銀行。",ref:"判詞第 11 段"},
  L4:{t:"追款信後嘅 $50",s:"for",side:"對 Colin 有利",d:"2017 年 9 月追款信寄出後，Dean 喺 10 月 23 日轉咗 $50 俾 Colin。Dean 話係佢借俾阿爸。",ref:"判詞第 1、11 段"},
  L5:{t:"Dean 應承還錢",s:"for",side:"對 Colin 有利",d:"Colin 嘅證供：Dean 應承分期還第一筆，第二筆兩個禮拜內還。",ref:"判詞第 1、5、8 段"}
};
const S = [
 {ch:"第一幕", title:"借定送？", sub:"黃金海岸・社區法律中心", bg:"bg_office"},
 {who:"旁白", text:"2017 年 9 月。May 姐帶你去黃金海岸嘅分區法律中心幫手。"},
 {who:"Colin", img:"l_father", text:"我係 Colin，靠養老金生活。2014 年我俾咗 $10,000 個仔 Dean，佢應承分期還俾我。", gain:"L1"},
 {who:"Colin", img:"l_father", text:"2015 年佢又問我借 $5,000，話兩個禮拜就還。到而家，一蚊都冇。", gain:"L5"},
 {who:"Colin", img:"l_father", text:"第二筆我有收據㗎，不過搵唔返。我估係 Dean 喺我屋企拎走咗啲文件。", gain:"L2"},
 {who:"Colin", img:"l_father", text:"我仲有銀行紀錄：2015 年 7 月 17 日提咗 $5,000，Dean 陪我一齊去銀行。", gain:"L3"},
 {q:"一萬幾蚊嘅錢債，最直接喺邊度追？", img:"l_father", opts:[
   {t:"最高法院", fb:"殺雞用牛刀，費用同時間都唔化算。"},
   {t:"QCAT 嘅小額錢債（minor debt）", ok:1, fb:"啱！$25,000 或以下嘅錢債可以喺{{qcat}}以{{mcd}}處理，通常唔使律師。", terms:["qcat","mcd"]},
   {t:"報警", fb:"借錢唔還通常係民事糾紛，唔係刑事。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"第一步，我哋幫 Colin 寄{{lod}}，俾 Dean 一個限期。"},
 {who:"旁白", text:"2017 年 9 月 19 日，法律中心寄出追款信。10 月 23 日，Dean 轉咗 **$50** 俾 Colin。之後就冇然後。", gain:"L4", ref:"判詞第 1 段及註 12"},

 {court:"qcat:tribunal", ch:"第二幕", title:"審裁處", sub:"QCAT・Southport", bg:"bg_qcat"},
 {who:"旁白", text:"2018 年 2 月，Colin 入紙 QCAT，追討本金 $14,950 加利息 $748，共 $15,698。", ref:"判詞第 2 段"},
 {who:"旁白", text:"2018 年 5 月 9 日，Southport 聆訊。兩父子都冇律師。", ref:"判詞第 3 段", terms:["adjudicator"]},
 {who:"Dean", img:"l_son", text:"嗰 $10,000 係阿爸送俾我嘅。第二筆 $5,000？我根本冇收過。"},
 {who:"Dean", img:"l_son", text:"至於嗰 $50，係我借俾阿爸，唔係還錢。"},
 {q:"審裁員要處理嘅問題，以下邊條**唔係**？", img:"l_son", opts:[
   {t:"$10,000 係贈與定借款", fb:"呢條係核心問題之一。"},
   {t:"$5,000 有冇俾過；如果有，係贈與定借款", fb:"呢條都係審裁員列出嘅問題。"},
   {t:"Dean 係咪一個孝順嘅仔", ok:1, fb:"啱！道德評價唔係法律問題。審裁員列出嘅係：$10,000 係贈與定借款；$5,000 有冇俾過；有嘅話係贈與定借款。", ref:"判詞第 7 段"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"父母俾錢子女，法律上可能有{{advancement}}，即係推定係送。所以 Colin 要有證據推翻佢。", ref:"判詞第 9 段"},
 {q:"以下邊樣最有助 Colin 推翻「送」嘅推定？", img:"c_mentor", opts:[
   {t:"Colin 係 Dean 嘅阿爸", fb:"呢點正正係推定嘅來源，幫唔到 Colin。"},
   {t:"Dean 應承還錢，而且金額大，唔似禮物", ok:1, fb:"啱！審裁員認為雙方有{{legalrel}}，有還款協議；金額大，性質唔似贈與，足以推翻推定。", ref:"判詞第 8–9 段"},
   {t:"Colin 而家需要錢做膝頭手術", fb:"需要錢唔等於當初係借。"}
 ]},
 {multi:2, q:"揀 2 張證據，最能支持「第二筆 $5,000 真係俾咗 Dean」。", img:"c_mentor", pool:["L1","L2","L3","L4","L5"], right:["L3","L5"], half:["L4"],
   fb:"審裁員裁定 $5,000 有俾過，而且係借款。上訴判詞提到嘅支持材料包括：當日提款 $5,000 嘅銀行紀錄（L3），同 Colin 對借款經過嘅證供（L5）。收據唔見咗（L2）本身係弱點。$50（L4）主要影響 Dean 講法嘅可信度。", ref:"判詞第 11–13 段"},
 {predict:{img:"l_father", intro:"審裁員準備宣佈決定。輪到你估。", button:"宣佈決定", items:[
   {q:"$10,000 係？", short:"$10,000", opts:["借款，要還","贈與，唔使還"], answer:0, pts:10},
   {q:"$5,000 呢？", short:"$5,000", opts:["有俾過，而且係借款","冇足夠證據證明俾過"], answer:0, pts:10}]}},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"I find that both sums were loans, not gifts. There was an {{legalrel}}, and the evidence is sufficient to {{rebut}} any {{advancement}}. The respondent is to pay the applicant $15,000 within 14 days.", zh:"本席裁定兩筆款項都係借款，唔係贈與。雙方有建立法律關係嘅意圖，證據亦足以推翻任何贈與推定。答辯人須於 14 日內向申請人支付 $15,000。"}, ref:"判詞第 3、8–9、12–13 段"},
 {who:"May 姐", img:"c_mentor", text:"細心啲睇：Colin 追 $15,698，判 $15,000。判決冇解釋點解，上訴時亦冇人追究，因為係 Dean 上訴。", ref:"判詞第 4 段"},

 {court:"qcata:appeal", ch:"第三幕", title:"上訴", sub:"QCAT 上訴審裁處", bg:"bg_qcat"},
 {who:"旁白", text:"Dean 唔服，想上訴。"},
 {q:"QCAT 小額民事案要上訴，第一步係？", img:"l_son", opts:[
   {t:"直接上訴，自動重新審過", fb:"小額民事案冇自動上訴權。"},
   {t:"先申請上訴許可（leave to appeal）", ok:1, fb:"啱！小額民事糾紛要先得到{{leave}}，背後政策係小額案原則上應該一錘定音。", ref:"QCAT Act s 142(3)；判詞第 14、16 段"},
   {t:"轉去最高法院重新起訴", fb:"唔可以咁樣繞過 QCAT 嘅決定。"}
 ]},
 {who:"Dean", img:"l_son", text:"阿爸根本唔急住要錢做手術！買嗰層樓係佢主動嘅，嗰啲錢係送俾我嘅，層樓都係為佢好。", ref:"判詞第 14 段"},
 {q:"上訴審裁員會唔會俾 Dean 將成件事「再講一次」？", img:"l_member", opts:[
   {t:"會，上訴就係重新聽證供", fb:"錯。上訴唔係重新審訊。"},
   {t:"唔會，除非原審有法律錯誤，或者事實裁斷明顯不可能", ok:1, fb:"啱！上訴唔係重新審訊，唔可以重複已被否定嘅證供，或者提出原審時已經可以提出嘅材料。要推翻，須顯示可爭辯嘅法律錯誤、明顯漠視證據，或者裁斷{{glaring}}。", ref:"判詞第 15–17 段"},
   {t:"會，只要提出新理由就得", fb:"原審時已經可以提出嘅理由，上訴時唔可以再拎出嚟。"}
 ]},
 {who:"審裁員", img:"l_member", judge:1, text:"答辯人話嗰 $50 係佢借俾父親——", quote:{en:"“somewhat implausible”", zh:"「頗難令人信服」", src:"上訴審裁員，判詞第 11 段"}},
 {who:"審裁員", img:"l_member", judge:1, text:"呢單案取決於邊個嘅證供較可信。{{credit}}屬原審審裁員嘅判斷，而佢有證據支持結論。本席搵唔到可上訴嘅錯誤。", ref:"判詞第 10、17–19 段"},
 {q:"最後結果係？", img:"l_member", opts:[
   {t:"上訴許可申請被駁回，Dean 要還錢", ok:1, fb:"啱！申請上訴許可被駁回，原判維持。", ref:"判詞第 19–20 段"},
   {t:"批准上訴，發還重審", fb:"審裁員搵唔到錯誤，冇理由發還。"},
   {t:"改判 $10,000 為贈與", fb:"上訴審裁員冇推翻任何事實裁斷。"}
 ]},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"An appeal is not a retrial. The applicant has shown no arguable error of law, and no finding that is {{glaring}}. The {{credit|credit}} findings were for the adjudicator. The application for {{leave}} is {{dismissed}}.", zh:"上訴唔係重新審訊。申請人未能指出任何可爭辯嘅法律錯誤，亦冇任何明顯不可能嘅事實裁斷。可信度屬原審審裁員嘅判斷。上訴許可申請駁回。"}, ref:"判詞第 15–20 段"},
 {who:"May 姐", img:"c_mentor", text:"教訓好簡單：借錢俾屋企人，寫低條款、雙方簽名、用銀行轉賬留紀錄。收據要影相備份。"},
 {who:"May 姐", img:"c_mentor", text:"另外記住：拎到判決唔等於拎到錢。對方唔還，仲要另外申請執行判決。"},
 {end:1}
];
QCF.register({
  id:"c04", cat:"debt", title:"阿爸借定送？", tagline:"屋企人之間嘅一萬五千蚊",
  court:"QCAT", cite:"Lopez v Lopez [2018] QCATA 158",
  citeFull:"Lopez v Lopez [2018] QCATA 158（QCAT Appeal Tribunal，Member Dr J R Forbes，2018 年 10 月 25 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qcata/2018/158",
  coverBg:"bg_qcat",
  intro:"一位靠養老金生活嘅爸爸，話借咗 $15,000 俾個仔。個仔話嗰啲係送嘅。冇正式借據，法律點判斷？",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改，案情取自上訴判詞。",
    lessons:["$25,000 或以下嘅錢債，可以喺 {{qcat}} 以{{mcd}}處理，通常第一步係{{lod}}。",
      "父母俾錢子女，可能有{{advancement}}；要推翻，就要證明雙方有還款協議同{{legalrel}}。",
      "冇收據唔等於輸：銀行紀錄、對方行為（例如收到追款信後還 $50）都係證據。",
      "QCAT 小額案要上訴，先要{{leave}}。上訴唔係重新審訊，{{credit}}判斷好難推翻。",
      "借錢俾屋企人：寫低、簽名、轉賬留紀錄。"]}
});
})();
