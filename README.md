# On My Way

## Summary
On My Way is an advanced trip planning tool that delivers a seamless travel experience. Users create personalized trips with essential details: title, description, dates, and budget. The user-friendly interface enables efficient excursion searches based on location, displaying detailed information and photos. Users easily add preferred excursions to their trips, enhancing itineraries with personal notes and specific dates. The profile interface consolidates all trips for easy access, allowing flexible review and modification. Within trip details, users navigate organized information, visualizing dates and a structured itinerary. Freedom to edit any component ensures a dynamic planning experience.

## About the Developer
On My Way was created by Nicole Yeager. Learn more about the developer on [LinkedIn](https://www.linkedin.com/in/nicoleyeager-thenydesign/).

## Technologies

##### Tech Stack:
- HTML
- CSS
- JavaScript
- JSX
- Bootstrap
- React
- Python
- PostgreSQL
- SQLAlchemy
- Flask
- Bcrypt
- Secrets
- TripAdvisor API
- Jinja
- AJAX
- JSON

On My Way is built on a Flask server with a PostgreSQL database. The front end is rendered using React elements

## Features
User Registration and Authentication:
Secure account creation and login with Bcrypt-encrypted passwords.

![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-signin.png" "authentication")

Trip Creation:
Customize travel itineraries with details like title, description, dates, and budget.
Add and manage excursions for a comprehensive travel plan.
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-createtrip.png" "create-trip")

Explore Excursions:
Discover activities based on location, interests, and preferences.
View excursion details, photos, and descriptions before adding them to your trip.
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-exploreexcursions.png" "explore1")
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-exploreexcursions2.png" "explore2")

Interactive Trip Dashboard:
User-friendly dashboard displaying upcoming trips for a quick overview.
Effortlessly edit or remove excursions and update trip details.
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-tripdash.png" "trip-dash")

View Trip Details:
Access detailed information about each trip, including title, description, dates, and budget.
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-viewtrip.png" "view-trip")

Edit Trip and Excursion Details:
Modify trip information such as title, description, dates, and budget.
Enjoy the flexibility to make real-time changes for a dynamic planning experience.
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-edittrip.png" "edit-trip")
![alt text]("https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-editexcursion.png" "edit-excursion")


## Running the File
When first running the file please follow these steps for the first run:

Clone repository:
``$ git clone https://github.com/nicoleyeag/TravelApp.git``

Create virtual environment:
``$ virtualenv env``

Activate the virtual environment:
``$ source env/bin/activate``

Install the requirments:
``$ pip3 install -r requirements.txt``

Get your own TripAdvisor API key and add it to secrets.sh:
``TRIPADVISOR_KEY= 'yourkey'``

Run secrets.sh:
``$ source secrets.sh``

Create your db:
``$ createdb travels``

Run the app:
``$ python3 server.py``

## The Future of OMW:
Future versions of On My Way may include additional features such as user collaboration on trip planning, real-time location tracking, and integration with external APIs for more comprehensive travel information.