import { defineField, defineType, } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.required().min(1).max(50).error('Category is required'),
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'pitch',
            type: 'text',
        }),
    ],
})