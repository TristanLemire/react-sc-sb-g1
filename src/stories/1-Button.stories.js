import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import TwitchButton, { type } from '../ui/atoms/Button';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Button',
  component: Button,    
  decorators: [withKnobs]
};

export const Button = () => <TwitchButton type={type.primary} text={text("Text", "Primary Button")} ></TwitchButton>;

Button.story = {
  parameters: {
     design: {
        type: 'figma',
        url: 'https://www.figma.com/file/S2kl75dqM33oYg3tzqzShp/Module-Design-System?node-id=7%3A718'
     }
  }
}