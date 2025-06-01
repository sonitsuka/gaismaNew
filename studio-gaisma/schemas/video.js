export default {
    name: 'videos',
    title: 'Video',
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
            { title: 'Music Video Gaisma', value: 'music-video-gaisma' },
            { title: 'Music Video Sceti', value: 'music-video-sceti' },
            { title: 'DJ & Live', value: 'dj-live' },
            { title: 'Radio Live', value: 'radio-live' },
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
        description: 'YouTube video ID (e.g., "4rBHuXb8-WA" from https://www.youtube.com/watch?v=4rBHuXb8-WA)'
      },
      {
        name: 'thumbnail',
        title: 'Custom Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Upload custom thumbnail or leave empty to auto-generate from video'
      },
      {
        name: 'externalThumbnailUrl',
        title: 'External Thumbnail URL',
        type: 'url',
        description: 'Auto-generated YouTube thumbnail URL (e.g., https://img.youtube.com/vi/VIDEO_ID/0.jpg)'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'releaseYear',
        title: 'Release Year',
        type: 'number',
      },
      {
        name: 'credits',
        title: 'Credits',
        type: 'text',
        description: 'Production credits, collaborators, etc.'
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
        media: 'thumbnail'
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