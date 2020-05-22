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
    color: ${props => (props.type === type.secondary ? Colors.darker_grey : Colors.white)};
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