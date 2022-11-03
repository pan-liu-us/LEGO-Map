import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
import markersData from '../data/markersData';

const containerStyle = {
  width: '1280px',
  height: '800px',
  border: '.4em solid #000000',
};

const center = {
  lat: 33.12734358009397,
  lng: -117.31221000428125
};

function App() {
  return (
    <MainContainer>
      <Title>Welcome To George's LEGO World</Title>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18.5}
          options={{ mapId: "86a34d0d9085086e" }}
        >
          {markersData.map(m => (
            <Marker
              key={m.id}
              // label={m.title}
              position={{lat: m.lat, lng: m.lng}}
              icon={{
                url: m.url,
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 2em;
  text-shadow: .1em .1em 0 #000000;
  background: linear-gradient(to right, #d01012, #d01012, #ffd001, #029d2e, #006eb7, #006eb7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default React.memo(App)
