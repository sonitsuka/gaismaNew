export default {
    name: 'press',
    title: 'Press & Interviews',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Article Title',
        type: 'string',
        validation: Rule => Rule.required(),
        description: 'Full title of the press article or interview'
      },
      {
        name: 'date',
        title: 'Publication Date',
        type: 'string',
        validation: Rule => Rule.required(),
        description: 'Date as displayed (e.g., "November 11, 2024" or "May, 2019")',
        initialValue: 'November 11, 2024'
      },
      {
        name: 'url',
        title: 'Article URL',
        type: 'url',
        validation: Rule => Rule.required(),
        description: 'Direct link to the article'
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Lower numbers appear first (leave empty to sort by entry order)'
      },
      {
        name: 'isActive',
        title: 'Active',
        type: 'boolean',
        initialValue: true,
        description: 'Toggle to show/hide this article'
      }
    ],
    preview: {
      select: {
        title: 'title',
        date: 'date'
      },
      prepare(selection) {
        const { title, date } = selection
        return {
          title: title,
          subtitle: date || 'No date'
        }
      }
    },
    orderings: [
      {
        title: 'Custom Order',
        name: 'customOrder',
        by: [
          { field: 'order', direction: 'asc' }
        ],
      },
    ],
  }