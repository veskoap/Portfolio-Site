import { PageInfo } from "../../page/types";

export const fetchPageInfo = async () => {
  const res = await fetch('https://.../api/getPageInfo');

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  console.log("fetching", pageInfo)

  return pageInfo;
};
