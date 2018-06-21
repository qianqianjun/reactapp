import React, { Component } from "react";
import { View, Text, StyleSheet, Platform ,FlatList} from "react-native";
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import DoItem from '../app/components/doiteam';

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

/*
 Build a new React Native App and merge it with the TODO App skeleton code from the week 6 tutorials

 Mount this on a simulator and check that you can get it working

 Extend this App to build a list of the todo items from the <App /> component state. Choose you own components and styling for this list

 Add a feature to toggle each todo item as complete or incomplete. Update your
 <App /> component state accordingly as items are toggled

 Convert the <Header /> and <Footer /> components provided to stateless function components and check that your application is still working


 构建一个新的React Native App，并将其与第6周的教程中的TODO App框架代码合并

 将其安装在模拟器上，检查是否可以正常工作

 扩展此应用程序以从<App />组件状态构建待办事项列表。 为此列表选择您自己的组件和样式

 添加一个功能，将每个待办事项切换为完整或不完整。 更新你的
 项目被切换时相应的<App />组件状态

 将提供给无状态函数组件的<Header />和<Footer />组件转换并检查应用程序是否仍在工作

 */
