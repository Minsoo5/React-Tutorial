import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
  },
  () => {},
]); // Could put in default value in createContext()

console.log(`From inside AdoptedPetContext: ${AdoptedPetContext}`);

export default AdoptedPetContext;
