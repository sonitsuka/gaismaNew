import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'musicItem',
  title: 'Music Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Album/EP cover artwork',
    }),
    defineField({
      name: 'imageUrl',
      title: 'External Image URL (Optional)',
      type: 'url',
      description: 'Use this if the image is hosted externally (e.g., SoundCloud). Leave empty if using uploaded image above.',
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Link to streaming platform (Spotify, SoundCloud, LANDR, etc.)',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Descriptive text for accessibility',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      description: 'When the music was released',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this item appears (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'alt',
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
  ],
})
