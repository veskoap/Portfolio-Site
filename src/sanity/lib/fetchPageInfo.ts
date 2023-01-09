import { PageInfo } from "../../page/types";

export const fetchPageInfo = async () => {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  //console.log("fetching", skills)

  return pageInfo;
};
