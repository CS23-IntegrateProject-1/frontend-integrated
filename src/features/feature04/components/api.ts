import { MarkerType } from "./GoogleMapComponent";
const PLACE_RADIUS = 2500; //2500 meters
const TYPE = 'restaurant';

export const fetchNearbyPlaces = async (lat: number, lng: number, type : string): Promise<MarkerType[]> => {
    const response = await fetch(
      `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${lat}%2C${lng}&language=en&radius=${PLACE_RADIUS}&type=${type}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '56163eff12msh71ad6d88cbc4ce6p17a2dbjsn4ae0b41f38d3', //Place API Key from RapidAPI
          'x-rapidapi-host': 'trueway-places.p.rapidapi.com'
        }
      }
    );
  
    if (!response.ok) {
      throw new Error('Oh no! Something messed up!');
    }
  
    const data = await response.json();
    return data.results;
  };

