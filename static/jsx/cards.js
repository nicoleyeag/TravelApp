import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BasicExample() {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      width: '18rem'
    }
  }, /*#__PURE__*/React.createElement(Card.Img, {
    variant: "top",
    src: "holder.js/100px180"
  }), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, null, "Card Title"), /*#__PURE__*/React.createElement(Card.Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Go somewhere")));
}
export default BasicExample;