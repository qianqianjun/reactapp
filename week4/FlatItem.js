import React ,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import {List,ListItem} from 'react-native-elements';
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
const follows=[
    {
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "defunkt",
        "id": 2,
        "node_id": "MDQ6VXNlcjI=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
        "organizations_url": "https://api.github.com/users/defunkt/orgs",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
        "received_events_url": "https://api.github.com/users/defunkt/received_events",
        "type": "User",
        "site_admin": true
    },
    {
        "login": "wycats",
        "id": 4,
        "node_id": "MDQ6VXNlcjQ=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/wycats",
        "html_url": "https://github.com/wycats",
        "followers_url": "https://api.github.com/users/wycats/followers",
        "following_url": "https://api.github.com/users/wycats/following{/other_user}",
        "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
        "organizations_url": "https://api.github.com/users/wycats/orgs",
        "repos_url": "https://api.github.com/users/wycats/repos",
        "events_url": "https://api.github.com/users/wycats/events{/privacy}",
        "received_events_url": "https://api.github.com/users/wycats/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "ezmobius",
        "id": 5,
        "node_id": "MDQ6VXNlcjU=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/5?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ezmobius",
        "html_url": "https://github.com/ezmobius",
        "followers_url": "https://api.github.com/users/ezmobius/followers",
        "following_url": "https://api.github.com/users/ezmobius/following{/other_user}",
        "gists_url": "https://api.github.com/users/ezmobius/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ezmobius/subscriptions",
        "organizations_url": "https://api.github.com/users/ezmobius/orgs",
        "repos_url": "https://api.github.com/users/ezmobius/repos",
        "events_url": "https://api.github.com/users/ezmobius/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ezmobius/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "evanphx",
        "id": 7,
        "node_id": "MDQ6VXNlcjc=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/7?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/evanphx",
        "html_url": "https://github.com/evanphx",
        "followers_url": "https://api.github.com/users/evanphx/followers",
        "following_url": "https://api.github.com/users/evanphx/following{/other_user}",
        "gists_url": "https://api.github.com/users/evanphx/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/evanphx/subscriptions",
        "organizations_url": "https://api.github.com/users/evanphx/orgs",
        "repos_url": "https://api.github.com/users/evanphx/repos",
        "events_url": "https://api.github.com/users/evanphx/events{/privacy}",
        "received_events_url": "https://api.github.com/users/evanphx/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "technoweenie",
        "id": 21,
        "node_id": "MDQ6VXNlcjIx",
        "avatar_url": "https://avatars3.githubusercontent.com/u/21?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/technoweenie",
        "html_url": "https://github.com/technoweenie",
        "followers_url": "https://api.github.com/users/technoweenie/followers",
        "following_url": "https://api.github.com/users/technoweenie/following{/other_user}",
        "gists_url": "https://api.github.com/users/technoweenie/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/technoweenie/subscriptions",
        "organizations_url": "https://api.github.com/users/technoweenie/orgs",
        "repos_url": "https://api.github.com/users/technoweenie/repos",
        "events_url": "https://api.github.com/users/technoweenie/events{/privacy}",
        "received_events_url": "https://api.github.com/users/technoweenie/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "macournoyer",
        "id": 22,
        "node_id": "MDQ6VXNlcjIy",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/macournoyer",
        "html_url": "https://github.com/macournoyer",
        "followers_url": "https://api.github.com/users/macournoyer/followers",
        "following_url": "https://api.github.com/users/macournoyer/following{/other_user}",
        "gists_url": "https://api.github.com/users/macournoyer/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/macournoyer/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/macournoyer/subscriptions",
        "organizations_url": "https://api.github.com/users/macournoyer/orgs",
        "repos_url": "https://api.github.com/users/macournoyer/repos",
        "events_url": "https://api.github.com/users/macournoyer/events{/privacy}",
        "received_events_url": "https://api.github.com/users/macournoyer/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "nex3",
        "id": 188,
        "node_id": "MDQ6VXNlcjE4OA==",
        "avatar_url": "https://avatars0.githubusercontent.com/u/188?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/nex3",
        "html_url": "https://github.com/nex3",
        "followers_url": "https://api.github.com/users/nex3/followers",
        "following_url": "https://api.github.com/users/nex3/following{/other_user}",
        "gists_url": "https://api.github.com/users/nex3/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/nex3/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/nex3/subscriptions",
        "organizations_url": "https://api.github.com/users/nex3/orgs",
        "repos_url": "https://api.github.com/users/nex3/repos",
        "events_url": "https://api.github.com/users/nex3/events{/privacy}",
        "received_events_url": "https://api.github.com/users/nex3/received_events",
        "type": "User",
        "site_admin": false
    }
];
export default class FlatItem extends Component{
    constructor(props){
        super(props);
        this.state={
            displayType:'flex',
            count:0,
            title:['flowing','fold'],
            detail:['none','flex'],
            follow:follows,
        }
    }
    // componentDidMount()
    // {
    //     fetch(`https://api.github.com/users/${this.props.login}/following`)
    //         .then((response) => response.text())
    //         .then((responseText)=>{
    //             const json=JSON.parse(responseText);
    //             this.setState({
    //                 follow:json,
    //             })
    //         })
    //         .catch((error)=>console.log(error));
    // }
    render(){
        return (
            <View style={[styles.col,{display:this.state.displayType,}]}>
                <View style={[styles.row,]}>
                    <Image source={{uri:this.props.avatar_url}} style={styles.head}/>
                    <Text style={styles.instruction}>{this.props.name}</Text>
                    <Text onPress={this.props.handles}
                          style={[styles.button,{right:80}]}
                    >删除</Text>
                    <Text onPress={()=>{
                        this.setState({
                            count:(this.state.count+1)%2,
                        });
                    }} style={[styles.button,]}>{this.state.title[this.state.count]}
                    </Text>
                </View>
                <View style={[styles.detail,{display:this.state.detail[this.state.count]}]}>
                    <List containerStyle={{marginBottom: 20}}>
                        {
                            this.state.follow.map((l, i) => (
                                <ListItem
                                    roundAvatar
                                    avatar={{uri:l.avatar_url}}
                                    key={i}
                                    title={l.login}
                                />
                            ))
                        }
                    </List>
                </View>
            </View>
        )
    }
};

/*<Text onPress={()=>{
    this.setState({
        displayType:'none',
    });

}}
      style={[styles.button,{right:60}]}
>删除</Text>*/

/*
 <List>
 {
 this.state.follow.map((item, i) => (
 <ListItem
 key={i}
 title={item.login}
 leftIcon={{name: item.avatar_url}}
 />
 ))
 }
 </List>
 */