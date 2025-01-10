// schemas/footer.js
export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'branding',
        type: 'object',
        title: 'Branding Section',
        fields: [
          { name: 'brandName', type: 'string', title: 'Brand Name' },
          { name: 'brandDescription', type: 'text', title: 'Brand Description' },
        ],
      },
      {
        name: 'sections',
        type: 'array',
        title: 'Footer Sections',
        of: [
          {
            type: 'object',
            title: 'Section',
            fields: [
              { name: 'title', type: 'string', title: 'Section Title' },
              {
                name: 'links',
                type: 'array',
                title: 'Links',
                of: [
                  {
                    type: 'object',
                    title: 'Link',
                    fields: [
                      { name: 'label', type: 'string', title: 'Link Label' },
                      { name: 'url', type: 'url', title: 'Link URL' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'footerBottom',
        type: 'object',
        title: 'Footer Bottom',
        fields: [
          { name: 'copyrightText', type: 'string', title: 'Copyright Text' },
          {
            name: 'bottomLinks',
            type: 'array',
            title: 'Bottom Links',
            of: [
              {
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'label', type: 'string', title: 'Link Label' },
                  { name: 'url', type: 'url', title: 'Link URL' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'hideFooterRoutes',
        type: 'array',
        title: 'Routes to Hide Footer',
        of: [{ type: 'string' }],
      },
    ],
  };
  