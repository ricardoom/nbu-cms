export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
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