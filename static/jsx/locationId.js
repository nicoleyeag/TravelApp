// // // import React, { useState, useEffect } from 'react';

// function LocationId() {
//   const [ids, setIds] = useState([]);

//   useEffect(() => {
//     // Fetch data from the Flask API
//     fetch('/excursions/search')
//     // fetch specific api url
//       .then(response => response.json())
//       .then((result) => { 
//         const locationIds = result.map(attraction => attraction.location_id);
//         setIds(locationIds);;
//       });
//   }, []); // The empty dependency array ensures the effect runs only once (on mount)

//   return (
//     <div>
//       <h1>location IDs List</h1>
//       <ul>
//       {ids.map(locationId => (
//         <li key={locationId}>{locationId}</li>
//       ))}
//       </ul>
//     </div>
//   );
// };

// export default LocationId;