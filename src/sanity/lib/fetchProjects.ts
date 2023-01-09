import { Project } from "../../page/types";

export const fetchProjects = async () => {
  const res = await fetch('http://localhost:3000/api/getProject');

  const data = await res.json();
  const projects: Project[] = data.projects;

  //console.log("fetching", skills)

  return projects;
};