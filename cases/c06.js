/* Case 06 — Waltons Stores (Interstate) Ltd v Maher (1988) 164 CLR 387; [1988] HCA 7 */
(function(){
const T = {
  exchange:{en:"exchange of contracts",zh:"交換合約",d:"雙方各自簽署一份合約，再互相交換，合約先正式成立。澳洲買賣物業同長租約常用。"},
  formality:{en:"mere formality",zh:"純屬手續",d:"表面上仲有一步未做，但大家都以為一定會做。"},
  estoppel:{en:"estoppel",zh:"禁止反言",d:"如果你令對方相信某件事、對方因此作出行動而受損，法院可以唔准你反口。"},
  equitable:{en:"equitable estoppel",zh:"衡平法上的禁止反言",d:"源自衡平法。重點係「反口會唔會不合良心（unconscionable）」。"},
  detriment:{en:"detriment",zh:"損害",d:"因為相信咗對方而蒙受嘅損失，例如拆咗間舊舖、起咗一半新樓。"},
  assumption:{en:"assumption",zh:"假設／預期",d:"一方相信會發生嘅事，例如「對方一定會簽約」。"},
  silence:{en:"silence as encouragement",zh:"沉默等同鼓勵",d:"明知對方誤會而照做，自己又有責任出聲，咁沉默都可以當係鼓勵。"},
  damagesilo:{en:"damages in lieu of specific performance",zh:"以賠償代替強制履行",d:"法院唔強迫對方真係租間舖，而係判佢賠錢。"},
  hca:{en:"High Court of Australia",zh:"澳洲高等法院",d:"全國最高上訴法院，佢嘅判決對全國法院都有約束力。"},
  landmark:{en:"landmark case",zh:"里程碑案例",d:"改變或者確立重要法律原則嘅案件，法律系學生必讀。"}
};
const E = {
  W1:{t:"「明日話你知」",s:"for",side:"對 Maher 有利",d:"Maher 一方提出修改後，Waltons 律師表示，如果有修改唔同意，「明日」會通知。之後冇再通知任何反對。",ref:"Mason CJ & Wilson J；判決事實部分"},
  W2:{t:"簽好租約「作交換」",s:"for",side:"對 Maher 有利",d:"1983 年 11 月 11 日，Maher 一方簽好租約，交俾 Waltons 律師「作交換之用」。",ref:"判決事實部分"},
  W3:{t:"拆舊樓，Waltons 知道",s:"for",side:"對 Maher 有利",d:"Maher 為趕工期即刻拆舊樓、開始起新舖。Waltons 知道工程進行中。",ref:"判決事實部分"},
  W4:{t:"「慢慢嚟」",s:"for",side:"對 Maher 有利",d:"Waltons 內部對開分店有保留，指示律師「go slow」，但冇話俾 Maher 知。",ref:"判決事實部分"},
  W5:{t:"合約從未交換",s:"against",side:"對 Maher 不利",d:"Waltons 從來冇簽、亦冇交回佢嗰份租約。按一般合約法，合約未成立。",ref:"判決事實部分"},
  W6:{t:"新舖起咗四成",s:"for",side:"對 Maher 有利",d:"1984 年 1 月，Waltons 先通知唔租，嗰陣新舖已經起咗大約 40%。",ref:"判決事實部分"}
};
const S = [
 {ch:"第一幕", title:"一間新舖", sub:"1983 年・新州 Nowra", bg:"bg_site"},
 {who:"May 姐", img:"c_mentor", text:"今日唔講昆州，講一單全國法律系學生都要讀嘅{{landmark}}。佢嘅結果，同好多人嘅常識完全相反。"},
 {who:"旁白", text:"1983 年，新州小鎮 Nowra。Mick 同太太 Mary 有一塊地，上面有間舊樓。大型百貨公司 Waltons 想租嚟開分店。"},
 {who:"旁白", text:"條件係：Maher 夫婦要拆咗舊樓，按 Waltons 嘅要求起一間新舖，再長期租俾 Waltons。"},
 {who:"Mick", img:"w_owner", text:"Waltons 想好快開舖，工期好趕，所以我哋要即刻開工。"},
 {who:"旁白", text:"雙方律師來回修改租約。Maher 一方提出幾項修改，Waltons 律師回覆：如果有修改唔同意，明日會通知。之後，再冇消息。", gain:"W1"},
 {who:"旁白", text:"11 月 11 日，Maher 一方簽好租約，交俾 Waltons 律師「作交換之用」，等 Waltons 簽返就成事。", gain:"W2", terms:["exchange"]},
 {q:"Waltons 未簽租約。按一般常識同普通合約法，呢個時候有冇合約？", img:"w_owner", opts:[
   {t:"有，Maher 已經簽咗", fb:"一方簽咗唔夠。呢類合約要雙方簽署並交換先成立。"},
   {t:"冇，合約未交換，Waltons 隨時可以唔簽", ok:1, fb:"啱！按普通合約法，合約未成立。Waltons 理論上有權唔簽。但呢單案嘅關鍵係：法律仲有冇其他保護 Maher 嘅方法？", ref:"判決事實部分"},
   {t:"有，因為傾好咗租金", fb:"傾好條件唔等於合約成立，呢類交易要正式交換合約。"}
 ]},

 {ch:"第二幕", title:"拆樓", sub:"沉默嘅代價", bg:"bg_site"},
 {who:"Mick", img:"w_owner", text:"我哋以為 Waltons 簽名只係{{formality}}，即刻開始拆樓，跟住起新舖。Waltons 都知我哋開咗工。", gain:"W3"},
 {who:"旁白", text:"另一邊，Waltons 內部開始有保留，覺得未必應該開呢間分店。佢哋叫律師「go slow」，慢慢拖住。", gain:"W4"},
 {who:"Waltons 經理", img:"w_exec", text:"我哋冇講過一定簽。合約未交換，法律上我哋冇責任。", gain:"W5"},
 {who:"旁白", text:"1984 年 1 月，Waltons 終於通知：唔租喇。嗰陣新舖已經起咗大約四成。", gain:"W6"},
 {q:"如果你係 Maher 嘅律師，最有機會贏嘅論點係？", img:"w_owner", opts:[
   {t:"合約其實已經成立", fb:"呢條路好難行，因為 Waltons 確實冇簽冇交換。"},
   {t:"Waltons 令我哋以為一定會簽，明知我哋因此開工都唔出聲，而家唔准佢反口", ok:1, fb:"啱！呢個就係{{estoppel}}嘅思路：Waltons 明知 Maher 基於一個{{assumption}}而承受{{detriment}}，仲保持沉默。", ref:"Mason CJ & Wilson J"},
   {t:"Waltons 係大公司，應該照顧小業主", fb:"法律唔會單憑大細判責任。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"重點唔係 Waltons 冇簽，因為唔簽本身係佢嘅權利。重點係佢嘅{{silence}}：明知 Maher 誤會而照做，有責任出聲都唔出聲。"},
 {multi:3, q:"揀 3 張證據，最能顯示 Waltons 嘅做法「不合良心」。", img:"w_exec", pool:["W1","W2","W3","W4","W5","W6"], right:["W1","W3","W4"], half:["W2","W6"],
   fb:"Mason CJ 同 Wilson J 指出：Waltons 嘅律師講過有異議會通知（W1）；佢知道工程已經開始、時間好趕（W3）；但係選擇「慢慢嚟」，唔話俾 Maher 知（W4）。W2 同 W6 證明 Maher 確實相信同承受損害，亦都重要。", ref:"Mason CJ & Wilson J"},

 {court:"hca:final", ch:"第三幕", title:"高等法院", sub:"High Court of Australia・1988", bg:"bg_court"},
 {who:"旁白", text:"新州最高法院判 Maher 勝訴，上訴庭維持。Waltons 再上訴到{{hca}}。"},
 {who:"法官", img:"c_judge", judge:1, text:"單係唔交換合約，本身唔係不合良心。但如果一方鼓勵另一方相信合約一定會完成，又眼睜睜睇住對方因此蒙受損害，情況就唔同。", ref:"Mason CJ & Wilson J"},
 {q:"今單案確立咗乜嘢重要原則？", img:"c_judge", opts:[
   {t:"所有傾好嘅協議都自動有約束力", fb:"唔係。合約未成立仍然係原則，estoppel 係例外。"},
   {t:"{{equitable}}可以成為獨立嘅申索理由，唔需要先有合約", ok:1, fb:"啱！呢單案確立咗：喺適當情況下，衡平法上嘅禁止反言本身就可以令一方要負責，即使冇合約。", ref:"Mason CJ & Wilson J；Brennan J"},
   {t:"大公司唔可以拒絕細業主", fb:"判決冇咁講。"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"Brennan J 列出禁止反言嘅要素：一方建立咗一個假設；另一方因此行事；如果假設唔兌現就會受損；鼓勵嘅一方知道或者有意如此；而佢冇採取合理步驟避免損害。", ref:"Brennan J"},

 {ch:"第四幕", title:"判決", sub:"1988 年 2 月 19 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"Waltons 上訴結果？", short:"上訴結果", opts:["Waltons 贏：冇合約就冇責任","Maher 贏：Waltons 唔准反口，要賠償"], answer:1, pts:20},
   {q:"多數法官用咩法律理據？", short:"法律理據", opts:["普通合約法","禁止反言（estoppel）","消費者保護法"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Waltons knew that the Mahers were proceeding on the {{assumption}} that the exchange of contracts was a {{formality|mere formality}}. Its silence, in circumstances of urgency, amounted to encouragement. It would be {{unconscionable}} for Waltons now to retreat.", zh:"Waltons 知道 Maher 夫婦係基於「交換合約只係手續」嘅假設行事。喺咁緊急嘅情況下，佢嘅沉默等同鼓勵。Waltons 而家反口，係不合良心。"}, ref:"Mason CJ & Wilson J"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"Waltons is {{estoppel|estopped}} from denying that it is bound. The appeal is {{dismissed}}, and the order for {{damagesilo}} stands.", zh:"Waltons 被禁止否認自己受約束。上訴駁回，以賠償代替強制履行嘅命令維持。"}, ref:"判決結果"},
 {who:"May 姐", img:"c_mentor", text:"日常教訓：如果你知道對方以為你一定會簽、仲為咗你開始花錢做嘢，你改變主意就要盡快講清楚。沉默可以好貴。"},
 {end:1}
];
QCF.register({
  id:"c06", cat:"classic", title:"未簽的租約", tagline:"冇簽合約，都要負責？",
  court:"High Court", cite:"Waltons Stores v Maher (1988) 164 CLR 387",
  citeFull:"Waltons Stores (Interstate) Ltd v Maher (1988) 164 CLR 387；[1988] HCA 7（High Court of Australia，Mason CJ, Wilson, Brennan, Deane & Gaudron JJ，1988 年 2 月 19 日）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/1988/7.html",
  coverBg:"bg_site",
  intro:"一間百貨公司話會租舖，業主即刻拆樓起新舖。起到一半，公司話唔租，因為佢從來冇簽約。法律點睇？",
  terms:T, evidence:E, script:S,
  ending:{source:"澳洲合約法最著名嘅經典案例之一。遊戲內個人名字已更改。高等法院判詞原文可喺 AustLII 或者高等法院網站查閱。",
    lessons:["按普通合約法，未{{exchange}}，合約通常未成立。",
      "但如果你令對方相信你一定會完成交易，又明知對方因此承受{{detriment}}都唔出聲，法院可以用{{estoppel}}唔准你反口。",
      "關鍵係{{unconscionable}}：單係唔簽唔犯法，問題係點樣唔簽。",
      "呢單案確立咗{{equitable}}可以獨立成為申索理由。",
      "生意上改變主意，要盡快清楚通知對方。"]}
});
})();
