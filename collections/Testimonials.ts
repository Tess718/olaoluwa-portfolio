import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      admin: {
        description: 'E.g. "Finn & Emma"',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The testimonial text',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 999,
      admin: {
        description: 'Lower numbers appear first. Leave blank to default to the end.',
      },
    },
  ],
}
