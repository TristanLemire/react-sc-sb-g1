import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import Icon from "../atoms/Icon"

export const type = {
  primary: "primary",
  secondary: "secondary",
  icon: "icon",
};

export const colors = {
  brand_primary: Colors.brand_primary,
  green: Colors.green,
  grey: Colors.grey,
  white: Colors.white
};

const ButtonWrapper = styled.button`
  background: ${props => (props.color)};
  color: ${props => (props.type === type.secondary ? Colors.black : Colors.white)}; 
  padding: ${props => (props.type === type.icon ? "14px" : "8px" )} ${props => (props.type === type.primary ? "16px" : props.type === type.secondary ? "64px" : "30px")} ;
  border-radius: ${props => (props.type === type.icon ? "38px" : "4px")}; 
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  font-family: sans-serif;
`;

const TwitchButton = props => {
  const { text, type, color, iconLeft, iconRight} = props;

return <ButtonWrapper color={color} type={type}>
  {iconLeft && <Icon></Icon>}
  {text}
  {iconRight && <Icon></Icon>}

  </ButtonWrapper>;

};

TwitchButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  colors: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string
};

TwitchButton.defaultProps = {
  type: type.primary,
  text: "",
  iconLeft: "",
  iconRight: "",
  colors: Colors.brand_primary
};

export default TwitchButton;