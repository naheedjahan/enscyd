import React, { useState,useEffect } from 'react';
import {Text, View, FlatList, TouchableOpacity, Image,} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import {ScrollView} from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import {getall,updateanswers} from '../../../Redux/action/Action';
import {connect} from 'react-redux';
import {Header} from 'react-native-elements';


const Trafficrule2 = ({navigation, getalldata, getall, getallanswers,updateanswers}) => {
    // const [checked,setchecked]=useState('true')
    useEffect(() => {
      // alert(JSON.stringify(getalldata))
      // alert(JSON.stringify(getallanswers))
// alert(JSON.stringify(getalldata?.question))
// alert(JSON.stringify(getalldata?.image))

      const unsub = getData();
      return () => unsub;
    }, []);
    const getData = async () => {
      try {
        // await getall();
const formdata=new FormData();
formdata.append('test_type_id',1),
formdata.append('group_id',1)

await getall(formdata);
      } catch (err) {
        console.log(err);
      }
    };


    const handlecheckpress = async (item, index) => {
      const updatedanswer = getallanswers.map(i => {
        if (item.id == i.id) {
          if (index == 0) {
            return {
              ...i,
              check1: !i.check1,
            };
          } else {
            return {
              ...i,
              check2: !i.check2,
            };
          }
        }
  return i;
      });
  await updateanswers(updatedanswer)
  }
  const data = [
    {
      id: 0,
      text: 'Two vehicles are approaching each other.Both want to turn left.In Which cases are you not allowed to turn eft in front of each other ?',
      checked: true,
    //   checked1: true,
      title: 'The Truck',
    },
    {
        id: 1,
        text: 'Two vehicles are approaching each other.Both want to turn left.In Which cases are you not allowed to turn eft in front of each other ?',
        checked: true,
      //   checked1: true,
        title: 'The green car',
      },
      {
        id: 2,
        text: 'Two vehicles are approaching each other.Both want to turn left.In Which cases are you not allowed to turn eft in front of each other ?',
        checked: true,
      //   checked1: true,
        title: 'The Yellow car',
      },
  ];

  const renderItem=({item,index})=>{

    return(
        <View style={styles.flatview}>
   <CheckBox
          checked={item.check1}
          checkedColor={'red'}
          uncheckedColor={'green'}
          onPress={() => {
            handlecheckpress(item, 0);
          }}
        />
<View style={styles.checkstyle}>

<Text style={{}}>{item.answer}</Text>

</View>

</View>
    )
  }
  return (
    <View style={{flex:1}}>
    {/* <Header
        backgroundColor={'white'}
        leftComponent={
          <Feather
            onPress={() => navigation.navigate('Dashboard')}
            size={24}
            name={'arrow-left'}></Feather>
        }
        centerComponent={{}}
        rightComponent={{}}
      /> */}
<Image style={styles.imagestyle} source={{uri:getalldata?.image}}>


</Image>
<View style={styles.container}>
<Text style={styles.titletext}>
{getalldata?.question}
</Text>
</View>
<FlatList data={getallanswers}
renderItem={renderItem}>



</FlatList>

<View style={styles.buttonview}>
<TouchableOpacity style={styles.buttonstyle}>
<Text style={styles.textcolor}>
    Help
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonstyle1}>
    <Text style={styles.textcolor}>
    Select
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.goBack()} style={styles.buttonstyle2}><Text style={styles.textcolor}>
    Stop
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonstyle3}><Text style={styles.textcolor}>
    Next
</Text>
</TouchableOpacity>

</View>
    </View>
  );
};
const mapStateToProps = state => {
  const {getalldata, getallanswers} = state.auth;

  return {getalldata, getallanswers};
};
export default connect(mapStateToProps, {getall,updateanswers})(Trafficrule2);
