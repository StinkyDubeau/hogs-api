const fakeLeaderboardRequest = {
    "status": "200",
    "level": "c1_victoria",
    "user_id": "user_id_of_player_making_request",
    "sort_by": "points",
    "columns": {
        "0": "friendly_name",
        "1": "points",
        "2": "time",
        "3": "game_version",
        "4": "game_mode"
    },
    "rows": 10
}

const fakeScore = {
    "user_id": "jaked",
    "level": "c2_bridge",
    "time": 696969,
    "points": 2323,
    "game_mode": "story",
    "game_version": "0.2.0"
}

const fakeScores = [
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 189110,
        "points": 1135,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 266013,
        "points": 5549,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 148158,
        "points": 8588,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 204175,
        "points": 1683,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 127847,
        "points": 4893,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 184976,
        "points": 2096,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 193192,
        "points": 6022,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 286397,
        "points": 5964,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 270371,
        "points": 6864,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 110468,
        "points": 9462,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 136198,
        "points": 1522,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 241978,
        "points": 9867,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 271812,
        "points": 6235,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 117995,
        "points": 6429,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 277536,
        "points": 9819,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 126453,
        "points": 4411,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 258127,
        "points": 8161,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 192644,
        "points": 6853,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 199133,
        "points": 8887,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 190183,
        "points": 7208,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 245504,
        "points": 6020,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 171562,
        "points": 8384,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 189365,
        "points": 6508,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 228349,
        "points": 7699,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 250754,
        "points": 6926,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 151986,
        "points": 8666,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 213414,
        "points": 6505,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 266152,
        "points": 3731,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 286808,
        "points": 8459,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 299262,
        "points": 2504,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 280358,
        "points": 6983,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 165361,
        "points": 6034,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 123143,
        "points": 6997,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 234511,
        "points": 7617,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 112780,
        "points": 1459,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 258234,
        "points": 7076,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 131168,
        "points": 2192,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 126199,
        "points": 9740,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 238131,
        "points": 1274,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 170818,
        "points": 2729,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 225885,
        "points": 3356,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 176332,
        "points": 5991,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 211539,
        "points": 3059,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 144215,
        "points": 5018,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 125415,
        "points": 7345,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 142304,
        "points": 4967,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 199900,
        "points": 5350,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 131182,
        "points": 3492,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 190819,
        "points": 5162,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 251521,
        "points": 3248,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 298918,
        "points": 2730,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 286560,
        "points": 4158,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 148912,
        "points": 2617,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 120462,
        "points": 5517,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 116002,
        "points": 2170,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 285776,
        "points": 2884,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 125308,
        "points": 1561,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 127697,
        "points": 9164,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 194496,
        "points": 8280,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 269427,
        "points": 3460,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 256098,
        "points": 8071,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 137834,
        "points": 1725,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 287266,
        "points": 3786,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 274098,
        "points": 7546,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 134867,
        "points": 7486,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 151028,
        "points": 4973,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 231475,
        "points": 8717,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 143873,
        "points": 6055,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 120297,
        "points": 2768,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 145694,
        "points": 5859,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 242174,
        "points": 5010,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 178101,
        "points": 9480,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 163526,
        "points": 9526,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 172190,
        "points": 2422,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 235594,
        "points": 7936,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 236468,
        "points": 5951,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 255354,
        "points": 4103,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 165334,
        "points": 4555,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 289664,
        "points": 5015,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 286363,
        "points": 4771,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 208873,
        "points": 6538,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 142637,
        "points": 7311,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 151133,
        "points": 7333,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 297821,
        "points": 2520,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 146601,
        "points": 7004,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 241716,
        "points": 9613,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 195528,
        "points": 5155,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 118745,
        "points": 8261,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 137741,
        "points": 2097,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 289654,
        "points": 6619,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 259069,
        "points": 2216,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 177772,
        "points": 6749,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 256975,
        "points": 6305,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 266780,
        "points": 9054,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 219922,
        "points": 1149,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 116594,
        "points": 6654,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 244303,
        "points": 9431,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 290733,
        "points": 5263,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 274970,
        "points": 6562,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 112813,
        "points": 2243,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 139921,
        "points": 5458,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 250719,
        "points": 6087,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 202488,
        "points": 3602,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 286724,
        "points": 4913,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 165418,
        "points": 4328,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 207906,
        "points": 1334,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 245394,
        "points": 9109,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 182645,
        "points": 7801,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 217515,
        "points": 6309,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 101858,
        "points": 2070,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 220346,
        "points": 9858,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 157189,
        "points": 1201,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 153998,
        "points": 8857,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 208286,
        "points": 8295,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 119381,
        "points": 1383,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 272819,
        "points": 2880,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 163073,
        "points": 4832,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 103714,
        "points": 9985,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 197318,
        "points": 8599,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 297044,
        "points": 4891,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 259450,
        "points": 6154,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 147733,
        "points": 8818,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 146929,
        "points": 4688,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 105155,
        "points": 3692,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 294997,
        "points": 5192,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 122794,
        "points": 6597,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 158124,
        "points": 1007,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 225383,
        "points": 7912,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 251050,
        "points": 3695,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 275919,
        "points": 8604,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 114902,
        "points": 2448,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 275252,
        "points": 2980,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 176947,
        "points": 8090,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 276635,
        "points": 3301,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 205115,
        "points": 2863,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 200721,
        "points": 6018,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 226933,
        "points": 6662,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 200665,
        "points": 5180,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 258352,
        "points": 7910,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 205687,
        "points": 6452,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 172061,
        "points": 5607,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 114651,
        "points": 2988,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 150896,
        "points": 9463,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 229356,
        "points": 4174,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 221845,
        "points": 7237,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 297449,
        "points": 3635,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 264832,
        "points": 8826,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 167203,
        "points": 7323,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 155302,
        "points": 9712,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 251927,
        "points": 8302,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 220544,
        "points": 6640,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 108554,
        "points": 9868,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 150893,
        "points": 4068,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 113050,
        "points": 6965,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 114858,
        "points": 2974,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 283363,
        "points": 2381,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 207412,
        "points": 4519,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 213500,
        "points": 2230,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 105196,
        "points": 5117,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 136595,
        "points": 8988,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 178669,
        "points": 3877,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 184925,
        "points": 5616,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 143327,
        "points": 7363,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 292240,
        "points": 1635,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 256861,
        "points": 3415,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 270232,
        "points": 4976,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 273273,
        "points": 3960,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 276202,
        "points": 9097,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 296495,
        "points": 6413,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 152231,
        "points": 3508,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 169595,
        "points": 6186,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 132771,
        "points": 4788,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 132228,
        "points": 4497,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 120931,
        "points": 1611,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 200974,
        "points": 7844,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 159424,
        "points": 5374,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 277279,
        "points": 7405,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 121132,
        "points": 6103,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 131816,
        "points": 6891,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 134230,
        "points": 1449,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 158132,
        "points": 7322,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 248691,
        "points": 1938,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 180025,
        "points": 3396,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 149453,
        "points": 1494,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 187879,
        "points": 5802,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 165129,
        "points": 4559,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 177602,
        "points": 6252,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 219290,
        "points": 7133,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 127912,
        "points": 6488,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 114873,
        "points": 7513,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 224672,
        "points": 5716,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 252479,
        "points": 3497,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 266261,
        "points": 6395,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 289059,
        "points": 4099,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 267330,
        "points": 4365,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 131035,
        "points": 7430,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 279890,
        "points": 7255,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 270661,
        "points": 5096,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 264440,
        "points": 6593,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 251960,
        "points": 4319,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 142341,
        "points": 7191,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 276951,
        "points": 1838,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 231112,
        "points": 1516,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 180584,
        "points": 9871,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 215308,
        "points": 7275,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 122069,
        "points": 9152,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 226898,
        "points": 2411,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 211985,
        "points": 6311,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 121471,
        "points": 8992,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 133512,
        "points": 5687,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 293819,
        "points": 7516,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 216739,
        "points": 5562,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 267968,
        "points": 9436,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 127259,
        "points": 8183,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 288161,
        "points": 1902,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 100904,
        "points": 1986,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 197660,
        "points": 7259,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 282184,
        "points": 1939,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 134602,
        "points": 5231,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 294692,
        "points": 7128,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 245029,
        "points": 5903,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 260489,
        "points": 8510,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 171395,
        "points": 4195,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 213579,
        "points": 1240,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 100250,
        "points": 5172,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 227969,
        "points": 8417,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 232179,
        "points": 2383,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 194306,
        "points": 8762,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 277822,
        "points": 2326,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 112662,
        "points": 3150,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 237723,
        "points": 8886,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 223736,
        "points": 6011,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 144481,
        "points": 3831,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 209348,
        "points": 1402,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 209158,
        "points": 8679,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 219850,
        "points": 5735,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 181629,
        "points": 4229,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 210252,
        "points": 5014,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 287438,
        "points": 8914,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 226203,
        "points": 4269,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 157118,
        "points": 8284,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 210455,
        "points": 1610,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 217427,
        "points": 8210,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 131862,
        "points": 7378,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 216414,
        "points": 6250,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 187049,
        "points": 3146,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 206133,
        "points": 5907,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 114670,
        "points": 9241,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 186176,
        "points": 7384,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 147891,
        "points": 5325,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    }
]


export { fakeScores, fakeScore, fakeLeaderboardRequest };