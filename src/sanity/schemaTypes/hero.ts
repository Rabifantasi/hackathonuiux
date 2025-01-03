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
  
      // Pick-Up Section Fields
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
  
      // Popular Cars Section
      {
        name: 'popularCars',
        title: 'Popular Cars',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Car Name',
                type: 'string',
              },
              {
                name: 'type',
                title: 'Car Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Sports', value: 'sports' },
                    { title: 'Sedan', value: 'sedan' },
                    { title: 'SUV', value: 'suv' },
                    { title: 'Hatchback', value: 'hatchback' },
                  ],
                },
              },
              {
                name: 'image',
                title: 'Car Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'fuelCapacity',
                title: 'Fuel Capacity',
                type: 'string',
              },
              {
                name: 'transmission',
                title: 'Transmission',
                type: 'string',
                options: {
                  list: [
                    { title: 'Manual', value: 'manual' },
                    { title: 'Automatic', value: 'automatic' },
                  ],
                },
              },
              {
                name: 'capacity',
                title: 'Capacity',
                type: 'string',
              },
              {
                name: 'price',
                title: 'Price $',
                type: 'number',
                options: {
                  min: 0,
                },
              },
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
                description: 'Select the favorite icon for this car.',
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
              {
                name: 'name',
                title: 'Car Name',
                type: 'string',
              },
              {
                name: 'type',
                title: 'Car Type',
                type: 'string',
              },
              {
                name: 'image',
                title: 'Car Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'fuelCapacity',
                title: 'Fuel Capacity',
                type: 'string',
              },
              {
                name: 'transmission',
                title: 'Transmission',
                type: 'string',
              },
              {
                name: 'capacity',
                title: 'Capacity',
                type: 'string',
              },
              {
                name: 'price',
                title: 'Price $',
                type: 'number',
                options: {
                  min: 0,
                },
              },
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
                description: 'Select the favorite icon for this car.',
              },
            ],
          },
        ],
      },
    ],
  };
  