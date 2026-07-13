import { CollectionConfig } from 'payload'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Mini Portrait"',
      },
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "₦20,000"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description of the package.',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check this to highlight this plan (e.g. Signature Portrait).',
      },
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'List of features included in this package.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 999,
      admin: {
        description: 'Lower numbers appear first.',
      },
    },
  ],
}
