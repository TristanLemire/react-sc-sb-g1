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
  light_green: Colors.light_green,
  darker_grey: Colors.darker_grey,
  white: Colors.white
};

const ButtonWrapper = styled.button`
  &:not([disabled]) {
    background: ${props => (props.color)};
    color: ${props => (props.color === Colors.white || props.color === Colors.light_green ? Colors.black : Colors.white)};
    cursor: pointer;
  } 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darker_grey};
  color: ${Colors.disabled_grey};
  padding: ${props => (props.type === type.icon ? "14px" : "8px" )} ${props => (props.type === type.primary ? "16px" : props.type === type.secondary ? "64px" : "30px")} ;
  border-radius: ${props => (props.type === type.icon ? "38px" : "4px")}; 
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  font-family: sans-serif;
  border: none;
  cursor: not-allowed;

  &:hover{
    &:not([disabled]) {
        opacity: 0.75;
    }
  }

  p{
    margin: 0px 4px;
  }
`;

const log = () => {console.log("coucou")}

const TwitchButton = props => {
  const { text, type, color, iconLeft, iconRight, disabled} = props;

return (
<ButtonWrapper color={color} type={type} disabled={disabled}>
  {iconLeft && 
  <Icon icon={iconLeft} big={!text} color={props.color === Colors.white || props.color === Colors.light_green ? Colors.black : Colors.white}></Icon>}
    <p>{text}</p>
  {iconRight && 
  <Icon icon={iconRight} big={!text} color={props.color === Colors.white || props.color === Colors.light_green ? Colors.black : Colors.white}></Icon>}
</ButtonWrapper>
  );
};

TwitchButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  colors: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  disabled: PropTypes.bool
};

TwitchButton.defaultProps = {
  type: type.primary,
  text: "",
  iconLeft: "",
  iconRight: "",
  colors: Colors.brand_primary,
  disabled: false
};

export default TwitchButton;