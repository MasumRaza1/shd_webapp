export default {
    name: 'pg',
    title: 'PG',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },

      { 
        name: 'ownerPhoneNumber',
        title: 'OwnerPhoneNumber',
        type: 'string',
      },

      { 
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      { 
        name: 'city',
        title: 'City',
        type: 'string',
      },
      { 
        name: 'state',
        title: 'State',
        type: 'string',
      },
      { 
        name: 'pincode',
        title: 'Pincode',
        type: 'number',
        maxLength: 6,
      },

      { 
        name: 'googlemaplink',
        title: 'Google map link',
        type: 'string',
      },
     
      
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'rent',
        title: 'Rent',
        type: 'number',
      },

      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },

      {
        title: 'category',
        name: 'Category',
        type: 'string',
        options: {
          list: [ 
            { title: 'Flat', value: 'flat' },
            { title: 'PG', value: 'pg' }
          ]
        }
      },

      {
        name: 'facilities',
        title: 'Facilities',
        type: 'object',
        fields: [
          {
            name: 'fullyFurnished',
            title: 'Fully Furnished',
            type: 'boolean',
          },
          {
            name: 'semiFurnished',
            title: 'Semi Furnished',
            type: 'boolean',
          },
          {
            name: 'table',
            title: 'Table',
            type: 'boolean',
          },
          {
            name: 'chair',
            title: 'Chair',
            type: 'boolean',
          },
          {
            name: 'inverter',
            title: 'Inverter',
            type: 'boolean',
          },
          {
            name: 'fan',
            title: 'Fan',
            type: 'boolean',
          },
          {
            name: 'wifi',
            title: 'Wifi',
            type: 'boolean',
          },
        ],
      },
     

     
    
      
    ]
  }