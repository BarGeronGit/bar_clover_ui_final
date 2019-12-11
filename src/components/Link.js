import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledLink = styled(Link)`
  display: block;
  padding: 50px;
  border-radius: 10px;
  font-size: 6em;
  font-weight: bold;
  background-color: #2db14b;
  color: black;
  text-decoration: none;
  background-color: #2db14b;
  margin-bottom: 60px;

  @media screen and (max-width: 1400px) {
    transform: scale(0.7);
  }
`;

export const CloverLink = (props) => (
  <StyledLink to={props.routeTo} >{props.children}</StyledLink>
);
