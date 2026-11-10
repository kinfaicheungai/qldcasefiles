/* Case 17 — KFL v Commissioner of Police [2023] QDC 20 */
(function(){
const T = {
  contravention:{en:"contravention of a domestic violence order",zh:"違反家暴令",d:"做咗保護令禁止嘅行為，係刑事罪行。"},
  aggravated:{en:"aggravated offence",zh:"加重罪行",d:"本案指五年內曾經因違反家暴令被判刑，最高刑罰更重。"},
  plea:{en:"guilty plea",zh:"認罪",d:"被告承認控罪。法院判刑時通常會減輕刑罰。"},
  s13:{en:"s 13 Penalties and Sentences Act",zh:"《刑罰及判刑法》第 13 條",d:"法院判刑時要考慮認罪，並且要喺公開法庭講明已經考慮咗。"},
  recorded:{en:"conviction recorded",zh:"記錄定罪",d:"法院可以選擇記錄或者唔記錄定罪。唔記錄嘅話，一般唔會出現喺刑事紀錄上（法律上有例外）。"},
  s12:{en:"s 12 Penalties and Sentences Act",zh:"《刑罰及判刑法》第 12 條",d:"決定係咪記錄定罪時，法院要考慮罪行性質、被告品格同年齡，以及記錄定罪對佢經濟同社會福祉、就業嘅影響。"},
  s222:{en:"s 222 appeal (Justices Act 1886)",zh:"第 222 條上訴",d:"不服裁判法院判決，可以向區域法院上訴。"},
  housevking:{en:"House v The King error",zh:"House v The King 錯誤",d:"上訴法院干預判刑嘅標準：原審有法律或事實錯誤、考慮咗無關事項、漏咗相關事項，或者結果明顯不合理。"},
  fine:{en:"fine",zh:"罰款",d:"金錢刑罰。"},
  freshev2:{en:"fresh evidence on appeal",zh:"上訴新證據",d:"上訴時提交原審冇嘅證據，要法院批准。"},
  prosecution:{en:"prosecution / police prosecutor",zh:"控方／警方檢控官",d:"裁判法院大部分案件由警方檢控官負責檢控。"},
  antecedents:{en:"criminal history (antecedents)",zh:"刑事紀錄",d:"被告以往嘅定罪紀錄，判刑時會考慮。"}
};
const E = {
  K1:{t:"保護令條件",s:"against",side:"對上訴人不利",d:"2019 年保護令禁止佢留喺受害人住所。",ref:"判詞第 1、4 段"},
  K2:{t:"受害人俾佢入住",s:"for",side:"對上訴人有利",d:"2022 年 1 月，受害人俾佢入住一星期養病（COVID）。",ref:"判詞第 5 段"},
  K3:{t:"叫佢走都唔走",s:"against",side:"對上訴人不利",d:"受害人叫佢走，佢拒絕，直至受害人話已經報警。",ref:"判詞第 5 段"},
  K4:{t:"以前紀錄",s:"against",side:"對上訴人不利",d:"2019 年曾經違反家暴令同襲擊致身體傷害，同一受害人；當時罰 $800，冇記錄定罪。",ref:"判詞第 6 段"},
  K5:{t:"一早認罪",s:"for",side:"對上訴人有利",d:"佢喺 Southport 裁判法院認罪。",ref:"判詞第 1 段"},
  K6:{t:"送貨司機份工",s:"for",side:"對上訴人有利",d:"上訴時提交宣誓書：記錄定罪會影響佢做送貨司機嘅工作。",ref:"判詞第 8–11 段"},
  K7:{t:"冇暴力、冇恐嚇",s:"for",side:"對上訴人有利",d:"今次違反令嘅行為冇暴力、冇恐嚇，屬較低嚴重程度。",ref:"判詞第 27 段"}
};
const S = [
 {ch:"第一幕", title:"一星期", sub:"2022 年 1 月・Gold Coast", bg:"bg_home"},
 {who:"May 姐", img:"c_mentor", text:"今日睇刑事。第 3 單案講保護令點樣發出；呢單講違反保護令之後會點，同埋一個好多人唔知嘅概念：定罪「記唔記錄」。"},
 {who:"旁白", text:"2019 年 10 月，法院對 Kyle 發出保護令，其中一個條件係唔准留喺受害人嘅住所。", gain:"K1"},
 {who:"旁白", text:"2022 年 1 月 30 日，Kyle 確診 COVID，受害人俾佢入住一星期養病。", gain:"K2"},
 {who:"旁白", text:"一星期後，受害人叫佢走，佢拒絕，直至受害人話已經報警。", gain:"K3"},
 {q:"受害人自己俾佢入住，Kyle 仲算唔算違反保護令？", img:"k_driver", opts:[
   {t:"唔算，受害人同意咗", fb:"呢個係好常見嘅誤解。保護令係法院命令，受害人同意唔可以改變佢。"},
   {t:"算，保護令係法院命令，受害人同意唔會令佢失效", ok:1, fb:"啱！只有法院可以更改保護令。Kyle 留喺受害人住所，就係{{contravention}}。", ref:"判詞第 1、4 段"},
   {t:"要睇住咗幾耐", fb:"唔係關鍵。"}
 ]},
 {who:"旁白", text:"因為 Kyle 五年內曾經因違反家暴令被判刑，今次係{{aggravated}}。", gain:"K4", terms:["antecedents"]},

 {ch:"第二幕", title:"裁判法院", sub:"Southport・2022 年 4 月", bg:"bg_magistrates"},
 {who:"旁白", text:"2022 年 4 月 8 日，Kyle 喺 Southport 裁判法院{{plea}}。", gain:"K5"},
 {who:"檢控官", text:"控方要求記錄定罪。", ref:"判詞第 19 段", terms:["prosecution"]},
 {who:"旁白", text:"辯方冇就呢點爭辯。裁判官判{{fine}} $800，並且記錄定罪。判刑理由冇提到認罪，亦冇解釋點解記錄定罪。", ref:"判詞第 1、13、19 段"},
 {q:"「記錄定罪」同「唔記錄定罪」，分別喺邊？", img:"c_mentor", opts:[
   {t:"冇分別，都係有罪", fb:"兩者都係有罪，但後果好唔同。"},
   {t:"唔記錄定罪，一般唔會出現喺刑事紀錄，對搵工、簽證、出國影響細好多", ok:1, fb:"啱！所以法院決定{{recorded}}時，要考慮{{s12}}嘅因素，包括對就業嘅影響。", ref:"判詞第 24、26 段"},
   {t:"唔記錄定罪即係唔使罰", fb:"唔係，罰款照罰。"}
 ]},
 {who:"Kyle", img:"k_driver", text:"我係送貨司機。有刑事紀錄，我可能會冇咗份工。", gain:"K6"},

 {ch:"第三幕", title:"上訴", sub:"District Court・Southport", bg:"bg_court"},
 {who:"旁白", text:"Kyle 根據{{s222}}上訴。法院批准佢修改上訴理由，並提交{{freshev2}}：一份關於工作影響嘅宣誓書。", ref:"判詞第 2–3、8–11 段"},
 {who:"法官", img:"c_judge", judge:1, text:"上訴法院審查判刑，要搵到{{housevking}}先會干預。", ref:"判詞第 7 段"},
 {multi:2, q:"揀 2 個裁判官嘅程序錯誤，最能支持上訴。", img:"c_judge", pool:["K1","K2","K3","K4","K5","K6","K7"], right:["K5","K6"],
   fb:"錯誤一：Kyle 認罪（K5），但裁判官冇喺公開法庭講明已考慮認罪，違反{{s13}}。錯誤二：冇解釋點解記錄定罪，所以呢個酌情權被視為行使失誤；而就業影響（K6）根本冇人帶到裁判官面前。", ref:"判詞第 12–22 段"},
 {who:"法官", img:"c_judge", judge:1, text:"既然原審酌情權行使失誤，本庭可以重新行使：考慮罪行嚴重程度、Kyle 嘅紀錄，同埋對佢就業嘅影響。", ref:"判詞第 21–28 段"},
 {who:"旁白", text:"今次違反令嘅行為冇暴力、冇恐嚇，屬較低嚴重程度。", gain:"K7"},

 {ch:"第四幕", title:"判決", sub:"2023 年 2 月 23 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"上訴結果？", short:"上訴結果", opts:["駁回，原判維持","罪名撤銷，當冇事發生","上訴得直：罰款保留，但唔記錄定罪"], answer:2, pts:20},
   {q:"Kyle 仲係咪有罪？", short:"有罪與否", opts:["係，只係唔記錄定罪","唔係，已經無罪"], answer:0, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The magistrate did not state that the {{plea}} was taken into account, as {{s13|section 13}} requires, and gave no reasons for recording a conviction. The sentencing discretion therefore miscarried and must be exercised afresh.", zh:"裁判官冇按第 13 條講明已考慮認罪，亦冇解釋記錄定罪嘅理由。因此判刑酌情權行使失誤，必須重新行使。"}, ref:"判詞第 12–22 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Having regard to the lower seriousness of the offending, the appellant's limited history and the impact on his employment, {{allowed|the appeal is allowed}}. The sentence is set aside insofar as the conviction was recorded. No conviction is recorded.", zh:"考慮到罪行嚴重程度較低、上訴人紀錄有限，以及對佢就業嘅影響，上訴得直。原判記錄定罪嘅部分撤銷，不記錄定罪。"}, ref:"判詞第 27–30 段"},
 {who:"May 姐", img:"c_mentor", text:"留意：Kyle 仍然有罪，罰款亦照罰。贏嘅只係「唔記錄定罪」。原因係裁判官冇講清楚理由，同埋冇人提出佢份工會受影響。"},
 {who:"May 姐", img:"c_mentor", text:"對受害人嚟講，記住：就算你同意對方入屋，佢都可能犯法。想改條件，要向法院申請更改保護令。"},
 {end:1}
];
QCF.register({
  id:"c17", cat:"crim", title:"借住一星期", tagline:"受害人同意入屋，都算違反保護令？",
  court:"Magistrates → District Court", cite:"KFL v Commissioner of Police [2023] QDC 20",
  citeFull:"KFL v Commissioner of Police [2023] QDC 20（District Court of Queensland，Holliday KC DCJ，2023 年 2 月 23 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qdc/2023/20",
  coverBg:"bg_magistrates",
  intro:"一個受保護令約束嘅男人確診 COVID，受害人俾佢入住一星期。叫佢走嘅時候，佢唔肯。佢認罪、被罰款兼記錄定罪，但係上訴就有轉機。",
  warning:"本案涉及家庭暴力。如需支援，可致電 1800RESPECT（1800 737 732）或 DVConnect 1800 811 811。",
  terms:T, evidence:E, script:S,
  ending:{source:"判詞已用英文縮寫代替當事人姓名；遊戲再用化名。",
    lessons:["保護令係法院命令，受害人同意都唔會令佢失效；{{contravention}}係刑事罪行。",
      "{{plea}}會減輕刑罰，法院要按{{s13}}講明已考慮。",
      "法院可以決定{{recorded}}與否，要考慮{{s12}}嘅因素，包括對就業嘅影響。",
      "裁判法院判決可以根據{{s222}}上訴；上訴法院要搵到{{housevking}}先會干預。",
      "有影響就業嘅情況，判刑時一定要提出並提供證據。"]}
});
})();
