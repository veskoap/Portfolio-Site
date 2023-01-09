import { PageInfo } from "../../page/types";

export const fetchPageInfo = async () => {
  const res = await fetch('http://localhost:3000/api/sanity/getPageInfo');

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  //console.log("fetching", skills)

  return pageInfo;
};
