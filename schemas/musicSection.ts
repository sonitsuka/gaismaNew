import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'musicSection',
  title: 'Music Section',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'E.g., "Album & EP", "DJ Sets", "Radio Shows"',
    }),
    defineField({
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      description: 'Artist/project name (e.g., "GAISMA", "Sceti"). Leave empty if not needed.',
    }),
    defineField({
      name: 'items',
      title: 'Music Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'musicItem' }] }],
      description: 'Add music items to this section',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this section appears (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this section from the website',
    }),
  ],
  preview: {
    select: {
      title: 'category',
      subtitle: 'name',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
