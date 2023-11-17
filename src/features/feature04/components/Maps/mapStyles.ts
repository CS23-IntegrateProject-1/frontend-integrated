// Accessible and Appealing Map Styles with Enhanced Landmark Visibility
const enhancedLandmarkMapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#333333', // Dark text color for better readability
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#333333', // Dark border color for administrative boundaries
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#333333', // Dark color for land parcel labels
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f5f5f5', // Light gray background for landscape
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on', // Show Points of Interest
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
    featureType: 'poi.school',
    elementType: 'geometry.fill',
  },
  {
    featureType: 'poi.medical',
    elementType: 'geometry.fill',
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100, // Desaturate the roads
      },
      {
        lightness: 50, // Lighten the roads
      },
      {
        visibility: 'on', // Make roads more visible
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
        color: '#b3d2e9', // Light blue water color for contrast
      },
    ],
  },
];

export default enhancedLandmarkMapStyles;
  