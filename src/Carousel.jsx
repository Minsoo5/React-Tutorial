import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // Class components and hooks DO NOT mix

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

/*
Two musts about class components: 
    1. Must extend Components from react.
    2. Every class component has a render function.
*/
