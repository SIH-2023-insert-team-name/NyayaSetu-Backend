import json
from faker import Faker
import random

fake = Faker()

# Sample categories
categories =[
        "bankruptcy",
        "business",
        "constitutional",
        "criminal defense",
        "employment and labour",
        "entertainment",
        "estate planning",
        "family",
        "immigration",
        "intellectual property",
        "personal injury",
        "tax",
      ]
incentive_levels=["not applicable","gold","silver","platinum","premium"]
availabilities=["Part-time","Full-time"]
locations=["Delhi","Kolkata","Mumbai","Bangalore"]
languages=["Hindi","English","Marathi","Bengali"]


def generate_fake_user():
    obj = {
        "username": fake.unique.first_name() + " " + fake.unique.last_name(),
        "name":fake.unique.first_name()+" "+fake.unique.last_name(),
        "email": fake.unique.email(),
        "aadhar": fake.unique.ssn(),
        "profile_pic": fake.image_url(),
        "serial_no": fake.unique.random_int(min=10000, max=99999),
        "enrollment_no": fake.random_element(("MP/3232/322", "DL/5678/901")),
        "gender": fake.random_element(["male", "female", "other"]),
        "age": fake.random_int(min=18, max=60),
        "summary": fake.sentence(),
        "category": random.choice(categories),
        "experience": fake.random_int(min=0, max=20),
        "location":random.choice(locations),
        "availability":random.choice(availabilities),
        "languages_spoken":random.choice(languages),
        "cost": fake.random_int(min=100, max=1000),
        "points": fake.random_int(min=0, max=200),
        "incentive_level":random.choice(incentive_levels),
        "rating": round(random.uniform(3.0, 5.0), 1),
    }
    return obj

# Generate and print fake user data
users_data = [generate_fake_user() for _ in range(20)]

# Convert the list of dictionaries to a JSON array
json_data = json.dumps(users_data, indent=2)

with open('data.json', 'w') as file:
    file.write(json_data)

print("Data has been written to data.json.")


