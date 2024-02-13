function Banner() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <ReactBootstrap.Carousel activeIndex={index} onSelect={handleSelect}>
      <ReactBootstrap.Carousel.Item>
        <img src="/static/img/banner1.jpg" alt="First slide" className="d-block w-100" />
        <ReactBootstrap.Carousel.Caption>

        </ReactBootstrap.Carousel.Caption>
      </ReactBootstrap.Carousel.Item>
      <ReactBootstrap.Carousel.Item>
        <img src="/static/img/banner2.jpg" alt="Second slide" className="d-block w-100" />
        <ReactBootstrap.Carousel.Caption>

        </ReactBootstrap.Carousel.Caption>
      </ReactBootstrap.Carousel.Item>
      <ReactBootstrap.Carousel.Item>
        <img src="/static/img/banner3.jpg" alt="Third slide" className="d-block w-100" />
        <ReactBootstrap.Carousel.Caption>

        </ReactBootstrap.Carousel.Caption>
      </ReactBootstrap.Carousel.Item>
      <ReactBootstrap.Carousel.Item>
        <img src="/static/img/banner4.jpg" alt="Fourth slide" className="d-block w-100" />
        <ReactBootstrap.Carousel.Caption>

        </ReactBootstrap.Carousel.Caption>
      </ReactBootstrap.Carousel.Item>
    </ReactBootstrap.Carousel>
  );
}

export default Banner;
