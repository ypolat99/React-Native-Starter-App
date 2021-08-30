import React from "react";
import {Text, View, StyleSheet} from 'react-native';


const BoxScreen = () => 
{
    return (
        <View style = {styles.view_style}>
            <Text style= {styles.text_1_style}>Child #1</Text>
            <Text style= {styles.text_2_style}>Child #2</Text>
            <Text style= {styles.text_3_style}>Child #3</Text>
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
            //flexDirection: "row", // columns --> default, also--> row
            height:100,
            //justifyContent: "flext-start" ,//lays out children along the primary axis (axis flexDirection is set to) flex-start --> default, also --> center, flex-end, space-between, space-around
            alignItems: 'center' // child'lar için default align self

        },
        text_1_style: 
        {
            borderWidth:3,
            borderColor: 'red',
            //marginVertical:20,
            //marginHorizontal:10 
            //margin:20,
            flex:1, //1,2,3,4 gibi sayı alır -->4,4,2 varsa 2 kişi %40 1 kişi %20 alır
            //alignSelf: 'flex-start'



        },
        text_2_style: 
        {
            borderWidth:3,
            borderColor: 'red',
            flex:1,
            //alignSelf: 'center', //flex-end, center, flex-start, stretch
            //position: 'absolute', //default --> relative, other --> absolute
            //top, bottom, left, right --> bunu oynatır geri kalanlar sbit kalır
            top: 0,
            bottom:0,
            left:0,
            right:0,
            position: 'absolute',
            // yukardaki 5'i yerine: 
            ...StyleSheet.absoluteFillObject

    
        },
        text_3_style: 
        {
            borderWidth:3,
            borderColor: 'red',
            //flex:1
  
        }


    }
)

export default BoxScreen;

