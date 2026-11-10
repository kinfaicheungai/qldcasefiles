/* Case 03 — FAJ v FJH [2024] QDC 23 */
(function(){
const T = {
  po:{en:"protection order",zh:"保護令",d:"法院禁止答辯人對申請人施以家暴等行為嘅民事命令。違反保護令係刑事罪行。"},
  tpo:{en:"temporary protection order",zh:"臨時保護令",d:"正式聆訊前法院先發出嘅短期保護令，通常即日處理。"},
  dvpa:{en:"Domestic and Family Violence Protection Act 2012 (Qld)",zh:"《2012 年家庭暴力保護法》（昆州）",d:"昆州處理家暴保護令嘅主要法例。"},
  aggrieved:{en:"aggrieved / respondent",zh:"受害人（申請人）／答辯人",d:"保護令案中，受保護嘅一方叫 aggrieved；被指施暴嘅一方叫 respondent。"},
  rr:{en:"relevant relationship",zh:"相關關係",d:"包括親密伴侶（夫妻、同居、前度）、家庭關係同非正式照顧關係。"},
  dvdef:{en:"domestic violence (s 8)",zh:"家庭暴力的定義",d:"唔止身體暴力，包括情緒或心理虐待、經濟虐待、威脅、恐嚇，同控制或支配、令人恐懼嘅行為。"},
  emo:{en:"emotional or psychological abuse",zh:"情緒或心理虐待",d:"折磨、恐嚇、騷擾或貶低他人嘅行為，例如威脅性訊息、跟蹤監視。"},
  coercive:{en:"coercive control",zh:"強制控制",d:"透過一連串行為控制、孤立對方，例如限制佢見家人、去邊度。"},
  necdes:{en:"necessary or desirable",zh:"必要或可取",d:"s 37 第三個條件：要評估如果冇命令，答辯人將來施暴嘅風險。"},
  principles:{en:"principles (s 4)",zh:"指導原則（第 4 條）",d:"其中最重要嘅一條：受家暴影響者嘅安全、保障同福祉係首要考慮。"},
  rehearing:{en:"appeal by way of rehearing",zh:"按原審記錄重新聆訊",d:"上訴法院主要根據原審記錄重新考慮，通常唔會再聽一次證人。"},
  pf:{en:"procedural fairness",zh:"程序公平",d:"雙方都要有合理機會陳述同回應。冇律師嘅人，法院要特別留意。"},
  srl:{en:"self-represented litigant",zh:"無律師代表的當事人",d:"自己出庭、冇律師代表嘅人。"}
};
const E = {
  D1:{t:"2021 年 1 月嘅電郵",s:"for",side:"支持 Helen",d:"Frank 承認寄過。內容有指控，並寫「我唔會停，直至你得到應得嘅報應」。",ref:"判詞第 23–25 段"},
  D2:{t:"2021 年 4 月嘅短訊",s:"for",side:"支持 Helen",d:"Frank 承認寄過。提到佢前妻，寫「我被逼埋牆角就會反擊，開始啦」。",ref:"判詞第 21–22 段"},
  D3:{t:"車慢慢駛過門口",s:"for",side:"支持 Helen",d:"2021 年 7 月，證人見到 Frank 架車慢慢駛過 Helen 屋前，Helen 好驚。",ref:"判詞第 20 段"},
  D4:{t:"「我知道你住邊」",s:"for",side:"支持 Helen",d:"2022 年 1 月 Frank 承認寄出嘅電郵：佢由 10 月已經知道 Helen 新屋喺邊。",ref:"判詞第 13、19 段"},
  D5:{t:"唔准去睇孫出世",s:"for",side:"支持 Helen",d:"Helen 話 Frank 唔准佢出席塔斯曼尼亞同 Cairns 孫仔孫女出世。",ref:"判詞第 29 段"},
  D6:{t:"一時激氣",s:"against",side:"支持 Frank",d:"Frank 話啲訊息係分家產期間激氣寫嘅。",ref:"判詞第 28 段"},
  D7:{t:"約 200 條銀條",s:"against",side:"支持 Frank",d:"Helen 離開時拎走約 200 條銀條，價值約 $200,000。",ref:"判詞第 14 段"},
  D8:{t:"等咗好耐先申請",s:"against",side:"支持 Frank",d:"Frank 指 Helen 拖咗大約 18 個月先申請；而 Helen 係 2022 年初先知道 Frank 知佢新住址。",ref:"判詞第 15、34 段"}
};
const S = [
 {ch:"第一幕", title:"保護令申請", sub:"Gympie 裁判法院", bg:"bg_magistrates"},
 {who:"旁白", text:"2022 年 9 月，Gympie 裁判法院。May 姐帶你嚟旁聽一單家暴{{po}}聆訊。"},
 {who:"May 姐", img:"c_mentor", text:"記住：保護令係民事程序，唔係刑事檢控。不過如果有人違反保護令，就係刑事罪。法例係{{dvpa}}。"},
 {who:"旁白", text:"{{aggrieved}}：申請人 Helen，答辯人 Frank。兩人 2010 年識，2011 年結婚，2017 年分開過又復合，2020 年 9 月最終分開。", ref:"判詞第 5 段"},
 {who:"旁白", text:"兩人仲喺聯邦巡迴及家事法院處理分家產，未有結果。今日兩邊都冇律師，亦冇警方參與。", ref:"判詞第 5–6、11 段", terms:["srl"]},
 {who:"May 姐", img:"c_mentor", text:"Helen 2022 年 4 月入紙申請，法院當日已經發出{{tpo}}。今日係正式聆訊。", ref:"判詞第 5 段"},
 {q:"法院要發出保護令，s 37 要求滿足邊三個條件？", img:"c_mentor", opts:[
   {t:"有身體傷害、有證人、有報警記錄", fb:"呢啲都唔係法定條件。家暴唔一定有身體傷害，亦唔一定有報警。"},
   {t:"雙方有相關關係、答辯人做過家暴、命令係必要或可取以保護申請人", ok:1, fb:"啱！三個條件全部要滿足。", ref:"DFVPA s 37(1)；判詞第 2 段", terms:["rr","necdes"]},
   {t:"答辯人被刑事定罪、申請人有驗傷報告、雙方仍然同住", fb:"保護令唔需要刑事定罪，亦唔需要同住。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"第一個條件好易：佢哋係夫妻，屬於{{rr}}，雙方都冇爭議。重點喺第二同第三個。", ref:"判詞第 12 段"},

 {ch:"第二幕", title:"訊息", sub:"冇動過手，算唔算家暴？", bg:"bg_magistrates"},
 {who:"Helen", img:"dv_her", text:"佢冇打過我。但係佢啲訊息令我好驚。"},
 {who:"Helen", img:"dv_her", text:"2021 年 1 月，佢寄電郵俾我，最後一句係：", quote:{en:"“…I won’t stop until you get what you deserve.”", zh:"「……我唔會停，直至你得到應得嘅報應。」", src:"Frank 嘅電郵，判詞第 23 段"}, gain:"D1"},
 {who:"Helen", img:"dv_her", text:"4 月佢又發短訊，提到佢前妻，話：", quote:{en:"“…I come out fighting, let it begin.”", zh:"「……（我被逼埋牆角就）會反擊，開始啦。」", src:"Frank 嘅短訊，判詞第 21 段"}, gain:"D2"},
 {who:"旁白", text:"一位證人作證：2021 年 7 月，佢見到 Frank 架車慢慢駛過 Helen 屋前，Helen 即刻好緊張。", gain:"D3"},
 {who:"Helen", img:"dv_her", text:"2022 年 1 月，我搬咗去新地方，佢寄電郵嚟：", quote:{en:"“I have known since Oct where your new home…is”", zh:"「我由十月已經知道你新屋喺邊……」", src:"Frank 嘅電郵，判詞第 13 段"}, gain:"D4"},
 {who:"Helen", img:"dv_her", text:"仲有，佢唔准我去塔斯曼尼亞同 Cairns 睇孫仔孫女出世。", gain:"D5"},
 {q:"冇身體暴力，呢啲行為都算唔算家暴？", img:"dv_her", opts:[
   {t:"唔算，一定要有身體傷害", fb:"錯。昆州嘅家暴定義範圍闊好多。"},
   {t:"算，家暴包括情緒或心理虐待、威脅、恐嚇同控制行為", ok:1, fb:"啱！s 8 嘅{{dvdef}}包括{{emo}}、威脅、恐嚇，以及控制或支配、令人恐懼嘅行為。", ref:"DFVPA ss 8、11；判詞第 2 段"},
   {t:"只有構成刑事罪行先算", fb:"錯。保護令程序唔需要證明刑事罪行。"}
 ]},
 {who:"Frank", img:"dv_him", text:"嗰啲訊息我承認係我寫嘅。但係分家產期間我好激氣，一時衝動寫出嚟，從來冇想過傷害佢。", gain:"D6"},
 {who:"Frank", img:"dv_him", text:"而且佢走嗰陣拎走咗大約 200 條銀條，值成 $200,000！", gain:"D7"},
 {who:"Frank", img:"dv_him", text:"佢等咗成 18 個月先申請。如果佢真係咁驚，點解等咁耐？", gain:"D8"},
 {q:"關於銀條，裁判官點睇？", img:"dv_him", opts:[
   {t:"銀條證明 Helen 先係施暴者，申請應該駁回", fb:"裁判官冇咁講。"},
   {t:"就算當係 Helen 對 Frank 嘅經濟控制，Helen 仍然係更需要保護嘅一方", ok:1, fb:"啱！裁判官咁樣處理銀條問題。", ref:"判詞第 14 段"},
   {t:"同本案完全無關，唔考慮", fb:"裁判官有提及並考慮，但認為唔改變結論。"}
 ]},

 {ch:"第三幕", title:"裁判官的決定", sub:"2022 年 10 月 19 日", bg:"bg_magistrates"},
 {who:"裁判官", img:"dv_mag", judge:1, text:"本席裁定：該電郵同短訊屬情緒或心理虐待，並具威脅性；禁止出席孫兒出世屬控制行為。答辯人做過家暴。", ref:"判詞第 19–29 段", terms:["coercive"]},
 {who:"裁判官", img:"dv_mag", judge:1, text:"本席接納申請人嘅困擾同脆弱。另外——", quote:{en:"“Further the respondent should be held accountable for his actions”", zh:"「此外，答辯人應為其行為負責。」", src:"裁判官判詞，引於判詞第 20 段"}},
 {who:"裁判官", img:"dv_mag", judge:1, text:"保護申請人免受將來家暴嘅命令，係必要，亦係可取。本席發出保護令。", ref:"判詞第 38 段"},
 {q:"裁判官嘅理由入面，有一句可能有法律問題。邊句？", img:"dv_mag", opts:[
   {t:"「答辯人應為其行為負責」", ok:1, fb:"啱！保護令係保護申請人**將來**唔受家暴，唔係懲罰答辯人過去嘅行為。用「要負責」做理由，就偏離咗法例要問嘅問題。", ref:"判詞第 20–21 段"},
   {t:"「訊息屬心理虐待」", fb:"呢個裁決上訴時冇人挑戰。"},
   {t:"「雙方係夫妻關係」", fb:"雙方都冇爭議。"}
 ]},
 {who:"旁白", text:"Frank 請咗大律師，向區域法院上訴。Helen 繼續冇律師。"},

 {ch:"第四幕", title:"上訴", sub:"District Court of Queensland", bg:"bg_court"},
 {who:"法官", img:"c_judge", judge:1, text:"本上訴係{{rehearing}}，根據原審記錄處理。", ref:"判詞第 7 段"},
 {who:"旁白", text:"上訴人一方最後放棄挑戰「答辯人做過家暴」嘅裁決。", ref:"判詞第 32 段"},
 {q:"咁上訴爭緊咩？", img:"c_judge", opts:[
   {t:"雙方係咪相關關係", fb:"呢點從來冇爭議。"},
   {t:"第三個條件：命令係咪「必要或可取」", ok:1, fb:"啱！上訴主要爭呢點，加埋一個程序公平嘅理由。", ref:"判詞第 1–4、32 段"},
   {t:"啲訊息係咪 Frank 寫", fb:"Frank 一早承認寫過。"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"判斷時，法院要評估：如果冇保護令，答辯人將來做出家暴嘅風險有幾大。", quote:{en:"“sufficiently significant to make it necessary or desirable”", zh:"「（風險）大到足以令命令變得必要或可取」", src:"判詞第 19 段，引 GKE v EUT"}},
 {who:"法官", img:"c_judge", judge:1, text:"法院亦要考慮 s 4 嘅{{principles}}：受家暴影響者嘅安全、保障同福祉係首要考慮。", ref:"DFVPA s 37(2)；判詞第 2 段"},
 {q:"上訴法官認為原審裁判官錯喺邊？", img:"c_judge", opts:[
   {t:"冇評估如果冇保護令，Frank 將來施暴嘅風險", ok:1, fb:"啱！裁判官集中講 Helen 嘅擔心，同 Frank 要為過去行為負責，但冇評估將來風險。", ref:"判詞第 20–21 段"},
   {t:"錯誤咁接納 Helen 嘅證人", fb:"上訴冇推翻呢方面嘅事實裁斷。"},
   {t:"唔應該考慮銀條", fb:"上訴法官冇以此為錯誤。"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"另外，Frank 話原審時有律師錯誤咁話佢知唔可以盤問 Helen，佢亦覺得被勸阻。對{{srl}}，{{pf}}嘅要求更高。本庭唔需要就呢點作出決定。", ref:"判詞第 26、31–34 段"},

 {ch:"第五幕", title:"判決", sub:"2024 年 3 月 19 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"上訴結果係？", short:"上訴結果", opts:["駁回上訴，保護令維持","撤銷保護令，申請直接駁回","撤銷原判，發還裁判法院重審"], answer:2, pts:20},
   {q:"上訴法官有冇推翻「Frank 做過家暴」嘅裁決？", short:"家暴裁決", opts:["有，裁定 Frank 冇做家暴","冇，呢點上訴時冇被挑戰"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The magistrate focused on the aggrieved's concerns and on holding the respondent accountable, but did not assess the risk of future domestic violence if no order were made. The finding that an order was {{necdes}} cannot stand.", zh:"裁判官集中考慮受害人嘅擔憂，同要答辯人為行為負責，但冇評估如果冇命令，將來發生家暴嘅風險。因此，「命令屬必要或可取」嘅裁斷唔能夠成立。"}, ref:"判詞第 20–21 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{allowed|The appeal is allowed}}. The decision of 19 October 2022 is {{setaside}}, and the application is {{remit|remitted}} to the Magistrates Court at Gympie to be determined according to law, preferably by a different magistrate.", zh:"上訴得直。撤銷 2022 年 10 月 19 日嘅決定，申請發還 Gympie 裁判法院依法重新裁決，最好由另一位裁判官處理。"}, ref:"判詞第 35 段"},
 {who:"May 姐", img:"c_mentor", text:"留意：上訴法官**冇話** Helen 唔需要保護，亦冇話 Frank 冇做家暴。佢只係話原審冇用啱方法評估將來風險，所以要重新審過。"},
 {who:"May 姐", img:"c_mentor", text:"呢類案好多當事人冇律師。你將來做傳譯都會見到：法官會特別留意雙方有冇公平機會講清楚自己嘅情況。"},
 {end:1}
];
QCF.register({
  id:"c03", cat:"dv", title:"我知道你住邊", tagline:"冇動過手，都可以係家暴",
  court:"Magistrates → District Court", cite:"FAJ v FJH [2024] QDC 23",
  citeFull:"FAJ v FJH [2024] QDC 23（District Court of Queensland，Long SC DCJ，2024 年 3 月 19 日）",
  url:"https://www.queenslandjudgments.com.au/caselaw/qdc/2024/23",
  coverBg:"bg_magistrates",
  intro:"一對分開咗嘅夫婦仲喺度爭家產。太太申請家暴保護令，證據係一封封電郵同短訊。裁判官批咗，但係上訴法院點睇？",
  warning:"本案涉及家庭暴力。如需支援，可致電 1800RESPECT（1800 737 732）或 DVConnect 1800 811 811。",
  terms:T, evidence:E, script:S,
  ending:{source:"判詞本身已用英文縮寫代替當事人姓名；遊戲再改用化名。",
    lessons:["保護令要滿足 s 37 三個條件：{{rr}}、做過家暴、命令係{{necdes}}。",
      "{{dvdef}}唔限於身體暴力：威脅性訊息、監視住址、限制見家人都可以係家暴。",
      "保護令係保護將來，唔係懲罰過去。法院要評估冇命令時將來施暴嘅風險。",
      "上訴唔一定係「贏」或「輸」：可以撤銷原判，再{{remit}}由另一位裁判官處理。",
      "{{srl}}都有權得到{{pf}}，包括有合理機會盤問對方。"]}
});
})();
