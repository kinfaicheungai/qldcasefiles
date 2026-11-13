/* Case 10 — Imseeh (Migration) [2022] AATA 2245 (AAT decision summary) */
(function(){
const T = {
  partnervisa:{en:"partner visa",zh:"配偶簽證",d:"澳洲公民或永久居民嘅配偶或事實伴侶申請嘅簽證，通常先批臨時、兩年後再審批永久。"},
  sponsor:{en:"sponsor",zh:"擔保人",d:"為配偶申請簽證提供擔保嘅澳洲公民或永久居民。"},
  delegate:{en:"delegate of the Minister",zh:"部長授權官員",d:"移民局入面代部長作決定嘅官員。"},
  spouse5f:{en:"spouse (s 5F Migration Act)",zh:"配偶的法定定義",d:"要有：雙方對共同生活作出承諾、排除其他人；關係真實並持續；同住或者唔係長期分開。"},
  mutual:{en:"mutual commitment to a shared life",zh:"對共同生活的相互承諾",d:"配偶定義嘅核心：雙方承諾以夫妻身份共同生活，排除其他人。"},
  four:{en:"four aspects (reg 1.15A)",zh:"四個考慮方面",d:"移民規例 1.15A：財務、家庭居住、社交、雙方承諾。"},
  aat:{en:"Administrative Appeals Tribunal (AAT)",zh:"行政上訴審裁處",d:"覆核移民等政府決定嘅審裁處。2024 年 10 月起由 Administrative Review Tribunal (ART) 取代。"},
  affirm:{en:"affirmed",zh:"維持（原決定）",d:"審裁處同意原本嘅決定，唔作改變。"},
  remitted2:{en:"remitted",zh:"發還",d:"法院或審裁處將案件送返重新決定。"},
  judicialrev:{en:"judicial review",zh:"司法覆核",d:"法院審查政府或審裁處嘅決定有冇法律錯誤，唔係重新判斷事實。"},
  thirdparty:{en:"third-party evidence",zh:"第三方證據",d:"親友等其他人提供嘅證據，例如證人聲明（Form 888）。"}
};
const E = {
  V1:{t:"十年關係",s:"for",side:"對申請人有利",d:"兩人 2013 年 3 月結婚，關係維持大約十年。",ref:"AAT 決定摘要"},
  V2:{t:"聯名戶口、信件",s:"for",side:"對申請人有利",d:"提交咗聯名銀行戶口資料同寄到同一地址嘅信件。",ref:"AAT 決定摘要"},
  V3:{t:"親友認可",s:"for",side:"對申請人有利",d:"第三方證據顯示其他人相信段關係真實，近親亦認可。",ref:"AAT 決定摘要"},
  V4:{t:"日常生活答案唔一致",s:"against",side:"對申請人不利",d:"兩人講日常生活同家居安排時，答案前後唔一致。",ref:"AAT 決定摘要"},
  V5:{t:"唔熟繼子",s:"against",side:"對申請人不利",d:"申請人講唔出繼子嘅興趣、朋友同學業嘅細節。",ref:"AAT 決定摘要"},
  V6:{t:"情感支持證據好少",s:"against",side:"對申請人不利",d:"關於雙方點樣互相安慰、支持，申請人提供嘅證據非常有限。",ref:"AAT 決定摘要"},
  V7:{t:"一齊出席社交活動",s:"for",side:"對申請人有利",d:"審裁處接納兩人一齊社交，以夫妻身份出現。",ref:"AAT 決定摘要"}
};
const S = [
 {ch:"第一幕", title:"十年夫妻", sub:"配偶簽證", bg:"bg_office"},
 {who:"May 姐", img:"c_mentor", text:"今日講{{partnervisa}}。你做傳譯，移民局面試同審裁處聆訊都好常見。呢單案嘅結果，好多人聽完都唔信。"},
 {who:"旁白", text:"申請人來自約旦。2013 年 1 月持未婚夫妻簽證嚟澳洲，3 月同澳洲籍嘅{{sponsor}}結婚，5 月獲批臨時配偶簽證。", ref:"AAT 決定摘要"},
 {who:"申請人", img:"v_applicant", text:"我哋結婚差唔多十年，有聯名戶口，親戚朋友都知我哋係夫妻。", gain:"V1"},
 {who:"旁白", text:"2017 年，{{delegate}}拒絕批出永久配偶簽證，理由係唔信納申請人係擔保人嘅配偶。", ref:"AAT 決定摘要"},
 {q:"申請人要證明嘅核心係咩？", img:"v_applicant", opts:[
   {t:"有一張結婚證書", fb:"結婚證書唔夠。移民法要求嘅係真實、持續嘅配偶關係。"},
   {t:"雙方對以夫妻身份共同生活、排除其他人作出相互承諾，而且關係真實持續", ok:1, fb:"啱！呢個係《移民法》s 5F 嘅{{spouse5f}}，核心係{{mutual}}。", ref:"Migration Act 1958 s 5F；AAT 決定摘要"},
   {t:"擔保人有足夠收入", fb:"收入唔係呢度嘅問題。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"審裁處會睇{{four}}：財務、家庭居住、社交、雙方承諾。全部加埋一齊判斷。"},

 {court:"aat:review", ch:"第二幕", title:"審裁處聆訊", sub:"Administrative Appeals Tribunal", bg:"bg_qcat"},
 {who:"旁白", text:"2018 年 8 月，{{aat}}維持拒簽。申請人向聯邦法院申請{{judicialrev}}，法院將案件{{remitted2}}審裁處重新決定。", ref:"AAT 決定摘要"},
 {who:"擔保人", img:"v_sponsor", text:"我哋有聯名戶口，信都寄去同一個地址。", gain:"V2"},
 {who:"旁白", text:"親友提供咗{{thirdparty}}，近親都認可呢段婚姻。", gain:"V3"},
 {who:"旁白", text:"審裁處接納兩人一齊社交，以夫妻身份出現。審裁員之後分別問兩人日常生活同家居安排。", gain:"V7"},
 {who:"審裁員", img:"l_member", judge:1, text:"你講吓你繼子平時有咩興趣、同咩朋友玩、讀書點樣？"},
 {who:"申請人", img:"v_applicant", text:"佢……鍾意玩……我唔係好清楚。", gain:"V5"},
 {who:"旁白", text:"兩人講家居同日常生活嘅答案前後唔一致。講到點樣互相安慰同支持，申請人講得好少。", gain:"V4"},
 {who:"旁白", text:"（審裁處記錄：關於情感支持嘅證據非常有限。）", gain:"V6"},
 {multi:3, q:"揀 3 張證據，審裁處最可能用嚟拒絕簽證。", img:"l_member", pool:["V1","V2","V3","V4","V5","V6","V7"], right:["V4","V5","V6"],
   fb:"審裁處認為：日常生活答案唔一致（V4）、唔熟悉繼子（V5）、情感支持證據好少（V6），呢啲比十年關係、聯名戶口同親友認可更有份量。佢嘅推論係：一齊住咗十年嘅人，應該更了解對方。", ref:"AAT 決定摘要"},

 {ch:"第三幕", title:"決定", sub:"2022 年 7 月", bg:"bg_qcat"},
 {predict:{img:"l_member", intro:"審裁處準備作出決定。輪到你估。", button:"宣佈決定", items:[
   {q:"結婚十年、有聯名戶口、親友認可，結果係？", short:"簽證結果", opts:["批出永久配偶簽證","維持拒簽"], answer:1, pts:20},
   {q:"審裁處有冇考慮正面證據？", short:"正面證據", opts:["冇，完全忽略","有考慮，但認為被負面證據蓋過"], answer:1, pts:10}]}},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"The Tribunal has given weight to the {{thirdparty}}, the length of the relationship and its recognition by close family. However, the inconsistent evidence about the couple's household and daily life outweighs those matters.", zh:"本審裁處已考慮第三方證據、關係嘅長度同近親嘅認可。不過，關於兩人家居同日常生活嘅不一致證據，份量更重。"}, ref:"AAT 決定摘要"},
 {who:"審裁員", img:"l_member", judge:1, ruling:{en:"The Tribunal is not satisfied that the applicant and the sponsor have a {{mutual|mutual commitment to a shared life}} as husband and wife to the exclusion of all others. The decision under review is {{affirm}}.", zh:"本審裁處唔信納申請人同擔保人有以夫妻身份共同生活、排除其他人嘅相互承諾。維持被覆核嘅決定。"}, ref:"AAT 決定摘要"},
 {who:"May 姐", img:"c_mentor", text:"對比另一單 2023 年嘅案（Carle）：審裁處逐一睇齊四個方面，財務支援、聯名租約、親友認可、對將來嘅計劃全部吻合，結果批出簽證。", ref:"Carle (Migration) [2023] AATA 879 決定摘要"},
 {who:"May 姐", img:"c_mentor", text:"教訓：配偶簽證唔係講「結咗幾耐」，係講你哋講出嚟嘅生活細節夾唔夾。面試前唔好背稿，但要誠實、具體。做傳譯時，逐字準確亦好關鍵。"},
 {end:1}
];
QCF.register({
  id:"c10", cat:"visa", title:"十年夫妻", tagline:"結婚十年，配偶簽證都可以被拒？",
  court:"AAT", cite:"Imseeh (Migration) [2022] AATA 2245",
  citeFull:"Imseeh (Migration) [2022] AATA 2245（Administrative Appeals Tribunal，Senior Member K Raif）。本案根據審裁處公佈嘅決定摘要改編。",
  url:"https://aat.gov.au/summaries-of-decisions/2022/imseeh-migration-2022-aata-2245-1-july-2022",
  coverBg:"bg_qcat",
  intro:"一對夫婦結婚差唔多十年，有聯名戶口，親友都認可。但移民局同審裁處都唔信佢哋係真夫妻。問題出喺邊？（聆訊對白經戲劇化處理，結論同理由跟足決定摘要。）",
  terms:T, evidence:E, script:S,
  ending:{source:"根據 AAT 官方決定摘要改編；細節以摘要為限。",
    lessons:["{{partnervisa}}要證明{{spouse5f}}，核心係{{mutual}}，唔止結婚證書。",
      "審裁處睇{{four}}，全部加埋一齊判斷。",
      "關係長、聯名戶口、親友認可，都可能被不一致嘅證供蓋過。",
      "拒簽可以去審裁處覆核（2024 年 10 月起係 ART）；之後仲可以向法院申請{{judicialrev}}，但只審法律錯誤。",
      "面試同聆訊：講真話、講細節；傳譯要準確，一個字都可能影響結果。"]}
});
})();
