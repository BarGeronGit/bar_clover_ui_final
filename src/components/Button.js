import React from 'react'
import styled from 'styled-components'

const PurchaseButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  font-size: 2.5vw;
  align-self: stretch;
  font-weight: bold;
  background-color: ${props => props.color};
  color: ${props => props.theme.palette.overlay};
  text-decoration: none;
  border: none;
`;

export const CloverPrimaryButton = (props) => (
  <PurchaseButton color={props.color} />
)
