# On My Way

## Summary

**On My Way** is an advanced trip planning tool designed to provide users with a seamless travel experience. With a user-friendly interface, users can create personalized trips, explore excursions, and manage their itineraries efficiently. The application allows for easy registration and authentication, ensuring a secure and dynamic planning experience.

## About the Developer

*On My Way* was created by **Nicole Yeager**. Learn more about the developer on [LinkedIn](https://www.linkedin.com/in/nicoleyeager-thenydesign/).

## Technologies

### Tech Stack:

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

*On My Way* is built on a Flask server with a PostgreSQL database, and the front end is rendered using React elements.

## Features

### User Registration and Authentication:

Secure account creation and login with Bcrypt-encrypted passwords.

![Authentication](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-signin.png "Authentication")

### Trip Creation:

Customize travel itineraries with details like title, description, dates, and budget. Add and manage excursions for a comprehensive travel plan.

![Create Trip](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-createtrip.png "Create Trip")

### Explore Excursions:

Discover activities based on location, interests, and preferences. View excursion details, photos, and descriptions before adding them to your trip.

![Explore 1](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-exploreexcursions.png "Explore 1")
![Explore 2](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-exploreexcursions2.png "Explore 2")

### Interactive Trip Dashboard:

User-friendly dashboard displaying upcoming trips for a quick overview. Effortlessly edit or remove excursions and update trip details.

![Trip Dashboard](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-tripdash.png "Trip Dashboard")

### View Trip Details:

Access detailed information about each trip, including title, description, dates, and budget.

![View Trip](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-viewtrip.png "View Trip")

### Edit Trip and Excursion Details:

Modify trip information such as title, description, dates, and budget. Enjoy the flexibility to make real-time changes for a dynamic planning experience.

![Edit Trip](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-edittrip.png "Edit Trip")
![Edit Excursion](https://github.com/nicoleyeag/TravelApp/blob/main/static/img/OMW-editexcursion.png "Edit Excursion")

## Running the File

When running the file for the first time, follow these steps:

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