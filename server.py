from flask import Flask, render_template, request, jsonify, flash, session, redirect
from model import connect_to_db, db, User
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import crud
import bcrypt
# import apiquery

from pprint import pformat
import os
import requests
import secrets
from api_query import get_photos, get_location_details

from flask_bcrypt import Bcrypt 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///travels'  # Update with your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
app.secret_key = secrets.token_hex(16)
bcrypt = Bcrypt(app)

@app.route('/')
def homepage():
    """view homepage"""

    return render_template('homepage.html')

# --- SIGN UP ---------------------------------------------------------
@app.route('/sign-up', methods = ['GET'])
def sign_up():
    
    return render_template('sign-up.html')


@app.route('/sign-up/user', methods=['POST'])
def sign_up_user():
    """Sign-up page"""

    data = request.json
    email = data.get("email")
    password = data.get("password")
    screenname = data.get("screen_name")

    # Sign up the user
    user = crud.sign_up_user(email, password, screenname)

    if user:
        # User signed up successfully
        session['user_id'] = user.user_id
        result_code = 'SUCCESS'
        return jsonify({'code': result_code})

    # User already exists
    return jsonify({'success': False, 'message': 'Email already exists. Please sign in or use a different email'}), 400
    
# --- SIGN IN ----------------------------------------------------------
@app.route('/sign-in',methods = ['GET'])
def sign_in():

    return render_template('sign-in.html')

@app.route('/sign-in/user', methods=['POST'])
def sign_in_user():
    """Sign-in page"""
    print("getting form data")
    email = request.json.get("email")
    password = request.json.get("password")
    print(email)
    print(password)

    # Sign in the user
    user = crud.sign_in_user(email, password)
    print("ran crud")

    if user:
        # User signed in successfully
        session['user_id'] = user.user_id
        # return a json data = result code
        result_code = 'SUCCESS'
        return jsonify({'code': result_code})

    # Incorrect email or password
    flash("Incorrect email or password. Please try again.", 'error')
    return redirect('/sign-in')


# --- SIGN OUT -----------------------------------------------------------------
@app.route('/sign-out', methods=['POST'])
def sign_out():
    # Check if the user is authenticated before allowing sign-out
    if 'user_id' in session:
        # Perform sign-out actions (clear session, etc.)
        session.clear()
        return jsonify({'message': 'Successfully signed out'})
    else:
        return jsonify({'error': 'User not authenticated'}), 401


# --- CREATE TRIP --------------------------------------------------------------

