import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = ()=>
{
    const [name, setName] = useState("");

    return(
        <View>
            <Text>Enter Name: </Text>

            <TextInput 
            style={styles.input}
            autoCapitalize= 'none'
            autoCorrect={false} 
            value = {name}
            onChangeText = {new_value => setName(new_value) }/>
            <Text>Your name is: {name}</Text>
            {name.length < 5 ? <Text>Name must be longer than 5 characters...</Text> : null}


        </View>
    );

};


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;