import * as prismic from '@prismicio/client'
import env from 'react-dotenv'

export const repositoryName = 'other-archive'

export const client = prismic.createClient(repositoryName, {
  version: '',
  accessToken: env.CMS_ACCESS_TOKEN,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    // {
    //   type: 'homepage',
    //   path: '/'
    // }
  ]
})
