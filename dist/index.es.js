import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'reflexbox/styled-components';
import 'prop-types';

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  width: 200px;\n  min-width: 200px;\n  height: 200px;\n  min-height: 200px;\n  border-radius: 100%;\n  object-fit: cover;\n  border: 5px solid ', ';\n  mix-blend-mode: ', ';\n  object-position: ', ';\n'], ['\n  width: 200px;\n  min-width: 200px;\n  height: 200px;\n  min-height: 200px;\n  border-radius: 100%;\n  object-fit: cover;\n  border: 5px solid ', ';\n  mix-blend-mode: ', ';\n  object-position: ', ';\n']);
var GameImage = styled.img(_templateObject, function (props) {
  return props.palette;
}, function (props) {
  return props.blendMode || "unset";
}, function (props) {
  return props.position || "initial";
});

var CloverImage = function CloverImage(props) {
  return React.createElement(GameImage, { blendMode: props.blendMode, position: props.position, src: props.slotImg, alt: props.imgAlt, palette: props.palette });
};

var MegaTitle = {
  fontSize: '10vw',
  textShadow: '11px 1px 20px black',
  marginBottom: '0',
  justifyContent: 'center',
  flexWrap: 'nowrap'
};

var MegaTitleClover = function MegaTitleClover(props) {
  return React.createElement(
    'h1',
    { style: MegaTitle },
    props.text
  );
};

var _templateObject$1 = taggedTemplateLiteral(['\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 2.5vw;\n  align-self: stretch;\n  font-weight: bold;\n  background-color: ', ';\n  color: ', ';\n  text-decoration: none;\n  border: none;\n'], ['\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 2.5vw;\n  align-self: stretch;\n  font-weight: bold;\n  background-color: ', ';\n  color: ', ';\n  text-decoration: none;\n  border: none;\n']);

var PurchaseButton = styled.button(_templateObject$1, function (props) {
  return props.color;
}, function (props) {
  return props.theme.palette.overlay;
});

var CloverPrimaryButton = function CloverPrimaryButton(props) {
  return React.createElement(PurchaseButton, { color: props.color });
};

var _templateObject$2 = taggedTemplateLiteral(['\n  display: block;\n  padding: 50px;\n  border-radius: 10px;\n  font-size: 6em;\n  font-weight: bold;\n  background-color: #2db14b;\n  color: black;\n  text-decoration: none;\n  background-color: #2db14b;\n  margin-bottom: 60px;\n\n  @media screen and (max-width: 1400px) {\n    transform: scale(0.7);\n  }\n'], ['\n  display: block;\n  padding: 50px;\n  border-radius: 10px;\n  font-size: 6em;\n  font-weight: bold;\n  background-color: #2db14b;\n  color: black;\n  text-decoration: none;\n  background-color: #2db14b;\n  margin-bottom: 60px;\n\n  @media screen and (max-width: 1400px) {\n    transform: scale(0.7);\n  }\n']);

var StyledLink = styled(Link)(_templateObject$2);

var CloverLink = function CloverLink(props) {
  return React.createElement(
    StyledLink,
    { to: props.routeTo },
    props.children
  );
};

var _templateObject$3 = taggedTemplateLiteral(['\n  background-color: ', ';\n  color: #363333;\n  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.59);\n  width: ', ';\n  marginBottom: ', ';\n'], ['\n  background-color: ', ';\n  color: #363333;\n  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.59);\n  width: ', ';\n  marginBottom: ', ';\n']);

var Card = styled(Flex).attrs({
  px: "20px",
  py: "20px",
  alignItems: "center"
})(_templateObject$3, function (props) {
  return props.theme.palette.inverse;
}, function (props) {
  return props.width;
}, function (props) {
  return props.mb;
});

var CloverCard = function CloverCard(props) {
  return React.createElement(
    Card,
    { width: props.width, mb: props.mb },
    props.children
  );
};

export { CloverCard, CloverImage, MegaTitleClover, CloverPrimaryButton, CloverLink };
//# sourceMappingURL=index.es.js.map
