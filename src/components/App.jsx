import React from 'react'
import Map from './Map';
import Elements from './Elements';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Press Start 2P', cursive;
  margin: 0;
  padding: 0;
  background-color: #28b358;
  overflow: auto;
  perspective: 1px;
  transform-style: preserve-3d;
  * {
  transform-style: preserve-3d;
  }
`

function App() {
  return (
    <Wrapper>
      <Map />
      <Elements />
    </Wrapper>
  )
}

export default App;