import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CounterScreen = (props) =>
{
    const [count, setCount] = useState(0);

    return (
        <View>
            <Button title="Increment" onPress={()=>{setCount(count+1);}} />
            <Button title="Decrement" onPress={()=>{setCount(count-1);}} />
            <Text>Current Count: {count}</Text>
        </View>
    );
    
};

const styles = StyleSheet.create(
    {}
);

export default CounterScreen;