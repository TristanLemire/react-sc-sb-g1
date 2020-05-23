import React from "react";
import { action } from "@storybook/addon-actions";
import TwitchButton, { type, colors } from "../ui/molecules/Button";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { icons } from "../ui/atoms/Icon";

export default {
  title: "Button",
  component: TwitchButton,
  decorators: [withKnobs],
};

const defaultValueType = "primary";

const defaultValueColor = colors.brand_primary;

export const Button = () => (
  <TwitchButton
    color={select("Color", colors, defaultValueColor)}
    type={select("Type", type, defaultValueType)}
    text={text("Text", "Primary Button")}
    disabled={boolean("Disabled", false)}
    iconLeft={select("Icon left", icons, icons.default)}
    iconRight={select("Icon right", icons, icons.default)}
    handleClick={action("button-click")}
  />
);

Button.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/gDnVcUOSYBKxazEpu2tg62/TP_AtomicDesign?node-id=1%3A2",
    },
  },
};
