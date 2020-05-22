import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import TwitchButton from './ui/atoms/Button'

// icon button : 
import { FaBeer } from 'react-icons/fa';


export default function App() {
      return (
            <div className="App">
                <Badge text="IRL" color={colors.purple}/>
                <Badge text="IRL" color={colors.grey}/>
                <TwitchButton text="hello" type="primary" iconLeft={FaBeer}></TwitchButton>
            </div>
      );
}
