import React from 'react';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { colors } from '../ui/molecules/Button';
import TwitchIcon, { icons } from "../ui/atoms/Icon"


export default {
  title: 'Icon',
  component: TwitchIcon,    
  decorators: [withKnobs]
};


const defaultValueColor = colors.brand_primary;

export const Icon = () => <TwitchIcon 
                              color={select("Color", colors, defaultValueColor)} 
                              icon={select("Icon", icons, 'star')} 
                              big={boolean("Big", true)} 
                            />;