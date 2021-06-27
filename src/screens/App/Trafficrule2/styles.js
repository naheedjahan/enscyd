import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'
const height=Dimensions.get('window').height
const styles=StyleSheet.create({
    container:{
backgroundColor:'red',
height:height/16,justifyContent:'center',alignContent:'center',margin:10
    },
    textcolor:{
        color:'white'
    },
    buttonstyle:{margin:10,backgroundColor:'red',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    buttonstyle1:{margin:10,backgroundColor:'blue',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    buttonstyle2:{margin:10,backgroundColor:'green',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    buttonstyle3:{margin:10,backgroundColor:'grey',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    checkstyle:{height:50,width:'80%',justifyContent:'center',},
    flatview:{flex:1,marginRight:10,marginTop:10,flexDirection:'row'},
textstyles:{width:'80%',fontWeight:'bold'},
imagestyle:{height:'40%',width:'100%'},
titletext:{margin:10,color:'white'},
buttonview:{bottom:20,height:60,flexDirection:'row'}



})
export default styles;