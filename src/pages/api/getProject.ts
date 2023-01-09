import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Project } from "../../page/types";

const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}