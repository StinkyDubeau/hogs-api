# How to use hogs-api 
The hogs-api is a REST api. An API_KEY header is expected in the header of your requests to get a response. Requests without an API key in header will be sent `401 Unauthorized`.

## Headers
All requests to the hogs-api must have two things in their header:
1. A self-identifier. E.g. `0.2.0` *(game version)*, or `web` *(for website requests)*.
2. An API key that is kept ery-very secret.\*

* API keys may be rolling in the future. This could deprecate old game builds.

## Load a leaderboard with `get("/api/score")`.
Usage: Download a leaderboard with the columns that you include in your request. The result will be in descending order sorted by points unless otherwise specified with key `sort_by`. 
### Example request
```
    {
        "status": "200",
        "level": "c1_victoria",
        "user_id": "user_id_of_player_making_request",
        "sort_by": "points",
        "columns": {
            "0": "username",
            "1": "points",
            "2": "time",
            "3": "game_version",
            "4": "gamemode"
        }
    }
```

### Example response
```
    {

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
        "user_id": "john_highscore_getter",
        "level": "c1_victoria",
        "points": "5020",
        "gamemode": "story"
    }
```

### Example response

A `score_id` is automatically assigned to the score and returned in the repsonse. This allows a single user to have many scores for the same level without them overwriting eachother.

```
    {
        "status": "200",
        "score_id": "12302",
        "message": "Submitted a new score!"
    }
```