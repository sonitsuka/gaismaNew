import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'performance',
  title: 'Performance',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Performance title',
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Full video URL (YouTube, Vimeo, etc.)',
    }),
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      description: 'Video ID (e.g., YouTube video ID or Vimeo ID)',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Video thumbnail image',
    }),
    defineField({
      name: 'thumbnailUrl',
      title: 'External Thumbnail URL',
      type: 'url',
      description: 'External thumbnail URL (e.g., YouTube thumbnail). Use this if thumbnail is hosted externally.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Performance', value: 'performance' },
          { title: 'Art & Film', value: 'art-film' },
          { title: 'Played a Role', value: 'played-role' },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: 'Performance category',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'text',
      rows: 6,
      description: 'Performance credits (choreographer, director, performers, etc.)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description or additional details',
    }),
    defineField({
      name: 'date',
      title: 'Performance Date',
      type: 'date',
      description: 'When the performance took place or video was released',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this performance appears within its category (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this performance from the website',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Performance Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})
