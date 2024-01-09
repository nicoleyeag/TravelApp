from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """a user"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    def __repr__(self):
        return f"<User user_id={self.user_id} email={self.email}>"
    

class Trip(db.Model):
    """a trip created by user"""

    __tablename__ = "trips"

    trip_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey("users.user_id"))
    title = db.Column(db.String)
    description = db.Column(db.String)
    start_date = db.Column(db.Datetime)
    end_date = db.Column(db.Datetime)
    budget = db.Column(db.Integer)

    def __repr__(self):
        return f"<Trip trip_id={self.trip_id} title={self.title}>"
    

class Excursion(db.Model):
    """an excursion for a trip"""

    __tablename__ = "excursions"

    excursion_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    price = db.Column(db.Integer)
    start_time = db.Column(db.Datetime)
    end_time = db.Column(db.Datetime)
    title = db.Column(db.String)
    description = db.Column(db.String)
    lattitude = db.Column(db.Integer)
    longitude = db.Column(db.Integer)
    street_address = db.Column(db.String)
    excursion_type = db.Column(db.String)

    def __repr__(self):
        return f"<Excursion excursion_id={self.excursion_id} title={self.title}>"
    

class Photo(db.Model):
    """photos the user can upload"""

    __tablename__ = "photos"

    photo_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey("user.user_id"))
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    title = db.Column(db.String)
    description = db.Column(db.String)
    comment = db.Column(db.String)
    timestamp = db.Column(db.Datetime)
    location = db.Column(db.String)
    photo_url = db.Column(db.String)

    def __repr__(self):
        return f"<Photo photo_id={self.photo_id} title={self.title}>"
    

class Wishlist(db.Model):
    """a wishlist of what the user wants to do/go"""

    __tablename__ = "wishlists"

    wishlist_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey("user.user_id"))
    title = db.Column(db.String)
    description = db.Column(db.String)

    def __repr__(self):
        return f"<Wishlist wishlist_id={self.wishlist_id} title={self.title}>"
    
class Wish(db.Model):

    __tablename__ = "wishes"

    wish_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    wishlist_id = db.Column(db.String, db.ForeignKey("wishlists.wishlist_id"))
    excursion_id = db.Column(db.String, db.ForeignKey("excursions.excursion_id"))
    title = db.Column(db.String)
    location = db.Column(db.String)
    activity = db.Column(db.String)

    def __repr__(self):
        return f"<Wish wish_id={self.wishlist_id} title={self.title}>"
    



    # ___________________________________________________________________________

class Transportation(db.Model):

    __tablename__ = "transportations"

    transportaion_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    start_id = 
    end_id = 
    start_type = 
    end_type = 
    types = 
    notes = 