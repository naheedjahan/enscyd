import {StyleSheet,Dimensions} from 'react-native';
import { colors } from 'react-native-elements';
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
import color from '../../../theme/color'

const styles=StyleSheet.create({

    Container:{
        flex:1,
   },
   logo:{
height:height/4,
width:'100%',
backgroundColor:'red',

justifyContent:'center',
alignContent:'center',
alignItems:'center'
   },
   logoimg:{
height:'60%',width:'60%',
marginTop:30
   },
   text:{
    alignItems:'center',
    height:height/12,


    marginTop:-15,
   },
   weltext:{
fontSize:20,
color:'black'

   },
   weltext1:{
    fontSize:14,
    color:'grey'

       },textinput:{
        //    justifyContent:'center',
marginLeft:15,
marginRight:15,
height:height/4.5,

alignContent:'center',
padding:10
       },
       input:{
           borderWidth:0.5,
borderColor:'grey',
margin:10,
backgroundColor:'red'
       },
       viewinput:{
         flexDirection: 'row',
         width: '100%',
         borderColor: 'grey',
         marginTop: 10,
         height: 50,
         borderWidth:0.5,
         backgroundColor:'white'
       },
       emailfield:{
         marginTop: 2,
         fontSize: 12,

width:'90%'
       },
         loginbutton:{backgroundColor:'red',height:40,marginLeft:26,marginRight:26,justifyContent:'center',alignContent:'center',alignItems:'center',},
         textlogin:{color:'white',fontWeight:'bold'},


ortext:{color:'grey'},
textwelcome:{color:'white',fontSize:40},
imageback:{
height:'100%',
width:'100%'
},
textlangah:{position:'absolute',bottom:0,justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:'red',width:'100%'},
langahtext:{color:'white'}
})

export default styles;