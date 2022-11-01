import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styled from 'styled-components';

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'lego-map',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <MainContainer>
      <Title>Welcome To George's LEGO World</Title>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ mapId: "86a34d0d9085086e" }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </MainContainer>
  ) :
    <Title>Welcome To George's LEGO World</Title>
}

const containerStyle = {
  width: '1280px',
  height: '600px'
};

const center = {
  lat: 33.126251,
  lng: -117.311928
};

const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5em;
  background: linear-gradient(to right, #d01012, #d01012, #ffd001, #029d2e, #006eb7, #006eb7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default React.memo(App)