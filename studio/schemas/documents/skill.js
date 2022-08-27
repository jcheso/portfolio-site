export default {
  name: 'skill',
  type: 'document',
  title: 'Skills',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
    {
      name: 'skillType',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          { title: 'Languages', value: 'languages' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Tools and Services', value: 'tools' },
        ],
        layout: 'radio',
      },
    },
  ],
}
