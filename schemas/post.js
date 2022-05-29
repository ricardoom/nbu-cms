// ./studio/schemas/post.js

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title', 
      type: 'string'
    },
    // Important! Document needs a slug for Next.js to query for.
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: 
       {
          source: 'title'
      }
    },
    {
      name: 'content',
      title: 'Content', 
      type: 'array',
      of: [
        {
          type : 'block'
        }
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
  ],
}