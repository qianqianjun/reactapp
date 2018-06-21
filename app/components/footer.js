import React, { Component } from "react";
import { View, Text, StyleSheet ,Dimensions} from "react-native";
const Footer=()=>(
    <View style={styles.container}>
      <Text style={styles.info}>Mobile Web Technology 2018</Text>
    </View>
    );
const styles=StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:'#7dcdf7',
        justifyContent:'center',
        width:Dimensions.get("window").width,
        height:45,
    },
    info:{
      fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
    }
});

export default Footer;