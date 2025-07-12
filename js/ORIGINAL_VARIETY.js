const originalVarietyCards = [
{
  "link": "https://youtu.be/_I_UlUSrrUo",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2019-01-15",
  "duration": "00:16:54",
  "thumbnail": "https://i.ytimg.com/vi/_I_UlUSrrUo/sddefault.jpg",
  "alt": "(여자)아이들 첫 리얼리티 in 샌프란시스코! | [To NEVERLAND] Ep.1 (G)I-DLE in San Francisco! (ENG SUB) (2019-01-15)",
  "title": "(여자)아이들 첫 리얼리티 in 샌프란시스코! | [To NEVERLAND] Ep.1 (G)I-DLE in San Francisco! (ENG SUB) (2019-01-15)"
},
{
  "link": "https://youtu.be/Q_rF6iUghJY",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2019-01-22",
  "duration": "00:10:24",
  "thumbnail": "https://i.ytimg.com/vi/Q_rF6iUghJY/sddefault.jpg",
  "alt": "미쿡 브런치 먹방 가자! (여자)아이들 본격 샌프란 투어 | [To NEVERLAND] Ep.2 (G)I-DLE's Mukbang & Tour in SF(ENG SUB) (2019-01-22)",
  "title": "미쿡 브런치 먹방 가자! (여자)아이들 본격 샌프란 투어 | [To NEVERLAND] Ep.2 (G)I-DLE's Mukbang & Tour in SF(ENG SUB) (2019-01-22)"
},
{
  "link": "https://youtu.be/dZzp19OuhdY",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2019-01-29",
  "duration": "00:13:22",
  "thumbnail": "https://i.ytimg.com/vi/dZzp19OuhdY/sddefault.jpg",
  "alt": "(여자)아이들의 프라이빗 파뤼에 초대합니다! | [To NEVERLAND] Ep.3 Welcome to (G)I-DLE's Private Party! (ENG SUB) (2019-01-29)",
  "title": "(여자)아이들의 프라이빗 파뤼에 초대합니다! | [To NEVERLAND] Ep.3 Welcome to (G)I-DLE's Private Party! (ENG SUB) (2019-01-29)"
},
{
  "link": "https://youtu.be/IWq6mswwLCo",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2019-02-05",
  "duration": "00:13:55",
  "thumbnail": "https://i.ytimg.com/vi/IWq6mswwLCo/sddefault.jpg",
  "alt": "(여자)아이들 우기X슈화 감독 데뷔?!❤ | [To NEVERLAND] Ep.4 (G)I-DLE Record Their Own Memories! (ENG SUB) (2019-02-05)",
  "title": "(여자)아이들 우기X슈화 감독 데뷔?!❤ | [To NEVERLAND] Ep.4 (G)I-DLE Record Their Own Memories! (ENG SUB) (2019-02-05)"
},
{
  "link": "https://youtu.be/uKsWDFBm41A",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2019-02-12",
  "duration": "00:14:18",
  "thumbnail": "https://i.ytimg.com/vi/uKsWDFBm41A/sddefault.jpg",
  "alt": "(여자)아이들의 샌프란 인싸여행 코스 뿌시기! | [To NEVERLAND] Ep.5 | (G)I-DLE's Colorful Adventure in SF! (2019-02-12)",
  "title": "(여자)아이들의 샌프란 인싸여행 코스 뿌시기! | [To NEVERLAND] Ep.5 | (G)I-DLE's Colorful Adventure in SF! (2019-02-12)"
},
{
  "link": "https://youtu.be/fokjzgQ8qG8",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2019-02-19",
  "duration": "00:16:45",
  "thumbnail": "https://i.ytimg.com/vi/fokjzgQ8qG8/sddefault.jpg",
  "alt": "(여자)아이들 X 샌프란, 그 마지막 이야기!  | [To NEVERLAND] Ep.6 (G)I-DLE's Last Day in SF (ENG SUB) (2019-02-19)",
  "title": "(여자)아이들 X 샌프란, 그 마지막 이야기!  | [To NEVERLAND] Ep.6 (G)I-DLE's Last Day in SF (ENG SUB) (2019-02-19)"
},
{
  "link": "https://youtu.be/kINZmIZfCKY",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-07-21",
  "duration": "00:16:49",
  "thumbnail": "https://i.ytimg.com/vi/kINZmIZfCKY/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 1회] Part 2 - [Never-ending Neverland Ep.1] Part 2 (ENG) (2020-07-21)",
  "title": "[네버엔딩 네버랜드 1회] Part 2 - [Never-ending Neverland Ep.1] Part 2 (ENG) (2020-07-21)"
},
{
  "link": "https://youtu.be/1r6-hAIItqc",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-07-21",
  "duration": "00:09:42",
  "thumbnail": "https://i.ytimg.com/vi/1r6-hAIItqc/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 1회] Part 1 - [Never-ending Neverland Ep.1] Part 1 (ENG) (2020-07-21)",
  "title": "[네버엔딩 네버랜드 1회] Part 1 - [Never-ending Neverland Ep.1] Part 1 (ENG) (2020-07-21)"
},
{
  "link": "https://youtu.be/XZIOS2tgqGo",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-07-28",
  "duration": "00:11:29",
  "thumbnail": "https://i.ytimg.com/vi/XZIOS2tgqGo/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 2회] Part 1 - [Never-ending Neverland Ep.2] Part 1 (ENG) (2020-07-28)",
  "title": "[네버엔딩 네버랜드 2회] Part 1 - [Never-ending Neverland Ep.2] Part 1 (ENG) (2020-07-28)"
},
{
  "link": "https://youtu.be/MWi5w4dEkZQ",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-07-28",
  "duration": "00:13:32",
  "thumbnail": "https://i.ytimg.com/vi/MWi5w4dEkZQ/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 2회] Part 2 - [Never-ending Neverland Ep.2] Part 2 (ENG) (2020-07-28)",
  "title": "[네버엔딩 네버랜드 2회] Part 2 - [Never-ending Neverland Ep.2] Part 2 (ENG) (2020-07-28)"
},
{
  "link": "https://youtu.be/SFq8qllSyq0",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-08-04",
  "duration": "00:07:46",
  "thumbnail": "https://i.ytimg.com/vi/SFq8qllSyq0/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 3회] Part 1 - [Never-ending Neverland Ep.3] Part 1 (ENG) (2020-08-04)",
  "title": "[네버엔딩 네버랜드 3회] Part 1 - [Never-ending Neverland Ep.3] Part 1 (ENG) (2020-08-04)"
},
{
  "link": "https://youtu.be/VbK8mHanAhI",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-08-04",
  "duration": "00:15:39",
  "thumbnail": "https://i.ytimg.com/vi/VbK8mHanAhI/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 3회] Part 2 - [Never-ending Neverland Ep.3] Part 2 (ENG) (2020-08-04)",
  "title": "[네버엔딩 네버랜드 3회] Part 2 - [Never-ending Neverland Ep.3] Part 2 (ENG) (2020-08-04)"
},
{
  "link": "https://youtu.be/pO59kn3sU14",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-08-11",
  "duration": "00:16:23",
  "thumbnail": "https://i.ytimg.com/vi/pO59kn3sU14/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 4회] Part 1 - [Never-ending Neverland Ep.4] Part 1 (ENG) (2020-08-11)",
  "title": "[네버엔딩 네버랜드 4회] Part 1 - [Never-ending Neverland Ep.4] Part 1 (ENG) (2020-08-11)"
},
{
  "link": "https://youtu.be/DhZ4HCPDLac",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-08-11",
  "duration": "00:07:07",
  "thumbnail": "https://i.ytimg.com/vi/DhZ4HCPDLac/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 4회] Part 2 - [Never-ending Neverland Ep.4] Part 2 (ENG) (2020-08-11)",
  "title": "[네버엔딩 네버랜드 4회] Part 2 - [Never-ending Neverland Ep.4] Part 2 (ENG) (2020-08-11)"
},
{
  "link": "https://youtu.be/MYGW1hTnp9o",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-08-18",
  "duration": "00:12:21",
  "thumbnail": "https://i.ytimg.com/vi/MYGW1hTnp9o/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 5회] Part 2 - [Never-ending Neverland Ep.5] Part 2 (ENG) (2020-08-18)",
  "title": "[네버엔딩 네버랜드 5회] Part 2 - [Never-ending Neverland Ep.5] Part 2 (ENG) (2020-08-18)"
},
{
  "link": "https://youtu.be/FyiWt8Q0Wl0",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2020-08-18",
  "duration": "00:15:08",
  "thumbnail": "https://i.ytimg.com/vi/FyiWt8Q0Wl0/sddefault.jpg",
  "alt": "[네버엔딩 네버랜드 5회] Part 1 - [Never-ending Neverland Ep.5] Part 1 (ENG) (2020-08-18)",
  "title": "[네버엔딩 네버랜드 5회] Part 1 - [Never-ending Neverland Ep.5] Part 1 (ENG) (2020-08-18)"
},
{
  "link": "https://youtu.be/8vTni3DzoDg",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2021-02-12",
  "duration": "00:48:10",
  "thumbnail": "https://i.ytimg.com/vi/8vTni3DzoDg/maxresdefault.jpg",
  "alt": "SSAP DANCE (Full Ver.) (2021-02-12)",
  "title": "SSAP DANCE (Full Ver.) (2021-02-12)"
},
{
  "link": "https://youtu.be/H39jJFQmFYE",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-05-25",
  "duration": "01:22:27",
  "thumbnail": "https://i.ytimg.com/vi/H39jJFQmFYE/sddefault.jpg",
  "alt": "꿀로그잼：네버버 예술 학교 (Full Ver.) (2022-05-25)",
  "title": "꿀로그잼：네버버 예술 학교 (Full Ver.) (2022-05-25)"
},
{
  "link": "https://youtu.be/-4e-b6krd84",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-05-26",
  "duration": "00:04:30",
  "thumbnail": "https://i.ytimg.com/vi/-4e-b6krd84/sddefault.jpg",
  "alt": "꿀로그잼：네버버 예술 학교 BEHIND (2022-05-26)",
  "title": " 꿀로그잼：네버버 예술 학교 BEHIND (2022-05-26)"
},
{
  "link": "https://youtu.be/cHdtMzIGVeY",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-06-23",
  "duration": "00:27:41",
  "thumbnail": "https://i.ytimg.com/vi/cHdtMzIGVeY/maxresdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.1 (2022-06-23)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.1 (2022-06-23)"
},
{
  "link": "https://youtu.be/n7z0y9rntug",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-06-30",
  "duration": "00:30:57",
  "thumbnail": "https://i.ytimg.com/vi/n7z0y9rntug/mqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.2 (2022-06-30)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.2 (2022-06-30)"
},
{
  "link": "https://youtu.be/Q8hx7ivQZNI",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-07-07",
  "duration": "00:29:01",
  "thumbnail": "https://i.ytimg.com/vi/Q8hx7ivQZNI/mqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.3 (2022-07-07)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.3 (2022-07-07)"
},
{
  "link": "https://youtu.be/H9DdJL73eD8",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-07-12",
  "duration": "00:03:01",
  "thumbnail": "https://i.ytimg.com/vi/H9DdJL73eD8/sddefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.3 Behind (2022-07-12)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.3 Behind (2022-07-12)"
},
{
  "link": "https://youtu.be/7DrSDGbS_iE",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-07-14",
  "duration": "00:32:05",
  "thumbnail": "https://i.ytimg.com/vi/7DrSDGbS_iE/hqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.4 (2022-07-14)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.4 (2022-07-14)"
},
{
  "link": "https://youtu.be/ASJlcRmvz6c",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-07-19",
  "duration": "00:02:51",
  "thumbnail": "https://i.ytimg.com/vi/ASJlcRmvz6c/hqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.4 Behind (2022-07-19)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.4 Behind (2022-07-19)"
},
{
  "link": "https://youtu.be/t81p5JxJPVo",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-07-21",
  "duration": "00:34:27",
  "thumbnail": "https://i.ytimg.com/vi/t81p5JxJPVo/mqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.5 (2022-07-21)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.5 (2022-07-21)"
},
{
  "link": "https://youtu.be/0zyIqbyz6zM",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-07-26",
  "duration": "00:04:55",
  "thumbnail": "https://i.ytimg.com/vi/0zyIqbyz6zM/sddefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌1 EP.5 Behind (2022-07-26)",
  "title": "(여자)아이들 외 취급주의 시즌1 EP.5 Behind (2022-07-26)"
},
{
  "link": "https://youtu.be/hJ0iu7dxrEw",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-09-14",
  "duration": "01:13:08",
  "thumbnail": "https://i.ytimg.com/vi/hJ0iu7dxrEw/sddefault.jpg",
  "alt": "방해금지모드+ (FULL VER.) | Do Not Disturb (2022-09-14)",
  "title": "방해금지모드+ (FULL VER.) | Do Not Disturb (2022-09-14)"
},
{
  "link": "https://youtu.be/pKMLtR2PlJc",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-09-15",
  "duration": "00:04:18",
  "thumbnail": "https://i.ytimg.com/vi/pKMLtR2PlJc/hqdefault.jpg",
  "alt": "방해금지모드+ BEHIND | Do Not Disturb (2022-09-15)",
  "title": "방해금지모드+ BEHIND | Do Not Disturb (2022-09-15) "
},
{
  "link": "https://youtu.be/1rTlSErNfzM",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-09-22",
  "duration": "00:28:07",
  "thumbnail": "https://i.ytimg.com/vi/1rTlSErNfzM/hqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 EP.1 (2022-09-22)",
  "title": "(여자)아이들 외 취급주의 시즌2 EP.1 (2022-09-22)"
},
{
  "link": "https://youtu.be/QZGXnGH2hA8",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-09-29",
  "duration": "00:25:27",
  "thumbnail": "https://i.ytimg.com/vi/QZGXnGH2hA8/hqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 EP.2 (2022-09-29)",
  "title": "(여자)아이들 외 취급주의 시즌2 EP.2 (2022-09-29)"
},
{
  "link": "https://youtu.be/Y-WAKb5frs0",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-10-06",
  "duration": "00:26:36",
  "thumbnail": "https://i.ytimg.com/vi/Y-WAKb5frs0/mqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 EP.3 (2022-10-06)",
  "title": "(여자)아이들 외 취급주의 시즌2 EP.3 (2022-10-06)"
},
{
  "link": "https://youtu.be/-EUwuAGZBBs",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-10-13",
  "duration": "00:24:58",
  "thumbnail": "https://i.ytimg.com/vi/-EUwuAGZBBs/sddefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 EP.4 (2022-10-13)",
  "title": "(여자)아이들 외 취급주의 시즌2 EP.4 (2022-10-13)"
},
{
  "link": "https://youtu.be/xrKH2_vSOm8",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-10-20",
  "duration": "00:26:48",
  "thumbnail": "https://i.ytimg.com/vi/xrKH2_vSOm8/hqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 EP.5 (2022-10-20)",
  "title": "(여자)아이들 외 취급주의 시즌2 EP.5 (2022-10-20)"
},
{
  "link": "https://youtu.be/4tcDGRZ2MIo",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-10-27",
  "duration": "00:29:23",
  "thumbnail": "https://i.ytimg.com/vi/4tcDGRZ2MIo/hqdefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 EP.6 (2022-10-27)",
  "title": "(여자)아이들 외 취급주의 시즌2 EP.6 (2022-10-27)"
},
{
  "link": "https://youtu.be/WVwCF8NDAPk",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2022-10-28",
  "duration": "00:04:00",
  "thumbnail": "https://i.ytimg.com/vi/WVwCF8NDAPk/sddefault.jpg",
  "alt": "(여자)아이들 외 취급주의 시즌2 Behind (2022-10-28)",
  "title": "(여자)아이들 외 취급주의 시즌2 Behind (2022-10-28)"
},
{
  "link": "https://youtu.be/pKMhyV1HiqE",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-03-17",
  "duration": "00:01:12",
  "thumbnail": "https://i.ytimg.com/vi/pKMhyV1HiqE/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] TEASER ★2023 컴백 세미나★ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-17)",
  "title": "[(G)맘대로 아이들] TEASER ★2023 컴백 세미나★ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-17)"
},
{
  "link": "https://youtu.be/HU6K3TV2AdQ",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-03-22",
  "duration": "00:19:15",
  "thumbnail": "https://i.ytimg.com/vi/HU6K3TV2AdQ/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.01 이게...맞냐...? | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-22)",
  "title": "[(G)맘대로 아이들] EP.01 이게...맞냐...? | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-22)"
},
{
  "link": "https://youtu.be/4bDBfsBCjFg",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-03-24",
  "duration": "00:23:38",
  "thumbnail": "https://i.ytimg.com/vi/4bDBfsBCjFg/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.02 매니저 그만두겠습니다.. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-24)",
  "title": "[(G)맘대로 아이들] EP.02 매니저 그만두겠습니다.. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-24)"
},
{
  "link": "https://youtu.be/r0MrzKxPqxw",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-03-29",
  "duration": "00:19:18",
  "thumbnail": "https://i.ytimg.com/vi/r0MrzKxPqxw/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.03 대환장 주주총회 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-29)",
  "title": "[(G)맘대로 아이들] EP.03 대환장 주주총회 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-29)"
},
{
  "link": "https://youtu.be/QFCP_VVQMgg",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-03-31",
  "duration": "00:22:03",
  "thumbnail": "https://i.ytimg.com/vi/QFCP_VVQMgg/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.04 포지션 뺏으러 왔습니다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-31)",
  "title": "[(G)맘대로 아이들] EP.04 포지션 뺏으러 왔습니다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-31)"
},
{
  "link": "https://youtu.be/PwsQ30b-A-k",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-04-05",
  "duration": "00:18:09",
  "thumbnail": "https://i.ytimg.com/vi/PwsQ30b-A-k/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.05 다음 컴백의 운명은...?! | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-05)",
  "title": "[(G)맘대로 아이들] EP.05 다음 컴백의 운명은...?! | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-05)"
},
{
  "link": "https://youtu.be/MfTv2OX4Nz4",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-04-07",
  "duration": "00:20:44",
  "thumbnail": "https://i.ytimg.com/vi/MfTv2OX4Nz4/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.06 흥 없다면서요... | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-07)",
  "title": "[(G)맘대로 아이들] EP.06 흥 없다면서요... | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-07)"
},
{
  "link": "https://youtu.be/ar1ZMNKDbKI",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-04-12",
  "duration": "00:19:22",
  "thumbnail": "https://i.ytimg.com/vi/ar1ZMNKDbKI/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.07 특 시키면 일단 함 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-12)",
  "title": "[(G)맘대로 아이들] EP.07 특 시키면 일단 함 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-12)"
},
{
  "link": "https://youtu.be/uvEYX0MSs1s",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-04-14",
  "duration": "00:23:01",
  "thumbnail": "https://i.ytimg.com/vi/uvEYX0MSs1s/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] EP.08 긴장해. 케이팝 기강 잡으러 온다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-14)",
  "title": "[(G)맘대로 아이들] EP.08 긴장해. 케이팝 기강 잡으러 온다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-14)"
},
{
  "link": "https://youtu.be/rwtUR5moRgQ",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-08-02",
  "duration": "00:01:17",
  "thumbnail": "https://i.ytimg.com/vi/rwtUR5moRgQ/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] ★특별편성★ TEASER | 열렬한.성원에.힘입어.돌아왔읍니다...^^ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-08-02)",
  "title": "[(G)맘대로 아이들] ★특별편성★ TEASER | 열렬한.성원에.힘입어.돌아왔읍니다...^^ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-08-02)"
},
{
  "link": "https://youtu.be/-eWlNDLUAkI",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-08-09",
  "duration": "00:20:08",
  "thumbnail": "https://i.ytimg.com/vi/-eWlNDLUAkI/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] ★특별편성★ | [속보] (여자)아이들, \"항시적으로 네버랜드 생각뿐\" (ENG/CHN) | (G)I-DLE NEWS | (여자)아이들 ((G)I-DLE) (2023-08-09)",
  "title": "[(G)맘대로 아이들] ★특별편성★ | [속보] (여자)아이들, \"항시적으로 네버랜드 생각뿐\" (ENG/CHN) | (G)I-DLE NEWS | (여자)아이들 ((G)I-DLE) (2023-08-09)"
},
{
  "link": "https://youtu.be/4vY76usk3fk",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-08-16",
  "duration": "00:20:00",
  "thumbnail": "https://i.ytimg.com/vi/4vY76usk3fk/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] ★특별편성★ | 슈화 없는(?) 슈화쇼 (ENG/CHN) | SHUHUA SHOW | (여자)아이들 ((G)I-DLE) (2023-08-16)",
  "title": "[(G)맘대로 아이들] ★특별편성★ | 슈화 없는(?) 슈화쇼 (ENG/CHN) | SHUHUA SHOW | (여자)아이들 ((G)I-DLE) (2023-08-16)"
},
{
  "link": "https://youtu.be/C1ITPFPt1do",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2023-08-23",
  "duration": "00:19:38",
  "thumbnail": "https://i.ytimg.com/vi/C1ITPFPt1do/sddefault.jpg",
  "alt": "[(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE) (2023-08-23)",
  "title": "[(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE) (2023-08-23)"
},
{
  "link": "https://youtu.be/McgN9q0zLyE",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2025-06-01",
  "duration": "00:02:52",
  "thumbnail": "https://i.ytimg.com/vi/McgN9q0zLyE/sddefault.jpg",
  "alt": "★자컨도 (G)떼고 화려하게 컴백★ [네맘대로 아이들] TEASER | i-dle (아이들)ㅣSUB (2025-06-01)",
  "title": "★자컨도 (G)떼고 화려하게 컴백★ [네맘대로 아이들] TEASER | i-dle (아이들)ㅣSUB (2025-06-01)"
},
{
  "link": "https://youtu.be/qKvNB3YkxZ8",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2025-06-05",
  "duration": "00:25:08",
  "thumbnail": "https://i.ytimg.com/vi/qKvNB3YkxZ8/sddefault.jpg",
  "alt": "아이들, 프로필부터 다시 시작해 볼까요? [네맘대로 아이들] EP. 1 | i-dle (아이들)ㅣSUB (2025-06-05)",
  "title": "아이들, 프로필부터 다시 시작해 볼까요? [네맘대로 아이들] EP. 1 | i-dle (아이들)ㅣSUB (2025-06-05)"
},
{
  "link": "https://youtu.be/J6AyyiFlCu8",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2025-06-12",
  "duration": "00:21:26",
  "thumbnail": "https://i.ytimg.com/vi/J6AyyiFlCu8/sddefault.jpg",
  "alt": "아이들 언어 능력, 어디까지 올라가는 거예요? [네맘대로 아이들] EP. 2 | i-dle (아이들)ㅣSUB (2025-06-12)",
  "title": "아이들 언어 능력, 어디까지 올라가는 거예요? [네맘대로 아이들] EP. 2 | i-dle (아이들)ㅣSUB (2025-06-12)"
},
{
  "link": "https://youtu.be/-DEU4ypwzxw",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2025-06-19",
  "duration": "00:24:31",
  "thumbnail": "https://i.ytimg.com/vi/-DEU4ypwzxw/maxresdefault.jpg",
  "alt": "무슨 생각인지 감도 안 오는 수상한 파티 [네맘대로 아이들] EP. 3 | i-dle (아이들)ㅣSUB (2025-06-19)",
  "title": "무슨 생각인지 감도 안 오는 수상한 파티 [네맘대로 아이들] EP. 3 | i-dle (아이들)ㅣSUB (2025-06-19)"
},
{
  "link": "https://youtu.be/gVf9lWF-6wQ",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2025-06-26",
  "duration": "00:22:08",
  "thumbnail": "https://i.ytimg.com/vi/gVf9lWF-6wQ/maxresdefault.jpg",
  "alt": "들망진창력 MAX 찍은 마성의 피지컬 업데이트 [네맘대로 아이들] EP. 4 | i-dle (아이들)ㅣSUB (2025-06-26)",
  "title": "들망진창력 MAX 찍은 마성의 피지컬 업데이트 [네맘대로 아이들] EP. 4 | i-dle (아이들)ㅣSUB (2025-06-26)"
},
{
  "link": "https://youtu.be/Jw9a-H7iVpk",
  "category": "ORIGINAL_VARIETY",
  "member": "아이들",
  "date": "2025-07-03",
  "duration": "00:20:16",
  "thumbnail": "https://i.ytimg.com/vi/Jw9a-H7iVpk/maxresdefault.jpg",
  "alt": "아이들이 20주년까지 왜 이리 무리했어 [네맘대로 아이들] EP. 5 | i-dle (아이들)ㅣSUB (2025-07-03)",
  "title": "아이들이 20주년까지 왜 이리 무리했어 [네맘대로 아이들] EP. 5 | i-dle (아이들)ㅣSUB (2025-07-03)"
}


 ];

window.originalVarietyCards = originalVarietyCards;
