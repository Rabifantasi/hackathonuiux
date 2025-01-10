export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      // Logo Text Field
      {
        name: 'logo',
        title: 'Logo',
        type: 'string',
        description: 'The text displayed as the logo (e.g., MORENT).',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(50).error('Logo text is required and should be between 1-50 characters.'),
      },
      // Search Placeholder Field
      {
        name: 'searchPlaceholder',
        title: 'Search Placeholder',
        type: 'string',
        description: 'Placeholder text for the search bar input.',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(100).error('Placeholder text is required and should be between 1-100 characters.'),
      },
      // Navigation Menu Field
      {
        name: 'navigation',
        title: 'Navigation Menu',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Menu Title',
                type: 'string',
                description: 'The display title for the navigation link.',
                validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(50).error('Menu title is required and should be between 1-50 characters.'),
              },
              {
                name: 'link',
                title: 'Menu Link',
                type: 'url',
                description: 'The URL for the navigation link.',
                validation: (Rule: { required: () => { (): any; new(): any; uri: { (arg0: { scheme: string[]; allowRelative: boolean; }): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().uri({ scheme: ['http', 'https'], allowRelative: true }).error('A valid URL or relative path is required.'),
              },
            ],
            preview: {
              select: {
                title: 'title',
                subtitle: 'link',
              },
            },
          },
        ],
        description: 'A list of navigation menu items with titles and links.',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).error('At least one navigation item is required.'),
      },
      // Icon Configuration Field
      {
        name: 'icons',
        title: 'Icons',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: [
                { title: 'Heart', value: 'heart' },
                { title: 'Bell', value: 'bell' },
                { title: 'Settings', value: 'settings' },
              ],
            },
          },
        ],
        description: 'Icons to display in the header.',
        validation: (Rule: { unique: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.unique().error('Icons must be unique.'),
      },
      // Notification Badge Field
      {
        name: 'showNotificationBadge',
        title: 'Show Notification Badge',
        type: 'boolean',
        description: 'Toggle to show or hide the notification badge on the bell icon.',
      },
      // Profile Image Field
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Profile image displayed in the header.',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Profile image is required.'),
      },
      // Styling Options (Optional)
      {
        name: 'styling',
        title: 'Styling Options',
        type: 'object',
        fields: [
          {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description: 'The background color of the header.',
            validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Background color is required.'),
          },
          {
            name: 'textColor',
            title: 'Text Color',
            type: 'string',
            description: 'The default text color of the header.',
            validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Text color is required.'),
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'logo',
        subtitle: 'searchPlaceholder',
      },
    },
  };
  