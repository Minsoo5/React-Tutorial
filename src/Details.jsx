import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const value = useContext(AdoptedPetContext);
  console.log(value);

  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams(); //Pulling from a side data of context. Pulls data that is known to BrowserRouter
  const results = useQuery(["details", id], fetchPet); // "details" type of request and passing in the id for the query key

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">§</h2>
      </div>
    );
    // Loads a spinning image while results are loading
  }
  // At this point results as loaded
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  // using the spread operator ({...props}) here is okay since we dont care what the properties are, just go through the error boundary.
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;

// const Details = () => {
//     const { id } = useParams();
//     const { name } = useParams();
//     return (
//       <div>
//         <h2>{id}</h2>
//         <h3>{name}</h3>
//       </div>
//     );
//   };

//   export default Details;
