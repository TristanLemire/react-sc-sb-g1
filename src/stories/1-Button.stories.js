import React from 'react';
import { action } from '@storybook/addon-actions';
import TwitchButton, { type, colors } from '../ui/molecules/Button';
import { withKnobs, text, select,boolean } from "@storybook/addon-knobs";

export default {
  title: 'Button',
  component: TwitchButton,    
  decorators: [withKnobs]
};

const icons = {
  default: "",
  star: "star",
  starBadge: "starBadge"
}

const defaultValueType = 'primary';

const defaultValueColor = colors.brand_primary;

export const Button = () => <TwitchButton 
                              color={select("Color", colors, defaultValueColor)} 
                              type={select("Type", type, defaultValueType)} 
                              text={text("Text", "Primary Button")} 
                              disabled={boolean("Disabled", false)}
                              iconLeft={select("Icon left", icons, icons.default)}
                              iconRight={select("Icon right", icons, icons.default)}
                              onClick={() => {action('test')}}
                            />;

Button.story = {
  parameters: {
     design: {
        type: 'figma',
        url: 'https://www.figma.com/file/S2kl75dqM33oYg3tzqzShp/Module-Design-System?node-id=7%3A718'
     }
  }
}