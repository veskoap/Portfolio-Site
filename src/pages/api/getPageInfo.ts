import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { PageInfo } from "../../page/types";

const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}