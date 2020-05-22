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
    const { text, type, color} = props;
    const IconLeft = props.iconLeft
    const IconRight = props.iconRight

    if (text && !IconLeft && !IconRight) return <ButtonWrapper color={color} type={type}>{text}</ButtonWrapper>;

    else if (IconLeft && !text && !IconRight) return <ButtonWrapper color={color} type={type}><IconLeft/></ButtonWrapper>;

else if (IconLeft && text && !IconRight) return <ButtonWrapper color={color} type={type}><IconLeft/>{text}</ButtonWrapper>;

    else if (IconLeft && text && IconRight) return <ButtonWrapper color={color} type={type}><IconLeft/>{text}<IconRight/></ButtonWrapper>;
};

TwitchButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    colors: PropTypes.string
};

TwitchButton.defaultProps = {
    type: type.primary,
    text: "",
    iconLeft: "",
    iconRight: "",
    colors: Colors.brand_primary
};

export default TwitchButton;