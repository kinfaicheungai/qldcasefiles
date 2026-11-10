# 昆州判案錄 Queensland Case Files

一個以真實昆士蘭判決改編嘅法律劇情遊戲（PWA）。中文敘述＋英文法律術語，可以加到 iPhone / iPad 主畫面離線玩。

## 案件
| # | 範疇 | 標題 | 真實判決 |
|---|---|---|---|
| 01 | 遺產 | 一份遺囑，兩兄弟 | Madjeric v Madjeric [2025] QDC 126 |
| 02 | 遺產 | 一條未發出的短訊 | Re Nichol; Nichol v Nichol [2017] QSC 220 |
| 03 | 家暴 | 我知道你住邊 | FAJ v FJH [2024] QDC 23 |
| 04 | 錢債 | 阿爸借定送？ | Lopez v Lopez [2018] QCATA 158 |
| 05 | 生意 | 完美的宣傳冊 | Babstock v Laurel Star (No 5) [2024] QCA 3 |
| 06 | 經典 | 未簽的租約 | Waltons Stores v Maher (1988) 164 CLR 387 |
| 07 | 錢債 | 只係簽個名 | Garcia v NAB (1998) 194 CLR 395 |
| 08 | 家事 | 婚禮前十一日 | Thorne v Kennedy (2017) 263 CLR 85 |
| 09 | 家事 | 沒有分開的分家 | Stanford v Stanford (2012) 247 CLR 108 |
| 10 | 簽證 | 十年夫妻 | Imseeh (Migration) [2022] AATA 2245 |
| 11 | 錢債 | 沒有入住報告 | Wysocki v Etri [2024] QCATA 104 |
| 12 | 錢債 | 二手車的期望 | Beynon v Fair Deal Car Sales [2024] QCAT 102 |
| 13 | 經典 | 一條薯條 | Strong v Woolworths (2012) 246 CLR 182 |
| 14 | 家事 | 紅土小鎮 | MRR v GR (2010) 240 CLR 461 |
| 15 | 鄰舍 | 被擋住的景觀 | Collyer v Daniells [2024] QCAT 229 |
| 16 | 遺產 | 媽媽的老屋 | Moylan v Rickard [2010] QSC 327 |
| 17 | 刑事 | 借住一星期 | KFL v Commissioner of Police [2023] QDC 20 |
| 18 | 僱傭 | 酒舖經理 | Maltby v Kingston Family Trust [2024] FWC 2987 |

人名已更改；每道題目附判詞段落出處。遊戲用作學習，唔係法律意見。

## 結構
- `index.html` — 外殼
- `js/engine.js` — 劇情引擎；`js/glossary.js` — 共用中英詞典
- `cases/cNN.js` — 每單案一個檔（劇本、證據、專屬術語）
- `img/` — Higgsfield 生成嘅卡通場景同角色
- `js/version.js` — 版本號（顯示喺主畫面）。**每次更新記得加一**，離線快取會跟住更新
- `sw.js` — 離線快取

## 加新案件
1. 新增 `cases/c06.js`，用 `QCF.register({...})`
2. 喺 `index.html` 加 `<script src="cases/c06.js">`
3. 喺 `sw.js` 嘅 `CORE` 加檔案，並將 `js/version.js` 嘅版本加一
