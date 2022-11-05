import React from 'react';
import elementData from '../data/elementData';
import styled from 'styled-components';

function Elements() {
  return (
    <div>
      {elementData.map(e =>
      <img src={e.src} alt={e.alt}/>)}
    </div>
  )
}

export default Elements;