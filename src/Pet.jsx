import { Link } from "react-router-dom";

// Creating a pet object with the fields
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  // console.log("Triggered outside conditional");
  // Grabbing the related image or displaying a default
  if (images.length) {
    // console.log("Triggered in conditional");
    hero = images[0];
  }
  // Returning element with its image, name, and animal - breed - location
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt="" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} — {breed} — {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
