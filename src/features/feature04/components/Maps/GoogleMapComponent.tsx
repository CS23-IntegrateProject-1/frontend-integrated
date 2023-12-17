import React, { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";

// map settings
import { containerStyle, center, options } from "./setting.ts";

// currentLocation
import CurrentLocation from "./CurrentLocation.tsx";

// API class
import { fetchNearbyPlaces } from "./api.ts";

// image
import plate from "../../images/Plate.svg";
import cinema from "../../images/cinema.svg";
import beer from "../../images/beer.svg";
import star from "../../images/star.svg";

// Styles
import { Wrapper, LoadingView } from "./map.styles.ts";

interface LocMap{
  address : string;
  latitude : number; 
  locationId : number;
  longtitude : number;
  name: string;
}

export type MarkerType = {
  id: string;
  address: string;
  location: google.maps.LatLngLiteral;
  name: string;
  phone_number: string;
  website: string;
  distance: number;
};

const GoogleMapComponent: React.FC<{ type: string; locMap: LocMap[] | null }> = ({ type, locMap }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCsa_leZkTisoRvdzf3qJub4iyzQxrmeHY", // replace with your API key
  });

  console.log("hello from google")
    console.log("Updated locations:", locMap);  
    console.log("hello1")

  const mapRef = React.useRef<google.maps.Map | null>(null);
  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>(
    {} as google.maps.LatLngLiteral
  );
  const [selectedMarker, setSelectedMarker] = React.useState<MarkerType>(
    {} as MarkerType
  );

  const [selectedMarkerInfo, setSelectedMarkerInfo] = React.useState<MarkerType | null>(null);
  console.log(selectedMarkerInfo)

  // const [savedData, setSavedData] = useState<string | null>(null);

  // // Retrieve data from localStorage on component mount
  // useEffect(() => {
  //   const storedData = localStorage.getItem("nearbyPositions");
  //   setSavedData(storedData);
  // }, []);

  const { data: nearbyPositions } = useQuery(
    [clickedPos.lat, clickedPos.lng, type],
    () => fetchNearbyPlaces(clickedPos.lat, clickedPos.lng, type),
    {
      enabled: !!clickedPos.lat,
      refetchOnWindowFocus: false,
    }
  );

  // Save the JSON data to localStorage whenever nearbyPositions changes
  useEffect(() => {
    if (nearbyPositions) {
      localStorage.setItem("nearbyPositions", JSON.stringify(nearbyPositions));
    }
    window.dispatchEvent(new Event("storage"));
  }, [nearbyPositions]);

  console.log(nearbyPositions);

  const moveTo = (position: google.maps.LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: position.lat, lng: position.lng });
      mapRef.current.setZoom(16.5);
      setClickedPos(position);
    }
  };


  const onLoad = (map: google.maps.Map | null): void => {
    mapRef.current = map;
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setClickedPos({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      setSelectedMarker({} as MarkerType);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("Storage changed");
      // window.location.reload();
    };


    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const onMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  const onMarkerClick2 = (marker: MarkerType) => {
    setSelectedMarkerInfo(marker);
  };

  if (!isLoaded) return <LoadingView>Loading...</LoadingView>;

  const iconUrl =
    type === "restaurant"
      ? plate
      : type === "bar"
      ? beer
      : type === "cinema"
      ? cinema
      : cinema;

  // const markers = savedData
  //   ? JSON.parse(savedData).map((marker: MarkerType) => (
  //       <Marker
  //         key={marker.id}
  //         position={marker.location}
  //         onClick={() => onMarkerClick(marker)}
  //         icon={{
  //           url: iconUrl,
  //           origin: new window.google.maps.Point(0, 0),
  //           anchor: new window.google.maps.Point(15, 15),
  //           scaledSize: new window.google.maps.Size(35, 35),
  //         }}
  //       />
  //     ))
  //   : [];

  return (
    <Wrapper>
      <CurrentLocation moveTo={moveTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options as google.maps.MapOptions}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnMount}
        onClick={onMapClick}
        >
          {locMap?.map((location) => (
          <Marker
            key={location.locationId.toString()}
            position={{ lat: parseFloat(location.latitude), lng: parseFloat(location.longtitude) }}
            
            icon={{
              url: star,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(35, 35),
            }}
            onClick={() => onMarkerClick2({
              id: location.locationId.toString(),
              address: location.address,
              location: { lat: parseFloat(location.latitude), lng: parseFloat(location.longtitude) },
              name: location.name,
              phone_number: '',  // You may need to get this information from your data
              website: '',       // You may need to get this information from your data
              distance: 0,        // You may need to get this information from your data
            })}
          />
        ))}
        {clickedPos.lat ? <Marker position={clickedPos} /> : null}
        {nearbyPositions?.map(marker => (
         <Marker
           key={marker.id}
           position={marker.location}
           onClick={() => onMarkerClick(marker)}
           icon={{
             url: iconUrl,
             origin: new window.google.maps.Point(0, 0),
             anchor: new window.google.maps.Point(15, 15),
             scaledSize: new window.google.maps.Size(35, 35)
           }}
         />
     ))}
        
      {selectedMarker.location && (
       <InfoWindow 
       position={selectedMarker.location} 
       onCloseClick={() => setSelectedMarker({} as MarkerType)}>
         <div style={{ color: 'black' }}>
              
              <h3>{selectedMarker.name}</h3>
            </div>
          </InfoWindow>
        )}
        {selectedMarkerInfo && (
          <InfoWindow
            position={selectedMarkerInfo.location}
            onCloseClick={() => setSelectedMarkerInfo(null)}
          >
            <div style={{ color: 'black' }}>
              <h3>{selectedMarkerInfo.name}</h3>
              {/* Include other information as needed */}
            </div>
          </InfoWindow>
        )}
        </GoogleMap>
    </Wrapper>
  );
};

export default GoogleMapComponent;
