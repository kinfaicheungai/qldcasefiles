/* Case 18 — Maltby v The Trustee for Kingston Family Trust [2024] FWC 2987 */
(function(){
const T = {
  fwc:{en:"Fair Work Commission",zh:"公平工作委員會",d:"全國勞資審裁機構，處理不公平解僱等申請。"},
  unfair:{en:"unfair dismissal",zh:"不公平解僱",d:"解僱「苛刻、不公或不合理」。申請要喺解僱後 21 日內提出。"},
  hju:{en:"harsh, unjust or unreasonable",zh:"苛刻、不公或不合理",d:"判斷不公平解僱嘅標準。三樣中任何一樣成立就足夠。"},
  s387:{en:"section 387 factors",zh:"第 387 條考慮因素",d:"包括：有冇合理理由、有冇通知理由、有冇機會回應、有冇拒絕支援人士陪同、有冇警告、僱主規模同人事專業等。"},
  validreason:{en:"valid reason",zh:"合理理由",d:"解僱要有理據充分、同員工能力或行為有關嘅理由。"},
  opportunity:{en:"opportunity to respond",zh:"回應機會",d:"解僱前，員工要知道具體指控並有真正機會回應。"},
  supportperson:{en:"support person",zh:"支援人士",d:"員工開會討論解僱時可以帶嘅陪同人。僱主唔可以無理拒絕。"},
  casual:{en:"regular and systematic casual",zh:"定期而有系統的臨時工",d:"臨時工如果工作定期而有系統，並合理預期會繼續，服務期都可以計入最低受僱期。"},
  minperiod:{en:"minimum employment period",zh:"最低受僱期",d:"申請不公平解僱前要做滿嘅時間：一般僱主 6 個月，小型企業 12 個月。"},
  reinstatement:{en:"reinstatement",zh:"復職",d:"不公平解僱嘅首選補救，但好多情況唔適合。"},
  compensation:{en:"compensation",zh:"賠償",d:"代替復職嘅金錢補救，有上限，並會按員工行為等因素扣減。"},
  mitigate:{en:"mitigation of loss",zh:"減輕損失",d:"被解僱後要合理地搵工。冇咁做，賠償會被扣減。"},
  misconduct:{en:"misconduct",zh:"不當行為",d:"員工違反工作上應有嘅行為標準。"},
  award:{en:"modern award",zh:"現代行業裁決",d:"規定某行業最低工資同條件嘅文件，例如酒店業 Hospitality Award。"}
};
const E = {
  W1:{t:"差唔多七年服務",s:"for",side:"對員工有利",d:"Maya 做咗差唔多七年臨時工，定期而有系統，可以計入最低受僱期。",ref:"判詞第 5、9、36 段"},
  W2:{t:"同事投訴：恐嚇、貶低",s:"against",side:"對員工不利",d:"兩位同事投訴佢恐嚇、辱罵同貶低，包括喺 Facebook 發文針對同事，同埋握實拳頭嘅動作。委員會接納。",ref:"判詞第 13–22 段"},
  W3:{t:"$250 供應商禮券",s:"against",side:"對員工不利",d:"佢收咗供應商一張 $250 禮券自用，冇話俾僱主知。",ref:"判詞第 24–25 段"},
  W4:{t:"冇講邊個投訴、投訴乜",s:"for",side:"對員工有利",d:"僱主只話有投訴，冇講邊個投訴同具體內容。",ref:"判詞第 26–28 段"},
  W5:{t:"未見面已決定解僱",s:"for",side:"對員工有利",d:"經理見佢之前已經決定解僱，仲話佢講乜都改變唔到結果。",ref:"判詞第 29–30 段"},
  W6:{t:"只有口頭提醒",s:"neutral",side:"中性",d:"經理同佢傾過五六次佢嘅態度，但只係口頭，冇書面紀錄。",ref:"判詞第 19、36 段"},
  W7:{t:"32 個員工、冇人事專業",s:"for",side:"對員工有利",d:"僱主唔係小型企業，經理冇人事專業知識。",ref:"判詞第 34 段"}
};
const S = [
 {ch:"第一幕", title:"酒舖經理", sub:"昆州 Sunshine Coast", bg:"bg_pub"},
 {who:"May 姐", img:"c_mentor", text:"今日講僱傭法。呢單喺昆州一間鄉村酒店發生，結果好多僱主都估唔到：員工真係做錯咗，點解解僱仍然唔公平？"},
 {who:"旁白", text:"Maya 喺 Sunshine Coast 一間酒店嘅酒舖做經理，屬酒店業{{award}}範圍。", ref:"判詞第 1、4、12 段"},
 {who:"旁白", text:"佢做咗差唔多七年臨時工，每週定期返工。", gain:"W1", terms:["casual","minperiod"]},
 {who:"旁白", text:"兩位同事投訴 Maya：喺其他人面前貶低佢哋、喺 Facebook 發文針對、握實拳頭令人覺得受威脅。", gain:"W2"},
 {who:"旁白", text:"另外，Maya 收咗供應商一張 $250 禮券自用，冇話俾僱主知。", gain:"W3"},
 {q:"按常識，Maya 咁嘅行為，僱主即刻炒佢係咪一定冇問題？", img:"w_manager", opts:[
   {t:"係，做錯嘢就可以炒", fb:"有合理理由只係其中一個因素。"},
   {t:"唔一定，仲要睇解僱過程公唔公平", ok:1, fb:"啱！{{fwc}}會考慮{{s387}}，程序同理由一樣重要。", ref:"Fair Work Act 2009 s 387"},
   {t:"唔可以，臨時工唔可以炒", fb:"臨時工都可以被解僱，問題係點樣解僱。"}
 ]},

 {ch:"第二幕", title:"一次會面", sub:"2024 年 6 月 20 日", bg:"bg_pub"},
 {who:"經理", img:"w_gm", text:"我收到幾單投訴。我已經決定咗，你講乜都改變唔到。", gain:"W5"},
 {who:"Maya", img:"w_manager", text:"邊個投訴？投訴我啲乜？", gain:"W4"},
 {who:"旁白", text:"經理冇講。簡短傾咗幾句，Maya 就被解僱。佢冇被問要唔要{{supportperson}}，不過佢亦冇提出要求。", ref:"判詞第 27–32、35 段"},
 {who:"經理", img:"w_gm", text:"我之前已經同佢講過五六次佢嘅態度。", gain:"W6"},
 {who:"旁白", text:"不過全部都係口頭講，冇書面紀錄。酒店有 32 個員工，經理冇人事專業知識。", gain:"W7"},
 {who:"旁白", text:"Maya 喺限期內向公平工作委員會申請{{unfair}}。", ref:"判詞第 11 段"},

 {ch:"第三幕", title:"聆訊", sub:"Fair Work Commission", bg:"bg_qcat"},
 {q:"委員會第一個問題：解僱有冇{{validreason}}？", img:"l_member", opts:[
   {t:"有，對同事嘅不當行為同禮券都構成合理理由", ok:1, fb:"啱！委員會接納兩位同事嘅講法，亦認為收禮券係合理理由。", ref:"判詞第 23、25 段", terms:["misconduct"]},
   {t:"冇，同事投訴唔算", fb:"委員會接納咗投訴內容。"},
   {t:"冇，因為佢係臨時工", fb:"同臨時工身份無關。"}
 ]},
 {multi:3, q:"有合理理由，點解仲可能唔公平？揀 3 張證據，最能支持「解僱不公」。", img:"l_member", pool:["W1","W2","W3","W4","W5","W6","W7"], right:["W4","W5","W7"], half:["W1"],
   fb:"委員會認為：冇講清楚邊個投訴同具體內容（W4）；見面前已經決定、所謂回應只係形式（W5），即係冇真正{{opportunity}}；僱主唔細、經理冇人事專業（W7）都令程序缺陷更難接受。長期服務（W1）亦對員工有利。", ref:"判詞第 26–36 段"},
 {who:"副主席", img:"l_member", judge:1, text:"雖然有合理理由，但程序上嘅缺失令解僱屬於不公。", ref:"判詞第 30、37 段"},
 {q:"Maya 有冇要求{{reinstatement}}？委員會點處理補救？", img:"l_member", opts:[
   {t:"要求復職，委員會批准", fb:"佢冇要求復職，委員會亦認為唔適合。"},
   {t:"冇要求復職，委員會考慮金錢賠償", ok:1, fb:"啱！委員會改為考慮{{compensation}}。", ref:"判詞第 38 段"},
   {t:"乜補救都冇", fb:"有。"}
 ]},

 {ch:"第四幕", title:"決定", sub:"2024 年 10 月 28 日", bg:"bg_qcat"},
 {predict:{img:"l_member", intro:"委員會準備計算賠償。佢平均週薪大約 $925。輪到你估。", button:"宣佈決定",
   items:[{q:"委員會估計，如果程序公平，佢會再做幾耐先被解僱？", short:"假設期", opts:["大約 8 星期","大約 1 年","永遠唔會被解僱"], answer:0, pts:10}],
   slider:{label:"最終賠償（稅前）大約幾多？", min:0, max:20000, step:250, start:8000, answer:4508, near:750, far:2000, ptsNear:20}}},
 {who:"副主席", img:"l_member", judge:1, ruling:{en:"There was a {{validreason}} for the dismissal. However, the applicant was not properly notified of the allegations and was given no genuine {{opportunity}}. The dismissal was unjust.", zh:"解僱有合理理由。不過，申請人冇得到適當通知具體指控，亦冇真正嘅回應機會。解僱屬不公。"}, ref:"判詞第 23–37 段"},
 {who:"副主席", img:"l_member", judge:1, ruling:{en:"The applicant would likely have been dismissed within about eight weeks in any event. After a deduction for failure to {{mitigate|mitigate her loss}} and a 25% reduction for {{misconduct}}, {{compensation}} of $4,507.86 gross is ordered.", zh:"即使程序公平，申請人大約八星期內都好可能被解僱。扣減冇盡力減輕損失嘅部分，再因不當行為扣減 25% 後，命令賠償稅前 $4,507.86。"}, ref:"判詞第 41–48 段"},
 {who:"May 姐", img:"c_mentor", text:"兩邊都有教訓。僱主：有理由都要跟程序，講清楚指控、真正聽員工回應、書面記錄警告。員工：贏咗都可能只係攞到幾千蚊，自己嘅行為會令賠償被扣。"},
 {who:"May 姐", img:"c_mentor", text:"仲有一點好重要：不公平解僱申請要喺解僱後 21 日內提出，過咗好難追。"},
 {end:1}
];
QCF.register({
  id:"c18", cat:"work", title:"酒舖經理", tagline:"員工真係做錯，點解解僱仍然唔公平？",
  court:"Fair Work Commission", cite:"Maltby v Kingston Family Trust [2024] FWC 2987",
  citeFull:"Maltby v The Trustee for Kingston Family Trust [2024] FWC 2987（Fair Work Commission，Deputy President Roberts，2024 年 10 月 28 日）",
  url:"https://www.fwc.gov.au/documents/decisionssigned/pdf/2024fwc2987.pdf",
  coverBg:"bg_pub",
  intro:"一位做咗七年嘅酒舖經理被同事投訴，又收咗供應商禮券。經理一次會面就炒咗佢。佢真係做錯咗，但係委員會點睇？",
  terms:T, evidence:E, script:S,
  ending:{source:"遊戲內人名已更改；僱主名稱照判詞。",
    lessons:["{{unfair}}要喺 21 日內向{{fwc}}申請；臨時工如果係{{casual}}都可能符合資格。",
      "委員會考慮{{s387}}：有{{validreason}}唔等於解僱一定公平。",
      "員工要知道具體指控，並有真正嘅{{opportunity}}。",
      "{{reinstatement}}係首選補救，但多數改判{{compensation}}，並會按{{misconduct}}同{{mitigate}}扣減。",
      "僱主要保留書面警告同調查紀錄。"]}
});
})();
