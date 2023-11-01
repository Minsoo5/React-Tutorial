import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

// Creating a pet object with the fields
const Pet = (props: IProps) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  // console.log("Triggered outside conditional");
  // Grabbing the related image or displaying a default
  if (props.images.length) {
    // console.log("Triggered in conditional");
    hero = props.images[0];
  }
  // Returning element with its image, name, and animal - breed - location
  return (
    <Link to={`/details/${props.id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt="" />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2>
          {props.animal} — {props.breed} — {props.location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
