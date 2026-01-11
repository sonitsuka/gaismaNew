import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'show',
  title: 'Show/Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Event/show title',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      description: 'Event date',
    }),
    defineField({
      name: 'dateRange',
      title: 'Date Range (Optional)',
      type: 'string',
      description: 'For multi-day events (e.g., "18. - 19. 12.2025"). If specified, this will be shown instead of the single date.',
    }),
    defineField({
      name: 'venue',
      title: 'Venue/Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Where the event takes place',
    }),
    defineField({
      name: 'tag',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Theatre', value: 'theatre' },
          { title: 'DJ', value: 'dj' },
          { title: 'Performance', value: 'performance' },
          { title: 'Live', value: 'live' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: 'Event type/category',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional event description or additional details',
    }),
    defineField({
      name: 'ticketLink',
      title: 'Ticket Link',
      type: 'url',
      description: 'Link to buy tickets',
    }),
    defineField({
      name: 'isSoldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
      description: 'Check if the event is sold out',
    }),
    defineField({
      name: 'isUpcoming',
      title: 'Upcoming Event',
      type: 'boolean',
      initialValue: true,
      description: 'Check if this is an upcoming event (shown on homepage). Uncheck for past events.',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Check to feature this event prominently',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'venue',
      date: 'date',
      tag: 'tag',
    },
    prepare(selection) {
      const { title, subtitle, date, tag } = selection
      return {
        title: title,
        subtitle: `${date ? new Date(date).toLocaleDateString() : ''} - ${subtitle} [${tag}]`,
      }
    },
  },
  orderings: [
    {
      title: 'Date, Upcoming First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date, Past First',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
