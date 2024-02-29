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
        "user_id": "user_id_10",
        "level": "c2_jakeshouse",
        "time": 115488,
        "points": 6107,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 268456,
        "points": 9566,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 228154,
        "points": 4135,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c3_wheatfield",
        "time": 299486,
        "points": 4318,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_helicopter",
        "time": 110203,
        "points": 5249,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_victoria",
        "time": 174111,
        "points": 8862,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 225429,
        "points": 6800,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_doghouse",
        "time": 284461,
        "points": 6642,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_helicopter",
        "time": 198354,
        "points": 8586,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c2_jakeshouse",
        "time": 109777,
        "points": 4334,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 158748,
        "points": 3771,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c3_wheatfield",
        "time": 211737,
        "points": 1107,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_jakeshouse",
        "time": 193862,
        "points": 2860,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 181041,
        "points": 7673,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_jakeshouse",
        "time": 146816,
        "points": 2035,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 298272,
        "points": 6930,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 274627,
        "points": 7594,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 113695,
        "points": 2686,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_jakeshouse",
        "time": 171896,
        "points": 5472,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_victoria",
        "time": 136112,
        "points": 8246,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_jakeshouse",
        "time": 191614,
        "points": 7806,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 183379,
        "points": 9806,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 162740,
        "points": 7962,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 196909,
        "points": 6413,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 270976,
        "points": 1550,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c3_wheatfield",
        "time": 171242,
        "points": 4778,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_jakeshouse",
        "time": 226519,
        "points": 3367,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 294218,
        "points": 8342,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_helicopter",
        "time": 121643,
        "points": 5777,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_helicopter",
        "time": 129826,
        "points": 3879,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 259977,
        "points": 1504,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 299268,
        "points": 8663,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_helicopter",
        "time": 118590,
        "points": 3408,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_helicopter",
        "time": 209385,
        "points": 4260,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c2_jakeshouse",
        "time": 243066,
        "points": 2871,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 193328,
        "points": 6005,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_doghouse",
        "time": 272057,
        "points": 2150,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 157651,
        "points": 5165,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 121611,
        "points": 5010,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c3_wheatfield",
        "time": 259418,
        "points": 3420,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_victoria",
        "time": 112048,
        "points": 9908,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 200145,
        "points": 7257,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 174840,
        "points": 3637,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 116876,
        "points": 9943,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 216336,
        "points": 2884,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 171448,
        "points": 6549,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 126348,
        "points": 4568,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_victoria",
        "time": 269346,
        "points": 6048,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 244071,
        "points": 2539,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_doghouse",
        "time": 180808,
        "points": 5640,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 253295,
        "points": 5935,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 128846,
        "points": 1233,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_victoria",
        "time": 267754,
        "points": 2536,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_victoria",
        "time": 178557,
        "points": 3227,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_jakeshouse",
        "time": 251260,
        "points": 1839,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_doghouse",
        "time": 220064,
        "points": 3839,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 271402,
        "points": 7882,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_jakeshouse",
        "time": 226631,
        "points": 4372,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 159368,
        "points": 1906,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 182115,
        "points": 9399,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_jakeshouse",
        "time": 149503,
        "points": 1935,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_helicopter",
        "time": 104482,
        "points": 1862,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 229973,
        "points": 5078,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 294571,
        "points": 8408,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 271404,
        "points": 2398,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c3_wheatfield",
        "time": 261287,
        "points": 2147,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 151542,
        "points": 1574,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_jakeshouse",
        "time": 285666,
        "points": 8830,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 160252,
        "points": 2344,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_doghouse",
        "time": 255483,
        "points": 9205,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 137745,
        "points": 8789,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_helicopter",
        "time": 280249,
        "points": 5908,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_victoria",
        "time": 212747,
        "points": 3511,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 131013,
        "points": 3529,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_helicopter",
        "time": 117470,
        "points": 3044,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_helicopter",
        "time": 240302,
        "points": 5903,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_victoria",
        "time": 295636,
        "points": 9057,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c3_wheatfield",
        "time": 197529,
        "points": 6506,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 205046,
        "points": 1522,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 226524,
        "points": 4067,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 212855,
        "points": 3777,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c3_wheatfield",
        "time": 292433,
        "points": 4066,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 139560,
        "points": 3050,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_helicopter",
        "time": 263461,
        "points": 6330,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_doghouse",
        "time": 107547,
        "points": 6198,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 185962,
        "points": 9338,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 196415,
        "points": 8556,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c3_wheatfield",
        "time": 134928,
        "points": 8214,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 169014,
        "points": 2336,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 147443,
        "points": 5214,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_jakeshouse",
        "time": 117318,
        "points": 8207,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c2_jakeshouse",
        "time": 274973,
        "points": 2465,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_victoria",
        "time": 202302,
        "points": 8975,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 172122,
        "points": 6311,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_helicopter",
        "time": 220563,
        "points": 8205,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_helicopter",
        "time": 103405,
        "points": 1113,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 244213,
        "points": 3272,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_helicopter",
        "time": 106421,
        "points": 7486,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 140377,
        "points": 8013,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_jakeshouse",
        "time": 153640,
        "points": 5735,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c3_wheatfield",
        "time": 219388,
        "points": 4393,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 113979,
        "points": 4718,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c2_jakeshouse",
        "time": 191847,
        "points": 2045,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_jakeshouse",
        "time": 292721,
        "points": 2334,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 126574,
        "points": 1491,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_helicopter",
        "time": 215628,
        "points": 1691,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 255488,
        "points": 6414,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 243903,
        "points": 7926,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 190940,
        "points": 5354,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_doghouse",
        "time": 222576,
        "points": 8961,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_victoria",
        "time": 262668,
        "points": 4517,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c3_wheatfield",
        "time": 227071,
        "points": 7393,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 292652,
        "points": 6046,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 215744,
        "points": 6573,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 286030,
        "points": 3386,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 172833,
        "points": 7491,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 172170,
        "points": 3043,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 142942,
        "points": 7512,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_jakeshouse",
        "time": 214586,
        "points": 6253,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 153036,
        "points": 2814,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_helicopter",
        "time": 271006,
        "points": 4322,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_jakeshouse",
        "time": 184062,
        "points": 1088,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 145069,
        "points": 2041,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 285823,
        "points": 1850,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 130126,
        "points": 2568,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 249095,
        "points": 8303,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 107840,
        "points": 8454,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 219033,
        "points": 4638,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_jakeshouse",
        "time": 271740,
        "points": 6692,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 149488,
        "points": 8223,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_jakeshouse",
        "time": 233494,
        "points": 4448,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 134004,
        "points": 8771,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c2_jakeshouse",
        "time": 159486,
        "points": 5016,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_victoria",
        "time": 227598,
        "points": 9749,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_42",
        "level": "c2_helicopter",
        "time": 215652,
        "points": 8250,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 121884,
        "points": 9278,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_helicopter",
        "time": 113808,
        "points": 1260,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_helicopter",
        "time": 163236,
        "points": 9314,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_helicopter",
        "time": 102061,
        "points": 6009,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_doghouse",
        "time": 210961,
        "points": 5786,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c3_wheatfield",
        "time": 140690,
        "points": 1644,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_helicopter",
        "time": 137955,
        "points": 2032,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_doghouse",
        "time": 175378,
        "points": 1645,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 134043,
        "points": 8105,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_helicopter",
        "time": 260560,
        "points": 6607,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c3_wheatfield",
        "time": 151639,
        "points": 4653,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 276714,
        "points": 7129,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 109254,
        "points": 6379,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_helicopter",
        "time": 158082,
        "points": 2298,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_doghouse",
        "time": 274928,
        "points": 2634,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_jakeshouse",
        "time": 175477,
        "points": 6911,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_doghouse",
        "time": 112176,
        "points": 9177,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 104040,
        "points": 2098,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 234726,
        "points": 3888,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 243247,
        "points": 8193,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 192629,
        "points": 3469,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_jakeshouse",
        "time": 199811,
        "points": 4584,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c3_wheatfield",
        "time": 210748,
        "points": 3669,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 178640,
        "points": 5779,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 239952,
        "points": 2493,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_doghouse",
        "time": 286595,
        "points": 1111,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_50",
        "level": "c3_wheatfield",
        "time": 135090,
        "points": 7748,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 264656,
        "points": 2172,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 145950,
        "points": 4036,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 231893,
        "points": 6901,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 195977,
        "points": 9515,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 109891,
        "points": 7776,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 192938,
        "points": 5991,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_doghouse",
        "time": 195865,
        "points": 4179,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_victoria",
        "time": 100938,
        "points": 7509,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_helicopter",
        "time": 273972,
        "points": 2977,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_victoria",
        "time": 134908,
        "points": 7448,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 176226,
        "points": 1902,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_jakeshouse",
        "time": 167472,
        "points": 6649,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 224662,
        "points": 9525,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c1_victoria",
        "time": 198447,
        "points": 1531,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c3_wheatfield",
        "time": 148724,
        "points": 6447,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_jakeshouse",
        "time": 174037,
        "points": 9605,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 289461,
        "points": 5119,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 258855,
        "points": 3979,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 145080,
        "points": 3705,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_victoria",
        "time": 197608,
        "points": 4925,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_victoria",
        "time": 158637,
        "points": 6083,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c3_wheatfield",
        "time": 105491,
        "points": 1447,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_doghouse",
        "time": 133479,
        "points": 1581,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 228789,
        "points": 2677,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_jakeshouse",
        "time": 178749,
        "points": 1648,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_doghouse",
        "time": 204249,
        "points": 1199,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c3_wheatfield",
        "time": 245440,
        "points": 9510,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 144950,
        "points": 1993,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_jakeshouse",
        "time": 177584,
        "points": 2427,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c3_wheatfield",
        "time": 153288,
        "points": 5675,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 160031,
        "points": 7011,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_jakeshouse",
        "time": 190958,
        "points": 9445,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_jakeshouse",
        "time": 143445,
        "points": 4148,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 190911,
        "points": 9129,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 218757,
        "points": 1368,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 286181,
        "points": 7500,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 188994,
        "points": 9537,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 114372,
        "points": 7664,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 276124,
        "points": 4613,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 244142,
        "points": 5151,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_16",
        "level": "c3_wheatfield",
        "time": 101685,
        "points": 6797,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c3_wheatfield",
        "time": 256452,
        "points": 4672,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_doghouse",
        "time": 200037,
        "points": 8510,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_jakeshouse",
        "time": 164199,
        "points": 7895,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 151502,
        "points": 4794,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_jakeshouse",
        "time": 159848,
        "points": 3950,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 227059,
        "points": 8397,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_doghouse",
        "time": 283781,
        "points": 3160,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_jakeshouse",
        "time": 105325,
        "points": 6203,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_victoria",
        "time": 190900,
        "points": 2849,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_doghouse",
        "time": 298757,
        "points": 9137,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_jakeshouse",
        "time": 246343,
        "points": 8256,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c3_wheatfield",
        "time": 135858,
        "points": 9582,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_doghouse",
        "time": 256852,
        "points": 5379,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 146607,
        "points": 5044,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_helicopter",
        "time": 211695,
        "points": 6771,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 295093,
        "points": 1021,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 209545,
        "points": 7054,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_jakeshouse",
        "time": 298427,
        "points": 5323,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 146156,
        "points": 3682,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_helicopter",
        "time": 155340,
        "points": 2699,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_doghouse",
        "time": 282009,
        "points": 9322,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 207123,
        "points": 1739,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_victoria",
        "time": 141914,
        "points": 3559,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_helicopter",
        "time": 212723,
        "points": 3094,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 150439,
        "points": 5536,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c2_helicopter",
        "time": 278678,
        "points": 5809,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 190799,
        "points": 7654,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 270602,
        "points": 2489,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c3_wheatfield",
        "time": 155994,
        "points": 4705,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_victoria",
        "time": 170318,
        "points": 4607,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c3_wheatfield",
        "time": 116526,
        "points": 7261,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 213142,
        "points": 2816,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 224156,
        "points": 4409,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 190406,
        "points": 8235,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_victoria",
        "time": 236644,
        "points": 1870,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 100508,
        "points": 8003,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c3_wheatfield",
        "time": 184103,
        "points": 8956,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 289073,
        "points": 7064,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_jakeshouse",
        "time": 132180,
        "points": 7798,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_jakeshouse",
        "time": 197773,
        "points": 2886,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_victoria",
        "time": 105621,
        "points": 7107,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 106524,
        "points": 1698,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 199063,
        "points": 1161,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 212323,
        "points": 1250,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 207168,
        "points": 5491,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 101697,
        "points": 5745,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 292388,
        "points": 3048,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_victoria",
        "time": 104692,
        "points": 2742,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_victoria",
        "time": 181850,
        "points": 3782,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 154815,
        "points": 9276,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 203837,
        "points": 5502,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 227569,
        "points": 5367,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c2_jakeshouse",
        "time": 136946,
        "points": 8893,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 231207,
        "points": 3006,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_helicopter",
        "time": 258286,
        "points": 6727,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_jakeshouse",
        "time": 158424,
        "points": 3226,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 276239,
        "points": 2069,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c3_wheatfield",
        "time": 186652,
        "points": 7760,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_jakeshouse",
        "time": 286530,
        "points": 6780,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 112884,
        "points": 8682,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_doghouse",
        "time": 259834,
        "points": 1939,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 218823,
        "points": 7139,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 243196,
        "points": 5715,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_jakeshouse",
        "time": 249898,
        "points": 9061,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_victoria",
        "time": 290659,
        "points": 3921,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c3_wheatfield",
        "time": 121262,
        "points": 3608,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 118027,
        "points": 7601,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 102885,
        "points": 3828,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 187339,
        "points": 7657,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 171482,
        "points": 8268,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_helicopter",
        "time": 109255,
        "points": 3381,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 103151,
        "points": 1143,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 126518,
        "points": 4462,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 247714,
        "points": 1408,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_victoria",
        "time": 135334,
        "points": 2764,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 266321,
        "points": 7094,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 174088,
        "points": 5366,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 208729,
        "points": 7972,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_helicopter",
        "time": 120279,
        "points": 2090,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 165039,
        "points": 8675,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_helicopter",
        "time": 212642,
        "points": 3217,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_jakeshouse",
        "time": 293359,
        "points": 4488,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_victoria",
        "time": 121242,
        "points": 3010,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 241571,
        "points": 6292,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_helicopter",
        "time": 144709,
        "points": 9307,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_doghouse",
        "time": 290387,
        "points": 4916,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 252959,
        "points": 7931,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 146726,
        "points": 6384,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 215062,
        "points": 7278,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 104336,
        "points": 1096,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_jakeshouse",
        "time": 159570,
        "points": 8036,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 203236,
        "points": 2881,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 200363,
        "points": 6151,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 204120,
        "points": 9967,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_jakeshouse",
        "time": 197343,
        "points": 6371,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 207343,
        "points": 3005,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 151092,
        "points": 1117,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_victoria",
        "time": 244781,
        "points": 4077,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 279190,
        "points": 8972,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_jakeshouse",
        "time": 286032,
        "points": 2586,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c3_wheatfield",
        "time": 191947,
        "points": 4301,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 225182,
        "points": 1266,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c3_wheatfield",
        "time": 141081,
        "points": 9549,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_victoria",
        "time": 169315,
        "points": 8152,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c3_wheatfield",
        "time": 237504,
        "points": 8170,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_45",
        "level": "c3_wheatfield",
        "time": 104301,
        "points": 1464,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c3_wheatfield",
        "time": 200020,
        "points": 7243,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 161523,
        "points": 5217,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_doghouse",
        "time": 139436,
        "points": 1539,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_doghouse",
        "time": 287884,
        "points": 3883,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 114178,
        "points": 2407,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 244202,
        "points": 1242,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 241179,
        "points": 8177,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_doghouse",
        "time": 184002,
        "points": 3173,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_victoria",
        "time": 175934,
        "points": 4145,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 293887,
        "points": 1347,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 286676,
        "points": 7707,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_jakeshouse",
        "time": 282097,
        "points": 8779,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 252937,
        "points": 4592,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 267114,
        "points": 4911,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 208747,
        "points": 3994,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 121457,
        "points": 2279,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 276778,
        "points": 8959,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 293437,
        "points": 1518,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_helicopter",
        "time": 176051,
        "points": 5004,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 163367,
        "points": 8676,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c3_wheatfield",
        "time": 215295,
        "points": 2735,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_28",
        "level": "c3_wheatfield",
        "time": 298562,
        "points": 8746,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_doghouse",
        "time": 185081,
        "points": 8141,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 110520,
        "points": 2132,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 198090,
        "points": 3852,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_victoria",
        "time": 228820,
        "points": 3080,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 127150,
        "points": 8396,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_jakeshouse",
        "time": 101335,
        "points": 7160,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_victoria",
        "time": 292556,
        "points": 2682,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_doghouse",
        "time": 162831,
        "points": 7116,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_jakeshouse",
        "time": 238793,
        "points": 8852,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_victoria",
        "time": 167395,
        "points": 5945,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_helicopter",
        "time": 201756,
        "points": 4086,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 144585,
        "points": 1854,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 108916,
        "points": 9386,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_jakeshouse",
        "time": 109680,
        "points": 9083,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 295004,
        "points": 7267,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_doghouse",
        "time": 279858,
        "points": 3807,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 113906,
        "points": 3686,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 287352,
        "points": 8621,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 113839,
        "points": 6578,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 240621,
        "points": 3196,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_jakeshouse",
        "time": 128205,
        "points": 6600,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_doghouse",
        "time": 183612,
        "points": 4773,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_helicopter",
        "time": 288370,
        "points": 5872,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 169969,
        "points": 6997,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 205514,
        "points": 3774,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 259114,
        "points": 6950,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_jakeshouse",
        "time": 146883,
        "points": 9822,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_42",
        "level": "c2_jakeshouse",
        "time": 275306,
        "points": 2253,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_victoria",
        "time": 278840,
        "points": 8333,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 182632,
        "points": 4627,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 246196,
        "points": 5257,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_jakeshouse",
        "time": 184790,
        "points": 4949,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 139234,
        "points": 5733,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_33",
        "level": "c2_helicopter",
        "time": 164832,
        "points": 3533,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c1_victoria",
        "time": 230814,
        "points": 2787,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c3_wheatfield",
        "time": 244876,
        "points": 8145,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 240968,
        "points": 8195,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 199147,
        "points": 6778,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_jakeshouse",
        "time": 120690,
        "points": 2995,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 228153,
        "points": 1312,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_helicopter",
        "time": 241891,
        "points": 2280,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 202235,
        "points": 7778,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c1_victoria",
        "time": 103237,
        "points": 6794,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_jakeshouse",
        "time": 273742,
        "points": 8671,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_doghouse",
        "time": 158085,
        "points": 8423,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_victoria",
        "time": 212479,
        "points": 7889,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_doghouse",
        "time": 110310,
        "points": 4168,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 100405,
        "points": 6133,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_jakeshouse",
        "time": 125029,
        "points": 5188,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 241867,
        "points": 6128,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_victoria",
        "time": 235509,
        "points": 7655,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 185689,
        "points": 9804,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 152267,
        "points": 5503,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 192625,
        "points": 5586,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 214369,
        "points": 2015,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 158788,
        "points": 5000,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_helicopter",
        "time": 174319,
        "points": 6895,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 227292,
        "points": 6752,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_jakeshouse",
        "time": 180554,
        "points": 6315,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 280361,
        "points": 4800,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_victoria",
        "time": 141839,
        "points": 9420,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_victoria",
        "time": 112415,
        "points": 2921,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_victoria",
        "time": 107600,
        "points": 4433,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_doghouse",
        "time": 244133,
        "points": 8456,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_victoria",
        "time": 188757,
        "points": 9071,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_doghouse",
        "time": 105386,
        "points": 2297,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 251789,
        "points": 3268,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c3_wheatfield",
        "time": 275403,
        "points": 1124,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 145220,
        "points": 8511,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_jakeshouse",
        "time": 298144,
        "points": 9659,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c3_wheatfield",
        "time": 221536,
        "points": 2165,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 185119,
        "points": 1528,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 184285,
        "points": 5132,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 277981,
        "points": 7457,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_helicopter",
        "time": 220344,
        "points": 8629,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c3_wheatfield",
        "time": 110935,
        "points": 8718,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c1_doghouse",
        "time": 197110,
        "points": 4354,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 153415,
        "points": 1182,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 149178,
        "points": 9516,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c1_victoria",
        "time": 181883,
        "points": 2843,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 228921,
        "points": 8628,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 121739,
        "points": 6394,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c3_wheatfield",
        "time": 273938,
        "points": 1982,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_doghouse",
        "time": 143734,
        "points": 3746,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_helicopter",
        "time": 235219,
        "points": 3949,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c3_wheatfield",
        "time": 109673,
        "points": 4992,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 173071,
        "points": 5043,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_victoria",
        "time": 278136,
        "points": 8046,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_victoria",
        "time": 115173,
        "points": 7671,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_jakeshouse",
        "time": 261277,
        "points": 1767,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 181735,
        "points": 1303,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 140715,
        "points": 5960,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_jakeshouse",
        "time": 259051,
        "points": 5059,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_jakeshouse",
        "time": 208778,
        "points": 1130,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_doghouse",
        "time": 209433,
        "points": 1247,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 286841,
        "points": 6786,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_jakeshouse",
        "time": 189463,
        "points": 4995,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 277903,
        "points": 5014,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 197109,
        "points": 1108,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_doghouse",
        "time": 120127,
        "points": 8724,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 287682,
        "points": 6740,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_helicopter",
        "time": 243509,
        "points": 6323,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_doghouse",
        "time": 297176,
        "points": 6592,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c3_wheatfield",
        "time": 153104,
        "points": 3534,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 276728,
        "points": 5333,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_jakeshouse",
        "time": 293473,
        "points": 1072,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c3_wheatfield",
        "time": 147191,
        "points": 8838,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 281550,
        "points": 3969,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 145055,
        "points": 1198,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 255007,
        "points": 2345,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 285810,
        "points": 5635,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 147231,
        "points": 6175,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c3_wheatfield",
        "time": 154237,
        "points": 6971,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_jakeshouse",
        "time": 299661,
        "points": 2056,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 258078,
        "points": 7210,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c2_helicopter",
        "time": 147984,
        "points": 5074,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 200043,
        "points": 6109,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c3_wheatfield",
        "time": 121837,
        "points": 5834,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_doghouse",
        "time": 252766,
        "points": 8509,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 140316,
        "points": 1557,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 121037,
        "points": 4250,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_victoria",
        "time": 185790,
        "points": 7483,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c1_victoria",
        "time": 278063,
        "points": 1561,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 280268,
        "points": 8872,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 136789,
        "points": 3468,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 158278,
        "points": 4258,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_helicopter",
        "time": 122150,
        "points": 4535,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 252426,
        "points": 6965,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_jakeshouse",
        "time": 100234,
        "points": 6492,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_jakeshouse",
        "time": 210995,
        "points": 6094,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 257507,
        "points": 3779,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c3_wheatfield",
        "time": 217952,
        "points": 1752,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 190535,
        "points": 5508,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 206190,
        "points": 5387,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_41",
        "level": "c2_helicopter",
        "time": 106370,
        "points": 3943,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_jakeshouse",
        "time": 174142,
        "points": 5549,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 267567,
        "points": 1433,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 191959,
        "points": 4706,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 298752,
        "points": 1179,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_helicopter",
        "time": 193192,
        "points": 6374,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_doghouse",
        "time": 112852,
        "points": 4374,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 263736,
        "points": 4388,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 250136,
        "points": 2343,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_victoria",
        "time": 113521,
        "points": 5009,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 150485,
        "points": 5351,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_22",
        "level": "c3_wheatfield",
        "time": 213245,
        "points": 6002,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 210902,
        "points": 2837,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 153672,
        "points": 5679,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 297160,
        "points": 2392,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c3_wheatfield",
        "time": 222801,
        "points": 3847,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 173591,
        "points": 3784,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 142481,
        "points": 2083,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c3_wheatfield",
        "time": 135099,
        "points": 1221,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 213767,
        "points": 1191,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c2_jakeshouse",
        "time": 239126,
        "points": 3989,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c3_wheatfield",
        "time": 268971,
        "points": 8199,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 232986,
        "points": 2299,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_helicopter",
        "time": 167527,
        "points": 3126,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c3_wheatfield",
        "time": 273335,
        "points": 2533,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_helicopter",
        "time": 288319,
        "points": 5360,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c3_wheatfield",
        "time": 130694,
        "points": 5018,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_helicopter",
        "time": 131377,
        "points": 7335,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 170591,
        "points": 3082,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 280635,
        "points": 5054,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 117647,
        "points": 2729,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_helicopter",
        "time": 249528,
        "points": 8275,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_helicopter",
        "time": 123249,
        "points": 8425,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c3_wheatfield",
        "time": 259134,
        "points": 8004,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c2_jakeshouse",
        "time": 205266,
        "points": 9128,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_jakeshouse",
        "time": 160824,
        "points": 5250,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_doghouse",
        "time": 285074,
        "points": 3505,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_jakeshouse",
        "time": 278827,
        "points": 4443,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 255089,
        "points": 3413,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 205204,
        "points": 4927,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_jakeshouse",
        "time": 262967,
        "points": 1837,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c3_wheatfield",
        "time": 215008,
        "points": 3145,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 145505,
        "points": 1155,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c3_wheatfield",
        "time": 165768,
        "points": 9207,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c3_wheatfield",
        "time": 115404,
        "points": 7317,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_victoria",
        "time": 261492,
        "points": 7990,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_jakeshouse",
        "time": 130529,
        "points": 6514,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 299299,
        "points": 5686,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 106419,
        "points": 7065,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c3_wheatfield",
        "time": 133336,
        "points": 2862,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 144324,
        "points": 1688,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_victoria",
        "time": 263802,
        "points": 9350,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_doghouse",
        "time": 195517,
        "points": 5662,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 140094,
        "points": 6129,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 172433,
        "points": 2388,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_jakeshouse",
        "time": 224406,
        "points": 1029,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c2_helicopter",
        "time": 230651,
        "points": 6338,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_victoria",
        "time": 279869,
        "points": 4007,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c3_wheatfield",
        "time": 109567,
        "points": 8166,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_victoria",
        "time": 173216,
        "points": 9151,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 147470,
        "points": 4636,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 196907,
        "points": 5660,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 127899,
        "points": 6457,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_jakeshouse",
        "time": 247708,
        "points": 8729,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 132481,
        "points": 3740,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_doghouse",
        "time": 104697,
        "points": 2275,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 297727,
        "points": 2005,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c3_wheatfield",
        "time": 280574,
        "points": 3871,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 171324,
        "points": 2606,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_doghouse",
        "time": 208755,
        "points": 9916,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_doghouse",
        "time": 104237,
        "points": 7738,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 102408,
        "points": 8324,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_doghouse",
        "time": 113967,
        "points": 2854,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_doghouse",
        "time": 297152,
        "points": 3000,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 297568,
        "points": 4725,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 212404,
        "points": 1969,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 100788,
        "points": 5345,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c3_wheatfield",
        "time": 168478,
        "points": 1679,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_doghouse",
        "time": 119704,
        "points": 2943,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 258161,
        "points": 8123,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 166022,
        "points": 1026,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_jakeshouse",
        "time": 132889,
        "points": 4217,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 270603,
        "points": 5765,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_helicopter",
        "time": 193834,
        "points": 7427,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 232228,
        "points": 8550,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_doghouse",
        "time": 220003,
        "points": 7302,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c3_wheatfield",
        "time": 145951,
        "points": 7373,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 169430,
        "points": 3657,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 107521,
        "points": 3785,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_victoria",
        "time": 192118,
        "points": 2096,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_jakeshouse",
        "time": 170718,
        "points": 4172,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c3_wheatfield",
        "time": 196253,
        "points": 8108,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_helicopter",
        "time": 183168,
        "points": 6887,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_jakeshouse",
        "time": 107703,
        "points": 9368,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_doghouse",
        "time": 279335,
        "points": 4815,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 103685,
        "points": 1035,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 291609,
        "points": 6164,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_doghouse",
        "time": 195708,
        "points": 1887,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 141505,
        "points": 3495,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_9",
        "level": "c2_jakeshouse",
        "time": 105354,
        "points": 4111,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_jakeshouse",
        "time": 288939,
        "points": 4434,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 174614,
        "points": 8819,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c3_wheatfield",
        "time": 295269,
        "points": 7439,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 268952,
        "points": 3101,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c3_wheatfield",
        "time": 185100,
        "points": 4441,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c3_wheatfield",
        "time": 123514,
        "points": 5753,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 163871,
        "points": 2274,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_doghouse",
        "time": 165601,
        "points": 3430,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 289173,
        "points": 8820,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 240189,
        "points": 6541,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_helicopter",
        "time": 264468,
        "points": 3936,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_jakeshouse",
        "time": 108132,
        "points": 4227,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 141714,
        "points": 9665,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_victoria",
        "time": 277412,
        "points": 9100,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 226678,
        "points": 8962,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_helicopter",
        "time": 130366,
        "points": 5319,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_doghouse",
        "time": 150761,
        "points": 6065,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c2_jakeshouse",
        "time": 236163,
        "points": 4855,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_victoria",
        "time": 205716,
        "points": 5690,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_helicopter",
        "time": 287311,
        "points": 4107,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_jakeshouse",
        "time": 210840,
        "points": 4216,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c3_wheatfield",
        "time": 236228,
        "points": 4954,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_jakeshouse",
        "time": 187298,
        "points": 6045,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_doghouse",
        "time": 231429,
        "points": 2758,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 218760,
        "points": 8329,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 210274,
        "points": 3326,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_victoria",
        "time": 256576,
        "points": 5669,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 211803,
        "points": 8128,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_victoria",
        "time": 283432,
        "points": 6147,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 167835,
        "points": 4355,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_helicopter",
        "time": 150589,
        "points": 5181,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_jakeshouse",
        "time": 211464,
        "points": 1773,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_jakeshouse",
        "time": 214003,
        "points": 1061,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 194547,
        "points": 7978,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c3_wheatfield",
        "time": 128858,
        "points": 8478,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 243875,
        "points": 5755,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_victoria",
        "time": 211748,
        "points": 9178,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 138536,
        "points": 8500,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_jakeshouse",
        "time": 182929,
        "points": 6813,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_victoria",
        "time": 155873,
        "points": 9570,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c3_wheatfield",
        "time": 252574,
        "points": 3452,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_helicopter",
        "time": 159063,
        "points": 6734,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_victoria",
        "time": 152324,
        "points": 2848,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 226384,
        "points": 3937,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 239443,
        "points": 8747,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 151360,
        "points": 9170,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_jakeshouse",
        "time": 117083,
        "points": 2834,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_jakeshouse",
        "time": 182523,
        "points": 1578,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 192662,
        "points": 3289,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_doghouse",
        "time": 150688,
        "points": 1279,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 211939,
        "points": 1292,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 290874,
        "points": 6406,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_doghouse",
        "time": 136380,
        "points": 1776,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_doghouse",
        "time": 107607,
        "points": 5893,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 146524,
        "points": 3716,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 218358,
        "points": 2583,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_jakeshouse",
        "time": 289284,
        "points": 9762,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 277041,
        "points": 2786,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_jakeshouse",
        "time": 264770,
        "points": 5413,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_doghouse",
        "time": 182405,
        "points": 1239,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_doghouse",
        "time": 240831,
        "points": 4052,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 213665,
        "points": 1634,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 262965,
        "points": 7423,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c3_wheatfield",
        "time": 153265,
        "points": 4860,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_jakeshouse",
        "time": 203006,
        "points": 2081,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 262357,
        "points": 1238,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_victoria",
        "time": 273343,
        "points": 6994,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c3_wheatfield",
        "time": 239477,
        "points": 9910,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 243457,
        "points": 3085,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 113686,
        "points": 2626,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_jakeshouse",
        "time": 202861,
        "points": 4722,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c3_wheatfield",
        "time": 206028,
        "points": 2917,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_jakeshouse",
        "time": 237969,
        "points": 6716,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_victoria",
        "time": 168833,
        "points": 1687,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_doghouse",
        "time": 246810,
        "points": 8460,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_helicopter",
        "time": 249879,
        "points": 7835,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_jakeshouse",
        "time": 150297,
        "points": 7110,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 280161,
        "points": 6259,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c3_wheatfield",
        "time": 265555,
        "points": 6059,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_helicopter",
        "time": 269138,
        "points": 5035,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 129327,
        "points": 2988,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 178744,
        "points": 8139,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 157164,
        "points": 1066,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c2_helicopter",
        "time": 195203,
        "points": 8498,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 135798,
        "points": 3470,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_jakeshouse",
        "time": 149585,
        "points": 8499,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_doghouse",
        "time": 129536,
        "points": 8793,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_victoria",
        "time": 264105,
        "points": 1602,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 144709,
        "points": 5544,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 252739,
        "points": 4369,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 208009,
        "points": 9380,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 212446,
        "points": 4035,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 116498,
        "points": 1081,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 225470,
        "points": 8232,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_helicopter",
        "time": 231986,
        "points": 1733,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_helicopter",
        "time": 132628,
        "points": 3134,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_helicopter",
        "time": 197562,
        "points": 6438,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c3_wheatfield",
        "time": 112716,
        "points": 9842,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_42",
        "level": "c2_helicopter",
        "time": 224912,
        "points": 3136,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_jakeshouse",
        "time": 235289,
        "points": 4041,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_helicopter",
        "time": 212478,
        "points": 3955,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_doghouse",
        "time": 144793,
        "points": 9576,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 267092,
        "points": 8016,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_victoria",
        "time": 234868,
        "points": 5680,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 115660,
        "points": 7985,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_jakeshouse",
        "time": 159796,
        "points": 6215,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 287543,
        "points": 8025,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 104575,
        "points": 6711,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_jakeshouse",
        "time": 238010,
        "points": 1709,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 182037,
        "points": 6287,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c3_wheatfield",
        "time": 205238,
        "points": 2895,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_victoria",
        "time": 141779,
        "points": 1872,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 256064,
        "points": 1900,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 266690,
        "points": 2560,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_jakeshouse",
        "time": 247699,
        "points": 7068,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_helicopter",
        "time": 180253,
        "points": 6420,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_helicopter",
        "time": 263182,
        "points": 4519,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_helicopter",
        "time": 116805,
        "points": 8943,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 105733,
        "points": 3364,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 129205,
        "points": 3790,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 162731,
        "points": 9469,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 290123,
        "points": 4919,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c3_wheatfield",
        "time": 147778,
        "points": 9405,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_doghouse",
        "time": 184358,
        "points": 9987,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_helicopter",
        "time": 288081,
        "points": 5563,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_jakeshouse",
        "time": 151951,
        "points": 8690,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_victoria",
        "time": 246706,
        "points": 1836,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_jakeshouse",
        "time": 267556,
        "points": 3551,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 108937,
        "points": 6837,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 177904,
        "points": 1492,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 261778,
        "points": 1455,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 144070,
        "points": 5731,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_victoria",
        "time": 246162,
        "points": 1861,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_helicopter",
        "time": 265522,
        "points": 2341,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_doghouse",
        "time": 235197,
        "points": 1732,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_jakeshouse",
        "time": 261208,
        "points": 4321,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 186491,
        "points": 5866,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 135116,
        "points": 5961,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_doghouse",
        "time": 286294,
        "points": 6058,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_helicopter",
        "time": 222586,
        "points": 9344,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c2_jakeshouse",
        "time": 250639,
        "points": 9226,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 226173,
        "points": 7901,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_victoria",
        "time": 213981,
        "points": 2308,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c1_victoria",
        "time": 236490,
        "points": 4276,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 102684,
        "points": 4316,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 293557,
        "points": 1172,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_helicopter",
        "time": 170465,
        "points": 2510,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_jakeshouse",
        "time": 195143,
        "points": 4970,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_jakeshouse",
        "time": 148466,
        "points": 7505,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 137498,
        "points": 8710,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_jakeshouse",
        "time": 136594,
        "points": 5231,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_25",
        "level": "c3_wheatfield",
        "time": 245684,
        "points": 3926,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_victoria",
        "time": 205643,
        "points": 2473,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 107018,
        "points": 5720,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 283324,
        "points": 9767,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 179658,
        "points": 7244,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c3_wheatfield",
        "time": 204723,
        "points": 8526,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c3_wheatfield",
        "time": 268067,
        "points": 7479,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_helicopter",
        "time": 101567,
        "points": 5065,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_helicopter",
        "time": 250496,
        "points": 2178,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 224276,
        "points": 5296,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_victoria",
        "time": 270353,
        "points": 4288,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_jakeshouse",
        "time": 291238,
        "points": 1874,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_helicopter",
        "time": 116919,
        "points": 3902,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 111472,
        "points": 1446,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_doghouse",
        "time": 202985,
        "points": 4420,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c2_jakeshouse",
        "time": 220860,
        "points": 4835,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_helicopter",
        "time": 245373,
        "points": 9971,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 121300,
        "points": 1777,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_jakeshouse",
        "time": 160246,
        "points": 8802,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 125842,
        "points": 9105,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_victoria",
        "time": 107526,
        "points": 8021,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_jakeshouse",
        "time": 182089,
        "points": 4567,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 250782,
        "points": 9775,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c2_helicopter",
        "time": 142801,
        "points": 9737,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_doghouse",
        "time": 283826,
        "points": 4447,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_doghouse",
        "time": 181707,
        "points": 9236,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_helicopter",
        "time": 251138,
        "points": 5924,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 228493,
        "points": 4652,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 192898,
        "points": 9084,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 272255,
        "points": 5283,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c2_jakeshouse",
        "time": 241179,
        "points": 7463,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 208529,
        "points": 2706,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_doghouse",
        "time": 236221,
        "points": 3388,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_victoria",
        "time": 169305,
        "points": 1358,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c2_jakeshouse",
        "time": 178043,
        "points": 7495,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 287817,
        "points": 7841,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 156688,
        "points": 8450,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 102436,
        "points": 9176,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 224489,
        "points": 9026,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c2_helicopter",
        "time": 232167,
        "points": 4930,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_victoria",
        "time": 177022,
        "points": 3642,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_35",
        "level": "c1_doghouse",
        "time": 103320,
        "points": 9940,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_helicopter",
        "time": 132964,
        "points": 2271,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 182290,
        "points": 7103,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_doghouse",
        "time": 282931,
        "points": 8704,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_helicopter",
        "time": 200812,
        "points": 2020,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c1_doghouse",
        "time": 115073,
        "points": 5389,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 220574,
        "points": 5529,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 296441,
        "points": 4896,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 284267,
        "points": 1538,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 223433,
        "points": 6953,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_helicopter",
        "time": 247374,
        "points": 9896,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 247610,
        "points": 5175,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 132022,
        "points": 1588,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 213507,
        "points": 3905,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c3_wheatfield",
        "time": 206277,
        "points": 3153,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c3_wheatfield",
        "time": 195058,
        "points": 1263,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_helicopter",
        "time": 218097,
        "points": 7860,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 219751,
        "points": 5521,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c3_wheatfield",
        "time": 219800,
        "points": 3418,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_jakeshouse",
        "time": 103029,
        "points": 8224,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 232976,
        "points": 9346,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_jakeshouse",
        "time": 299927,
        "points": 5911,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_jakeshouse",
        "time": 285112,
        "points": 1800,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c3_wheatfield",
        "time": 248521,
        "points": 4574,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 266798,
        "points": 3595,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_victoria",
        "time": 255241,
        "points": 3120,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 249193,
        "points": 2458,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 227819,
        "points": 6500,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_jakeshouse",
        "time": 248113,
        "points": 4009,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 261113,
        "points": 2093,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_50",
        "level": "c3_wheatfield",
        "time": 219090,
        "points": 6624,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_victoria",
        "time": 130904,
        "points": 8915,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 195361,
        "points": 6537,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 161517,
        "points": 7859,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_doghouse",
        "time": 177790,
        "points": 7108,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_jakeshouse",
        "time": 146077,
        "points": 5950,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 294546,
        "points": 7528,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_jakeshouse",
        "time": 168759,
        "points": 4878,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_doghouse",
        "time": 112711,
        "points": 2229,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_victoria",
        "time": 109059,
        "points": 1254,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 179003,
        "points": 3563,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 120752,
        "points": 5481,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 137372,
        "points": 7761,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c3_wheatfield",
        "time": 294260,
        "points": 7577,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_helicopter",
        "time": 194846,
        "points": 6015,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_helicopter",
        "time": 206668,
        "points": 7390,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_jakeshouse",
        "time": 292232,
        "points": 8764,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_victoria",
        "time": 171144,
        "points": 3676,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 159787,
        "points": 4625,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_42",
        "level": "c3_wheatfield",
        "time": 232030,
        "points": 9715,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c3_wheatfield",
        "time": 271284,
        "points": 7709,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c2_helicopter",
        "time": 130338,
        "points": 4540,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_victoria",
        "time": 217112,
        "points": 7088,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 128275,
        "points": 1968,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_jakeshouse",
        "time": 265273,
        "points": 1678,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_doghouse",
        "time": 113882,
        "points": 6408,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_jakeshouse",
        "time": 225094,
        "points": 4542,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 194471,
        "points": 2801,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_doghouse",
        "time": 209784,
        "points": 1844,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 231002,
        "points": 3235,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c3_wheatfield",
        "time": 102072,
        "points": 5668,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_doghouse",
        "time": 215554,
        "points": 5205,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_doghouse",
        "time": 208955,
        "points": 1461,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 152367,
        "points": 2455,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 299282,
        "points": 2732,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_victoria",
        "time": 256821,
        "points": 1489,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 288068,
        "points": 8713,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_doghouse",
        "time": 253700,
        "points": 4948,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c3_wheatfield",
        "time": 298013,
        "points": 3991,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 203841,
        "points": 3961,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 215734,
        "points": 8056,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_helicopter",
        "time": 261583,
        "points": 7820,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_48",
        "level": "c1_doghouse",
        "time": 160371,
        "points": 3855,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_helicopter",
        "time": 222879,
        "points": 7145,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 228163,
        "points": 3800,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_victoria",
        "time": 241846,
        "points": 7236,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 280045,
        "points": 1477,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 188254,
        "points": 8645,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c3_wheatfield",
        "time": 172081,
        "points": 3753,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_doghouse",
        "time": 292885,
        "points": 4558,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_helicopter",
        "time": 201435,
        "points": 4338,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_helicopter",
        "time": 212413,
        "points": 8778,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 204783,
        "points": 9098,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_doghouse",
        "time": 127007,
        "points": 8012,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 219849,
        "points": 9310,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 239224,
        "points": 6823,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 117130,
        "points": 6844,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_helicopter",
        "time": 221120,
        "points": 8369,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_victoria",
        "time": 279796,
        "points": 8715,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c3_wheatfield",
        "time": 275002,
        "points": 1397,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c3_wheatfield",
        "time": 122724,
        "points": 1012,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_doghouse",
        "time": 109203,
        "points": 4936,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_jakeshouse",
        "time": 167603,
        "points": 2875,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c3_wheatfield",
        "time": 142555,
        "points": 2441,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_helicopter",
        "time": 278626,
        "points": 1278,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 153666,
        "points": 5892,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 136186,
        "points": 7134,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 220090,
        "points": 2709,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c2_helicopter",
        "time": 259792,
        "points": 9109,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_helicopter",
        "time": 217330,
        "points": 1189,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 142178,
        "points": 9766,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_doghouse",
        "time": 161714,
        "points": 2451,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 277458,
        "points": 8673,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 177667,
        "points": 1321,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c2_helicopter",
        "time": 142546,
        "points": 4489,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_victoria",
        "time": 280414,
        "points": 8346,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 243427,
        "points": 1432,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_jakeshouse",
        "time": 247144,
        "points": 1600,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 260356,
        "points": 6533,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c3_wheatfield",
        "time": 111709,
        "points": 7497,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_jakeshouse",
        "time": 109289,
        "points": 8871,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 210100,
        "points": 3999,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 218493,
        "points": 3983,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_victoria",
        "time": 188041,
        "points": 4079,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c3_wheatfield",
        "time": 163173,
        "points": 2127,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 252099,
        "points": 3812,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 281427,
        "points": 4823,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 124882,
        "points": 3561,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_victoria",
        "time": 184219,
        "points": 9266,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c3_wheatfield",
        "time": 296032,
        "points": 3284,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 162732,
        "points": 1386,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 267300,
        "points": 2961,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 138740,
        "points": 3693,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 172136,
        "points": 2909,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 268299,
        "points": 8905,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 204266,
        "points": 8913,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 285215,
        "points": 9793,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 250844,
        "points": 9180,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_jakeshouse",
        "time": 169860,
        "points": 7060,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_helicopter",
        "time": 189745,
        "points": 6753,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_helicopter",
        "time": 240885,
        "points": 2869,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 166734,
        "points": 8338,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 221246,
        "points": 2987,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 108240,
        "points": 6920,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 154369,
        "points": 7196,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_doghouse",
        "time": 296058,
        "points": 3119,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_jakeshouse",
        "time": 218951,
        "points": 9222,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 218834,
        "points": 9817,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_helicopter",
        "time": 204803,
        "points": 3763,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 194778,
        "points": 1840,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 193318,
        "points": 5153,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_jakeshouse",
        "time": 176643,
        "points": 8176,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 121875,
        "points": 3517,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_doghouse",
        "time": 100805,
        "points": 4350,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_helicopter",
        "time": 250812,
        "points": 8133,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c3_wheatfield",
        "time": 281786,
        "points": 3004,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_victoria",
        "time": 213735,
        "points": 9487,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_doghouse",
        "time": 106584,
        "points": 5019,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_33",
        "level": "c3_wheatfield",
        "time": 264097,
        "points": 8376,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 101109,
        "points": 9240,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_jakeshouse",
        "time": 113939,
        "points": 2502,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_jakeshouse",
        "time": 121578,
        "points": 8289,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 123116,
        "points": 8313,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_doghouse",
        "time": 185517,
        "points": 3474,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 132468,
        "points": 9837,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_doghouse",
        "time": 108482,
        "points": 3434,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 140550,
        "points": 6996,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 194455,
        "points": 4381,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_helicopter",
        "time": 212854,
        "points": 7268,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_helicopter",
        "time": 258723,
        "points": 2449,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 190021,
        "points": 7375,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 194486,
        "points": 7830,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c3_wheatfield",
        "time": 277486,
        "points": 8163,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 251210,
        "points": 6309,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_jakeshouse",
        "time": 139718,
        "points": 8052,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 161365,
        "points": 6257,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_doghouse",
        "time": 173312,
        "points": 4935,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_doghouse",
        "time": 139358,
        "points": 8444,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 264366,
        "points": 2923,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_jakeshouse",
        "time": 255748,
        "points": 7420,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 126877,
        "points": 3179,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c3_wheatfield",
        "time": 273503,
        "points": 5322,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_doghouse",
        "time": 133359,
        "points": 9395,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_doghouse",
        "time": 153658,
        "points": 8156,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_doghouse",
        "time": 279820,
        "points": 7493,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_helicopter",
        "time": 267746,
        "points": 9990,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_victoria",
        "time": 172812,
        "points": 6481,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 230387,
        "points": 5714,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_helicopter",
        "time": 223718,
        "points": 1564,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_41",
        "level": "c2_jakeshouse",
        "time": 218262,
        "points": 8964,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 284173,
        "points": 5722,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 278707,
        "points": 7109,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 283426,
        "points": 6873,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_jakeshouse",
        "time": 298427,
        "points": 2500,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 138168,
        "points": 2278,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 159519,
        "points": 6993,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c1_victoria",
        "time": 194394,
        "points": 1756,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_doghouse",
        "time": 252768,
        "points": 4396,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 291237,
        "points": 2973,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c3_wheatfield",
        "time": 196722,
        "points": 4295,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_helicopter",
        "time": 212400,
        "points": 9406,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 230218,
        "points": 1889,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 291169,
        "points": 8353,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_doghouse",
        "time": 253037,
        "points": 2410,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_doghouse",
        "time": 140520,
        "points": 5120,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 248376,
        "points": 6030,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 271156,
        "points": 8980,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_doghouse",
        "time": 125869,
        "points": 6585,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c3_wheatfield",
        "time": 190197,
        "points": 4366,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c3_wheatfield",
        "time": 225070,
        "points": 8808,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 114848,
        "points": 9785,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 166539,
        "points": 6104,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_victoria",
        "time": 178047,
        "points": 7186,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_jakeshouse",
        "time": 206483,
        "points": 8968,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_helicopter",
        "time": 229305,
        "points": 4246,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_doghouse",
        "time": 212595,
        "points": 5820,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c3_wheatfield",
        "time": 121308,
        "points": 9507,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 114343,
        "points": 4746,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 142208,
        "points": 5863,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 277912,
        "points": 7815,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c3_wheatfield",
        "time": 272791,
        "points": 4899,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c2_jakeshouse",
        "time": 216232,
        "points": 5525,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_jakeshouse",
        "time": 132223,
        "points": 9812,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_victoria",
        "time": 149992,
        "points": 1758,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 268608,
        "points": 6245,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 123863,
        "points": 9788,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_helicopter",
        "time": 234920,
        "points": 2639,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 209853,
        "points": 7206,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_jakeshouse",
        "time": 287300,
        "points": 8187,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_jakeshouse",
        "time": 298309,
        "points": 7714,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c3_wheatfield",
        "time": 297733,
        "points": 3960,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_victoria",
        "time": 275924,
        "points": 9356,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 238387,
        "points": 6675,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c1_doghouse",
        "time": 204303,
        "points": 6792,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_doghouse",
        "time": 190060,
        "points": 3973,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_jakeshouse",
        "time": 193448,
        "points": 8316,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_doghouse",
        "time": 273630,
        "points": 8549,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_jakeshouse",
        "time": 210163,
        "points": 4902,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_victoria",
        "time": 173309,
        "points": 2542,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 177194,
        "points": 1934,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c2_jakeshouse",
        "time": 101114,
        "points": 3422,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_jakeshouse",
        "time": 299876,
        "points": 6718,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c1_victoria",
        "time": 242360,
        "points": 8168,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_doghouse",
        "time": 204220,
        "points": 5883,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 290682,
        "points": 7049,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_28",
        "level": "c1_victoria",
        "time": 203720,
        "points": 2548,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c1_doghouse",
        "time": 248406,
        "points": 3166,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 101891,
        "points": 6962,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 229352,
        "points": 2202,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_victoria",
        "time": 190491,
        "points": 6134,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_doghouse",
        "time": 171179,
        "points": 2900,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 106004,
        "points": 6373,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 291725,
        "points": 4056,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 292720,
        "points": 4370,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c3_wheatfield",
        "time": 281957,
        "points": 8995,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 184477,
        "points": 9430,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_jakeshouse",
        "time": 284405,
        "points": 5881,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_26",
        "level": "c1_doghouse",
        "time": 282840,
        "points": 3239,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c2_helicopter",
        "time": 259001,
        "points": 8853,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_doghouse",
        "time": 274834,
        "points": 4277,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_jakeshouse",
        "time": 154858,
        "points": 2585,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 245056,
        "points": 8064,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 267829,
        "points": 4796,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_victoria",
        "time": 198099,
        "points": 8440,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 135712,
        "points": 9113,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_helicopter",
        "time": 282042,
        "points": 2318,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_helicopter",
        "time": 204583,
        "points": 6815,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_jakeshouse",
        "time": 241836,
        "points": 6144,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_helicopter",
        "time": 224961,
        "points": 6985,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c3_wheatfield",
        "time": 238517,
        "points": 1177,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 263390,
        "points": 3423,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 124992,
        "points": 6010,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_victoria",
        "time": 238089,
        "points": 3597,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c3_wheatfield",
        "time": 254256,
        "points": 3249,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 168421,
        "points": 7193,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_victoria",
        "time": 193441,
        "points": 4131,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_doghouse",
        "time": 273633,
        "points": 1825,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c3_wheatfield",
        "time": 160268,
        "points": 1707,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_39",
        "level": "c3_wheatfield",
        "time": 241118,
        "points": 1499,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_victoria",
        "time": 185989,
        "points": 8221,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c3_wheatfield",
        "time": 167781,
        "points": 8790,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 118985,
        "points": 8821,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c3_wheatfield",
        "time": 191712,
        "points": 6700,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_victoria",
        "time": 292223,
        "points": 4044,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 285814,
        "points": 5077,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_doghouse",
        "time": 216684,
        "points": 9348,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 257122,
        "points": 2144,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_helicopter",
        "time": 146077,
        "points": 6202,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 177814,
        "points": 7752,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_victoria",
        "time": 252244,
        "points": 4897,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 229233,
        "points": 7277,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 116020,
        "points": 2416,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 125658,
        "points": 2283,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_jakeshouse",
        "time": 123514,
        "points": 5230,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c2_jakeshouse",
        "time": 227807,
        "points": 1022,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_victoria",
        "time": 192607,
        "points": 6248,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c1_doghouse",
        "time": 205389,
        "points": 3854,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_jakeshouse",
        "time": 125514,
        "points": 3728,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c2_helicopter",
        "time": 124376,
        "points": 2567,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_helicopter",
        "time": 240461,
        "points": 9110,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c3_wheatfield",
        "time": 265046,
        "points": 5579,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 266649,
        "points": 9738,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_jakeshouse",
        "time": 172679,
        "points": 5157,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_31",
        "level": "c2_jakeshouse",
        "time": 245374,
        "points": 9906,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 251080,
        "points": 5833,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 224062,
        "points": 4973,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_16",
        "level": "c3_wheatfield",
        "time": 192461,
        "points": 7574,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c3_wheatfield",
        "time": 239761,
        "points": 8731,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_victoria",
        "time": 272162,
        "points": 5485,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_46",
        "level": "c3_wheatfield",
        "time": 131415,
        "points": 6686,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_doghouse",
        "time": 153547,
        "points": 4165,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_helicopter",
        "time": 242351,
        "points": 6593,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_helicopter",
        "time": 109005,
        "points": 5465,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c2_helicopter",
        "time": 108284,
        "points": 8421,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_victoria",
        "time": 194251,
        "points": 4848,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_doghouse",
        "time": 241942,
        "points": 7357,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c3_wheatfield",
        "time": 233647,
        "points": 6399,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_41",
        "level": "c1_doghouse",
        "time": 280020,
        "points": 7540,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 286173,
        "points": 4247,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_jakeshouse",
        "time": 181613,
        "points": 5336,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 206073,
        "points": 1373,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c3_wheatfield",
        "time": 164555,
        "points": 4419,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 207525,
        "points": 6075,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 156020,
        "points": 7533,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_33",
        "level": "c1_doghouse",
        "time": 200472,
        "points": 7378,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_victoria",
        "time": 289911,
        "points": 1580,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_jakeshouse",
        "time": 213057,
        "points": 4905,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c2_helicopter",
        "time": 141027,
        "points": 7356,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_helicopter",
        "time": 271173,
        "points": 5507,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c3_wheatfield",
        "time": 267790,
        "points": 1737,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 147670,
        "points": 6779,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 137004,
        "points": 8639,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c3_wheatfield",
        "time": 246400,
        "points": 5191,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c3_wheatfield",
        "time": 209790,
        "points": 7191,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c1_victoria",
        "time": 277919,
        "points": 2424,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 229636,
        "points": 6340,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c2_helicopter",
        "time": 149114,
        "points": 3150,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 174957,
        "points": 1606,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c2_helicopter",
        "time": 149249,
        "points": 4284,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_victoria",
        "time": 211382,
        "points": 7713,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c2_jakeshouse",
        "time": 247647,
        "points": 7937,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c3_wheatfield",
        "time": 285923,
        "points": 7327,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c2_helicopter",
        "time": 158460,
        "points": 3482,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c3_wheatfield",
        "time": 247473,
        "points": 6136,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_14",
        "level": "c2_helicopter",
        "time": 110496,
        "points": 9874,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_jakeshouse",
        "time": 139140,
        "points": 7899,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_35",
        "level": "c1_doghouse",
        "time": 134566,
        "points": 9488,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_helicopter",
        "time": 193462,
        "points": 9112,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 190319,
        "points": 4684,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_victoria",
        "time": 131847,
        "points": 2675,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_47",
        "level": "c1_doghouse",
        "time": 256146,
        "points": 8665,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_doghouse",
        "time": 144722,
        "points": 6908,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c1_doghouse",
        "time": 202007,
        "points": 6072,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_victoria",
        "time": 239319,
        "points": 2240,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c3_wheatfield",
        "time": 177304,
        "points": 5085,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 113923,
        "points": 5063,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c1_doghouse",
        "time": 292130,
        "points": 8059,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 215597,
        "points": 1298,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_helicopter",
        "time": 156254,
        "points": 4510,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c3_wheatfield",
        "time": 102711,
        "points": 4225,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 158893,
        "points": 7081,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_jakeshouse",
        "time": 143886,
        "points": 2417,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_doghouse",
        "time": 224730,
        "points": 6599,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c2_helicopter",
        "time": 244501,
        "points": 9383,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 151838,
        "points": 2711,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_victoria",
        "time": 267708,
        "points": 1577,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_victoria",
        "time": 210488,
        "points": 8181,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_doghouse",
        "time": 273606,
        "points": 6400,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_victoria",
        "time": 219460,
        "points": 8143,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c2_jakeshouse",
        "time": 151870,
        "points": 4271,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_23",
        "level": "c2_helicopter",
        "time": 189828,
        "points": 7347,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_48",
        "level": "c2_jakeshouse",
        "time": 196314,
        "points": 6280,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_victoria",
        "time": 214206,
        "points": 3948,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 135036,
        "points": 5759,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 164500,
        "points": 6293,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 246239,
        "points": 9155,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_jakeshouse",
        "time": 153548,
        "points": 8832,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 203993,
        "points": 2776,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 282781,
        "points": 1145,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_doghouse",
        "time": 264518,
        "points": 2351,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_jakeshouse",
        "time": 216055,
        "points": 3718,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 157663,
        "points": 7623,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 219368,
        "points": 7825,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_35",
        "level": "c1_victoria",
        "time": 196232,
        "points": 2071,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 115841,
        "points": 6559,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 245943,
        "points": 9223,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_14",
        "level": "c1_doghouse",
        "time": 252198,
        "points": 1456,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c3_wheatfield",
        "time": 110843,
        "points": 7739,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_doghouse",
        "time": 117499,
        "points": 5007,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_jakeshouse",
        "time": 280960,
        "points": 7667,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_victoria",
        "time": 103770,
        "points": 5565,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_40",
        "level": "c3_wheatfield",
        "time": 212607,
        "points": 1731,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_helicopter",
        "time": 110553,
        "points": 8506,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_helicopter",
        "time": 181785,
        "points": 2824,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_35",
        "level": "c1_doghouse",
        "time": 233236,
        "points": 1676,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_helicopter",
        "time": 125591,
        "points": 1131,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c2_jakeshouse",
        "time": 185626,
        "points": 7374,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 151770,
        "points": 3307,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c3_wheatfield",
        "time": 294308,
        "points": 5928,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_50",
        "level": "c1_doghouse",
        "time": 224996,
        "points": 6897,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_36",
        "level": "c1_victoria",
        "time": 139808,
        "points": 6921,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 123534,
        "points": 2733,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_victoria",
        "time": 209435,
        "points": 9751,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c1_doghouse",
        "time": 292694,
        "points": 1981,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_23",
        "level": "c1_victoria",
        "time": 280866,
        "points": 1364,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 240250,
        "points": 7461,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_38",
        "level": "c2_jakeshouse",
        "time": 220493,
        "points": 4384,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c1_doghouse",
        "time": 255644,
        "points": 7515,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 241099,
        "points": 6598,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c2_helicopter",
        "time": 161282,
        "points": 4059,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_helicopter",
        "time": 261451,
        "points": 4659,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c3_wheatfield",
        "time": 255896,
        "points": 7800,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_doghouse",
        "time": 123997,
        "points": 3323,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c3_wheatfield",
        "time": 155921,
        "points": 5036,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 263724,
        "points": 6432,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c2_helicopter",
        "time": 161493,
        "points": 2963,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c1_doghouse",
        "time": 206224,
        "points": 9091,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 127348,
        "points": 3103,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c2_helicopter",
        "time": 147452,
        "points": 2495,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_jakeshouse",
        "time": 118178,
        "points": 9814,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_helicopter",
        "time": 186170,
        "points": 6266,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c2_helicopter",
        "time": 189386,
        "points": 3655,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c1_victoria",
        "time": 177334,
        "points": 1425,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 295968,
        "points": 2186,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_39",
        "level": "c1_doghouse",
        "time": 281584,
        "points": 2545,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 131857,
        "points": 6192,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c3_wheatfield",
        "time": 296310,
        "points": 3803,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 206698,
        "points": 4985,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c1_victoria",
        "time": 249499,
        "points": 5344,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 167947,
        "points": 9544,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 241510,
        "points": 7358,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 205654,
        "points": 3313,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_jakeshouse",
        "time": 260363,
        "points": 8502,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c2_helicopter",
        "time": 178225,
        "points": 4173,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 128636,
        "points": 4497,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c1_victoria",
        "time": 136926,
        "points": 7001,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c2_helicopter",
        "time": 107182,
        "points": 4166,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_helicopter",
        "time": 194806,
        "points": 7003,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c2_jakeshouse",
        "time": 261524,
        "points": 7517,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_43",
        "level": "c3_wheatfield",
        "time": 254039,
        "points": 1784,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_20",
        "level": "c1_doghouse",
        "time": 156680,
        "points": 7532,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c1_doghouse",
        "time": 180579,
        "points": 3574,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_doghouse",
        "time": 206379,
        "points": 8405,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 226142,
        "points": 1243,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_20",
        "level": "c2_jakeshouse",
        "time": 246151,
        "points": 5300,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c3_wheatfield",
        "time": 253896,
        "points": 8461,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c1_victoria",
        "time": 139805,
        "points": 3558,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_helicopter",
        "time": 237590,
        "points": 1336,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_37",
        "level": "c1_doghouse",
        "time": 289559,
        "points": 1944,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_24",
        "level": "c1_victoria",
        "time": 215571,
        "points": 6999,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c2_jakeshouse",
        "time": 210180,
        "points": 3209,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_48",
        "level": "c1_doghouse",
        "time": 252689,
        "points": 7953,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_jakeshouse",
        "time": 160739,
        "points": 1084,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c3_wheatfield",
        "time": 172276,
        "points": 5990,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c3_wheatfield",
        "time": 191021,
        "points": 6969,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 272823,
        "points": 6836,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c1_victoria",
        "time": 107778,
        "points": 2681,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_12",
        "level": "c1_doghouse",
        "time": 185050,
        "points": 9045,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_49",
        "level": "c1_doghouse",
        "time": 262443,
        "points": 6021,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c3_wheatfield",
        "time": 295206,
        "points": 4623,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_25",
        "level": "c3_wheatfield",
        "time": 286386,
        "points": 2772,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c2_jakeshouse",
        "time": 102916,
        "points": 5988,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_17",
        "level": "c2_helicopter",
        "time": 231444,
        "points": 5469,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_jakeshouse",
        "time": 190161,
        "points": 8760,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_31",
        "level": "c1_doghouse",
        "time": 135283,
        "points": 3857,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c2_jakeshouse",
        "time": 252921,
        "points": 6597,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c2_jakeshouse",
        "time": 218692,
        "points": 9102,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_30",
        "level": "c2_helicopter",
        "time": 201748,
        "points": 9978,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_doghouse",
        "time": 151621,
        "points": 8934,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_21",
        "level": "c3_wheatfield",
        "time": 120014,
        "points": 4197,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_doghouse",
        "time": 267612,
        "points": 5570,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_16",
        "level": "c2_jakeshouse",
        "time": 166271,
        "points": 9125,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_11",
        "level": "c1_doghouse",
        "time": 270985,
        "points": 2799,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_42",
        "level": "c1_doghouse",
        "time": 232176,
        "points": 6964,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_29",
        "level": "c2_helicopter",
        "time": 119084,
        "points": 9117,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_46",
        "level": "c2_jakeshouse",
        "time": 194584,
        "points": 4285,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c3_wheatfield",
        "time": 275413,
        "points": 7678,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_15",
        "level": "c1_victoria",
        "time": 262026,
        "points": 9411,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c3_wheatfield",
        "time": 171609,
        "points": 9641,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_13",
        "level": "c1_doghouse",
        "time": 268884,
        "points": 2731,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 144551,
        "points": 4929,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_21",
        "level": "c2_helicopter",
        "time": 105722,
        "points": 9599,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_33",
        "level": "c2_helicopter",
        "time": 284459,
        "points": 2420,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_doghouse",
        "time": 176803,
        "points": 2981,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_49",
        "level": "c2_helicopter",
        "time": 281231,
        "points": 2304,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_32",
        "level": "c2_jakeshouse",
        "time": 285613,
        "points": 2267,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 210300,
        "points": 2312,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_28",
        "level": "c2_jakeshouse",
        "time": 130810,
        "points": 5364,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c2_jakeshouse",
        "time": 249829,
        "points": 9973,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_16",
        "level": "c1_victoria",
        "time": 142575,
        "points": 7090,
        "game_mode": "story_cheats",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_44",
        "level": "c2_jakeshouse",
        "time": 118757,
        "points": 3532,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_18",
        "level": "c1_doghouse",
        "time": 188527,
        "points": 7437,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_18",
        "level": "c2_helicopter",
        "time": 160287,
        "points": 7254,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_22",
        "level": "c2_jakeshouse",
        "time": 209318,
        "points": 4741,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_45",
        "level": "c2_jakeshouse",
        "time": 201057,
        "points": 6915,
        "game_mode": "sandbox",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_34",
        "level": "c2_jakeshouse",
        "time": 197270,
        "points": 2931,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_2",
        "level": "c3_wheatfield",
        "time": 121685,
        "points": 8049,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_11",
        "level": "c3_wheatfield",
        "time": 159112,
        "points": 9524,
        "game_mode": "story",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_19",
        "level": "c1_victoria",
        "time": 212949,
        "points": 9017,
        "game_mode": "sandbox",
        "game_version": "0.2.5"
    },
    {
        "user_id": "user_id_40",
        "level": "c2_helicopter",
        "time": 128325,
        "points": 5154,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_27",
        "level": "c2_helicopter",
        "time": 118980,
        "points": 7368,
        "game_mode": "story_cheats",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_doghouse",
        "time": 145108,
        "points": 1385,
        "game_mode": "story",
        "game_version": "0.2.0"
    }
]



export { fakeScores, fakeScore, fakeLeaderboardRequest };