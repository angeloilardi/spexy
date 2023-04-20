import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
export default function Stores() {
    const [viewState, setViewState] = useState({
      longitude: -0.129144731863642,
      latitude: 51.51248096016143,
      zoom: 12,
    });

  return (
    <Map
      {...viewState}
      style={{ width: 600, height: 400 }}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoibWFwc3NwYW0iLCJhIjoiY2xnNm83amo5MDg4ajNlcjBocG5hdjAzciJ9.kdTbe8WsLic0PO9Wd_De2g"
    >
      <Marker
        longitude={-0.129144731863642}
        latitude={51.51248096016143}
        color="red"
      />
      <Marker
        longitude={-0.13515659075873787}
        latitude={51.51198747967716}
        color="red"
      />
      <NavigationControl />
    </Map>
  );
}
