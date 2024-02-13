function UserTrips({
  userData
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("h2", null, "My Trips"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, userData.trips.map(trip => /*#__PURE__*/React.createElement("div", {
    key: trip.trip_id,
    className: "col-md-4 mb-4"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Card, {
    style: {
      width: '18rem',
      height: '350px'
    }
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Img, {
    variant: "top",
    src: trip.photo_list[0].med_url,
    alt: `Photo for ${trip.name}`,
    style: {
      width: '18rem',
      height: '150px',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, null, trip.name), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, null, trip.description))))))));
}
export default UserTrips;

// function UserTrips({ userData }) {
//     return (
//         <div className="row mt-4">
//             <div className="col-md-12">
//                 <h2>My Trips</h2>
//                 <ul className="list-group">
//                   {userData.trips.map((trip) => (
//                     <li key={trip.trip_id} className="list-group-item">
//                       {trip.title}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//     );
//   }

//   export default UserTrips;

//   <ReactBootstrap.Card style={{ width: '18rem', height: '350px' }}>
//       <ReactBootstrap.Card.Img
//         variant="top"
//         src={photo_list[0].med_url}
//         alt={`Photo for ${name}`}
//         style={{ width: '18rem', height: '150px', objectFit: 'cover' }}
//       />
//       <ReactBootstrap.Card.Body>
//         <ReactBootstrap.Card.Title>{name}</ReactBootstrap.Card.Title>
//         <ReactBootstrap.Card.Text>{description}</ReactBootstrap.Card.Text>

//         <coreButton className="coreButton" type="submit">
//           Read More
//         </coreButton>

//         {/* Integrated modal and form */}
//         <CombinedComponent
//         // passing the locationData
//           locationData={locationData}
//           onSelectTrip={handleSelectTrip}
//         />

//       </ReactBootstrap.Card.Body>
//     </ReactBootstrap.Card>