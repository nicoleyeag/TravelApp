from model import db, User, Trip, Excursion, Photo, Wishlist, Wish, connect_to_db
from flask import request, flash, jsonify
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
    


def create_trip(user_id, title, description, start_date, end_date, budget):

    # Check if a trip with the same title already exists
    existing_trip = Trip.query.filter_by(title=title).first()

    if existing_trip:
        return jsonify({'success': False, 'error': 'Trip with the same title already exists'})

    # Create a new Trip object
    new_trip = Trip(
        user_id=user_id,
        title=title,
        description=description,
        start_date=start_date,
        end_date=end_date,
        budget=budget
    )

    # Add the new_trip to the database
    db.session.add(new_trip)
    db.session.commit()

    flash("trip added!")


def create_excursion(trip_id, price, start_time, end_time, title, description, lattitude, longitude, street_address, excursion_type):
    # Check if an excursion with the same title already exists for the specified trip
    existing_excursion = Excursion.query.filter_by(trip_id=trip_id, title=title).first()

    if existing_excursion:
        return jsonify({'success': False, 'error': 'Excursion with the same title already exists for this trip'})

    # Create a new Excursion object
    new_excursion = Excursion(
        trip_id=trip_id,
        price=price,
        start_time=start_time,
        end_time=end_time,
        title=title,
        description=description,
        lattitude=lattitude,
        longitude=longitude,
        street_address=street_address,
        excursion_type=excursion_type
    )

# take this information from the modal

    # Add the new_excursion to the database
    db.session.add(new_excursion)
    db.session.commit()

    return jsonify({'success': True, 'message': 'Excursion created successfully'})


def get_trip_by_id(trip_id):
    """Get trip details by trip_id."""

    # Query the database for the trip with the provided trip_id
    trip = Trip.query.get(trip_id)


    return trip

def get_excursions_by_tripid(trip_id):
    """Get excursions by trip_id."""

    # Query the database for the trip with the provided trip_id
    excursions = Excursion.query.filter(Excursion.trip_id == trip_id)
    # add sort or orderby at the end of this function ^^

    return excursions


def get_excursion_by_id(excursion_id):
    """Get excursion details by excursion_id."""

    # Query the database for the excursion with the provided excursion_id
    excursion = Excursion.query.get(excursion_id)

    return excursion


def update_trip(trip):
    try:
        # Log the changes before the update
        print(f"Updating Trip - Before: {trip}")

        # Commit the changes to the database
        db.session.commit()

        # Log the changes after the update
        print(f"Updating Trip - After: {trip}")

        return True
    except Exception as e:
        # Rollback the transaction in case of an error
        db.session.rollback()
        print(f"Error updating trip: {e}")
        return False



def update_excursion(excursion):
    try:
        # Log the changes before the update
        print(f"Updating Excursion - Before: {excursion}")

        # Commit the changes to the database
        db.session.commit()

        # Log the changes after the update
        print(f"Updating Excursion - After: {excursion}")

        return True
    except Exception as e:
        # Rollback the transaction in case of an error
        db.session.rollback()
        print(f"Error updating excursion: {e}")
        return False
    


###any functions that has to do with your database
    
if __name__ == '__main__':
    from server import app
    connect_to_db(app)