export default {
    name: 'performance',
    title: 'Performance',
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
            { title: 'Performance', value: 'performance' },
            { title: 'Art & Film', value: 'art-film' },
            { title: 'Played a Role', value: 'played-role' },
          ],
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
        validation: Rule => Rule.required(),
        description: 'YouTube, Vimeo, or other video platform URL'
      },
      {
        name: 'videoId',
        title: 'Video ID',
        type: 'string',
        description: 'YouTube/Vimeo video ID for embedding and thumbnails'
      },
      {
        name: 'thumbnail',
        title: 'Custom Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Upload custom thumbnail or leave empty to auto-generate'
      },
      {
        name: 'externalThumbnailUrl',
        title: 'External Thumbnail URL',
        type: 'url',
        description: 'Auto-generated thumbnail URL from video platform'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'credits',
        title: 'Credits',
        type: 'text',
        validation: Rule => Rule.required(),
        description: 'Detailed credits including directors, performers, collaborators, venues, etc.'
      },
      {
        name: 'venue',
        title: 'Venue/Location',
        type: 'string',
        description: 'Performance venue or filming location'
      },
      {
        name: 'performanceDate',
        title: 'Performance Date',
        type: 'date',
        description: 'Date of performance or filming'
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        description: 'Your role in this performance (e.g., Choreographer, Performer, Dancer, etc.)'
      },
      {
        name: 'collaborators',
        title: 'Key Collaborators',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string'
              },
              {
                name: 'role',
                title: 'Role',
                type: 'string'
              }
            ]
          }
        ]
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
        venue: 'venue',
        media: 'thumbnail'
      },
      prepare(selection) {
        const { title, category, venue } = selection
        return {
          title: title,
          subtitle: `${category}${venue ? ` • ${venue}` : ''}`
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
      {
        title: 'Performance Date (newest first)',
        name: 'dateDesc',
        by: [
          { field: 'performanceDate', direction: 'desc' }
        ],
      },
    ],
  }