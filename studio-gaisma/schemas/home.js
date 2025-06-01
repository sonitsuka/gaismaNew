export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      // Hero Section
      {
        name: 'heroVideo',
        title: 'Hero Video',
        type: 'file',
        options: {
          accept: 'video/*'
        },
        description: 'Main background video for hero section'
      },
      {
        name: 'heroVideoUrl',
        title: 'Hero Video URL',
        type: 'url',
        description: 'External video URL if not uploading file'
      },
      {
        name: 'heroQuote',
        title: 'Hero Quote',
        type: 'text',
        description: 'Quote displayed on hero section'
      },
      {
        name: 'heroButtonText',
        title: 'Hero Button Text',
        type: 'string',
        initialValue: 'Explore'
      },
      
      // Featured Content
      {
        name: 'featuredReleases',
        title: 'Featured Releases',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'music' }]
          }
        ],
        description: 'Select music releases to feature on homepage',
        validation: Rule => Rule.max(6)
      },
      
      {
        name: 'featuredVideos',
        title: 'Featured Videos', 
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'videos' }]
          }
        ],
        description: 'Select videos to feature on homepage',
        validation: Rule => Rule.max(3)
      },
  
      // Upcoming Shows
      {
        name: 'upcomingShows',
        title: 'Upcoming Shows',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Show Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'venue',
                title: 'Venue',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'city',
                title: 'City',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'date',
                title: 'Date',
                type: 'datetime',
                validation: Rule => Rule.required()
              },
              {
                name: 'ticketUrl',
                title: 'Ticket URL',
                type: 'url'
              },
              {
                name: 'isActive',
                title: 'Show Active',
                type: 'boolean',
                initialValue: true,
                description: 'Toggle to show/hide this show'
              }
            ],
            preview: {
              select: {
                title: 'title',
                venue: 'venue',
                date: 'date'
              },
              prepare(selection) {
                const { title, venue, date } = selection
                return {
                  title: title,
                  subtitle: `${venue} • ${new Date(date).toLocaleDateString()}`
                }
              }
            }
          }
        ]
      },
  
      // About Preview Section
      {
        name: 'aboutReference',
        title: 'About Page Reference',
        type: 'reference',
        to: [{ type: 'about' }],
        description: 'Reference to About page data for homepage preview',
        validation: Rule => Rule.required()
      },
      
      {
        name: 'aboutPreviewSettings',
        title: 'About Preview Settings',
        type: 'object',
        description: 'Customize how about content appears on homepage',
        fields: [
          {
            name: 'showParagraph1',
            title: 'Show Paragraph 1',
            type: 'boolean',
            initialValue: true
          },
          {
            name: 'showParagraph2',
            title: 'Show Paragraph 2',
            type: 'boolean',
            initialValue: true
          },
          {
            name: 'showParagraph3',
            title: 'Show Paragraph 3',
            type: 'boolean',
            initialValue: false,
            description: 'Third paragraph might be too long for homepage preview'
          },
          {
            name: 'showQuote',
            title: 'Show Featured Quote',
            type: 'boolean',
            initialValue: true
          },
          {
            name: 'customSectionTitle',
            title: 'Custom Section Title',
            type: 'string',
            description: 'Override default "About Gaisma" title if needed'
          }
        ]
      },
  
      // SEO & Meta
      {
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string',
        description: 'Title for search engines'
      },
      {
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        description: 'Description for search engines'
      }
    ],
    
    preview: {
      prepare() {
        return {
          title: 'Homepage'
        }
      }
    }
  }