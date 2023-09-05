import {defineType, defineArrayMember} from 'sanity'


 
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          
        ],
      },
    }),
    {
      title: 'Facebook Share Link',
      name: 'facebookShareLink',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Twitter Share Link',
      name: 'twitterShareLink',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'LinkedIn Share Link',
      name: 'linkedinShareLink',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'WhatsApp Share Link',
      name: 'whatsappShareLink',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      name: 'audio',
      title: 'Inline Audio',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'Audio URL',
          type: 'url',
        },
        {
          name: 'autoplay',
          title: 'Autoplay',
          type: 'boolean',
        },
        {
          name: 'controls',
          title: 'Show Controls',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'YouTube URL',
          type: 'url',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'text',
        },
      ],
    },
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
