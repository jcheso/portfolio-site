export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',

  fields: [
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'startDate',
      type: 'string',
      title: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'string',
      title: 'End Date',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
  ],
}
