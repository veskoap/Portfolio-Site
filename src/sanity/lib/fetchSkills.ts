import { Skill } from "../../page/types";

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  //console.log("fetching", skills)

  return skills;
};