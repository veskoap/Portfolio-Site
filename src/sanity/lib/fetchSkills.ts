import { Skill } from "../../page/types";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity"

const query = groq`
    *[_type == "skill"]
`;


export const fetchSkills = async () => {
  const res = await sanityClient.fetch(query)

  const skills: Skill[] = res;

  //console.log("fetching", skills)

  return skills;
};