from model import db, User, Trip, Excursion,Photo, Wishlist, Wish, connect_to_db
from flask import request
import logging

def sign_up_user(email, password):
    """add a new user to the db"""

    # the user will fill out the form on sign-in html
    # use POST request to gather the form info and send it to the database
    # email = request.form.get("email")
    # password = request.form.get("password")

    # Check if the user already exists
    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        # User already exists return none so route can sign in not sign up
        return None
    else:
        # Hash the password before storing it
        # hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        
        new_user = User(email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        return new_user


def sign_in_user(email, password):
    """check db for user then sign them in"""

    # email = request.form.get("email")
    # password = request.form.get("password")

    user = User.query.filter_by(email=email).first()
    pw = User.query.filter_by(password=password).first()

    if user:
        #add another check for pw?
        if pw:
            return user
        else:
            alert("Incorrect password. Please try again.")


    else:
        # Incorrect credentials or user not found
        return None
    


###any functions that has to do with your database
    
if __name__ == '__main__':
    from server import app
    connect_to_db(app)