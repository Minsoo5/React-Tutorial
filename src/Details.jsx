import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { name } = useParams();
  return (
    <div>
      <h2>{id}</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default Details;
