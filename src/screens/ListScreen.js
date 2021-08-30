import React from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () =>
{
    const friends = [
        {name: "Friend #1", age: 11},
        {name: "Friend #2", age: 22},
        {name: "Friend #3", age: 33},
        {name: "Friend #4", age: 44},
        {name: "Friend #5", age: 55},
        {name: "Friend #6", age: 66},
        {name: "Friend #7", age: 77},
        {name: "Friend #8", age: 88},
        {name: "Friend #9", age: 99},


    ];
    return (
        <FlatList 
        keyExtractor = {(friend) => friend.name }
        data = {friends} 
        renderItem = {({item}) => 
            {
                return <Text style = {styles.textStyle}> {item.name} - {item.age}</Text> 
            } }
        />

       
    );
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical:50
    }
});

export default ListScreen;