//Wenyu.S
//20180525
//Worksheet4a
//item

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    Button,
    TouchableOpacity
  } from 'react-native';


export default class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            fol: 'none',  //It means that the current state is folded.
            del: 'flex',
            show: "Detail"
        }
    }
    toDelete=()=>{
        alert(this.state.del);
        this.setState({
            del:'none',
        });
        alert(this.state.del);
    };
    toFold=()=>{
        if(this.state.fol==='flex'){
            this.setState=({
                fol: 'none',
                show: "Detail"
            })
        }
        else{
            this.setState=({
                fol: 'flex',
                show: "Short"
            })
        }
    }
    render(){
        return(
            <View style={[styles.bigger,{display: this.state.del}]}>
                <View style={styles.smaller}>
                    <Image //to show the avatar
                        source={{uri:this.props.avatarurl}}
                        style={styles.image}
                    /> 
                    <Text style={styles.namecss}>{this.props.name}</Text>

                    <TouchableOpacity style={styles.deletecss} onPress={this.toDelete}>
                        <Text style={styles.deletetext}>{"Delete"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.foldcss} onPress={this.toFold}>
                        <Text style={styles.foldtext}>{this.state.show}</Text>
                    </TouchableOpacity>

                </View>
                <View style={[styles.detailcss,{display:this.state.fol}]}>
                    <Text style={styles.textcss}>Login:   {this.props.login}</Text>
                    <Text style={styles.textcss}>Blog:   {this.props.blog}</Text>
                    <Text style={styles.textcss}>Location:   {this.props.location}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    bigger:{
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    smaller:{
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    image:{
        width: 55,
        height: 55,
        borderRadius: 90,
    },
    namecss:{
        color: 'black',
        fontSize: 15,
        marginLeft: 6,
        marginTop: 13
    },
    deletecss:{
        width: 50,
        height: 20,
        borderWidth: 1,
        marginTop: 25,
        // marginLeft: 13,
        position: 'absolute',
        right: 75     
             
    },
    deletetext:{
        color: 'black',
        fontSize: 15,
        marginLeft: 3
    },
    foldcss:{
        width: 50,
        height: 20,
        borderWidth: 1,
        marginTop: 25,
        // marginLeft: 10 ,
        position: 'absolute',
        right: 15         
        
    },
    foldtext:{
        color: 'black',
        fontSize: 15,
        marginLeft: 3
    },
    detailcss:{
        width: Dimensions.get('window').width,
        //height: 75,
        flex: 1,
        flexDirection: 'column',
        //paddingLeft: 20,
        //paddingTop: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        //display: 'flex'
    },
    textcss:{
        fontSize: 10,
        color: 'black'
    }

})