import Buttons from '/static/jsx/coreButton.js';


function SearchParams({ handleSubmitParams }) {
    console.log('handleSubmitParams called');
        // ... rest of the code
      
    return (
        <ReactBootstrap.Accordion defaultActiveKey="0" className="search-params-container">
        <ReactBootstrap.Accordion.Item eventKey="0">
        <ReactBootstrap.Accordion.Header>Search Parameters</ReactBootstrap.Accordion.Header>
        <ReactBootstrap.Accordion.Body>
            <ReactBootstrap.Form.Label>Location</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control
            type="location"
            id="searchQuery"
            style={{ width: '100%' }}
            name="searchQuery"
            />
            <coreButton style={{ marginTop: '10px' }} className="coreButton"  type="submit" onClick={handleSubmitParams}>Submit</coreButton>
        </ReactBootstrap.Accordion.Body>
        </ReactBootstrap.Accordion.Item>
    </ReactBootstrap.Accordion>
);
}

export default SearchParams;