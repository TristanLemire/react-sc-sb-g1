import React from "react"
import PropTypes from "prop-types";

export const icons = {
  default: "",
  star: "star",
  starBadge: "starBadge"
}

const sizes = {
  big: '20px',
  small: '15px'
}

const TwitchIcon = props => {
  const { color, icon, big } = props;

  return (
    <>
      { icon === "star" && 
      <svg color={color} icon={icon} height={big ? sizes.big : sizes.small} viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M27.3333 10.32L17.7467 9.49329L14 0.666626L10.2533 9.50663L0.666672 10.32L7.94667 16.6266L5.76 26L14 21.0266L22.24 26L20.0667 16.6266L27.3333 10.32ZM14 18.5333L8.98667 21.56L10.32 15.8533L5.89334 12.0133L11.7333 11.5066L14 6.13329L16.28 11.52L22.12 12.0266L17.6933 15.8666L19.0267 21.5733L14 18.5333Z"/>
      </svg>
      }
      {
        icon === "starBadge" &&
        <svg color={color} icon={icon} height={big ? sizes.big : sizes.small}  viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
          <path fill={color} d="M24.6667 11C24.6667 9.53337 25.8667 8.33337 27.3333 8.33337V3.00004C27.3333 1.53337 26.1333 0.333374 24.6667 0.333374H3.33333C1.86667 0.333374 0.679999 1.53337 0.679999 3.00004V8.33337C2.14667 8.33337 3.33333 9.53337 3.33333 11C3.33333 12.4667 2.14667 13.6667 0.666666 13.6667V19C0.666666 20.4667 1.86667 21.6667 3.33333 21.6667H24.6667C26.1333 21.6667 27.3333 20.4667 27.3333 19V13.6667C25.8667 13.6667 24.6667 12.4667 24.6667 11ZM18.7733 17.4L14 14.3334L9.22667 17.4L10.6667 11.9067L6.28 8.32004L11.9333 7.98671L14 2.73337L16.0533 8.00004L21.7067 8.33337L17.32 11.92L18.7733 17.4Z"/>
        </svg>
      }
    </>
  );
};

TwitchIcon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  big: PropTypes.bool
};

TwitchIcon.defaultProps = {
  color: "#FFFFFF",
  icon: "star",
  big: true
};

export default TwitchIcon;