import { MdPlayArrow } from 'react-icons/md'
import { defineType } from 'sanity'

export default defineType ({
  name: 'episode',
  title: 'Episode',
  type: 'document',
  icon: MdPlayArrow,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Remember that long titles can be truncated in podcast apps',
      type: 'string'
    },
    {
      name: 'schedule',
      type: 'datetime',
      title: 'Publish schedule',
    },
    {
      name: 'fileUrl',
      title: 'File URL',
      description: 'For when you host your podcast media file elsewhere',
      type: 'url'
    },
    {
      name: 'duration',
      title: 'Duration',
      description: 'HH:MM:SS',
      type: 'string'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',

    },
    {
      name: 'explicit',
      title: 'Explicit content',
      type: 'boolean'
    },
    {
      name: 'summary',
      title: 'Summary',
      description: 'An episode summary is a string containing one or more descriptive sentences summarizing your episode for potential listeners. You can specify up to 4000 characters.',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      description: `An episode description is a string containing one or more sentences describing your episode to potential listeners. You can specify up to 4000 characters.`,
      type: 'text',
    },
    { 
      name: 'blogContent',
      title: 'Blog Content',
      type: 'blockContent'
    },
    {
      name: 'slug',
      title: 'Episode slug',
      type: 'slug',
      description: 'When you need to refer to your podcast episode in a url',
      options: {
        source: 'title',
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'sponsor' } }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      options: {
        layout: 'tags'
      },
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'relatedEpisodes',
      title: 'Related Episodes',
      type: 'array',
      description: 'Select 3 Episodes',
      of: [{ type: 'reference', to: { type: 'episode' } }],
      validation: (Rule) =>
        Rule.max(3)
          .unique()
    },
    

  {
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      options: {
        hotspot: true // Enable hotspot for image cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          title: 'Alt Text',
          description: 'Alternative text for accessibility',
          options: {
            isHighlighted: true // Show the field directly in the main object fieldset
          }
        }
      ],
      validation: (Rule) => Rule.required().error('Cover Art is required')
    },
    // other fields...
  

    {
      name: 'imageUrl',
      title: 'Cover',
      type: 'image'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'podcast.0.title',
      description: 'summary',
      media: 'coverArt',
    },
  }
});
