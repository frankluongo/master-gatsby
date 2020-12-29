import { MdStore as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'storeSettings',
  // Visible Title
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
    },
    {
      name: 'slicemasters',
      title: 'Slicemasters currently slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Pizzas currently by the slice',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
