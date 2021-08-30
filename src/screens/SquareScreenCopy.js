import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "./components/ColorCounter";
COLOR_INCR = 15

const SquareScreen = ()=>
{
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) =>{
        switch(color)
        {
            case 'red':
                (red + change > 255 || red + change < 0) ? null : setRed(red+change);
                return;
            case 'blue':
                (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change);
                return;
            case 'green':
                (green + change > 255 || green + change < 0) ? null : setGreen(green+change);
                return;
            default:
                return;
        }


    }


    return (
        <View>
            <ColorCounter
                onIncrease = {()=>setColor('red', COLOR_INCR)}
                onDecrease = {()=>setColor('red', -1*COLOR_INCR)}
                color = "Red" />
            <ColorCounter
                onIncrease = {()=>setColor('blue', COLOR_INCR)}
                onDecrease = {()=>setColor('blue', -1*COLOR_INCR)}
                color = "Blue" />
            <ColorCounter
                onIncrease = {()=>setColor('green', COLOR_INCR)}
                onDecrease = {()=>setColor('green', -1*COLOR_INCR)}
                color = "Green" />
            
            <View style={{height:200, width:200, backgroundColor: `rgb(${red}, ${blue}, ${green})`}}/>
        </View>
    )
};



const styles = StyleSheet.create({});

export default SquareScreen;