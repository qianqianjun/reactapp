import React ,{Component} from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
export default class App extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            data:[],
            total:5,
            from:2,
        }
    }
    componentDidMount()
    {
        fetch(`http://www.buctsnc.club/react/public/index.php/index/getword?total=${this.state.total}&&page=${this.state.from}`)
                .then((response) => response.text())
                .then((responseText)=>{
                    const json=JSON.parse(responseText);
                    this.setState({
                        data:json,
                    })
                })
    }
    render(){
        return(
        <View>
            <Text>{JSON.stringify(this.state.data)}</Text>
        </View>);
    }
}