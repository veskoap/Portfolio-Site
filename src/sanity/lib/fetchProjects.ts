import { Project } from "../../page/types";

export const fetchProjects = async () => {
  const res = await fetch(`https://.../api/getProject`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  console.log("fetching", projects)

  return projects;
};