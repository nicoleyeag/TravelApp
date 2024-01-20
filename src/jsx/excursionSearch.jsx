import Buttons from '/static/jsx/coreButton.js';
import SearchParams from '/static/jsx/searchParams.js';
// import Cards from '/static/jsx/cards.jsx';

function SearchBy() {

  const handleSubmitParams = () => {
    // Get the searchQuery value from the input field
    const searchQuery = document.getElementById('searchQuery').value;
    console.log(searchQuery)
  
    // Construct the URL with the searchQuery parameter
    const url = `/excursions/search?searchQuery=${encodeURIComponent(searchQuery)}`;
  
    // Navigate to the constructed URL
    // do a fetch here to get json data
    // will use this data to also do for loop for my cards
    // use effee
    window.location.href = url;
  };
  

  return (
    // change search params to own jsx file
    // add that function here
    // cards is its own jsx file
    // also add that function here
    // add anything else you want to render under that ^ function
    <div>
      {/* Pass handleSubmitParams as a prop to SearchParams */}
      <SearchParams handleSubmitParams={handleSubmitParams} />

      {/* Include your Cards component */}
      {/* for each name returned render a card */}
      {/* <Cards onCardClick={handleCardClick} /> */}
      
      {/* Add other components or elements as needed */}
    </div>
  );
}

export default SearchBy;

// add cards below w for loop