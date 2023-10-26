import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
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
        <h1>{pet.animal}</h1>
        <h2>
          {pet.animal} — {pet.breed} — {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
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
