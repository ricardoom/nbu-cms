export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Homepage title',
      type: 'string',
      description: "What's the title website?",
    },
    {
      name: 'subtitle',
      title: 'Homepage subtitle',
      type: 'string',
      description: "What's the subtitle of the homepage hero?",
    },
    {
      name: 'body',
      title: 'Homepage Body',
      type: 'array',
      of: [
        {
          type : 'block'
        }
      ]
    }
  ],
};