@app.route('/create_trip', methods=['POST'])
def create_trip_route():
    print("create trip route")

    # Retrieve data from the request
    user_id = session.get('user_id')
    data = request.json
    title = data.get('title')
    description = data.get('description')
    start_date = data.get('start_date')
    end_date = data.get('end_date')
    budget = data.get('budget')

    try:
    # Create the trip
        trip = crud.create_trip(user_id, title, description, start_date, end_date, budget)
        print(trip)

        if trip:
        # Trip created successfully
            return jsonify({'success': True, 'message': 'Trip created successfully'})
        else:
        # Error in creating the trip
            return jsonify({'success': False, 'error': trip['error']}), 400
    
    except Exception as e:
        print(f"Error fetching trips: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500



@app.route('/trips', methods=['GET'])
def get_trips():
    print("yo getting trips")
    try:
        # Retrieve user_id from the session
        user_id = session.get('user_id')
        print(user_id)

        if not user_id:
            return jsonify({'error': 'User not found'}), 404

        # Assuming you have a relationship between User and Trip
        user = User.query.get(user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404

        trips = user.trip

        # Convert trips to a list of dictionaries
        trips_data = [{'trip_id': trip.trip_id, 'title': trip.title, 'description': trip.description,
                       'start_date': str(trip.start_date), 'end_date': str(trip.end_date), 'budget': trip.budget}
                      for trip in trips]

        return jsonify(trips_data)
    except Exception as e:
        print(f"Error fetching trips: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500




@app.route('/add_excursion_to_trip', methods=['POST'])
def add_excursion_to_trip():
    print("Adding excursion to trip")
    # post req from card data
    # Retrieve data from the request
    data = request.json
    trip_id = data.get('trip_id')
    price = data.get('price')
    start_time = datetime.strptime(data.get('start_time'), '%Y-%m-%dT%H:%M')  # Assuming the format is like '2022-02-01T12:00:00'
    end_time = datetime.strptime(data.get('end_time'), '%Y-%m-%dT%H:%M')  # Assuming the format is like '2022-02-01T14:00:00'
    title = data.get('title')
    description = data.get('description')
    lattitude = data.get('latitude')
    longitude = data.get('longitude')
    street_address = data.get('street_address')
    excursion_type = data.get('excursion_type')

    # You may need to adjust these parameter names based on your data

    # Create the excursion
    result = crud.create_excursion(trip_id, price, start_time, end_time, title, description, lattitude, longitude, street_address, excursion_type)

    if result:
        return jsonify({'success': True, 'message': 'Excursion added successfully'})
    else:
        return jsonify({'success': False, 'error': result.get('error')}), 400


@app.route('/check_login')
def get_user_profile():
    # Check if the user is logged in
    if 'user_id' not in session:
        return jsonify({'error': 'User not logged in'}, status=401)

    user_id = session['user_id']
    user = User.query.get(user_id)

    if user:
        # Convert user data to a dictionary and return as JSON
        user_data = {
            'user_id': user.user_id,
            'screen_name': user.screen_name,
            'email': user.email,
            # Add other user data as needed
        }
        return jsonify(user_data)
    else:
        return jsonify({'error': 'User not found'}, status=404)


@app.route('/profile')
def profile():
    """only show if the user is signed in"""
    return render_template('profile.html')


# --- TRIP PAGE ----------------------------------------------

@app.route('/trip-page')
def trip_page():
    # Use the trip_id parameter in your code to fetch details or render the trip page
    return render_template('trip-page.html')


@app.route('/trip-page/<int:trip_id>')
def trip_page_info(trip_id):
    # Fetch details for the specified trip_id (modify this based on your data model)

    trip = crud.get_trip_by_id(trip_id)
    excursions = crud.get_excursions_by_tripid(trip_id)

    if trip:
        # Convert trip data to a dictionary and pass it to the template
        trip_data = {
            'trip_id': trip.trip_id,
            'title': trip.title,
            'description': trip.description,
            'start_date': str(trip.start_date),
            'end_date': str(trip.end_date),
            'budget': trip.budget,
            # Add other trip data as needed
        }
        excursion_lst = []
        for excursion in excursions:
            excursion_data = {
                'excursion_id' : excursion.excursion_id,
                'trip_id': excursion.trip_id,
                'price': excursion.price,
                'start_time': excursion.start_time,
                'end_time' : excursion.end_time,
                'title' : excursion.title,
                'description' : excursion.description,
                'lattitude' : excursion.lattitude,
                'longitude' : excursion.longitude,
                'street_address' : excursion.street_address,
                'excursion_type' : excursion.excursion_type
            }
            excursion_lst.append(excursion_data)
        
        trip_data["excursions"] = excursion_lst
        
        return jsonify(trip_data)

    else:
        # Trip not found, return an error response (modify as needed)
        return jsonify({'error': 'Trip not found'}), 404


# --- EDIT TRIP -------------------------------------------------------------
    
@app.route('/edit-trip/<int:trip_id>', methods=['POST'])
def edit_trip_route(trip_id):
    print("EDIT TRIP")
    try:
        # Get the updated trip data from the request JSON
        updated_data = request.json

        # Fetch the current trip data from the database
        current_trip = crud.get_trip_by_id(trip_id)

        if current_trip is None:
            return jsonify({'error': 'Trip not found'}), 404

        # Update the trip data
        current_trip.title = updated_data.get('title', current_trip.title)
        current_trip.description = updated_data.get('description', current_trip.description)
        current_trip.start_date = updated_data.get('start_date', current_trip.start_date)
        current_trip.end_date = updated_data.get('end_date', current_trip.end_date)
        current_trip.budget = updated_data.get('budget', current_trip.budget)

        # Call a function to update the trip in the database
        new_trip = crud.update_trip(current_trip)  # Implement this function in your database module

        if new_trip:
            return jsonify({'message': 'Trip updated successfully'}), 200
        else:
            return jsonify({'error': 'Failed to update trip'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500



# --- EDIT EXCURSION --------------------------------------------------------
    
@app.route('/edit-excursion/<int:excursion_id>', methods=['POST'])
def edit_excursion_route(excursion_id):
    try:
        # Get the updated excursion data from the request JSON
        updated_data = request.json

        # Fetch the current excursion data from the database
        current_excursion = crud.get_excursion_by_id(excursion_id)  # Implement this function in your CRUD module

        if current_excursion is None:
            return jsonify({'error': 'Excursion not found'}), 404

        # Update the excursion data

        current_excursion.title = updated_data.get('title', current_excursion.title)
        current_excursion.description = updated_data.get('description', current_excursion.description)
        current_excursion.start_time = updated_data.get('start_time', current_excursion.start_time)
        current_excursion.end_time = updated_data.get('end_time', current_excursion.end_time)
        current_excursion.excursion_type = updated_data.get('excursion_type', current_excursion.excursion_type)
        # Add other fields as needed

        # Call a function to update the excursion in the database
        new_excursion = crud.update_excursion(current_excursion)  # Implement this function in your CRUD module

        if new_excursion:
            return jsonify({'message': 'Excursion updated successfully'}), 200
        else:
            return jsonify({'error': 'Failed to update excursion'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# --- EXCURSION PAGE --------------------------------------------

@app.route('/excursions')
def explore():
    """search for excursions from api"""
    return render_template('excursions.html')


API_KEY = os.environ['TRIPADVISOR_KEY']

@app.route('/excursions/search', methods = ['GET'])

def search_excursions():
    try:
        search_query = request.args.get('searchQuery', '')
        locations_url = 'https://api.content.tripadvisor.com/api/v1/location/search'
        params = {'key': API_KEY, 'searchQuery': search_query}
        headers = {"accept": "application/json"}

        # Fetch locations
        res_search = requests.get(locations_url, params=params, headers=headers)
        res_search.raise_for_status()
        search_data = res_search.json()
        search_results = search_data.get('data', [])
        data_list = [{'location_id': item.get('location_id'), 'name': item.get('name')} for item in search_results]

        # Fetch photo and description for each location
        locations_with_photos = []
        for location in data_list:
            location_id = location['location_id']
            photo_list = get_photos(location_id)
            description = get_location_details(location_id)

            location_with_photos = {
                'location_id': location_id,
                'name': location['name'],
                'photo_list': photo_list,
                'description': description,
            }

            locations_with_photos.append(location_with_photos)

        # Prepare data for rendering in the template
        data = {'locations_with_photos': locations_with_photos}
        return jsonify(data)

    except requests.exceptions.HTTPError as errh:
        error_message_search = f"HTTP Error: {errh}"
        error_data = {'error_message': error_message_search}
        print(errh)
        return jsonify(error_data), 500  # Return a 500 Internal Server Error

    except Exception as e:
        # Handle any other exception that might occur during the execution
        error_message = f"An error occurred: {str(e)}"
        error_data = {'error_message': error_message}
        print(e)
        return jsonify(error_data), 500  # Return a 500 Internal Server Error




if __name__ == "__main__":    
    from model import connect_to_db

    connect_to_db(app, "postgresql:///travels")

    app.run(host="0.0.0.0", debug=True)