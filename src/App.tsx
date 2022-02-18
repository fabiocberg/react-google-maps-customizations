import "./App.css";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadScript googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={15}
          options={{
            zoomControl: false,
            styles: [
              {
                elementType: "labels",
                featureType: "poi.*",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
          center={{
            lat: -27.590824,
            lng: -48.551262,
          }}
        />
      </LoadScript>
    </div>
  );
}

export default App;
