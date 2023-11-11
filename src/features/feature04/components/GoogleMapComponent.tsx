import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface Location {
  lat: number;
  lng: number;
  name: string;
  description?: string;
}

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  locations?: Location[];
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  center,
  zoom,
  locations,
}) => {
  const [selectedMarker, setSelectedMarker] = React.useState<Location | null>(
    null
  );

  const handleMarkerClick = (location: Location) => {
    setSelectedMarker(location);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={zoom}
      >
        {locations &&
          locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => handleMarkerClick(location)}
            />
          ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              {selectedMarker.description && (
                <p>{selectedMarker.description}</p>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
