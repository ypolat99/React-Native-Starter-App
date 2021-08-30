import React, {useReducer} from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "./components/ColorCounter";
COLOR_INCR = 15

//Action --> How to Change State Object 
const reducer = (state, action) =>
{
    // state = {red:0,  green:0, blue:0}
    // action = {type: (change_red, change_green, change_blue, payload: (15,-15))}

    switch (action.type)
    {
        case 'change_red':
            //never going to change state.red directly
            return (state.red + action.payload > 255 || state.red + action.payload  <0) ? state : {...state, red: state.red + action.payload };        
        case 'change_green':
            return (state.green + action.payload  > 255 || state.green + action.payload  <0) ? state : {...state, green: state.green + action.payload };   
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload  <0) ? state : {...state, blue: state.blue + action.payload };   
        default:    
            return state;
    }

        
}

const SquareScreen = ()=>
{
    //dispatch : better name: RUN MY REDUCER
    const [state, dispatch] = useReducer(reducer, {red:0, blue:0, green:0});
    const {red, green, blue} = state;



    return (
        <View>
            <ColorCounter
                onIncrease = {()=> dispatch({type: 'change_red', payload: COLOR_INCR})}
                onDecrease = {()=> dispatch({type: 'change_red', payload: -1*COLOR_INCR})}
                color = "Red" />                
            <ColorCounter
                onIncrease = {()=> dispatch({type: 'change_green', payload: COLOR_INCR})}
                onDecrease = {()=> dispatch({type: 'change_green', payload: -1*COLOR_INCR})}
                color = "Green" />
            <ColorCounter
                onIncrease = {()=> dispatch({type: 'change_blue', payload: COLOR_INCR})}
                onDecrease = {()=> dispatch({type: 'change_blue', payload: -1*COLOR_INCR})}
                color = "Blue" />

            
            <View style={{height:200, width:200, backgroundColor: `rgb(${red},  ${green},${blue})`}}/>
        </View> 
    )
};



const styles = StyleSheet.create({});

export default SquareScreen;