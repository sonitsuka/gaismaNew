export default {
    name: 'curation',
    title: 'Curation Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
        validation: Rule => Rule.required(),
        description: 'Name of the curation project'
      },
      {
        name: 'type',
        title: 'Project Type',
        type: 'string',
        options: {
          list: [
            { title: 'Exhibition', value: 'exhibition' },
            { title: 'Festival', value: 'festival' },
            { title: 'Radio Show', value: 'radio' },
            { title: 'Workshop', value: 'workshop' },
            { title: 'Performance', value: 'performance' },
            { title: 'Other', value: 'other' }
          ],
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle/Tagline',
        type: 'string',
        description: 'Additional descriptive text'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
        validation: Rule => Rule.required(),
        description: 'Main description of the project'
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        description: 'Brief summary for previews'
      },
      
      // Images
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Primary image for the project'
      },
      {
        name: 'poster',
        title: 'Poster/Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Official poster or logo'
      },
      {
        name: 'gallery',
        title: 'Image Gallery',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                }
              },
              {
                name: 'caption',
                title: 'Caption',
                type: 'string'
              },
              {
                name: 'photographer',
                title: 'Photographer/Creator',
                type: 'string'
              }
            ]
          }
        ]
      },
  
      // Participants/Artists
      {
        name: 'participants',
        title: 'Artists & Participants',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'role',
                title: 'Role/Medium',
                type: 'string',
                description: 'e.g., Painting, Performance, Music, etc.'
              },
              {
                name: 'website',
                title: 'Website/Portfolio',
                type: 'url'
              }
            ]
          }
        ]
      },
  
      // Bands (for festivals/music events)
      {
        name: 'bands',
        title: 'Bands/Musicians',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Band Name',
                type: 'string'
              },
              {
                name: 'genre',
                title: 'Genre',
                type: 'string'
              },
              {
                name: 'website',
                title: 'Website',
                type: 'url'
              }
            ]
          }
        ]
      },
  
      // Links & External Resources
      {
        name: 'websiteUrl',
        title: 'Official Website',
        type: 'url',
        description: 'Link to official project website'
      },
      {
        name: 'youtubeUrl',
        title: 'YouTube Link',
        type: 'url',
        description: 'YouTube video or playlist link'
      },
      {
        name: 'externalLinks',
        title: 'Additional Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Link Title',
                type: 'string'
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string'
              }
            ]
          }
        ]
      },
  
      // Event Details
      {
        name: 'eventDetails',
        title: 'Event Details',
        type: 'object',
        fields: [
          {
            name: 'venue',
            title: 'Venue/Location',
            type: 'string'
          },
          {
            name: 'city',
            title: 'City',
            type: 'string'
          },
          {
            name: 'startDate',
            title: 'Start Date',
            type: 'date'
          },
          {
            name: 'endDate',
            title: 'End Date',
            type: 'date'
          },
          {
            name: 'isOngoing',
            title: 'Ongoing Project',
            type: 'boolean',
            initialValue: false
          }
        ]
      },
  
      // Funding & Credits
      {
        name: 'funding',
        title: 'Funding Information',
        type: 'text',
        description: 'Information about project funding (e.g., "Project funded by the city of Stuttgart")'
      },
      {
        name: 'credits',
        title: 'Additional Credits',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'role',
                title: 'Role',
                type: 'string'
              },
              {
                name: 'name',
                title: 'Name',
                type: 'string'
              }
            ]
          }
        ]
      },
  
      // Display Settings
      {
        name: 'featured',
        title: 'Featured Project',
        type: 'boolean',
        initialValue: false,
        description: 'Mark as featured to highlight this project'
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Lower numbers appear first'
      },
      {
        name: 'isActive',
        title: 'Active',
        type: 'boolean',
        initialValue: true,
        description: 'Toggle to show/hide this project'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        type: 'type',
        media: 'mainImage'
      },
      prepare(selection) {
        const { title, type } = selection
        return {
          title: title,
          subtitle: type ? type.charAt(0).toUpperCase() + type.slice(1) : 'Curation Project'
        }
      }
    },
  
    orderings: [
      {
        title: 'Type, then Order',
        name: 'typeOrder',
        by: [
          { field: 'type', direction: 'asc' },
          { field: 'order', direction: 'asc' }
        ],
      },
      {
        title: 'Featured first',
        name: 'featuredFirst',
        by: [
          { field: 'featured', direction: 'desc' },
          { field: 'order', direction: 'asc' }
        ],
      },
      {
        title: 'Date (newest first)',
        name: 'dateDesc',
        by: [
          { field: 'eventDetails.startDate', direction: 'desc' }
        ],
      },
    ],
  }