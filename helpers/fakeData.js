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
        "level": "c1_victoria",
        "time": 157909,
        "points": 8224,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 241240,
        "points": 1776,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 246250,
        "points": 5824,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 233359,
        "points": 1863,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 165418,
        "points": 9602,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 205147,
        "points": 4843,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 135552,
        "points": 7456,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 244880,
        "points": 5251,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_3",
        "level": "c1_victoria",
        "time": 265066,
        "points": 7829,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 129548,
        "points": 9015,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 189535,
        "points": 3283,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 293671,
        "points": 6591,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 270697,
        "points": 5440,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 279248,
        "points": 3825,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 117228,
        "points": 8492,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 119707,
        "points": 9079,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 182496,
        "points": 9765,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 295162,
        "points": 2321,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 298331,
        "points": 4949,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 260884,
        "points": 5368,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 139066,
        "points": 7985,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 226263,
        "points": 3417,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 246740,
        "points": 3210,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 211817,
        "points": 4135,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 274356,
        "points": 8620,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 197411,
        "points": 5314,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 206765,
        "points": 8242,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 112691,
        "points": 4816,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 249899,
        "points": 9676,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 297713,
        "points": 9786,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 216890,
        "points": 9418,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 292664,
        "points": 2684,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 277090,
        "points": 5216,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 220359,
        "points": 2846,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 299946,
        "points": 4688,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_5",
        "level": "c1_victoria",
        "time": 202946,
        "points": 8969,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 241803,
        "points": 8717,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 273479,
        "points": 9919,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 192017,
        "points": 8147,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 234522,
        "points": 5153,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 118552,
        "points": 6773,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_8",
        "level": "c1_victoria",
        "time": 178348,
        "points": 9590,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_10",
        "level": "c1_victoria",
        "time": 280534,
        "points": 5241,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_7",
        "level": "c1_victoria",
        "time": 286596,
        "points": 6484,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_9",
        "level": "c1_victoria",
        "time": 295218,
        "points": 2509,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 254213,
        "points": 9126,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 277029,
        "points": 3391,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_6",
        "level": "c1_victoria",
        "time": 148722,
        "points": 3729,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_1",
        "level": "c1_victoria",
        "time": 299761,
        "points": 2477,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "user_id": "user_id_4",
        "level": "c1_victoria",
        "time": 220811,
        "points": 1561,
        "game_mode": "story",
        "game_version": "0.2.0"
    }
]

export { fakeScores, fakeScore, fakeLeaderboardRequest };