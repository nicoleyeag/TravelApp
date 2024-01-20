from model import db, User, Trip, Excursion, Photo, Wishlist, Wish, connect_to_db
from flask import request, flash
import logging
from flask_bcrypt import Bcrypt 
import bcrypt

def sign_up_user(email, password, screenname):
    """Add a new user to the db"""

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return None
    else:
        # Generate a salt
        salt = bcrypt.gensalt()

        # Hash the password with flask bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')
        new_user = User(email=email, password=hashed_password, screen_name=screenname)
        db.session.add(new_user)
        db.session.commit()
        flash("New user added!")
        return new_user
    


def sign_in_user(email, password):
    """check db for user then sign them in"""

    # Query the database for the user with the provided email
    search_email = email

    user = User.query.filter_by(email=search_email).first()
    print("checking db for user")
    if user:
        # Verify the password using bcrypt
        print("checking pw")

        password = password.encode('utf-8')

        if bcrypt.checkpw(password, user.password.encode('utf-8')):
            print("pw looks good")
            return user
        else:
            flash("Incorrect password. Please try again.", 'error')
    else:
        print("uh oh")
        flash("User not found. Please sign up.", 'error')

    return None
    


###any functions that has to do with your database
    
if __name__ == '__main__':
    from server import app
    connect_to_db(app)