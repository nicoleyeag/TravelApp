import { GridLayout, GridRow, GridCol } from '/static/jsx/gridLayout.js';
import ProfileTripCard from '/static/jsx/profileTrips.js';


const TripList = () => {
  const [userTrips, setUserTrips] = React.useState([]);


  React.useEffect(() => {
    // Fetch user trips when the component mounts
    fetchUserTrips();
  }, []);

  const fetchUserTrips = () => {
    fetch('/trips')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(tripsData => {
        setUserTrips(tripsData);
      })
      .catch(error => console.error('Error fetching user trips:', error));
  };

  return (
    <div>
    <GridLayout className="grid" id="myTrips">
      {userTrips.map((trip, index) => (
        // Create a new row for every three cards
        index % 3 === 0 && (
          <GridRow key={index}>
            {userTrips.slice(index, index + 3).map((trip) => (
              <GridCol key={trip.trip_id}>
                <ProfileTripCard trip={trip} />
              </GridCol>
            ))}
          </GridRow>
        )
      ))}
    </GridLayout>
  </div>
);
}

export default TripList;

