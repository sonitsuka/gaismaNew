import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About GAISMA',
      description: 'Main page title',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Artist biography (rich text)',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main profile photo',
    }),
    defineField({
      name: 'cvLink',
      title: 'CV/Resume Link',
      type: 'url',
      description: 'Link to downloadable CV/resume',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      description: 'Contact email address',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
        { name: 'soundcloud', title: 'SoundCloud', type: 'url' },
        { name: 'spotify', title: 'Spotify', type: 'url' },
        { name: 'bandcamp', title: 'Bandcamp', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ],
    }),
    defineField({
      name: 'skills',
      title: 'Skills/Disciplines',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of skills, disciplines, or areas of expertise',
    }),
    defineField({
      name: 'achievements',
      title: 'Notable Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'year', type: 'string', title: 'Year' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'profileImage',
    },
  },
})
