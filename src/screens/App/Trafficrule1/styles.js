import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'
const height=Dimensions.get('window').height
const styles=StyleSheet.create({
    container:{
backgroundColor:'red',
height:height/12,justifyContent:'center',alignContent:'center'
    },
    textcolor:{
        color:'white'
    },
    buttonstyle:{margin:10,backgroundColor:'red',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    buttonstyle1:{margin:10,backgroundColor:'blue',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    buttonstyle2:{margin:10,backgroundColor:'green',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'},
    buttonstyle3:{margin:10,backgroundColor:'grey',height:35,width:70,justifyContent:'center',alignContent:'center',alignItems:'center'}



})
export default styles;