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




@app.route('/homepage/user')
def homepage_user():
    """view homepage"""

    # Check if the user is in the session
    if 'user_id' in session:
        user_id = session['user_id']
        user = User.query.get(user_id)

        if user:
            user_name = user.screen_name  # Replace with the actual property that stores the user's name
            return render_template('user-homepage.html', user_name=user_name)

    # If user not in session, redirect to sign-in page
    flash("Please sign in to access the homepage.", 'error')
    return redirect(url_for('sign_in_page'))


@app.route('/homepage/user')
def user_homepage():
    """homepage once the user signs in"""

    return 'user homepage'


@app.route('/api/user-profile')
def get_user_profile():
    # Check if the user is logged in
    if 'user_id' not in session:
        return jsonify({'error': 'User not logged in'}), 401

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
        return jsonify({'error': 'User not found'}), 404


# @app.route('/profile')
# def profile():
#     """only show if the user is signed in"""
#     return render_template('profile.html')




@app.route('/trip-page')
def trip_page():
    return 'This is the trip page'

@app.route('/excursions')
def explore():
    """search for excursions from api"""
    return render_template('excursions.html')


API_KEY = os.environ['TRIPADVISOR_KEY']

@app.route('/excursions/search', methods = ['GET'])
def get_locations():
    """retrieve location id based on user location search"""

    try:
        search_query = request.args.get('searchQuery', '')
        print(search_query)

        locations_url = 'https://api.content.tripadvisor.com/api/v1/location/search'

        params = {
            'key': API_KEY,  # Replace with a secure way of getting your API key
            'searchQuery': search_query,
        }

        headers = {"accept": "application/json"}
        res_search = requests.get(locations_url, params=params, headers=headers)
        res_search.raise_for_status()  # Raise an HTTPError for bad responses

        search_data = res_search.json()
        # print(search_data)
        search_results = search_data.get('data', [])
        print(search_results)
        data_list = [{'location_id': item.get('location_id'), 'name': item.get('name')} for item in search_results]
        
        # print(locationids)

        # Prepare data for rendering in the template
        data = {'data_list': data_list}
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


def get_photos(location_id):
    """Retrieve photos based on location id."""
    try:
        photos_url = f'https://api.content.tripadvisor.com/api/v1/location/{location_id}/photos'
        params = {'key': API_KEY}
        headers = {"accept": "application/json"}
        res_photos = requests.get(photos_url, params=params, headers=headers)
        res_photos.raise_for_status()  # Raise an HTTPError for bad responses
        photos_data = res_photos.json()
        photos_results = photos_data.get('data', [])

        # Extract relevant information from each photo
        photo_list = []
        for item in photos_results:
            images = item.get('images', {})
            photo_info = {
                'thumbnail_url': images.get('thumbnail', {}).get('url', ''),
                'small_url': images.get('small', {}).get('url', ''),
            }
            photo_list.append(photo_info)

        return photo_list

    except requests.exceptions.HTTPError as errh:
        print(f"HTTP Error in get_photos: {errh}")
        raise  # Re-raise the exception to be handled by the calling function

    except Exception as e:
        print(f"An error occurred in get_photos: {str(e)}")
        raise  # Re-raise the exception to be handled by the calling function

if __name__ == "__main__":    
    from model import connect_to_db

    connect_to_db(app, "postgresql:///travels")

    app.run(host="0.0.0.0", debug=True)