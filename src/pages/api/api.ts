import axios from "axios";

const API_KEY = "6118188548203705";

export async function searchSuperheroes(query: any) {
  console.log(query);

  const response = await axios.get(
    `https://www.superheroapi.com/api.php/${API_KEY}/search/${query}`
  );

  if (response?.data) {
    return response?.data?.results;
  }

  return null;
}

export async function getSuperheroById(id: any) {
  const response = await axios.get(
    `https://www.superheroapi.com/api.php/${API_KEY}/${id}`
  );

  if (response?.data) {
    return response?.data;
  }

  return null;
}
