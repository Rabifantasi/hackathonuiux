// schemas/carRental.js
export default {
  name: 'carRental',
  title: 'Car Rental',
  type: 'document',
  fields: [
    // Hero Section Fields
    {
      name: 'heroTitle1',
      title: 'Hero Title 1',
      type: 'string',
      description: 'Title for the first hero section image.',
    },
    {
      name: 'heroDescription1',
      title: 'Hero Description 1',
      type: 'text',
      description: 'Description for the first hero section image.',
    },
    {
      name: 'heroImage1background',
      title: 'Hero Image 1 Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImage1car',
      title: 'Hero Image 1 Car',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroTitle2',
      title: 'Hero Title 2',
      type: 'string',
      description: 'Title for the second hero section image.',
    },
    {
      name: 'heroDescription2',
      title: 'Hero Description 2',
      type: 'text',
      description: 'Description for the second hero section image.',
    },
    {
      name: 'heroImage2background',
      title: 'Hero Image 2 Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImage2car',
      title: 'Hero Image 2 Car',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'pickupLocationLabel',
      title: 'Pick-Up Location Label',
      type: 'string',
      description: 'Label for the pick-up location field.',
    },
    {
      name: 'pickupDateLabel',
      title: 'Pick-Up Date Label',
      type: 'string',
      description: 'Label for the pick-up date field.',
    },
    {
      name: 'pickupTimeLabel',
      title: 'Pick-Up Time Label',
      type: 'string',
      description: 'Label for the pick-up time field.',
    },
  
    // Drop-Off Section Fields
    {
      name: 'dropoffLocationLabel',
      title: 'Drop-Off Location Label',
      type: 'string',
      description: 'Label for the drop-off location field.',
    },
    {
      name: 'dropoffDateLabel',
      title: 'Drop-Off Date Label',
      type: 'string',
      description: 'Label for the drop-off date field.',
    },
    {
      name: 'dropoffTimeLabel',
      title: 'Drop-Off Time Label',
      type: 'string',
      description: 'Label for the drop-off time field.',
    },
  
    {
      name: 'swapButtonText',
      title: 'Swap Button Text',
      type: 'string',
      description: 'Text for the button that swaps pick-up and drop-off locations.',
    },


    // Popular Cars Section
    {
      name: 'popularCars',
      title: 'Popular Cars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'type', title: 'Type', type: 'string' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'fuelCapacity', title: 'Fuel Capacity', type: 'string' },
            { name: 'transmission', title: 'Transmission', type: 'string' },
            { name: 'capacity', title: 'Capacity', type: 'string' },
            { name: 'price', title: 'Price', type: 'number' },
            {
              name: 'favoriteIcon',
              title: 'Favorite Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Heart', value: 'heart.png' },
                  { title: 'Empty Heart', value: 'wheart.png' },
                ],
              },
            },
          ],
        },
      ],
    },

    // Recommended Cars Section
    {
      name: 'recommendedCars',
      title: 'Recommended Cars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'type', title: 'Type', type: 'string' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'fuelCapacity', title: 'Fuel Capacity', type: 'string' },
            { name: 'transmission', title: 'Transmission', type: 'string' },
            { name: 'capacity', title: 'Capacity', type: 'string' },
            { name: 'price', title: 'Price', type: 'number' },
            {
              name: 'favoriteIcon',
              title: 'Favorite Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Heart', value: 'heart.png' },
                  { title: 'Empty Heart', value: 'wheart.png' },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};