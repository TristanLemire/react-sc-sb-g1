import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import TwitchButton from "./ui/atoms/Button";
import Icon from "./ui/atoms/Icon";

export default function App() {
  return (
    <div className="App">
      <Badge text="IRL" color={colors.purple} />
      <Badge text="IRL" color={colors.grey} />
      <TwitchButton
        text="hello"
        type="primary"
        color="#9146FF"
        iconLeft="starBadge"
      ></TwitchButton>
      <Icon color="pink"></Icon>
    </div>
  );
}
