from flask import Flask, render_template, request, jsonify, flash, session, redirect
from model import connect_to_db, db, User
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import crud


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///travels'  # Update with your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.route('/')
def homepage():
    """view homepage"""

    return render_template('homepage.html')

@app.route('/login', methods = ['GET'])
def sign_inn():
    

    return render_template('sign-up.html')


@app.route('/login', methods = ['POST'])
def login():
    """sign-up page"""

    email = request.form.get("email"),
    password = request.form.get("password")
    

    # Sign up or sign in based on the provided data
    user = crud.sign_up_user(email, password) or crud.sign_in_user(email, password)

    if user:
        # Successful sign-up or sign-in, render the homepage
        return render_template('homepage.html')
    # else:
    #     # Handle the case when the operation fails (user exists, incorrect credentials, etc.)
    #     return jsonify({'error': 'Authentication failed'}), 401





@app.route('/homepage/user')
def user_homepage():
    """homepage once the user signs in"""

    return 'user homepage'


@app.route('/profile')
def profile():
    """only show if the user is signed in"""
    return 'This is the profile page'

@app.route('/trip-page')
def trip_page():
    return 'This is the trip page'

@app.route('/explore')
def explore():
    """search for excursions from api"""
    return 'This is the explore page'

if __name__ == "__main__":    
    from model import connect_to_db

    connect_to_db(app, "postgresql:///travels")

    app.run(host="0.0.0.0", debug=True)