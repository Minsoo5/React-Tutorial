import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Animal } from "./APIResponsesTypes.js";
import fetchBreedList from "./fetchBreedList.js";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status] as [
    // This is a tuple, it will always return this shape.
    string[],
    QueryStatus
  ];
  // If I don't have a result, give me an empty array
}
