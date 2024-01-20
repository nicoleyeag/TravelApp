import Buttons from '/static/jsx/coreButton.js';
import SearchParams from '/static/jsx/searchParams.js';
// import Cards from '/static/jsx/cards.jsx';

function SearchBy() {
  const handleSubmitParams = () => {
    // Get the searchQuery value from the input field
    const searchQuery = document.getElementById('searchQuery').value;
    console.log(searchQuery);

    // Construct the URL with the searchQuery parameter
    const url = `/excursions/search?searchQuery=${encodeURIComponent(searchQuery)}`;

    // Navigate to the constructed URL
    window.location.href = url;
  };
  return (
    /*#__PURE__*/
    // change search params to own jsx file
    // add that function here
    // cards is its own jsx file
    // also add that function here
    // add anything else you want to render under that ^ function
    React.createElement("div", null, /*#__PURE__*/React.createElement(SearchParams, {
      handleSubmitParams: handleSubmitParams
    }))
  );
}
export default SearchBy;

// add cards below w for loop