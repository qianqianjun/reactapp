import React, { Component } from "react";
import { View, Text, StyleSheet, Platform ,FlatList} from "react-native";
import Header from './app/components/header';
import Footer from './app/components/footer';
import DoItem from './app/components/doiteam';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplete: false,
      value: "",
      items: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);

  }
  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }));
    this.setState({
      items: newItems,
      allComplete: complete
    });

  }
  handleAddItem() {
    if (!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: (new Date()).toLocaleString(),
        text: this.state.value,
        complete: false
      }
    ];
    this.setState({
          items: newItems,
          value: ""
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header 
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value) => {
              this.setState({
                  value
              });
             }
          }
          onToggleAllComplete={this.handleToggleAllComplete}
        />
        <View style={styles.content}>
          <FlatList
              style={styles.list}
              data={this.state.items}
              renderItem={({item}) =>
                  <DoItem
                      text={item.text}
                      date={item.key}
                      title={item.complete?'Undone':'Done'}
                      done={item.complete}
                      handles={()=>{
                        const str=item.key;
                        const judge=(it)=>{
                          if(it.key===str)
                            it.complete=!it.complete;
                          return it;
                        };
                        let newItem=this.state.items.map(judge);
                        this.setState({
                              items:newItem,
                          });
                      }}
                  />
              }
          />
        </View>
        <Footer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38f5f0",
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1
  }
});
export default App;
