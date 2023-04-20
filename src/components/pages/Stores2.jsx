import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import Marker from "mapbox-gl";
import geoJson from "./../../data/parks.json";

import "../../styles/pages.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwc3NwYW0iLCJhIjoiY2xnNm83amo5MDg4ajNlcjBocG5hdjAzciJ9.kdTbe8WsLic0PO9Wd_De2g";
export default function Stores() {

const mapContainer = useRef(null);
const map = useRef(null);
const [lat, setLat] = useState(51.51248096016143);
const [lng, setLng] = useState(-0.129144731863642);
const [zoom, setZoom] = useState(12);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
    });
});
  
  geoJson.features.map((feature) =>
    new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
  );

  // Add navigation control (the +/- zoom buttons)
  map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
  //  new mapboxgl.Marker()
  //    .setLngLat(-0.129144731863642, 51.51248096016143)
  //    .addTo(map);

   return (
     <div>
       <div ref={mapContainer} className="map-container">
        
       </div>
     </div>
   );
    
}