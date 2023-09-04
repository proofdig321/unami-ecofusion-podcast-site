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
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
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
    // You can add additional types here. Note that you can't use
              // Add custom share links for each social platform
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
    
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // Add the audio field with the desired features
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
        // Add more fields as needed for additional features and options
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
        // Add more fields as needed for additional features
        // Examples: autoplay, mute, controls, start time, etc.
      ],
    },

    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
