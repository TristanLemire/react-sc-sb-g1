import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const type = {
    primary: "primary",
    secondary: "secondary",
    icon: "icon",
};

const ButtonWrapper = styled.button`
    background: ${props => (props.type === type.primary ? Colors.brand_primary : props.type === type.secondary ? Colors.white : Colors.green)};
    color: ${props => (props.type === type.secondary ? Colors.black : Colors.white)}; 
    padding: ${props => (props.type === type.icon ? "14px" : "8px" )} ${props => (props.type === type.primary ? "16px" : props.type === type.secondary ? "64px" : "30px")} ;
    border-radius: ${props => (props.type === type.icon ? "38px" : "4px")}; 
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    font-family: sans-serif;
`;

const TwitchButton = props => {
    const { text, type, icon } = props;
    if (icon && !text) return <ButtonWrapper type={type}>{icon}</ButtonWrapper>;
    else if (text && !icon) return <ButtonWrapper type={type}>{text}</ButtonWrapper>;
    else if (text && icon) return <ButtonWrapper type={type}>{icon}{text}</ButtonWrapper>;
};

TwitchButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string
};

TwitchButton.defaultProps = {
    type: type.primary,
    text: "hello world",
    icon: ""
};

export default TwitchButton;