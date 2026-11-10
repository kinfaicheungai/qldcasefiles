/* Case 07 — Garcia v National Australia Bank Ltd (1998) 194 CLR 395; [1998] HCA 48 */
(function(){
const T = {
  guarantee:{en:"guarantee",zh:"擔保",d:"承諾如果借款人還唔到錢，就由自己還。好多人以為「只係簽個名」，其實係好大嘅責任。"},
  surety:{en:"surety",zh:"擔保人",d:"簽擔保嘅人。"},
  allmoneys:{en:"all moneys mortgage",zh:"全數款項按揭",d:"一份按揭保障借款人對銀行嘅所有債務，包括將來嘅擔保。間屋可能因為一份新擔保而被拍賣。"},
  volunteer:{en:"volunteer",zh:"無償參與者",d:"冇從交易得到實際利益嘅人。"},
  yerkey:{en:"the rule in Yerkey v Jones",zh:"Yerkey v Jones 原則",d:"1939 年高等法院案例確立：太太為丈夫債務作擔保，喺某啲條件下，銀行唔可以執行。"},
  director:{en:"company director",zh:"公司董事",d:"負責管理公司嘅人。有董事名銜唔一定代表有實際參與或者利益。"},
  decreenisi:{en:"divorce order",zh:"離婚令",d:"法院宣佈婚姻解除嘅命令（當年分 decree nisi 同 decree absolute 兩步）。"}
};
const E = {
  G1:{t:"全數款項按揭",s:"against",side:"對 Jen 不利",d:"1979 年兩夫婦以屋企做「全數款項」按揭，保障任何一方將來嘅擔保。",ref:"判詞第 1 段"},
  G2:{t:"「冇錢都有金」",s:"for",side:"對 Jen 有利",d:"丈夫話要擔保先可以做大啲金買賣，仲話「如果冇錢，都仲有金喺度」。",ref:"判詞第 8 段"},
  G3:{t:"一分鐘內簽完",s:"for",side:"對 Jen 有利",d:"喺另一間分行簽，職員指住邊度簽就簽，冇解釋，一分鐘都唔使。法官接納佢嘅版本。",ref:"判詞第 9 段"},
  G4:{t:"唔知屋企會受影響",s:"for",side:"對 Jen 有利",d:"佢知道自己簽緊擔保，以為只係保公司透支，唔知道會連累屋企按揭，以為「零風險」。",ref:"判詞第 10 段"},
  G5:{t:"佢係公司董事",s:"against",side:"對 Jen 不利",d:"銀行紀錄顯示 Jen 係丈夫金業公司嘅董事。",ref:"判詞第 7、43 段"},
  G6:{t:"冇得到實際利益",s:"for",side:"對 Jen 有利",d:"法院認為公司係丈夫一手控制，Jen 冇從交易得到實際利益。",ref:"判詞第 7、43 段"},
  G7:{t:"獨立執業物理治療師",s:"against",side:"對 Jen 不利",d:"1979 年起自己開業，原審法官形容佢係「能幹、得體嘅專業人士」。",ref:"判詞第 10 段"}
};
const S = [
 {ch:"第一幕", title:"只係簽個名", sub:"1987 年・悉尼", bg:"bg_bank"},
 {who:"May 姐", img:"c_mentor", text:"呢單係另一宗高等法院經典案。主題係好多家庭都會遇到嘅：幫屋企人做{{guarantee}}。"},
 {who:"旁白", text:"Jen 係一位物理治療師，自己開診所。佢丈夫 Fred 經營一間買賣黃金嘅公司。", gain:"G7"},
 {who:"旁白", text:"1979 年，兩夫婦用屋企做咗一份{{allmoneys}}，保障將來任何一方簽嘅擔保。", gain:"G1"},
 {who:"Fred", img:"g_husband", text:"老婆，幫我簽份擔保啦，咁我先可以做大啲金買賣。放心，如果冇錢，都仲有金喺度。", gain:"G2"},
 {who:"旁白", text:"1987 年 11 月，Jen 去咗另一間分行。職員將文件放喺佢面前。", gain:"G3"},
 {who:"銀行職員", img:"g_bank", text:"呢度簽，呢度，仲有呢度。好喇，多謝。"},
 {who:"Jen", img:"g_wife", text:"我知自己簽緊擔保。但我以為只係保公司透支，冇人話我知屋企會受影響。我以為係零風險。", gain:"G4"},
 {q:"Jen 簽咗嘅擔保上限係幾多？", img:"g_wife", opts:[
   {t:"$27,000", fb:"少咗一個零。"},
   {t:"$270,000，另加利息同費用", ok:1, fb:"啱！1987 年 11 月嘅擔保，上限 $270,000，加利息、訟費同其他費用。", ref:"判詞第 3 段"},
   {t:"冇上限", fb:"呢份擔保有上限。"}
 ]},

 {ch:"第二幕", title:"婚變", sub:"金價跌，婚姻散", bg:"bg_bank"},
 {who:"旁白", text:"1988 年 9 月，兩夫婦分開。1989 年 10 月，Fred 間金業公司清盤。之後兩人正式離婚。", ref:"判詞第 4 段", terms:["decreenisi"]},
 {who:"旁白", text:"家事法院將丈夫嘅業權轉俾 Jen，但係間屋仲背住銀行按揭。", ref:"判詞第 6 段"},
 {who:"旁白", text:"1990 年 8 月，銀行根據擔保同按揭向 Jen 追討，並要求收樓。", ref:"判詞第 5 段"},
 {q:"按常識，Jen 簽咗名，係咪一定要還？", img:"g_wife", opts:[
   {t:"係，簽咗就要負責，冇得講", fb:"大部分情況係咁，但呢度有一條特別嘅衡平法原則。"},
   {t:"唔一定，太太幫丈夫擔保，喺某啲條件下銀行唔可以執行", ok:1, fb:"啱！呢個就係{{yerkey}}。關鍵係：佢明唔明、有冇得益、銀行有冇解釋。", ref:"判詞第 17–31 段"},
   {t:"唔使，離咗婚就自動取消", fb:"離婚唔會自動取消對第三方（銀行）嘅擔保。"}
 ]},
 {who:"May 姐", img:"c_mentor", text:"銀行一定會提：Jen 係公司{{director}}，又係精明嘅專業人士，點會唔明？", gain:"G5"},
 {who:"Jen", img:"g_wife", text:"董事只係掛名。間公司全部由 Fred 控制，我冇拎過任何好處。", gain:"G6"},
 {multi:3, q:"揀 3 張證據，最能支持「銀行唔可以執行擔保」。", img:"g_wife", pool:["G1","G2","G3","G4","G5","G6","G7"], right:["G3","G4","G6"], half:["G2"],
   fb:"法院認為：Jen 其實唔明白交易嘅效果（G4）；佢係{{volunteer}}，冇實際得益（G6）；銀行冇向佢解釋、亦唔知佢有冇獨立意見（G3）。G2 解釋佢點解會信丈夫，亦相關。", ref:"判詞第 31、42–43 段"},

 {ch:"第三幕", title:"三級法院", sub:"同一份擔保，三個答案", bg:"bg_court"},
 {who:"旁白", text:"一審，新州最高法院 Young J：引用 Yerkey v Jones，宣佈擔保對 Jen 冇約束力。", ref:"判詞第 6、11–13 段"},
 {who:"旁白", text:"上訴庭推翻：認為 Yerkey 原則「唔應再喺新州適用」，判銀行勝訴。", ref:"判詞第 14–16 段"},
 {who:"法官", img:"c_judge", judge:1, text:"本庭要決定：Yerkey v Jones 嘅原則喺今日仲適唔適用？"},
 {q:"高等法院列出嘅四個條件，以下邊個**唔係**？", img:"c_judge", opts:[
   {t:"擔保人實際上唔明白交易嘅意義同效果", fb:"呢個係條件之一。"},
   {t:"擔保人冇從交易得到任何利益", fb:"呢個係條件之一（即係 volunteer）。"},
   {t:"丈夫一定有欺騙太太", ok:1, fb:"啱！唔需要證明丈夫有欺騙或者{{undueinf}}。四個條件係：唔明白；冇得益；銀行應理解太太可能信任丈夫而冇得到充分資料；銀行自己冇解釋、亦唔知有人解釋過。", ref:"判詞第 31 段"}
 ]},
 {who:"法官", img:"c_judge", judge:1, text:"銀行要避免風險好簡單：自己解釋清楚，或者確保擔保人得到{{independent}}。", ref:"判詞第 41 段"},

 {ch:"第四幕", title:"判決", sub:"1998 年 8 月 6 日", bg:"bg_court"},
 {predict:{img:"c_judge", intro:"宣判之前，輪到你估。", button:"宣判", items:[
   {q:"Jen 要唔要履行擔保？", short:"擔保結果", opts:["要，簽咗名就要負責","唔使，銀行執行擔保係不合良心"], answer:1, pts:20},
   {q:"Yerkey v Jones 原則有冇被推翻？", short:"Yerkey 原則", opts:["被推翻，唔再適用","被確認，繼續適用"], answer:1, pts:10}]}},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"The appellant did not understand the purport and effect of the transaction. She was a {{volunteer}}. The bank took no steps itself to explain the transaction, and knew of no {{independent}}. It would be {{unconscionable}} for the bank to enforce the {{guarantee}}.", zh:"上訴人並唔明白交易嘅意義同效果。佢係無償參與者。銀行冇自己解釋交易，亦唔知佢有冇獨立法律意見。銀行執行擔保係不合良心。"}, ref:"判詞第 42–43 段"},
 {who:"法官", img:"c_judge", judge:1, ruling:{en:"{{allowed|The appeal is allowed}} with {{costs}}. The orders of the Court of Appeal are {{setaside|set aside}}, and the orders of the trial judge are restored.", zh:"上訴得直，並獲判訟費。撤銷上訴庭嘅命令，恢復原審法官嘅命令。"}, ref:"判詞第 44–46 段"},
 {who:"May 姐", img:"c_mentor", text:"Kirby J 提出另一個睇法：唔應該只保護「太太」，應該保護所有情感上依賴對方嘅人。不過多數法官維持原則只適用於夫妻。", ref:"判詞第 22、47–75 段"},
 {who:"May 姐", img:"c_mentor", text:"呢單案之後，銀行做擔保都會要求擔保人見獨立律師，簽一份證明書。所以今日你幫屋企人擔保，銀行好可能會叫你先去見律師。"},
 {end:1}
];
QCF.register({
  id:"c07", cat:"debt", title:"只係簽個名", tagline:"太太幫丈夫擔保，一定要還？",
  court:"High Court", cite:"Garcia v NAB (1998) 194 CLR 395",
  citeFull:"Garcia v National Australia Bank Ltd (1998) 194 CLR 395；[1998] HCA 48（High Court of Australia，1998 年 8 月 6 日）",
  url:"https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/1998/48.html",
  coverBg:"bg_bank",
  intro:"一位太太喺銀行一分鐘內簽咗份擔保，幫丈夫做金買賣。婚姻破裂、生意倒閉之後，銀行要收佢間屋。",
  terms:T, evidence:E, script:S,
  ending:{source:"高等法院經典案例。遊戲內人名已更改。",
    lessons:["{{guarantee}}唔係「簽個名」咁簡單，配合{{allmoneys}}，可能連屋企都賠埋。",
      "根據{{yerkey}}：擔保人唔明白、冇得益、銀行冇解釋，銀行執行擔保可能係{{unconscionable}}。",
      "有{{director}}名銜唔等於有實際利益。",
      "銀行而家通常要求擔保人先取得{{independent}}。",
      "幫屋企人擔保之前：問清楚上限、會唔會牽涉屋企、自己見獨立律師。"]}
});
})();
