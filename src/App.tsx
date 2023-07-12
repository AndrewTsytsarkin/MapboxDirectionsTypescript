import React from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mp from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const MapboxDirections = require('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions');

mp.accessToken = process.env.REACT_APP_API_KEY ?? "";

function App() {
  const mapContainer = React.useRef<any>(null);
  const map = React.useRef<mp.Map | null>(null);
  const [lng,] = React.useState(-74.0632);
  const [lat,] = React.useState(40.7346);
  const [zoom,] = React.useState(12);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mp.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    const d = new MapboxDirections({
      accessToken: mp.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling'
    });

    (map as any).current.addControl(d, 'top-left');
    // return () => (map as any).current.remove();
  }, []);

  return (
    <div className="App">
      Mr Rajkumar waiting for the things getting done!
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
}

export default App;
