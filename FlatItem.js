import React ,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
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
        fontSize:15,
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
export default class FlatItem extends Component{
    constructor(props){
        super(props);
        this.state={
            displayType:'flex',
            count:0,
            title:['详细','简略'],
            detail:['none','flex'],
        }
    }
    render(){
        return (
            <View style={[styles.col,{display:this.state.displayType,}]}>
                <View style={[styles.row,]}>
                    <Image source={{uri:this.props.avatar_url}} style={styles.head}/>
                    <Text style={styles.instruction}>{this.props.name}</Text>
                    <Text onPress={()=>{
                        this.setState({
                            displayType:'none',
                        });
                    }}
                          style={[styles.button,{right:60}]}
                    >删除</Text>
                    <Text onPress={()=>{
                        this.setState({
                            count:(this.state.count+1)%2,
                        });
                    }} style={[styles.button,]}>{this.state.title[this.state.count]}
                    </Text>
                </View>
                <View style={[styles.detail,{display:this.state.detail[this.state.count]}]}>
                    <Text style={styles.info}>登陆昵称:{this.props.login}</Text>
                    <Text style={styles.info}>博客地址:{this.props.blog}</Text>
                    <Text style={styles.info}>居住地址:{this.props.location}</Text>
                </View>
            </View>
        )
    }
};