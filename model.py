from DateTime import DateTime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """a user"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"<User user_id={self.user_id} email={self.email}>"
    

class Trip(db.Model):
    """a trip created by user"""

    __tablename__ = "trips"

    trip_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey("users.user_id"))
    title = db.Column(db.String)
    description = db.Column(db.String)
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    budget = db.Column(db.Integer)

    def __repr__(self):
        return f"<Trip trip_id={self.trip_id} title={self.title}>"
    

class Excursion(db.Model):
    """an excursion for a trip"""

    __tablename__ = "excursions"

    excursion_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    price = db.Column(db.Integer)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    title = db.Column(db.String, nullable=False)
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
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    comment = db.Column(db.String)
    timestamp = db.Column(db.DateTime)
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
    """transportaion table"""

    __tablename__ = "transportations"

    transportaion_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    start_id = db.Column(db.Integer)
    end_id = db.Column(db.Integer)
    start_type = db.Column(db.String)
    end_type = db.Column(db.String)
    types = db.Column(db.Integer) #might need to change this
    notes = db.Column(db.String)

    def __repr__(self):
        return f"<Transpo transportaion_id={self.transportaion_id}>"
    
class Hotel(db.Model):
    """hotels"""

    __tablename__ = "hotels"

    hotel_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    street_address = db.Column(db.String)
    hotel_url = db.Column(db.String)
    lattitude = db.Column(db.Integer)
    longitude = db.Column(db.Integer)

    def __repr__(self):
        return f"<Hotel hotel_id={self.hotel_id}>"
    

class Flight(db.Model):
    """flights"""

    __tablename__ = "flights"

    flight_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    trip_id = db.Column(db.String, db.ForeignKey("trips.trip_id"))
    flight_url = db.Column(db.String)
  

    def __repr__(self):
        return f"<Flgiht flight_id={self.flight_id}>"