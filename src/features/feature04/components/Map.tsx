import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface MapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
  options?: google.maps.MapOptions;
}

const Map: React.FC<MapProps> = ({ apiKey, center, zoom, options }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={zoom}
        options={options}
      />
    </LoadScript>
  );
};

export default Map;
