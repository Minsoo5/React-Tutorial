import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "./APIResponsesTypes";

const fetchPet: QueryFunction<PetAPIResponse, ["details", string]> = async ({
  queryKey,
}) => {
  // Takes the queryKey, which is an array, and takes the second element for the id
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // If the fetch status is anything BUT 200, throw an error

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not okay`);
  }

  // React queries need an error catch and a promise, .json is a promise
  return apiRes.json();
};

export default fetchPet;
