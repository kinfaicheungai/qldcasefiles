/* Case 09 — Stanford v Stanford (2012) 247 CLR 108; [2012] HCA 52 */
(function(){
const T = {
  fla:{en:"Family Law Act 1975 (Cth)",zh:"《1975 年家事法》（聯邦）",d:"全國適用，處理離婚、分居財產同子女安排。"},
  s79:{en:"section 79 property order",zh:"第 79 條財產令",d:"法院更改夫妻財產權益嘅命令。"},
  justeq:{en:"just and equitable",zh:"公正和衡平",d:"s 79(2)：法院必須信納作出財產令係公正和衡平，先可以作出。呢個係獨立嘅門檻。"},
  contrib:{en:"contributions",zh:"貢獻",d:"s 79(4)：雙方對財產嘅財務同非財務貢獻（包括持家、照顧家庭）。"},
  caseguardian:{en:"case guardian",zh:"訴訟監護人",d:"代表冇能力處理訴訟嘅人（例如患認知障礙）進行訴訟嘅人。"},
  involuntary:{en:"involuntary separation",zh:"非自願分開",d:"雙方唔係因為婚姻破裂而分開，而係因為疾病、入住護老院等原因。"},
  maintenance2:{en:"spousal maintenance",zh:"配偶贍養費",d:"一方支援另一方生活需要嘅費用。本案法院認為太太嘅需要可以用贍養費處理。"},
  intact:{en:"intact marriage",zh:"未破裂的婚姻",d:"雙方仍然係夫妻、冇打算分開。"},
  lpr:{en:"legal personal representative",zh:"遺產代理人",d:"死者過身後代表佢遺產嘅人，例如遺囑執行人。"},
  moral:{en:"moral obligation",zh:"道德責任",d:"上訴庭以此為理由，但高等法院認為唔係法律依據。"}
};
const E = {
  F1:{t:"結婚 37 年",s:"neutral",side:"背景",d:"1971 年結婚，兩人都係第二次婚姻，各有前段婚姻嘅子女。一齊住咗 37 年。",ref:"判詞第 4–5 段"},
  F2:{t:"屋喺丈夫名下",s:"against",side:"對太太一方不利",d:"珀斯嘅屋係丈夫同前妻買，登記喺丈夫名下。",ref:"判詞第 5 段"},
  F3:{t:"中風入住護老院",s:"for",side:"對太太一方有利",d:"2008 年 12 月太太中風，之後患上認知障礙，要長期住護老院，唔可以返屋企。",ref:"判詞第 7 段"},
  F4:{t:"丈夫繼續照顧",s:"against",side:"對太太一方不利",d:"丈夫繼續供養太太，存咗大約 $40,000 入戶口支付佢嘅醫療同其他開支。",ref:"判詞第 7、57 段"},
  F5:{t:"冇人想離婚",s:"against",side:"對太太一方不利",d:"雙方只係因為太太病情先分開住，屬非自願分開。",ref:"判詞第 2、34、44 段"},
  F6:{t:"兩份遺囑",s:"neutral",side:"背景",d:"丈夫遺囑將屋留俾自己前段婚姻嘅仔女（太太有居住權）；太太遺囑將遺產留俾自己嘅女。",ref:"判詞第 6 段"}
};
const S = [
 {ch:"第一幕", title:"沒有分開的分家", sub:"西澳・珀斯", bg:"bg_nursing"},
 {who:"May 姐", img:"c_mentor", text:"今日嘅案，用嚟講一個好多人以為理所當然、其實唔係嘅問題：夫妻之間，係咪一定可以要求「分一半」？"},
 {who:"旁白", text:"1971 年，一對中年人再婚，各自有前段婚姻嘅子女。佢哋喺珀斯一間屋住咗 37 年，屋喺丈夫名下。", gain:"F1"},
 {who:"旁白", text:"間屋係丈夫同前妻買嘅，一直登記喺佢名下。", gain:"F2"},
 {who:"旁白", text:"兩人各自立咗遺囑：丈夫將屋留俾自己嘅仔女，但太太可以住到過身；太太將遺產留俾自己嘅女。", gain:"F6"},
 {who:"旁白", text:"2008 年 12 月，太太中風，之後患上認知障礙，要長期住護老院，冇辦法返屋企。", gain:"F3"},
 {who:"丈夫", img:"s_husband", text:"我每日都掛住佢。我仲係佢老公，我存咗錢俾佢睇醫生、住護老院。", gain:"F4"},

 {ch:"第二幕", title:"女兒的申請", sub:"2009 年 8 月", bg:"bg_nursing"},
 {who:"女兒", img:"s_daughter", text:"我係我媽媽嘅{{caseguardian}}。我代佢申請：賣咗間屋，錢分一半；繼父嘅 super 同儲蓄都要平分。", ref:"判詞第 8 段"},
 {q:"雙方冇離婚、亦冇打算分開。法院有冇權處理呢個財產申請？", img:"s_daughter", opts:[
   {t:"冇，冇離婚就唔可以分財產", fb:"高等法院認為，法院**有權**處理。有冇權同應唔應該，係兩回事。"},
   {t:"有，即使婚姻未破裂，法院都有權處理", ok:1, fb:"啱！高等法院駁回咗丈夫「冇權處理」嘅論點。但有權唔等於一定要作出命令。", ref:"判詞第 25–32 段"},
   {t:"要等其中一方過身先得", fb:"錯。"}
 ]},
 {court:"wamag:trial", who:"旁白", text:"裁判官評估{{contrib}}：丈夫 57.5%，太太 42.5%，命令丈夫 60 日內支付 $612,931。", ref:"判詞第 9 段"},
 {who:"丈夫", img:"s_husband", text:"要我俾六十幾萬，即係要賣咗間我住咗幾十年嘅屋。我同佢冇離婚，我一直照顧緊佢。", gain:"F5"},

 {court:"wafull:appeal", ch:"第三幕", title:"上訴", sub:"太太過身之後", bg:"bg_court"},
 {who:"旁白", text:"丈夫上訴。家事法院合議庭聆訊之後、判決之前，太太過身。", ref:"判詞第 10 段"},
 {who:"旁白", text:"合議庭認為裁判官冇充分考慮對丈夫嘅影響、婚姻仍然完整，同埋太太需要可唔可以用贍養費處理。", ref:"判詞第 10 段", terms:["intact"]},
 {who:"旁白", text:"但合議庭之後再判：丈夫過身時，要將 42.5% 嘅金額俾太太嘅{{lpr}}，理由係婚姻帶嚟嘅{{moral}}。", ref:"判詞第 12、48 段"},
 {court:"hca:final", q:"丈夫上訴到高等法院。佢最有力嘅論點係？", img:"s_husband", opts:[
   {t:"法院根本冇權處理", fb:"呢個論點高等法院冇接納。"},
   {t:"作出財產令並唔「公正和衡平」：太太需要已經得到照顧，婚姻冇破裂", ok:1, fb:"啱！高等法院嘅重點係 s 79(2) 嘅{{justeq}}門檻。", ref:"判詞第 35–45 段"},
   {t:"太太冇貢獻", fb:"貢獻係另一個問題，而且太太有貢獻。"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"本庭要強調三點：一、由雙方現有嘅法律同衡平權益出發；二、權力要按法律原則行使，唔係任意酌情；三、唔可以假設一方有權分財產。", ref:"判詞第 36–40 段"},
 {multi:3, q:"揀 3 張證據，最能支持「作出財產令並唔公正和衡平」。", img:"c_judge", pool:["F1","F2","F3","F4","F5","F6"], right:["F3","F4","F5"], half:["F2"],
   fb:"高等法院認為：雙方係{{involuntary}}（F5）；太太已經全時間受到照顧（F3），丈夫亦提供金錢支援（F4），將來需要可以用{{maintenance2}}處理。所以冇顯示作出財產令係公正和衡平。", ref:"判詞第 43–49 段"},

 {ch:"第四幕", title:"判決", sub:"2012 年 11 月 15 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"高等法院點判？", short:"結果", opts:["維持：丈夫過身時要俾 42.5%","丈夫上訴得直，太太一方嘅申請被駁回"], answer:1, pts:20},
   {q:"上訴庭用「道德責任」做理由，高等法院點睇？", short:"道德責任", opts:["接納","唔接納，唔係法律依據"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The {{justeq|just and equitable}} requirement in section 79(2) is a separate requirement. The bare fact of an {{involuntary}} does not show that it is just and equitable to make a property order.", zh:"第 79(2) 條「公正和衡平」係獨立要求。單單非自願分開這個事實，並唔顯示作出財產令係公正和衡平。"}, ref:"判詞第 35、43 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The wife's needs were being met, and any future need could be met by {{maintenance2}}. Reference to {{moral}}s was not a legal foundation. {{allowed|The appeal is allowed}}, and the wife's application is {{dismissed}}.", zh:"太太嘅需要已經得到滿足，將來需要亦可以用配偶贍養費處理。以道德責任為理由並唔係法律依據。上訴得直，太太一方嘅申請駁回。"}, ref:"判詞第 46–54 段及命令"},
 {who:"May 姐", img:"c_mentor", text:"常識話：夫妻財產係共同嘅，可以分一半。法律話：法院唔會假設任何一方有權分財產，要先問作出命令係咪公正和衡平。"},
 {who:"May 姐", img:"c_mentor", text:"如果係一般自願分居，呢個門檻通常好容易滿足。本案特別在於雙方冇想分開，而丈夫一直照顧緊太太。", ref:"判詞第 42 段"},
 {end:1}
];
QCF.register({
  id:"c09", cat:"family", title:"沒有分開的分家", tagline:"夫妻財產一定可以分一半？",
  court:"High Court", cite:"Stanford v Stanford (2012) 247 CLR 108",
  citeFull:"Stanford v Stanford (2012) 247 CLR 108；[2012] HCA 52（High Court of Australia，French CJ, Hayne, Heydon, Kiefel & Bell JJ，2012 年 11 月 15 日）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/2012/52.html",
  coverBg:"bg_nursing",
  intro:"一對結婚 37 年嘅夫婦冇離婚。太太中風住護老院，佢個女代佢申請分一半家產。法院點判？",
  terms:T, evidence:E, script:S,
  ending:{source:"高等法院經典家事法案例。遊戲中唔使用當事人名字。",
    lessons:["分居財產由聯邦嘅{{fla}}處理，全國一致。",
      "{{s79}}要先過{{justeq}}門檻，唔可以假設一方自動有權分一半。",
      "{{contrib}}係另一個獨立問題，唔可以同「公正和衡平」混為一談。",
      "{{involuntary}}（例如入護老院）本身唔足以支持財產令。",
      "法院唔接受用{{moral}}代替法律依據。"]}
});
})();
