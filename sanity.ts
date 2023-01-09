import { createClient } from 'next-sanity';



export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
}


// Set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

  