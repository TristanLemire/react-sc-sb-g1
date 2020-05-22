import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import TwitchButton from './ui/atoms/Button'

export default function App() {
      return (
            <div className="App">
                <Badge text="IRL" color={colors.purple}/>
                <Badge text="IRL" color={colors.grey}/>
                <TwitchButton text="hello" type="primary"></TwitchButton>
            </div>
      );
}
