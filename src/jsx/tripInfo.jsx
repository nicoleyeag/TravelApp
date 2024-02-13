import EditTripModal from '/static/jsx/editTrip.js'
import EditExcursionModal from '/static/jsx/editExcursion.js'
import TripCard from '/static/jsx/tripCard.js'
import ExcursionCard from '/static/jsx/excursionCard.js'

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

  const fetchTripDetails = (tripId) => {
    fetch(`/trip-page/${tripId}`) // Update the route to match your backend API for fetching a single trip
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(tripData => {
        setTripDetails(tripData);
      })
      .catch(error => console.error('Error fetching trip details:', error));
  };

  const handleEditTripClick = () => {
    setShowEditTripModal(true);
  };

  const handleEditExcursionClick = (excursion) => {
    setSelectedExcursion(excursion);
    setShowEditExcursionModal(true);
  };

  const handleEditComplete = (updatedData) => {
    // Logic for updating the trip details, you might want to make a backend request here
    console.log('Updated Trip Data:', updatedData);
    setShowEditTripModal(false);
    setShowEditExcursionModal(false);

    fetchTripDetails(updatedData.trip_id);
    window.location.reload();
  };

  return (
    <div>
      {tripDetails ? (
        <div>
          <h2 className = "mytrips">My Trip ✈️</h2>
          <TripCard trip={tripDetails} onEditClick={handleEditTripClick} />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Render EditTripModal when showEditTripModal is true */}
      {showEditTripModal && (
        <EditTripModal
          show={showEditTripModal}
          handleClose={() => setShowEditTripModal(false)}
          onSave={handleEditComplete}
          initialData={tripDetails}
        />
      )}
        {/* Display associated excursions */}
        {tripDetails && tripDetails.excursions && (
        <div>
            <h2 className = "mytrips">Excursions 📌</h2>
            {tripDetails.excursions.map((excursion, index) => (
            <ExcursionCard key={index} excursion={excursion} onEditClick={handleEditExcursionClick} />
            ))}
        </div>
        )}

      {/* Render EditExcursionModal when showEditExcursionModal is true */}
      {showEditExcursionModal && selectedExcursion && (
        <EditExcursionModal
          show={showEditExcursionModal}
          handleClose={() => setShowEditExcursionModal(false)}
          onSave={handleEditComplete}
          initialData={selectedExcursion}
        />
      )}
    </div>
      )}


export default MyTripInfo;
