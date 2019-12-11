import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from "reflexbox/styled-components";

const Card = styled(Flex).attrs({
  px: "20px",
  py: "20px",
  alignItems: "center"
})`
  background-color: ${props => props.theme.palette.inverse};
  color: #363333;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.59);
  width: ${props => props.width};
  marginBottom: ${props => props.mb};
`;

export const CloverCard = (props) => (
  <Card width={props.width} mb={props.mb}>{props.children}</Card>
);
