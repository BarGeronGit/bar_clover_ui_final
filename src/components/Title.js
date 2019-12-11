import React from 'react';

const MegaTitle = {
  fontSize: '10vw',
  textShadow: '11px 1px 20px black',
  marginBottom: '0',
  justifyContent: 'center',
  flexWrap: 'nowrap',
}


export const MegaTitleClover = (props) => (
  <h1 style={MegaTitle}>{props.text}</h1>
);
