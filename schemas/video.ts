import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Video title',
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Full YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
    }),
    defineField({
      name: 'videoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'YouTube video ID (automatically extracted from URL). E.g., "_nLaTRlHUqw" from https://www.youtube.com/watch?v=_nLaTRlHUqw',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional custom thumbnail. If not provided, YouTube thumbnail will be used.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Music Video GAISMA', value: 'music-video-gaisma' },
          { title: 'Music Video Sceti', value: 'music-video-sceti' },
          { title: 'DJ & Live', value: 'dj-live' },
          { title: 'Radio Live', value: 'radio-live' },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: 'Video category/section',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description or additional details about the video',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'text',
      rows: 3,
      description: 'Video credits (director, producer, etc.)',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      description: 'When the video was released',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this video appears within its category (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this video from the website',
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
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [{ field: 'releaseDate', direction: 'desc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})
