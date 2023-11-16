// Vibrant and Appealing Nightlife Map Styles
const vibrantNightlifeMapStyles = [
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#FF69B4', // Pink color for administrative labels
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#E0FFFF', // Light cyan background for landscape
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'on', // Make Points of Interest visible
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off', // Turn off business icons
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -30, // Desaturate the roads a bit
        },
        {
          lightness: 30, // Lighten the roads
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'on', // Make arterial road icons visible
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off', // Turn off transit features
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#87CEEB', // Sky blue water color
        },
        {
          visibility: 'on',
        },
      ],
    },
  ];
  
  export default vibrantNightlifeMapStyles;
  