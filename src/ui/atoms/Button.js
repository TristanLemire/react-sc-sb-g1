import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const type = {
    primary: "primary",
    secondary: "secondary",
    icon: "icon",
};

export const colors = {
    brand_primary: Colors.brand_primary,
    green: Colors.green,
    light_green: Colors.light_green,
    grey: Colors.neutral_grey,
    white: Colors.white
};

const ButtonWrapper = styled.button`
    background: ${props => (props.color)};
    color: ${props => (props.color === Colors.white || props.color === Colors.light_green ? Colors.black : Colors.white)}; 
    padding: ${props => (props.type === type.icon ? "14px" : "8px" )} ${props => (props.type === type.primary ? "16px" : props.type === type.secondary ? "64px" : "30px")} ;
    border-radius: ${props => (props.type === type.icon ? "38px" : "4px")}; 
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    font-family: sans-serif;
    border: none;
`;

const TwitchButton = props => {
    const { text, type, iconLeft, iconRight, color } = props;
    console.log(color)
    return <ButtonWrapper color={color} type={type}>{iconLeft}{text}{iconRight}</ButtonWrapper>;
};

TwitchButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    colors: PropTypes.string
};

TwitchButton.defaultProps = {
    type: type.primary,
    text: "hello world",
    iconLeft: "",
    iconRight: "",
    colors: Colors.brand_primary
};

export default TwitchButton;