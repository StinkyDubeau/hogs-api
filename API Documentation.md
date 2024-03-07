# How to use hogs-api 
The hogs-api is a REST api. An API_KEY is expected in the header of your requests to get a response from any endpoint that begins with `/api/`. Requests without an API key in header will be sent `401 Unauthorized`.

Many endpoints expect a `user_id` field, as they are geared towards the Windows application. If you need to use one of these endpoints from the web, you can identify yourself as `anon` instead of providing a user_id. 

## Headers
All requests to the hogs-api must have two things in their header:

1. A self-identifier, `WHO_AM_I`, e.g. `0.2.0` *(game version)*, or `web` *(for website requests)*.

2. An API key that is kept ery-very secret.\*

For example:

```conf
WHO_AM_I=web
API_KEY=d45e6-25er8-e7833-d9877-arm44
```

**API keys may be rolling in the future.*

## Create a news post with `post("/api/news")`.

Usage: Upload a new post to the database. Send a title, author, body and (optionally) an abstract. A date one will be automatically assigned when the post is uploaded.

The abstract is _not_ a subtitle, but a short summary of the article that will be shown when browsing the newsfeed.

### Example request

```json
{
    "title": "February 2024 Development Summary",
    "author": "John Blogpostwriter",
    "abstract": "A month of backend work.",
    "body": "Lorum ipsum dolor[...]"
}
```

### Example response

```json
{
    "status": "200",
    "message": "Uploaded new post successfully",
    "_id": "id_of_new_news_post"
}
```

## Get all news posts with `get("/api/news")`.

Usage: Pull all available news posts from the database. Returns an array of news objects in json.

No body is required for the request, however a header containing `API_KEY` is still necessary.

### Example response

```json
[
    {
        "title": "February 2024 Development Summary",
        "author": "John Blogpostwriter",
        "abstract": "A month of backend work.",
        "date": "Thu Mar 07 2024 13:59:48 GMT-0500 (Eastern Standard Time)",
        "body": "Lorum ipsum dolor[...]"
    },
    {
        "title": "March 2024 Development Summary",
        "author": "John Blogpostwriter",
        "abstract": "A month of frontend work.",
        "date": "Wed Apr 06 2024 12:45:43 GMT-0500 (Eastern Standard Time)",
        "body": "Lorum ipsum dolor[...]"
    },
...
]
```

## Load a leaderboard with `get("/api/scores")`.
Usage: Download an array of scores filtered per your request. The resulting array will be in descending order sorted by points unless otherwise specified with key `sort_by`.

### Narrowers:

Narrowers are special keys which filter resulting leaderboards. You should use at least one, or else you will get a raw list of all scores in the database.

- `user_id` - When specified, the response will contain only that player's scores.
- `game_mode` - When specified, the response will only contain scores achieved in that game mode.
- `level` - When specified, the response will only contain scores from that level.

Hint: You can send `null` to any narrower and the server will ignore it entirely. This can make your client-side code easier to write, as you can use a generic object for all of your requests.

### Example request

This will return *john_highscore_getter*'s top-10 scores on *c1_victoria*. Note that we are using `user_id`, and not `friendly_name`.

```json
{
    "level": "c1_victoria",
    "user_id": "john_highscore_getter",
    "game_mode": null,
    "sort_by": "points",
    "rows": 10
}
```

### Example response

An array of score objects is returned.


```json
[
    {
        "_id": "65e0c6508154faf9951d265c",
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 135552,
        "points": 7456,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
    {
        "_id": "65e0c6548154faf9951d2664",
        "user_id": "user_id_2",
        "level": "c1_victoria",
        "time": 117228,
        "points": 8492,
        "game_mode": "story",
        "game_version": "0.2.0"
    },
...
]
```

## Verify, edit, or create a user with `post("api/user")`.

Usage:

To verify a user exists, to create a new user, or to update a user's friendly name.

Application sends a user_id to login and friendly name if they want to submit a new one.

Friendly name MUST be provided if new_user is "true". Otherwise, the server will assign a random name.

`user_id` must be a unique 17-digit number. It is expected to be a steam ID, but could theoretically be anything.

`user_id` should be kept private!

### Example request 

```json
    {
        "user_id": "user_id_of_player_making_request",
        "new_user": "false",
        "friendly_name": "john_fortnite",
    }
```

### Example response

```json
    {
        "status": "200",
        "message": "User exists and friendly name is unchanged."
    }
```

### Other responses

* 200: User exists and friendly name is unchanged.
* 201: New user was created with friendly name <friendly_name>.
* 203: New user was created with automatically-generated friendly name <friendly_name>.
* 400: Bad request. Could not parse request.
* 400: Bad request. Invalid user_id

## Submit a new score with `post("api/score")`.

Usage: Submit a new score to the database when a level has been completed

### Example request 

```json
{
    "user_id": "user_id_of_score_getter",
    "level": "c1_victoria",
    "time": 240000,
    "points": 5020,
    "game_mode": "story",
    "game_version": "0.2.0"
}
```

### Example response

An `_id` is automatically assigned to the score and returned in the response.

```json
{
    "status": "200",
    "_id": "65e0980c111551dc08eb258c",
    "message": "Submitted a new score."
}
```