const CreateTripForm = ({
  show,
  onHide
}) => {
  // Receive show and onHide as props
  const [formInputs, setFormInputs] = React.useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    budget: ''
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };
  const handleCreateTrip = async e => {
    e.preventDefault();
    console.log('Handling create trip submission');
    try {
      const response = await fetch('/create_trip', {
        method: 'POST',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'application/json'
        }
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
  return /*#__PURE__*/React.createElement(ReactBootstrap.Modal, {
    show: show,
    onHide: onHide
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Title, {
    id: "contained-modal-title-vcenter"
  }, "Create a Trip")), /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Form, {
    className: "modal-form",
    onSubmit: handleCreateTrip
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formTitle"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Title"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "text",
    name: "title",
    value: formInputs.title,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formDescription"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Description"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    as: "textarea",
    name: "description",
    value: formInputs.description,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formStartDate"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Start Date"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "date",
    name: "start_date",
    value: formInputs.start_date,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formEndDate"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "End Date"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "date",
    name: "end_date",
    value: formInputs.end_date,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formBudget"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Budget"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "number",
    name: "budget",
    value: formInputs.budget,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("coreButton", {
    id: "modalButton",
    className: "coreButton",
    type: "submit",
    onClick: handleCreateTrip
  }, "Create Trip"))));
};
export default CreateTripForm;