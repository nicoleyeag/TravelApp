function EditExcursionModal({ show, handleClose, onSave, initialData }) {
    const [formData, setFormData] = React.useState(initialData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`/edit-excursion/${initialData.excursion_id}`, {
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
        console.error('Error updating excursion:', error);
      }
    };
  
    
    return (
      <ReactBootstrap.Modal show={show} onHide={handleClose}>
        <ReactBootstrap.Modal.Header closeButton>
          <ReactBootstrap.Modal.Title>Edit Excursion</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>

          <ReactBootstrap.Form className="modal-form" onSubmit={handleSubmit}>
            <ReactBootstrap.Form.Group controlId="formTitle">
              <ReactBootstrap.Form.Label>Notes:</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control
                type="text"
                name="excursion_type"
                value={formData.excursion_type}
                onChange={handleChange}
              />
            </ReactBootstrap.Form.Group>
  
            <ReactBootstrap.Form.Group controlId="StartTime">
              <ReactBootstrap.Form.Label>Start Time:</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control
                type="datetime-local"
                name="start_time"
                value={formData.start_date}
                onChange={handleChange} 
                />
            </ReactBootstrap.Form.Group>
            
            <div className="labelEdit">
            <ReactBootstrap.Form.Group  controlId="EndTime">
              <ReactBootstrap.Form.Label>End Time:</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control 
                type="datetime-local" 
                name="end_time" 
                value={formData.end_date}
                onChange={handleChange}
              />
            </ReactBootstrap.Form.Group>
            </div>
  
            <coreButton id="editExcursion" className="coreButton" variant="primary" type="submit" onClick={handleSubmit}>
              Save Changes
            </coreButton>
          </ReactBootstrap.Form>
        </ReactBootstrap.Modal.Body>
      </ReactBootstrap.Modal>
    );
  };
  
  export default EditExcursionModal;