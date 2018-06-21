/**
 * Created by Gaoqian on 2018/5/3
 * */
import React ,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    head:{
        width:70,
        height:70,
        padding:10,
    },
    col:{
        flex:1,
        flexDirection:'column',
        marginTop:20,
    },
    row:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    instruction:{
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginLeft:30,
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        paddingTop:20,
        paddingBottom:10,
        textAlign:'center',
        backgroundColor:'#47fdd1',
    },
    list:{
        padding:10,
        backgroundColor:'#cbfdfa'
    },
    separator:{
        borderBottomWidth:2,
        borderBottomColor:'red',
        padding:2,
        height:100,
        width:100,
    },
    footer:{
        color:'red',
        textAlign:'center',
        padding:10,
    },
    button:{
        fontSize:15,
        backgroundColor:'#de24e680',
        padding:8,
        borderWidth:2,
        borderRadius:5,
        marginLeft:15,
        borderColor:'white',
        position:'absolute',
        right:2,
        color:'white',
    },
    info:{
        fontSize:20,
        color:'red',
        padding:4,
    },
    detail:{
        display:'flex',
    }
});
const DoItem=(props)=> (
    <View style={styles.col}>
        <View style={[styles.row]}>
            <Text style={styles.instruction}>Detail: {props.text}</Text>
        </View>
        <View style={[styles.row]}>
            <Text style={styles.instruction}>Time:{props.date}</Text>
        </View>
        <View style={[styles.row]}>
            <Text style={styles.instruction}>Status:{props.done?'Done':'Undone'}</Text>
        </View>
        <Text onPress={props.handles} style={[styles.button]}>
            {props.title}
        </Text>
    </View>
);
export default DoItem;