const CreateTripForm = ({ show, onHide }) => {  // Receive show and onHide as props
  const [formInputs, setFormInputs] = React.useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleCreateTrip = async (e) => {
    e.preventDefault();
    console.log('Handling create trip submission');

    try {
      const response = await fetch('/create_trip', {
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
        console.error('Error creating trip:', data.error);
        alert(data.error);
      } else {
        // Trip created successfully
        alert('Trip created successfully');
        onHide();
        window.location.reload();
      }
    } catch (error) {
      console.error('Error creating trip:', error);
    }
  };

  return (
    <ReactBootstrap.Modal show={show} onHide={onHide}>

      <ReactBootstrap.Modal.Header closeButton>
        <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
          Create a Trip
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <ReactBootstrap.Form className="modal-form" onSubmit={handleCreateTrip}>
          <ReactBootstrap.Form.Group controlId="formTitle">
            <ReactBootstrap.Form.Label>Title</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="text"
              name="title"
              value={formInputs.title}
              onChange={handleChange}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formDescription">
            <ReactBootstrap.Form.Label>Description</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              as="textarea"
              name="description"
              value={formInputs.description}
              onChange={handleChange}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formStartDate">
            <ReactBootstrap.Form.Label>Start Date</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="date"
              name="start_date"
              value={formInputs.start_date}
              onChange={handleChange}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formEndDate">
            <ReactBootstrap.Form.Label>End Date</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="date"
              name="end_date"
              value={formInputs.end_date}
              onChange={handleChange}
            />
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formBudget">
            <ReactBootstrap.Form.Label>Budget</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
              type="number"
              name="budget"
              value={formInputs.budget}
              onChange={handleChange}
            />
          </ReactBootstrap.Form.Group>

          <coreButton id="modalButton" className="coreButton" type="submit" onClick={handleCreateTrip}>
            Create Trip
          </coreButton>
        </ReactBootstrap.Form>
      </ReactBootstrap.Modal.Body>
    </ReactBootstrap.Modal>
  );
};


export default CreateTripForm;
