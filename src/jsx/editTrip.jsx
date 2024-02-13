function EditTripModal({ show, handleClose, onSave, initialData }) {
    const [formData, setFormData] = React.useState(initialData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`/edit-trip/${initialData.trip_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        onSave(formData);
        handleClose();
      } catch (error) {
        console.error('Error updating trip:', error);
      }
    };

  return (
      <ReactBootstrap.Modal show={show} onHide={handleClose}>
        <ReactBootstrap.Modal.Header closeButton>
          <ReactBootstrap.Modal.Title>Edit Trip</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <ReactBootstrap.Form className="modal-form" onSubmit={handleSubmit}>
            <ReactBootstrap.Form.Group controlId="formTitle">
              <ReactBootstrap.Form.Label>Title</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
            </ReactBootstrap.Form.Group>
  
            <ReactBootstrap.Form.Group controlId="formDescription">
              <ReactBootstrap.Form.Label>Description</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} />
            </ReactBootstrap.Form.Group>
  
            <ReactBootstrap.Form.Group controlId="formStartDate">
              <ReactBootstrap.Form.Label>Start Date</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
            </ReactBootstrap.Form.Group>
  
            <ReactBootstrap.Form.Group controlId="formEndDate">
              <ReactBootstrap.Form.Label>End Date</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
            </ReactBootstrap.Form.Group>
  
            <ReactBootstrap.Form.Group controlId="formBudget">
              <ReactBootstrap.Form.Label>Budget</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control type="number" name="budget" value={formData.budget} onChange={handleChange} />
            </ReactBootstrap.Form.Group>
  
            <coreButton id="editTrip" className="coreButton" variant="primary" type="submit" onClick = {handleSubmit}>
              Save Changes
            </coreButton>
          </ReactBootstrap.Form>
        </ReactBootstrap.Modal.Body>
      </ReactBootstrap.Modal>
    );
  }

export default EditTripModal;
