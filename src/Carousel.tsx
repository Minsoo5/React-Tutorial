import { Component, MouseEvent } from "react";

interface IProps {
  images: string[];
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  // Class components and hooks DO NOT mix

  // Whenever you invoke an arrow function, it does not create a new scope
  // But a regular function will create a new scope at the point of invokation
  // Everything that comes out of a DOM is a string type. All the time.
  // DOM e = string type. +e = number +"5" turns into 5

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
  };

  render() {
    // throw new Error("lol error");
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
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
