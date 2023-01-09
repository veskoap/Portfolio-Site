import { Project } from "../../page/types";

export const fetchProjects = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/getProject`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  //console.log("fetching", skills)

  return projects;
};