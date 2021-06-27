import {Dimensions, StyleSheet} from 'react-native'
const height=Dimensions.get('window').height
const styles=StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'white'
},
progessbarview:{
    height:height/10 ,
    backgroundColor:'red',
    marginTop:-1,
justifyContent:'center',
flexDirection:'row',
},
inseideprogress:{
flexDirection:'row'
},
colorprogress:{
height:5,width:5,backgroundColor:'green',borderRadius:100,margin:5
},
colorprogress1:{
    height:5,width:5,backgroundColor:'red',borderRadius:100,margin:5
    },
    colorprogress2:{
        height:5,width:5,backgroundColor:'black',borderRadius:100,margin:5
        },
    textstyle:{
fontSize:10,
marginLeft:-3
    },
    textstyle1:{
        fontSize:10,
marginLeft:5
            },
            textprogress:{
                marginTop:5,
                fontWeight:'bold'
            },
            viewbar:{
                height:height/4,flexDirection:'row',marginTop:-50,justifyContent:'center'
            },
            renderview:{
borderWidth:1,height:150,width:'100%',
            },titleview:{
borderRightWidth:1,height:150,width:'50%',justifyContent:'center',alignItems:'center',
            },
            textlangah:{position:'absolute',bottom:0,justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:'red',width:'100%',height:40},
            langahtext:{color:'white'}
        })

export default styles;