import { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sourceType',
      type: 'radio',
      options: [
        { label: 'Custom Image', value: 'custom' },
        { label: 'From Selected Works', value: 'reference' },
      ],
      defaultValue: 'custom',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'reference',
      type: 'relationship',
      relationTo: 'selected-works',
      admin: {
        condition: (data) => data.sourceType === 'reference',
      },
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        condition: (data) => data.sourceType === 'custom',
      },
    },
    {
      name: 'date',
      type: 'text',
      admin: {
        condition: (data) => data.sourceType === 'custom',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.sourceType === 'custom',
      },
    },
    {
      name: 'link',
      type: 'text',
      defaultValue: '#',
      admin: {
        condition: (data) => data.sourceType === 'custom',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 999,
      admin: {
        description: 'Lower numbers will appear first. Leave blank to default to the end.',
      },
    },
  ],
}
