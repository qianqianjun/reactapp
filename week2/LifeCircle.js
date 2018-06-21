/**
 * Created by Gaoqian on 2018/4/29.
 */
import React ,{Component} from 'react';
import {View,Text} from 'react-native';

export default  class  LifeCircle extends Component{
    constructor(props){
        super(props);
        console.log('***construct***');
    }
     componentWillMount(){
        console.log('***componentWillMount***');
    }
     componentDidMount(){
        console.log('***construct***');
    }
     componentWillReceiveProps(nextProps){
        console.log('***componentDidMount***');
    }
     shouldComponentUpdate(nextProps, nextStates){
        console.log('***shouldComponentUpdate***');
        return true;
    }
     componentWillUpdate(prevProps, prevStatus){
        console.log('***componentWillUpdate***');
    }
     componentWillUnmount(){
        console.log('***componentWillUnmount***');
    }
    render(){
        console.log('***render***');
        return (
          <View>
              <Text style={{fontSize:20,backgroundColor:'red'}}>
                  Hello.{this.props.name}
              </Text>
          </View>
        );
    }
}
