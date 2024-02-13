function EditTripModal({
  show,
  handleClose,
  onSave,
  initialData
}) {
  const [formData, setFormData] = React.useState(initialData);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`/edit-trip/${initialData.trip_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
  return /*#__PURE__*/React.createElement(ReactBootstrap.Modal, {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Title, null, "Edit Trip")), /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Form, {
    className: "modal-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formTitle"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Title"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "text",
    name: "title",
    value: formData.title,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formDescription"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Description"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    as: "textarea",
    name: "description",
    value: formData.description,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formStartDate"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Start Date"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "date",
    name: "start_date",
    value: formData.start_date,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formEndDate"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "End Date"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "date",
    name: "end_date",
    value: formData.end_date,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formBudget"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Budget"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "number",
    name: "budget",
    value: formData.budget,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("coreButton", {
    id: "editTrip",
    className: "coreButton",
    variant: "primary",
    type: "submit",
    onClick: handleSubmit
  }, "Save Changes"))));
}
export default EditTripModal;