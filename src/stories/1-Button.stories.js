import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import TwitchButton, { type } from '../ui/atoms/Button';
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: 'Button',
  component: Button,    
  decorators: [withKnobs]
};

const options = {
  primary: "primary",
  secondary: "secondary",
  icon: "icon",
};
const defaultValue = 'primary';

export const Button = () => <TwitchButton type={select("Type", options, defaultValue)} text={text("Text", "Primary Button")} ></TwitchButton>;

Button.story = {
  parameters: {
     design: {
        type: 'figma',
        url: 'https://www.figma.com/file/S2kl75dqM33oYg3tzqzShp/Module-Design-System?node-id=7%3A718'
     }
  }
}