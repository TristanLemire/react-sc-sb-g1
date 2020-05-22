import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

Text.story = {
  parameters: {
     design: {
        type: 'figma',
        url: 'https://www.figma.com/file/S2kl75dqM33oYg3tzqzShp/Module-Design-System?node-id=7%3A718'
     }
  }
}

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
