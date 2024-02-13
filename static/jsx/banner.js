function Banner() {
  const [index, setIndex] = React.useState(0);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };
  return /*#__PURE__*/React.createElement(ReactBootstrap.Carousel, {
    activeIndex: index,
    onSelect: handleSelect
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "/static/img/banner1.jpg",
    alt: "First slide",
    className: "d-block w-100"
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Caption, null)), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "/static/img/banner2.jpg",
    alt: "Second slide",
    className: "d-block w-100"
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Caption, null)), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "/static/img/banner3.jpg",
    alt: "Third slide",
    className: "d-block w-100"
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Caption, null)), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "/static/img/banner4.jpg",
    alt: "Fourth slide",
    className: "d-block w-100"
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Carousel.Caption, null)));
}
export default Banner;