import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import stores from "../data/stores.json";
export default function StoresMap() {
  const [popupInfo, setPopupInfo] = useState(null);

  const [viewState, setViewState] = useState({
    longitude: -0.129144731863642,
    latitude: 51.51248096016143,
    zoom: 13,
  });

  return (
    <Map
      reuseMaps
      {...viewState}
      style={{ width: 300, height: 200, maxWidth: "80vw", margin:"auto" }}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoibWFwc3NwYW0iLCJhIjoiY2xnNm83amo5MDg4ajNlcjBocG5hdjAzciJ9.kdTbe8WsLic0PO9Wd_De2g"
    >
      {stores.map((store) => {
        return (
          <Marker
            key={store.name}
            longitude={store.long}
            latitude={store.lat}
            color="red"
            onClick={(e) => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setPopupInfo(store);
            }}
          />
        );
      })}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          onClose={() => setPopupInfo(null)}
          closeButton:false
        >
          <div style={{paddingRight:20}}>
            {popupInfo.name}, {popupInfo.address}
          </div>
        </Popup>
      )}

      <NavigationControl />
    </Map>
  );
}
