import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'category',
        title: 'Category',
        type: 'reference', to: {type: 'category'},
      }),
  ],
})
