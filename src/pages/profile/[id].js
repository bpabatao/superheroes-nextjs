import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSuperheroById } from "../api/api";
import { HeaderLinks } from "../HeaderLinks";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    if (id) {
      getSuperheroById(id).then((superhero) => {
        setSuperhero(superhero);
      });
    }
  }, [id, router.query]);


  if (!superhero) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderLinks />
      <h1>{superhero.name}</h1>
      <p>Full Name: {superhero.biography["full-name"]}</p>
      <p>Alter Egos: {superhero.biography["alter-egos"]}</p>
      <p>Aliases: {superhero.biography.aliases.join(", ")}</p>
      <p>Place of Birth: {superhero.biography["place-of-birth"]}</p>
      <p>Occupation: {superhero.work.occupation}</p>
      <p>First Appearance: {superhero.biography["first-appearance"]}</p>
      <p>Publisher: {superhero.biography.publisher}</p>
      <p>Alignment: {superhero.biography.alignment}</p>
      <img src={superhero.image.url} alt={superhero.name} />
    </div>
  );
}
