from model import db, User, Trip, Excursion,Photo, Wishlist, Wish, connect_to_db

def create_user():
    """create and return a new user"""

    user = User(email=email, password=password)

    return user



if __name__ == '__main__':
    from server import app
    connect_to_db(app)