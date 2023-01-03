import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'url',
        title: 'URL',
        type: 'string',
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
  ],
})
