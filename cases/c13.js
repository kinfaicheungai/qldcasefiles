/* Case 13 — Strong v Woolworths Ltd (2012) 246 CLR 182; [2012] HCA 5 */
(function(){
const T = {
  negligence:{en:"negligence",zh:"疏忽",d:"冇用合理嘅謹慎，令別人受傷或者蒙受損失。要證明：有謹慎責任、違反責任、因果關係、損害。"},
  duty:{en:"duty of care",zh:"謹慎責任",d:"法律要求你採取合理措施避免傷害他人。商舖對顧客有呢個責任。"},
  breach:{en:"breach of duty",zh:"違反責任",d:"冇做到一個合理嘅人喺同樣情況下會做嘅事。"},
  causation:{en:"causation",zh:"因果關係",d:"損害係咪由違反責任造成。冇因果關係，即使有疏忽都唔使賠。"},
  butfor:{en:"“but for” test",zh:"「若非」測試",d:"如果冇呢個疏忽，傷害仲會唔會發生？唔會嘅話，就有因果關係。"},
  cla:{en:"Civil Liability Act",zh:"《民事責任法》",d:"各州規管人身傷害索償嘅法例。本案適用新州 2002 年版本 s 5D；昆州有類似條文（2003 年法例 s 11）。"},
  inspection:{en:"system of inspection and cleaning",zh:"定期巡查及清潔制度",d:"商舖為防止地面有危險物件而定期巡查清潔嘅安排。"},
  damages:{en:"damages",zh:"損害賠償",d:"法院判被告俾原告嘅金錢賠償。"},
  plaintiff:{en:"plaintiff / defendant",zh:"原告／被告",d:"民事訴訟中，起訴嘅一方同被起訴嘅一方。"},
  inference:{en:"inference",zh:"推論",d:"由已證明嘅事實推出另一個事實。法院可以靠或然率推論，唔一定要有直接證據。"},
  dissent:{en:"dissent",zh:"異議判決",d:"同多數法官唔同意見嘅法官所寫嘅判詞。佢唔影響結果，但有時會影響將來法律發展。"},
};
const E = {
  S1:{t:"截肢，用拐杖",s:"neutral",side:"背景",d:"原告右腳膝上截肢，要用拐杖行路。",ref:"判詞第 1 段"},
  S2:{t:"拐杖踩中薯條",s:"for",side:"對原告有利",d:"中午 12:30 左右，佢嘅拐杖踩中一條薯條（或者薯條嘅油），滑倒重摔。",ref:"判詞第 1、6 段"},
  S3:{t:"冇巡查制度",s:"for",side:"對原告有利",d:"當日 Big W 門口特賣區冇任何定期巡查同清潔安排；開舖約四個半鐘都冇人檢查過。",ref:"判詞第 3、8、33 段"},
  S4:{t:"冇人知薯條幾時跌",s:"against",side:"對原告不利",d:"冇證據顯示薯條嘅溫度或者外觀，即係冇法知道佢幾時跌落地。",ref:"判詞第 68 段"},
  S5:{t:"隔籬公共區 12:10 清潔過",s:"neutral",side:"中性",d:"商場公共區由清潔公司負責，每 15 至 20 分鐘巡一次；隔籬公共區最後一次清潔係 12:10。",ref:"判詞第 7、9 段"},
  S6:{t:"特賣區由 Woolworths 控制",s:"for",side:"對原告有利",d:"Woolworths（Big W）有獨家權利喺門口搞特賣，並且控制嗰個區域。",ref:"判詞第 1、6 段"},
  S7:{t:"午飯時間人多",s:"against",side:"對原告不利",d:"Woolworths 一方指出：意外發生喺午飯時間，薯條可能係臨跌倒前先被人跌落地。",ref:"判詞第 35–37、70 段"}
};
const S = [
 {ch:"第一幕", title:"一條薯條", sub:"2004 年 9 月・新州 Taree", bg:"bg_mall"},
 {who:"May 姐", img:"c_mentor", text:"「喺超市跣親可唔可以告？」係最多人問嘅問題之一。今日呢單係高等法院經典，關鍵唔係「有冇跣親」，而係「點樣證明」。"},
 {who:"旁白", text:"2004 年 9 月 24 日，新州 Taree 一個商場。Kate 右腳膝上截肢，用拐杖行路。", gain:"S1"},
 {who:"旁白", text:"大約中午 12:30，佢行經 Big W 門口嘅特賣區，拐杖踩中地上一條薯條，滑倒重重摔落地。", gain:"S2"},
 {who:"旁白", text:"特賣區由 Woolworths（Big W 嘅母公司）獨家使用同控制。", gain:"S6"},
 {q:"Kate 要告 Woolworths {{negligence}}，佢要證明幾樣嘢？", img:"inj_woman", opts:[
   {t:"只要證明自己喺佢範圍跣親", fb:"唔夠。法律唔係「喺你度跣親就你賠」。"},
   {t:"有謹慎責任、違反責任、因果關係、有損害", ok:1, fb:"啱！四樣缺一不可：{{duty}}、{{breach}}、{{causation}}、損害。", terms:["duty","breach","causation"]},
   {t:"要證明有人故意掉薯條", fb:"疏忽唔需要證明故意。"}
 ]},

 {ch:"第二幕", title:"清潔紀錄", sub:"District Court", bg:"bg_mall"},
 {who:"旁白", text:"調查發現：當日特賣區冇任何{{inspection}}。由開舖到意外，大約四個半鐘冇人巡過。", gain:"S3"},
 {who:"旁白", text:"隔籬嘅商場公共區由清潔公司負責，每 15 至 20 分鐘巡一次，最後一次係 12:10。", gain:"S5"},
 {who:"Woolworths 代表", img:"inj_mgr", text:"冇人知條薯條幾時跌落地。可能係佢跣親前一兩分鐘先有人跌低，咁就算我哋有巡查都發現唔到。", gain:"S4"},
 {who:"Woolworths 代表", img:"inj_mgr", text:"而且係午飯時間，人人拎住食物行嚟行去。", gain:"S7"},
 {q:"一審區域法院點判？", img:"c_judge", opts:[
   {t:"Kate 贏，判賠 $580,299.12", ok:1, fb:"啱！一審認為 Woolworths 疏忽，判賠超過五十八萬。對商場業主嘅申索就被駁回。不過，一審冇處理因果關係。", ref:"判詞第 2、11–12 段", terms:["damages"]},
   {t:"Woolworths 贏，因為冇人知薯條幾時跌", fb:"呢個係上訴庭嘅判法。"},
   {t:"商場業主要賠", fb:"一審駁回咗對業主嘅申索。"}
 ]},
 {who:"旁白", text:"Woolworths 上訴。新州上訴庭推翻判決：Kate 證明唔到{{causation}}，因為冇證據顯示就算有巡查，都會及時發現條薯條。", ref:"判詞第 3、12–15 段"},
 {who:"May 姐", img:"c_mentor", text:"呢度用嘅係{{butfor}}：如果 Woolworths 有合理巡查，Kate 仲會唔會跣親？", terms:["cla"]},

 {ch:"第三幕", title:"或然率", sub:"High Court of Australia", bg:"bg_court"},
 {who:"旁白", text:"Kate 獲{{specialleave}}，上訴到高等法院。"},
 {q:"冇人見到薯條幾時跌，Kate 仲有冇機會贏？", img:"c_judge", opts:[
   {t:"冇，冇直接證據就輸", fb:"呢個係上訴庭同異議法官嘅睇法。"},
   {t:"有，法院可以根據或然率作出推論", ok:1, fb:"啱！多數法官認為，唔需要直接證據，可以靠或然率作出{{inference}}。", ref:"判詞第 30、34 段"},
   {t:"有，因為舉證責任轉移咗俾 Woolworths", fb:"異議法官特別指出，法律上嘅舉證責任仍然喺原告。多數法官都冇話責任轉移。", ref:"判詞第 46–60 段"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"諗吓條時間線：特賣區由早上 8 點左右開始用。12:10 至 12:30 只係 20 分鐘；8 點至 12:10 係四個幾鐘。", ref:"判詞第 38 段"},
 {multi:3, q:"揀 3 張證據，最能支持「如果有合理巡查，薯條好可能會被發現」。", img:"c_judge", pool:["S1","S2","S3","S4","S5","S6","S7"], right:["S3","S5","S6"], half:["S2"],
   fb:"多數法官認為：特賣區由 Woolworths 控制（S6），但冇任何巡查制度（S3）；隔籬區域每 15 至 20 分鐘巡一次（S5），顯示合理制度應該點做。薯條較大機會喺較長嘅時段（8 點至 12:10）跌落地，合理巡查會發現。", ref:"判詞第 33–38 段"},
 {who:"法官", img:"c_judge", judge:1, text:"Heydon J 寫咗{{dissent}}：佢認為原告未能證明薯條喺 12:15 之前跌落地，結果「唔係完全令人滿意」，但係舉證責任喺原告。", ref:"判詞第 66–77 段"},

 {ch:"第四幕", title:"判決", sub:"2012 年 3 月 7 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"高等法院結果？", short:"結果", opts:["維持上訴庭：Woolworths 唔使賠","Kate 上訴得直，恢復一審賠償"], answer:1, pts:20},
   {q:"五位法官之中，幾多位支持 Kate？", short:"票數", opts:["5 比 0","4 比 1","3 比 2"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The {{plaintiff|plaintiff}} was not required to prove precisely when the chip was dropped. On the balance of probabilities, it was more likely deposited in the longer period before 12:10pm, and a reasonable {{inspection}} would probably have detected and removed it.", zh:"原告唔需要準確證明薯條幾時跌落地。按相對可能性，薯條較大機會喺 12:10 之前嗰段較長時間跌落地，而合理嘅巡查清潔制度好可能已經發現並清走佢。"}, ref:"判詞第 34–38 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{allowed|The appeal is allowed}}. The orders of the Court of Appeal are {{setaside|set aside}}, and the respondent must pay the {{costs}}.", zh:"上訴得直。撤銷上訴庭嘅命令，答辯人須支付訟費。"}, ref:"判詞第 39–40 段"},
 {who:"May 姐", img:"c_mentor", text:"教訓一（商舖）：有冇定期巡查同清潔紀錄，係疏忽案嘅關鍵。教訓二（顧客）：跣親之後即刻影相、記低時間、搵證人、要求店舖記錄事故。"},
 {who:"May 姐", img:"c_mentor", text:"昆州都有自己嘅《民事責任法》，因果關係嘅條文同新州好接近。所以呢單案喺昆州一樣有參考價值。"},
 {end:1}
];
QCF.register({
  id:"c13", cat:"classic", title:"一條薯條", tagline:"冇人見到薯條幾時跌，點證明係商舖嘅錯？",
  court:"High Court", cite:"Strong v Woolworths (2012) 246 CLR 182",
  citeFull:"Strong v Woolworths Ltd (2012) 246 CLR 182；[2012] HCA 5（High Court of Australia，French CJ, Gummow, Crennan & Bell JJ；Heydon J 異議，2012 年 3 月 7 日）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/2012/5.html",
  coverBg:"bg_mall",
  intro:"一位用拐杖嘅女士喺商場門口踩中薯條跣低。冇人見到薯條幾時跌落地，佢點樣證明係商舖嘅責任？",
  terms:T, evidence:E, script:S,
  ending:{source:"高等法院經典疏忽案。遊戲內人名已更改。",
    lessons:["{{negligence}}要證明：{{duty}}、{{breach}}、{{causation}}同損害。",
      "因果關係用{{butfor}}：冇疏忽嘅話，傷害仲會唔會發生？",
      "冇直接證據都可以靠或然率作出{{inference}}。",
      "商舖冇{{inspection}}，好容易被判疏忽。",
      "受傷後即刻：影相、記時間、搵證人、要求事故紀錄。"]}
});
})();
