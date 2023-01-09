import { Project } from "../../page/types";

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProject`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  //console.log("fetching", skills)

  return projects;
};