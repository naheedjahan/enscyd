import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import {ScrollView} from 'react-native-gesture-handler';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {getall,updateanswers} from '../../../Redux/action/Action';
import {connect} from 'react-redux';

const Trafficrule1 = ({navigation, getalldata, getall, getallanswers,updateanswers}) => {
  const [check1, setcheckData1] = useState(true);

  useEffect(() => {
    // alert(JSON.stringify(getalldata?.answer))
    // alert(JSON.stringify(getallanswers))
    const unsub = getData();
    return () => unsub;
  }, []);
  const getData = async () => {
    try {
      await getall();
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

  const renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1, marginRight: 10, flexDirection: 'row'}}>
        <CheckBox
          checked={item.check1}
          checkedColor={'red'}
          uncheckedColor={'green'}
          onPress={() => {
            handlecheckpress(item, 0);
          }}
        />
        {/* <CheckBox
          checked={item.check2}
          checkedColor={'red'}
          uncheckedColor={'green'}
          onPress={() => {
            handlecheckpress(item, 1);
          }}
        /> */}

        <Text style={{marginTop: 15}}>{item.answer}</Text>
      </View>
    );
  };


  return (
    <View style={{flex: 1}}>
      <Header
        backgroundColor={'white'}
        leftComponent={
          <Feather
            onPress={() => navigation.navigate('Dashboard')}
            size={24}
            name={'arrow-left'}></Feather>
        }
        centerComponent={{}}
        rightComponent={<Text>3 points</Text>}
      />
      <View style={styles.container}>
        <Text style={{margin: 10, color: 'white'}}>{getalldata?.question}</Text>
      </View>

      <FlatList data={getallanswers} renderItem={renderItem} keyExtractor={(item)=>item}/>

      <View
        style={{
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          position: 'absolute',
        }}

        >
        <TouchableOpacity style={styles.buttonstyle}>
          <Text style={styles.textcolor}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle1}>
          <Text style={styles.textcolor}>Select</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.buttonstyle2}>
          <Text style={styles.textcolor}>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Trafficrule2')}
          style={styles.buttonstyle3}>
          <Text style={styles.textcolor}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {getalldata, getallanswers} = state.auth;

  return {getalldata, getallanswers};
};
export default connect(mapStateToProps, {getall,updateanswers})(Trafficrule1);
