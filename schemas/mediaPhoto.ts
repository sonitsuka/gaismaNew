import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'mediaPhoto',
  title: 'Media Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Photo title or caption',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Photo image',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Descriptive text for accessibility',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 2,
      description: 'Optional caption or description',
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
      description: 'Photographer name or photo credit',
    }),
    defineField({
      name: 'date',
      title: 'Date Taken',
      type: 'date',
      description: 'When the photo was taken',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Live Performance', value: 'live' },
          { title: 'Studio', value: 'studio' },
          { title: 'Press', value: 'press' },
          { title: 'Portrait', value: 'portrait' },
          { title: 'Behind the Scenes', value: 'bts' },
          { title: 'Other', value: 'other' },
        ],
      },
      description: 'Photo category',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this photo appears (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this photo from the gallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'photographer',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
