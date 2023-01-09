import { Experience } from "../../page/types";

export const fetchExperiences = async () => {
  const res = await fetch('http://localhost:3000/api/getExperience');

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  //console.log("fetching", skills)

  return experiences;
};
