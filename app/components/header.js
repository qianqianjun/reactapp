import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
      backgroundColor:'#4acc88'
  },
  toggleIcon: {
    fontSize: 30,
    color: "#cc3122"
  },
  input: {
    flex: 1,
    marginLeft: 16,
    height: 50,
      color:'#fff4ed'
  }
})
const Header=(props)=>(
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onToggleAllComplete}>
        <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
      </TouchableOpacity>
      <TextInput
          value={props.value}
          onChangeText={props.onChange}
          onSubmitEditing={props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.input}
      />
    </View>
);
export default Header;