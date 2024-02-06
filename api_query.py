import os
import requests
import secrets

API_KEY = os.environ['TRIPADVISOR_KEY']

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
                'med_url': images.get('medium', {}).get('url', ''),
                'large_url': images.get('large', {}).get('url', ''),

            }
            photo_list.append(photo_info)

        return photo_list

    except requests.exceptions.HTTPError as errh:
        print(f"HTTP Error in get_photos: {errh}")
        raise  # Re-raise the exception to be handled by the calling function

    except Exception as e:
        print(f"An error occurred in get_photos: {str(e)}")
        raise  # Re-raise the exception to be handled by the calling function
  

def get_location_details(location_id):
    """Retrieve location details based on location id."""
    try:
        details_url = f'https://api.content.tripadvisor.com/api/v1/location/{location_id}/details'
        params = {'key': API_KEY}
        headers = {"accept": "application/json"}

        res_details = requests.get(details_url, params=params, headers=headers)

        # Check the status code directly
        if res_details.status_code == 200:
            details_data = res_details.json()

            # Ensure that 'description' is present in details_data
            if 'description' in details_data:
                description = details_data['description']
                # limited_description = description[:120] + ("..." if len(description) > 120 else "")
                # print(limited_description)
                return description
            else:
                desc = "Description not found in location details. This place is still kinda cool. Despite the absence of specific information, we can assure you that it's a unique spot worth exploring. Even though we don't have all the details, it's bound to be an exciting adventure. Returning default description."
                return desc
        elif res_details.status_code == 404:
            print("Location not found. Returning custom description.")
            desc = "Description not found in location details. This place is still kinda cool. Despite the absence of specific information, we can assure you that it's a unique spot worth exploring. Even though we don't have all the details, it's bound to be an exciting adventure. Returning default description."
            return desc
        else:
            print(f"Unexpected status code in get_location_details: {res_details.status_code}")
            print(f"Response content: {res_details.content}")  # Log the response content

    except Exception as e:
        print(f"An error occurred in get_location_details: {str(e)}")
        raise  # Re-raise the exception to be handled by the calling function

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


