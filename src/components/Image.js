import React from 'react'
import styled from 'styled-components'
const GameImage = styled.img`
  width: 200px;
  min-width: 200px;
  height: 200px;
  min-height: 200px;
  border-radius: 100%;
  object-fit: cover;
  border: 5px solid ${props =>props.palette};
  mix-blend-mode: ${props => props.blendMode || "unset"};
  object-position: ${props => props.position || "initial"};
`;

export const CloverImage = (props) => (
  <GameImage blendMode={props.blendMode} position={props.position} src={props.slotImg} alt={props.imgAlt} palette={props.palette} />
);
