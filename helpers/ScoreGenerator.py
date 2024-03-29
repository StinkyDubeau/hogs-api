import json
import random

number_of_users = 50;
number_of_scores = 5000;

# Function to generate a random user_id
def generate_user_id():
    return f"user_id_{random.randint(1, number_of_users)}"

# Function to generate a random time (in milliseconds)
def generate_time():
    return random.randint(100000, 300000)

# Function to generate a random points value
def generate_points(used_points):
    new_points = random.randint(1000, 10000)
    while new_points in used_points:
        new_points = random.randint(1000, 10000)
    used_points.add(new_points)
    return new_points

# Generate the array of JSON objects
data = []
used_points = set()
for _ in range(number_of_scores):
    json_data = {
        "user_id": generate_user_id(),
        "level": random.choice(["c1_victoria", "c3_wheatfield", "c2_jakeshouse","c2_helicopter", "c1_doghouse"]),
        "time": generate_time(),
        "points": generate_points(used_points),
        "game_mode": random.choice(["story", "story_cheats", "sandbox"]),
        "game_version": random.choice(["0.2.0", "0.2.0", "0.2.0", "0.2.5"])
    }
    data.append(json_data)

# Print the array of JSON objects
print(json.dumps(data, indent=4))
