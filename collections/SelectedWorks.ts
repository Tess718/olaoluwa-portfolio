import { CollectionConfig } from 'payload'

export const SelectedWorks: CollectionConfig = {
  slug: 'selected-works',
  admin: {
    useAsTitle: 'title',
    description: 'Curated case studies displayed on the homepage.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'A short tagline for the project',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: '1-2 sentences describing the project',
      },
    },
    {
      name: 'date',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      defaultValue: '#',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 999,
      admin: {
        description: 'Lower numbers appear first on the homepage. Leave blank to default to the end.',
      },
    },
  ],
}
