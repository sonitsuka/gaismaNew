import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pressArticle',
  title: 'Press Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Article title',
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
      description: 'Name of the publication or media outlet',
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      description: 'When the article was published',
    }),
    defineField({
      name: 'dateText',
      title: 'Date Display Text (Optional)',
      type: 'string',
      description: 'Custom date text to display (e.g., "September 28, 2023" or "May, 2019"). If not specified, the date field will be formatted automatically.',
    }),
    defineField({
      name: 'url',
      title: 'Article URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Link to the full article',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short excerpt or summary of the article',
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'German (DE)', value: 'de' },
          { title: 'Other', value: 'other' },
        ],
      },
      description: 'Article language',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional cover image for the article',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Check to feature this article prominently',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this article appears (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publication',
      date: 'date',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, subtitle, date } = selection
      return {
        title: title,
        subtitle: `${subtitle || ''} - ${date ? new Date(date).toLocaleDateString() : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Publication Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
