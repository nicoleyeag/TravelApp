import TripListDrop from '/static/jsx/dropdownTrips.js'
import Buttons from '/static/jsx/coreButton.js';

const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:mm
  return formattedDate;
};

const AddToTripForm = ({ locationData, onSelectTrip, onHide, show }) => {
  const [excursionNotes, setExcursionNotes] = React.useState('');
  const [startTime, setStartTime] = React.useState(formatDateForInput(new Date()));
  const [endTime, setEndTime] = React.useState(formatDateForInput(new Date()));
  const [selectedTripId, setSelectedTripId] = React.useState('');

  const handleCreateExcursion = async (e) => {
    e.preventDefault();

    const formInputs = {
      start_time: startTime,
      end_time: endTime,
      title: locationData.name,
      description: locationData.description,
      photo: locationData.photo_list,
      trip_id: selectedTripId,
      excursion_type: excursionNotes,
    };

    try {
      const response = await fetch('/add_excursion_to_trip', {
        method: 'POST',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        // Display an alert with the error message
        console.error('Error creating excursion:', data.error);
        alert(data.error);
      } else {
        // Excursion created successfully
        alert('Excursion created successfully');
        onHide(); // Close the modal
      }
    } catch (error) {
      console.error('Error creating excursion:', error);
    }
  };

  return (
    <ReactBootstrap.Modal show={show} onHide={onHide}>
      <ReactBootstrap.Modal.Header closeButton>
        <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
          {locationData.name}
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <ReactBootstrap.Form className="modal-form" onSubmit={handleCreateExcursion}>
          <ReactBootstrap.Form.Group controlId="excursionNotes">
            <ReactBootstrap.Form.Label>Notes</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              as="textarea"
              name="excursionNotes"
              value={excursionNotes}
              onChange={(e) => setExcursionNotes(e.target.value)}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="StartTime">
            <ReactBootstrap.Form.Label>Start Time</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="datetime-local"
              name="start_time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="EndTime">
            <ReactBootstrap.Form.Label>End Time</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="datetime-local"
              name="end_time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="TripListDrop">
            <ReactBootstrap.Form.Label>Add to Existing Trip</ReactBootstrap.Form.Label>
            <TripListDrop onSelectTrip={(selectedTripId) => setSelectedTripId(selectedTripId)} />
          </ReactBootstrap.Form.Group>

          <coreButton id="modalButton" className="coreButton" type="submit" onClick={handleCreateExcursion}>
            Add to Trip
          </coreButton>
        </ReactBootstrap.Form>
      </ReactBootstrap.Modal.Body>
    </ReactBootstrap.Modal>
  );
};

export default AddToTripForm;
