export default {
    name: 'mess',
    title: 'Mess',
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
        name: 'price',
        title: 'Price',
        type: 'number',
      },

      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      }
    
      
    ]
  }