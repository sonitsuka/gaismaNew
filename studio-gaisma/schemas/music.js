export default {
    name: 'music',
    title: 'Music Release',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Gaisma Album & EP', value: 'gaisma-album' },
            { title: 'Sceti EP', value: 'sceti-ep' },
            { title: 'DJ Sets', value: 'dj-sets' },
            { title: 'Radio Show', value: 'radio-show' },
          ],
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'externalImageUrl',
        title: 'External Image URL',
        type: 'url',
        description: 'Use this for SoundCloud artwork URLs (optional if coverImage is used)'
      },
      {
        name: 'streamingLink',
        title: 'Streaming Link',
        type: 'url',
        validation: Rule => Rule.required(),
        description: 'Spotify, SoundCloud, or other streaming platform link'
      },
      {
        name: 'releaseYear',
        title: 'Release Year',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Lower numbers appear first within each category'
      },
    ],
    preview: {
      select: {
        title: 'title',
        category: 'category',
        media: 'coverImage'
      },
      prepare(selection) {
        const { title, category } = selection
        return {
          title: title,
          subtitle: category
        }
      }
    },
    orderings: [
      {
        title: 'Category, then Order',
        name: 'categoryOrder',
        by: [
          { field: 'category', direction: 'asc' },
          { field: 'order', direction: 'asc' }
        ],
      },
    ],
  }