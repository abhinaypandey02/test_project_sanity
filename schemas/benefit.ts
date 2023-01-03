import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
  ],
})
