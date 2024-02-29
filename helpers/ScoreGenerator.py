import json
import random

# Function to generate a random user_id
def generate_user_id():
    return f"user_id_{random.randint(1, 10)}"

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
for _ in range(50):
    json_data = {
        "user_id": generate_user_id(),
        "level": "c1_victoria",
        "time": generate_time(),
        "points": generate_points(used_points),
        "gamemode": "story",
        "game_version": "0.2.0"
    }
    data.append(json_data)

# Print the array of JSON objects
print(json.dumps(data, indent=4))