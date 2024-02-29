# How to use hogs-api 
The hogs-api is a REST api. An API_KEY is expected in the header of your requests to get a response from any endpoint that begins with `/api/`. Requests without an API key in header will be sent `401 Unauthorized`.

Many endpoints expect a `user_id` field, as they are geared towards the Windows application. If you need to use one of these endpoints from the web, you can identify yourself as `anon` instead of providing a user_id. 

## Headers
All requests to the hogs-api must have two things in their header:

1. A self-identifier, `WHO_AM_I`, e.g. `0.2.0` *(game version)*, or `web` *(for website requests)*.

2. An API key that is kept ery-very secret.\*

For example:

```
WHO_AM_I=web
API_KEY=d45e6-25er8-e7833-d9877-arm44
```

* API keys may be rolling in the future. This could deprecate old game builds.

## Load a leaderboard with `get("/api/score")`.
Usage: Download a leaderboard with the columns that you include in your request. The result will be in descending order sorted by points unless otherwise specified with key `sort_by`. 

#### Special cases:

`friendly_name` - When specified, the response will contain only that player's scores.

### Example request

```
{
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
```

### Example response
The first column returned will be the row counter. The following columns will respect the request.


```
{
    "columns": {
        "row": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ],
        "friendly_name": [
            "alan",
            "bob",
            "chelsey",
            "darrin",
            "evelyn",
            "frank",
            "gord",
            "helen",
            "imran",
            "joey"
        ],
        "points": [
            9431,
            9232,
            8765,
            7654,
            6543,
            5432,
            4321,
            3211,
            2111,
            1111
        ],
        "time": [
            6543254,
            5423675,
            5286432,
            4786755,
            7845224,
            5484248,
            4854524,
            4854528,
            7827822,
            7824554       
        ],
        "game_version": [
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0",
            "0.2.0"
        ],
        "game_mode": [

        ]
    }
}
```

## Verify, edit, or create a user with `post("api/user")`.

Usage:

To verify a user exists, to create a new user, or to update a user's friendly name.

Application sends a user_id to login and friendly name if they want to submit a new one.

Friendly name MUST be provided if new_user is "true". Otherwise, the server will assign a random name.

`user_id` must be a unique 17-digit number. It is expected to be a steam ID, but could theoretically be anything.

`user_id` should be kept private!

### Example request 

```
    {
        "user_id": "user_id_of_player_making_request",
        "new_user": "false",
        "friendly_name": "john_fortnite",
    }
```

### Example response

```
    {
        "status": "200",
        "message": "User exists and friendly name is unchanged."
    }
```

### Possible status codes

* 200: User exists and friendly name is unchanged.
* 201: New user was created with friendly name <friendly_name>.
* 203: New user was created with automatically-generated friendly name <friendly_name>.
* 400: Bad request. Could not parse request.
* 400: Bad request. Invalid user_id

## Submit a new score with `post("api/score")`.

Usage: Submit a new score to the database when a level has been completed

### Example request 

```
{
    "user_id": "user_id_of_score_getter",
    "level": "c1_victoria",
    "time": 240000,
    "points": 5020,
    "gamemode": "story",
    "game_version": "0.2.0"
}
```

### Example response

An `_id` is automatically assigned to the score and returned in the response. This allows a single user to have many scores for the same level without them overwriting eachother.

```
{
    "status": "200",
    "_id": "65e0980c111551dc08eb258c",
    "message": "Submitted a new score."
}
```