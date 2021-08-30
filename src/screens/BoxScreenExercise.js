import React from "react";
import {Text, View, StyleSheet} from 'react-native';


const BoxScreenExercise = () => 
{
    return (
        <View style = {styles.view_style}>
            <View style= {styles.view_1_style} />
            <View style= {styles.view_2_style} />
            <View style= {styles.view_3_style} />
        </View>
    );

};

const styles = StyleSheet.create(
    {
        view_style:
        {
            borderWidth: 4,
            borderColor: 'black',
            //alignItems:'flex-start',  //stretch --> default, also --> flex-start, center, flex-end  WE ADD TO PARENT ELEMENT SO VIEW NOT TEXT
            flexDirection: "row", // columns --> default, also--> row
            height:250,
            justifyContent: "space-between" ,//lays out children along the primary axis (axis flexDirection is set to) flex-start --> default, also --> center, flex-end, space-between, space-around
            alignItems: 'flex-start' // child'lar için default align self

        },
        view_1_style: 
        {
            backgroundColor:'red',
            height:50,
            width:50,

        },
        view_2_style: 
        {
            backgroundColor:'green',
            height:50,
            width:50,
            marginTop:50
        },
        view_3_style: 
        {
            backgroundColor:'blue',
            //position: 'absolute',
            height:50,
            width:50
        }


    }
)

export default BoxScreenExercise;

