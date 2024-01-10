from flask import Flask, render_template, request, flash, session, redirect
from model import connect_to_db, db

app = Flask(__name__)

@app.route('/')
def homepage():
    """view homepage"""

    return 'This is the trip page'


@app.route('/sign-in')
def sign_in():
    """sign-in page"""
    
    return 'This is the signin page'

@app.route('/profile')
def profile():
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