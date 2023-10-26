async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const results = await fetch(
    `http://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`
  );

  if (!results.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  return results.json();
}

export default fetchSearch;
