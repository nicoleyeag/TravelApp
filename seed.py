import os
import json
from random import choice, randint
from datetime import datetime

import crud
import model
import server

os.system("dropdb travels")
os.system("createdb travels")

def seed_data():
    # Create some sample data
    user1 = User(screen_name="user1", email="user1@example.com", password="password1")
    user2 = User(screen_name="user2", email="user2@example.com", password="password2")

    trip1 = Trip(user=user1, title="Trip 1", description="Description 1", start_date=datetime.now(), end_date=datetime.now(), budget=1000)
    trip2 = Trip(user=user2, title="Trip 2", description="Description 2", start_date=datetime.now(), end_date=datetime.now(), budget=1500)

    excursion1 = Excursion(trip=trip1, title="Excursion 1", description="Excursion Description 1", start_time=datetime.now(), end_time=datetime.now(), price=50)
    excursion2 = Excursion(trip=trip2, title="Excursion 2", description="Excursion Description 2", start_time=datetime.now(), end_time=datetime.now(), price=75)

    photo1 = Photo(user=user1, trip=trip1, title="Photo 1", description="Photo Description 1", comment="Nice photo", timestamp=datetime.now(), location="Location 1", photo_url="photo1.jpg")
    photo2 = Photo(user=user2, trip=trip2, title="Photo 2", description="Photo Description 2", comment="Awesome shot", timestamp=datetime.now(), location="Location 2", photo_url="photo2.jpg")

    wishlist1 = Wishlist(user=user1, title="Wishlist 1", description="Wishlist Description 1")
    wishlist2 = Wishlist(user=user2, title="Wishlist 2", description="Wishlist Description 2")

    wish1 = Wish(wishlist=wishlist1, excursion=excursion1, title="Wish 1", location="Wish Location 1", activity="Wish Activity 1")
    wish2 = Wish(wishlist=wishlist2, excursion=excursion2, title="Wish 2", location="Wish Location 2", activity="Wish Activity 2")

    # Additional data
    trip3 = Trip(user=user1, title="Trip 3", description="Description 3", start_date=datetime.now(), end_date=datetime.now(), budget=1200)
    excursion3 = Excursion(trip=trip3, title="Excursion 3", description="Excursion Description 3", start_time=datetime.now(), end_time=datetime.now(), price=60)
    photo3 = Photo(user=user1, trip=trip3, title="Photo 3", description="Photo Description 3", comment="Amazing view", timestamp=datetime.now(), location="Location 3", photo_url="photo3.jpg")
    wishlist3 = Wishlist(user=user1, title="Wishlist 3", description="Wishlist Description 3")
    wish3 = Wish(wishlist=wishlist3, excursion=excursion3, title="Wish 3", location="Wish Location 3", activity="Wish Activity 3")

    # Add all the data to the database
    db.session.add_all([user1, user2, trip1, trip2, excursion1, excursion2, photo1, photo2, wishlist1, wishlist2, wish1, wish2, trip3, excursion3, photo3, wishlist3, wish3])
    db.session.commit()

