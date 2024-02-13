function EditExcursionModal({
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
      const response = await fetch(`/edit-excursion/${initialData.excursion_id}`, {
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
      console.error('Error updating excursion:', error);
    }
  };
  return /*#__PURE__*/React.createElement(ReactBootstrap.Modal, {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Title, null, "Edit Excursion")), /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Form, {
    className: "modal-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "formTitle"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Notes:"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "text",
    name: "excursion_type",
    value: formData.excursion_type,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "StartTime"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Start Time:"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "datetime-local",
    name: "start_time",
    value: formData.start_date,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "labelEdit"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    controlId: "EndTime"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "End Time:"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "datetime-local",
    name: "end_time",
    value: formData.end_date,
    onChange: handleChange
  }))), /*#__PURE__*/React.createElement("coreButton", {
    id: "editExcursion",
    className: "coreButton",
    variant: "primary",
    type: "submit",
    onClick: handleSubmit
  }, "Save Changes"))));
}
;
export default EditExcursionModal;