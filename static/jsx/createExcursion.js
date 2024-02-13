function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import Buttons from '/static/jsx/coreButton.js';
const CreateTripForm = () => {
  const handleCreateTrip = e => {
    e.preventDefault();
    const formInputs = {
      title: document.getElementById('tripTitle').value,
      description: document.getElementById('tripDescription').value,
      start_date: document.getElementById('tripStartDate').value,
      end_date: document.getElementById('tripEndDate').value,
      budget: document.getElementById('tripBudget').value
    };
    console.log(".get");
    fetch('/create_trip', {
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => {
      if (!data.success) {
        // Display an alert with the error message
        console.log("error");
        alert(data.error);
      } else {
        // Trip created successfully
        alert('Trip created successfully');
      }
    }).catch(error => console.error('Error creating trip:', error));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Create a Trip"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Title:", /*#__PURE__*/React.createElement("input", {
    id: "tripTitle",
    type: "text",
    name: "title"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Description:", /*#__PURE__*/React.createElement("textarea", {
    id: "tripDescription",
    name: "description"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Start Date:", /*#__PURE__*/React.createElement("input", {
    id: "tripStartDate",
    type: "date",
    name: "start_date"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "End Date:", /*#__PURE__*/React.createElement("input", {
    id: "tripEndDate",
    type: "date",
    name: "end_date"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Budget:", /*#__PURE__*/React.createElement("input", {
    id: "tripBudget",
    type: "number",
    name: "budget"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    type: "submit",
    onClick: handleCreateTrip
  }, "Create Trip")));
};
const MyVerticallyCenteredModal = props => {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Modal, _extends({}, props, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Title, {
    id: "contained-modal-title-vcenter"
  }, "Create a Trip")), /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Body, null, /*#__PURE__*/React.createElement(CreateTripForm, null)), /*#__PURE__*/React.createElement(ReactBootstrap.Modal.Footer, null, /*#__PURE__*/React.createElement("coreButton", {
    onClick: props.onHide
  }, "Close")));
};
const App = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    variant: "primary",
    onClick: () => setModalShow(true)
  }, "Create a Trip!"), /*#__PURE__*/React.createElement(MyVerticallyCenteredModal, {
    show: modalShow,
    onHide: () => setModalShow(false)
  }));
};
export default App;