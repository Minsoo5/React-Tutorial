import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList.js";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
  // If I don't have a result, give me an empty array
}
