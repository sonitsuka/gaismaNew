export default {
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string',
        initialValue: 'About Me',
        description: 'Main title for the about page (e.g., "About Me")'
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
        description: 'Main profile image for about page'
      },
      {
        name: 'cvLink',
        title: 'CV Link',
        type: 'url',
        description: 'Link to downloadable CV/Resume (Google Drive, etc.)',
        initialValue: 'https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view'
      },
      {
        name: 'cvButtonText',
        title: 'CV Button Text',
        type: 'string',
        initialValue: 'View My CV'
      },
      {
        name: 'biographyParagraph1',
        title: 'Biography - Paragraph 1',
        type: 'text',
        validation: Rule => Rule.required(),
        description: 'First paragraph about childhood, ballet training, and early career',
        initialValue: 'Born in Latvia, Alisa has been involved with music and dance since her childhood. From her first visit to the theater, she fell in love with the atmosphere and decided to pursue her dream of becoming a professional ballet dancer. At the age of fifteen, she left her family and moved to Germany to study at the Munich Ballet Academy. She has since signed contracts with the Bavarian and Stuttgart Ballet and has been on international tours with both companies.'
      },
      {
        name: 'biographyParagraph2',
        title: 'Biography - Paragraph 2',
        type: 'text',
        validation: Rule => Rule.required(),
        description: 'Second paragraph about transition from ballet to music',
        initialValue: 'After six years of dancing professionally, she made the difficult decision to drastically change her life by leaving the classical ballet world in pursuit of other artistic passions. She traveled the globe, exploring and learning new ways and techniques to heal the body, mind, and soul, and dove into the world of analog music production.'
      },
      {
        name: 'biographyParagraph3',
        title: 'Biography - Paragraph 3',
        type: 'text',
        validation: Rule => Rule.required(),
        description: 'Third paragraph about visual arts and interdisciplinary work',
        initialValue: 'Besides her music work, she is also frequently engaged with projects in the visual arts. These include analog and digital photography, behind and in front of the camera; as well as collages and video works, which she often puts within the context of music. Symbioses of auditory and visual material emerge, in which she presents herself in an increasingly contemporary form of movement. She acts as a composer, cinematographer, and performer in her works, which fluctuate between choreography and improvisation.'
      },
      {
        name: 'featuredQuote',
        title: 'Featured Quote',
        type: 'text',
        validation: Rule => Rule.required(),
        description: 'Quote displayed in blockquote format',
        initialValue: 'In times of unpredictability and chaos one thing that we can always be certain of is that the power and growth behind our personality lies in our own hands.'
      },
      // SEO
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
      select: {
        title: 'pageTitle',
        media: 'profileImage'
      },
      prepare(selection) {
        const { title } = selection
        return {
          title: title || 'About Page'
        }
      }
    }
  }