// ./studio/schemas/post.js

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'title', 
      type: 'string'
    },
    // Important! Document needs a slug for Next.js to query for.
    {
      name: 'slug',
      type: 'slug',
      options: 
       {
          source: 'title'
      }
    },
    {
      name: 'content', 
      type: 'array',
      of: [
        {
          type : 'block'
        }
      ],
    },
  ],
}