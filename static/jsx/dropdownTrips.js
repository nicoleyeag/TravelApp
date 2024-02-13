const TripListDrop = ({
  onSelectTrip
}) => {
  const [userTrips, setUserTrips] = React.useState([]);
  const [selectedTrip, setSelectedTrip] = React.useState(null);
  React.useEffect(() => {
    // Fetch user trips when the component mounts
    fetchUserTrips();
  }, []);
  const fetchUserTrips = () => {
    fetch('/trips').then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then(tripsData => {
      setUserTrips(tripsData);
    }).catch(error => console.error('Error fetching user trips:', error));
  };
  const handleTripChange = event => {
    const selectedTripId = event.target.value;
    const selectedTrip = userTrips.find(trip => trip.trip_id === selectedTripId);
    setSelectedTrip(selectedTrip);
    onSelectTrip(selectedTripId); // Pass the selected trip to the parent component if needed
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "dropdown"
  }, /*#__PURE__*/React.createElement("select", {
    onChange: handleTripChange,
    id: "trip_id"
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }), userTrips.map(trip => /*#__PURE__*/React.createElement("option", {
    key: trip.trip_id,
    value: trip.trip_id
  }, trip.title))), selectedTrip && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Selected Trip Details:"), /*#__PURE__*/React.createElement("p", null, "Trip ID: ", selectedTrip.trip_id), /*#__PURE__*/React.createElement("p", null, "Title: ", selectedTrip.title)));
};
export default TripListDrop;