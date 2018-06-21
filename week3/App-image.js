import React ,{Component} from 'react';
import {Image,StyleSheet,View,Dimensions} from 'react-native';

const bottomGetter=10,borderSize=4;
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
    },
    oneImage:{
        width:width,
        height:(height-bottomGetter-5*borderSize)/6,
        backgroundColor:'white',
    },
    twoImage:{
        width:(width-borderSize)/2,
        height:(height-bottomGetter-5*borderSize)/6,
        backgroundColor:'white',
    },
    threeImage:{
        width:(width-2*borderSize)/3,
        height:(height-bottomGetter-5*borderSize)/6,
        backgroundColor:'white',
    },
    left:{
        marginRight:borderSize/2,
        paddingTop:borderSize/2,
        paddingBottom:borderSize/2,
    },
    center:{
        marginLeft:borderSize/2,
        marginRight:borderSize/2,
        paddingTop:borderSize/2,
        paddingBottom:borderSize/2,
    },
    right:{
        marginLeft:borderSize/2,
        paddingTop:borderSize/2,
        paddingBottom:borderSize/2,
    },
    top:{
        marginBottom:borderSize/2,
    },
    bottom:{
        marginTop:borderSize/2,
    },
    rows:{
        flex:1,
        flexDirection:'row',
    },
        
});
const ImageCell=(props)=>(
    <View style={props.style}>
        <Image source={props.url}/>
    </View>
);
const url="../images/one.jpg";
export default class App extends Component {
    render()
    {
        return(
        <View style={styles.container}>
            <View style={[styles.rows,styles.top]}>
                <ImageCell url={require(url)} style={styles.oneImage}/>
            </View>
            <View style={[styles.rows]}>
                <ImageCell url={require(url)} style={[styles.twoImage,styles.left]}/>
                <ImageCell url={require(url)} style={[styles.twoImage,styles.right]}/>
            </View>
            <View style={[styles.rows]}>
                <ImageCell url={require(url)} style={[styles.threeImage,styles.left]}/>
                <ImageCell url={require(url)} style={[styles.threeImage,styles.center]}/>
                <ImageCell url={require(url)} style={[styles.threeImage,styles.right]}/>
            </View>
            <View style={[styles.rows]}>
                <ImageCell url={require(url)} style={[styles.threeImage,styles.left]}/>
                <ImageCell url={require(url)} style={[styles.threeImage,styles.center]}/>
                <ImageCell url={require(url)} style={[styles.threeImage,styles.right]}/>
            </View>
            <View style={[styles.rows]}>
                <ImageCell url={require(url)} style={[styles.twoImage,styles.left]}/>
                <ImageCell url={require(url)} style={[styles.twoImage,styles.right]}/>
            </View>
            <View style={[styles.rows,styles.bottom]}>
                <ImageCell url={require(url)} style={styles.oneImage}/>
            </View>
        </View>
        );
    }
}

