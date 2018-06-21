import React, { Component } from 'react';
import {
  /*Platform,*/
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HelloWorld from './Helloworld';
import LifeCircle from './LifeCircle';
import Banana from './Banana';
type Props = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ff3011',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        marginTop:10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop:20,
        fontSize:18,
        marginBottom: 5,
    },
});


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WorkSheet1
        </Text>
        <Text style={styles.instructions}>
          First lab of the online Reactive Native course
        </Text>
        <Text style={styles.instructions}>
            {(new Date()).toLocaleString("zh-Hans",{month:"long"})}
        </Text>
        <HelloWorld name="小明"/>
        <Banana/>
        <LifeCircle name="小红"/>
      </View>
    );
  }
}


