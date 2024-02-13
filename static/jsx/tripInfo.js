import EditTripModal from '/static/jsx/editTrip.js';
import EditExcursionModal from '/static/jsx/editExcursion.js';
import TripCard from '/static/jsx/tripCard.js';
import ExcursionCard from '/static/jsx/excursionCard.js';
function MyTripInfo() {
  const [tripDetails, setTripDetails] = React.useState(null);
  const [showEditTripModal, setShowEditTripModal] = React.useState(false);
  const [selectedExcursion, setSelectedExcursion] = React.useState(null);
  const [showEditExcursionModal, setShowEditExcursionModal] = React.useState(false);
  React.useEffect(() => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const tripId = parameters.get('trip_id');
    // Fetch trip details when the component mounts
    fetchTripDetails(tripId);
  }, []);
  const fetchTripDetails = tripId => {
    fetch(`/trip-page/${tripId}`) // Update the route to match your backend API for fetching a single trip
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then(tripData => {
      setTripDetails(tripData);
    }).catch(error => console.error('Error fetching trip details:', error));
  };
  const handleEditTripClick = () => {
    setShowEditTripModal(true);
  };
  const handleEditExcursionClick = excursion => {
    setSelectedExcursion(excursion);
    setShowEditExcursionModal(true);
  };
  const handleEditComplete = updatedData => {
    // Logic for updating the trip details, you might want to make a backend request here
    console.log('Updated Trip Data:', updatedData);
    setShowEditTripModal(false);
    setShowEditExcursionModal(false);
    fetchTripDetails(updatedData.trip_id);
    window.location.reload();
  };
  return /*#__PURE__*/React.createElement("div", null, tripDetails ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "mytrips"
  }, "My Trip \u2708\uFE0F"), /*#__PURE__*/React.createElement(TripCard, {
    trip: tripDetails,
    onEditClick: handleEditTripClick
  })) : /*#__PURE__*/React.createElement("p", null, "Loading..."), showEditTripModal && /*#__PURE__*/React.createElement(EditTripModal, {
    show: showEditTripModal,
    handleClose: () => setShowEditTripModal(false),
    onSave: handleEditComplete,
    initialData: tripDetails
  }), tripDetails && tripDetails.excursions && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "mytrips"
  }, "Excursions \uD83D\uDCCC"), tripDetails.excursions.map((excursion, index) => /*#__PURE__*/React.createElement(ExcursionCard, {
    key: index,
    excursion: excursion,
    onEditClick: handleEditExcursionClick
  }))), showEditExcursionModal && selectedExcursion && /*#__PURE__*/React.createElement(EditExcursionModal, {
    show: showEditExcursionModal,
    handleClose: () => setShowEditExcursionModal(false),
    onSave: handleEditComplete,
    initialData: selectedExcursion
  }));
}
export default MyTripInfo;