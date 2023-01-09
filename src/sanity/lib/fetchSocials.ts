import { Social } from "../../page/types";

export const fetchSocials = async () => {
  const res = await fetch(`https://.../api/getSocials`); 

  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log("fetching", socials)

  return socials;
};