
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Gaisma Studio',

  projectId: 'tnfrscqe',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton documents (only one instance)
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            S.listItem()
              .title('About Page')
              .id('about')
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
              ),
            S.divider(),
            
            // Collection documents (multiple instances)
            S.listItem()
              .title('Music Releases')
              .child(
                S.documentTypeList('music')
                  .title('Music Releases')
                  .defaultOrdering([
                    {field: 'category', direction: 'asc'},
                    {field: 'order', direction: 'asc'}
                  ])
              ),
            S.listItem()
              .title('Videos')
              .child(
                S.documentTypeList('videos')
                  .title('Videos')
                  .defaultOrdering([
                    {field: 'category', direction: 'asc'},
                    {field: 'order', direction: 'asc'}
                  ])
              ),
            S.listItem()
              .title('Performances')
              .child(
                S.documentTypeList('performance')
                  .title('Performances')
                  .defaultOrdering([
                    {field: 'category', direction: 'asc'},
                    {field: 'order', direction: 'asc'}
                  ])
              ),
            S.listItem()
              .title('Press & Interviews')
              .child(
                S.documentTypeList('press')
                  .title('Press & Interviews')
                  .defaultOrdering([
                    {field: 'order', direction: 'asc'}
                  ])
              ),
            S.listItem()
              .title('Curation Projects')
              .child(
                S.documentTypeList('curation')
                  .title('Curation Projects')
                  .defaultOrdering([
                    {field: 'type', direction: 'asc'},
                    {field: 'order', direction: 'asc'}
                  ])
              ),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})