import React, {useReducer} from 'react'
import {View, Text, StyleSheet, Button, ActionSheetIOS} from 'react-native'


const reducer = (state, action) =>
{
    //state: {count:0}
    //action: {type: (incr, decr), payload: (1,-1)}
    switch(action.type)
    {
        case 'incr':
            return {...state, count: state.count+action.payload};
        case 'decr':
            return {...state, count: state.count-action.payload};
        default:
            return state;
        }
}

const CounterScreen = (props) =>
{
    const [state, dispatch] = useReducer(reducer, {count:0});

    return (
        <View>
            <Button title="Increment" onPress={()=>{dispatch({type: 'incr', payload:1})}  } />
            <Button title="Decrement" onPress={()=>{dispatch({type: 'decr', payload:1})}  } />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
    
};

const styles = StyleSheet.create(
    {}
);

export default CounterScreen;