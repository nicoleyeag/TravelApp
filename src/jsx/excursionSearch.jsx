// import React, { useState, useEffect } from 'https://cdn.skypack.dev/react';
import SearchParams from '/static/jsx/searchParams.js';
import Card from '/static/jsx/cards.js';
import { GridLayout, GridRow, GridCol } from '/static/jsx/gridLayout.js';


function SearchBy() {
  const [excursion, setExcursion] = React.useState([]);

  const fetchData = async (searchQuery) => {
    try {
      const response = await fetch(`/excursions/search?searchQuery=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setExcursion(data.locations_with_photos); // Assuming your API returns a 'locations_with_photos' property
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleSubmitParams = async () => {
    const searchQuery = document.getElementById('searchQuery').value;
    console.log(searchQuery);

    // Fetch data when the form is submitted
    fetchData(searchQuery);

    // You might not need to navigate away from the page if you are updating state and re-rendering
    // window.location.href = `/excursions/search?searchQuery=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div id="searchby" className="search-container">
      <div className="search-params">
        <SearchParams handleSubmitParams={handleSubmitParams} />
      </div>

      <div className="grid-container">
        <GridLayout className="grid">
          {excursion?.map((locationData, index) =>
            index % 3 === 0 && (
              <GridRow key={index}>
                {excursion.slice(index, index + 3).map((locationData) => (
                  <GridCol key={locationData.location_id}>
                    <Card locationData={locationData} />
                  </GridCol>
                ))}
              </GridRow>
            )
          )}
        </GridLayout>
      </div>
    </div>
  );
}

export default SearchBy;