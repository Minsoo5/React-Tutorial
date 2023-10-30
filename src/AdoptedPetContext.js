import { createContext } from "react";

const AdoptedPetContext = createContext(); // Could put in default value in createContext()

console.log(`From inside AdoptedPetContext: ${AdoptedPetContext}`);

export default AdoptedPetContext;
