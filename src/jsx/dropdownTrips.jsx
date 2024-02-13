

const TripListDrop = ({ onSelectTrip }) => {
  const [userTrips, setUserTrips] = React.useState([]);
  const [selectedTrip, setSelectedTrip] = React.useState(null);

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

  const handleTripChange = (event) => {
    const selectedTripId = event.target.value;
    const selectedTrip = userTrips.find(trip => trip.trip_id === selectedTripId);
    setSelectedTrip(selectedTrip);
    onSelectTrip(selectedTripId); // Pass the selected trip to the parent component if needed
  };

  return (
    <div id="dropdown">
      <select onChange={handleTripChange} id="trip_id">
        <option value="" disabled selected></option>
        {userTrips.map(trip => (
          <option key={trip.trip_id} value={trip.trip_id}>{trip.title}</option>
        ))}
      </select>
      {selectedTrip && (
        <div>
          <h2>Selected Trip Details:</h2>
          <p>Trip ID: {selectedTrip.trip_id}</p>
          <p>Title: {selectedTrip.title}</p>
          {/* Add additional details as needed */}
        </div>
      )}
    </div>
  );
};

export default TripListDrop;

