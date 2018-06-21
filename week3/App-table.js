import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    thead: {
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'white',
        borderWidth:1,
        flex:1,
        height:50,
        textAlign:'center',
    },
    tbody:{
        color:'black',
        fontSize:25,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        borderWidth:1,
        flex:1,
        height:50,
        textAlign:'center',
    },
    root:{
        flexDirection:'column',
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
        height:50
    },
    imageSet:{
        flexDirection:'row',
    },
    imageCol:{
        flexDirection:'column',
    },
});
const Td=(props)=>(
    <Text style={props.css}>
        {props.value}
    </Text>
);
const Table=()=>(
    <View style={styles.root}>
        <View style={styles.row}>
            <Td value= {'Lastname'} css= {styles.thead}/>
            <Td value= {'Firstname'} css= {styles.thead}/>
            <Td value= {'City'} css= {styles.thead}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data1'} css= {styles.tbody}/>
            <Td value= {'data2'} css= {styles.tbody}/>
            <Td value= {'data3'} css= {styles.tbody}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data4'} css= {styles.tbody}/>
            <Td value= {'data5'} css= {styles.tbody}/>
            <Td value= {'data6'} css= {styles.tbody}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data7'} css= {styles.tbody}/>
            <Td value= {'data8'} css= {styles.tbody}/>
            <Td value= {'data9'} css= {styles.tbody}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data10'} css= {styles.tbody}/>
            <Td value= {'data11'} css= {styles.tbody}/>
            <Td value= {'data12'} css= {styles.tbody}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data13'} css= {styles.tbody}/>
            <Td value= {'data14'} css= {styles.tbody}/>
            <Td value= {'data15'} css= {styles.tbody}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data16'} css= {styles.tbody}/>
            <Td value= {'data17'} css= {styles.tbody}/>
            <Td value= {'data18'} css= {styles.tbody}/>
        </View>
        <View style={styles.row}>
            <Td value= {'data19'} css= {styles.tbody}/>
            <Td value= {'data20'} css= {styles.tbody}/>
            <Td value= {'data21'} css= {styles.tbody}/>
        </View>
    </View>
);
const App=()=>(
    <View>
        <Table/>
    </View>
);
export default App;