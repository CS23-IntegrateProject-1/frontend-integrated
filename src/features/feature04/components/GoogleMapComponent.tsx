import React from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader, } from '@react-google-maps/api';
import { useQuery } from '@tanstack/react-query';
//map settings
import { containerStyle,center,options } from './setting.ts';

//currentLocation
import CurrentLocation from './CurrentLocation.ts';

//API calss
import { fetchNearbyPlaces } from './api.ts';

//image
import fork from '../images/forkspoon.svg';

// Styles 
import { Wrapper, LoadingView } from './map.styles.ts';


export type MarkerType ={
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  phone_number:string;
  website: string;
}


const GoogleMapComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "API KEY" //API KEY
  })

  //save map in ref if we want to access the map
  const mapRef = React.useRef<google.maps.Map<Element> | null>(null);
  
  const[clickedPos,setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral)
  const [selectedMarker, setSelectedMarker] = React.useState<MarkerType>({} as MarkerType);


  const {
    data: nearbyPositions,
    isLoading,
    isError
  } = useQuery([clickedPos.lat, clickedPos.lng], () => fetchNearbyPlaces(clickedPos.lat, clickedPos.lng), {
    enabled: !!clickedPos.lat,
    refetchOnWindowFocus: false
  });

  // const moveTo = (position: google.maps.LatLngLiteral) => {
  //   if(mapRef.current){
  //     mapRef.current.panTo({lat: position.lat, lng: position.lng});
  //     mapRef.current.setZoom(12);
  //     setClickedPos(position)
  //   }
  // } 

  console.log(nearbyPositions);


  const onLoad = (map: google.maps.Map<Element> | null):void => {
    mapRef.current = map;
  }

  const onUnMount= ():void => {
    mapRef.current = null;
  }

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    setClickedPos({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    setSelectedMarker({} as MarkerType);
  };

  const onMarkerClick = (marker: MarkerType) => {
    console.log('Marker clicked:', marker);
    setSelectedMarker(marker);
  };

  if (!isLoaded) return <LoadingView>Loading...</LoadingView>;

  return (
    <Wrapper>
      {/* <CurrentLocation moveTo={moveTo} /> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options as google.maps.MapOptions}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnMount}
        onClick={onMapClick}
        >
           {clickedPos.lat ? <Marker position={clickedPos} /> : null}
           {nearbyPositions?.map(marker => (
            <Marker
              key={marker.id}
              position={marker.location}
              onClick={() => onMarkerClick(marker)}
              icon={{
                url: fork,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(40, 40)
              }}
            />
        ))}
         {selectedMarker.location && (
          <InfoWindow position={selectedMarker.location} onCloseClick={() => setSelectedMarker({} as MarkerType)}>
            <div style={{ color: 'black' }}>
              <h3>{selectedMarker.name}</h3>
            </div>
          </InfoWindow>
        )}
        </GoogleMap>
    </Wrapper>
  );
};

export default GoogleMapComponent;