import { Project } from "../../page/types";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity"

const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async () => {
  const res = await sanityClient.fetch(query)

  const projects: Project[] = res;

  //console.log("fetching", projects)

  return projects;
};