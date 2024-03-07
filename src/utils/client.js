import { createClient } from "@sanity/client";

export default createClient({
  projectId: '8w379h0l',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-06'
})
