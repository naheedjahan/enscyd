import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-gesture-handler';
import color from '../../../theme/color';
const Topicsheet = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const data = [
    {
      id: 0,
      title: 'Danger/hazird awareness',
      onPress: 'Trafficrule1',
      src: require('../../../assets/danger.png'),
      icontype: Feather,
      icon: 'smile',
    },
    {
      id: 1,
      title: 'What to do as a road user',
      onPress: 'Login',
      src: require('../../../assets/questionmark.png'),
    },
    {
      id: 2,
      title: 'Right-of-way/Priority',
      onPress: 'Login',
      src: require('../../../assets/direction.png'),
    },
    {
      id: 3,
      title: 'Traffic signs',
      onPress: 'Login',
      src: require('../../../assets/traffic.png'),
    },
    {
      id: 4,
      title: 'Environmental Protection',
      onPress: 'Login',
      src: require('../../../assets/enviromentally.png'),
    },
    {
      id: 5,
      title: 'Technical aspects',
      onPress: 'Login',
      src: require('../../../assets/technical.png'),
    },
    {
      id: 4,
      title: 'Fitness and qualification of motor-vehicle operators',
      onPress: 'Login',
      src: require('../../../assets/technicall.png'),
    },
    {
      id: 5,
      title: 'Regulation of the operation of vehicle ',
      onPress: 'Login',
      src: require('../../../assets/administrator.png'),
    },
  ];

  const groupdata = [
    {
      id: 0,
      gname: 'G1',
      color: 'white',
      colotext: 'black',
      // onPress:{toggleModal}
    },
    {
      id: 1,
      gname: 'G1',
      color: 'white',
      colotext: 'black',
      // onPress:'Trafficrule1'
    },
    {
      id: 2,
      gname: 'G2',
      color: 'green',
      colotext: 'white',
    },
    {
      id: 3,
      gname: 'G3',
      color: 'green',
      colotext: 'white',
    },
    {
      id: 4,
      gname: 'G4',
      color: 'red',
      colotext: 'white',
    },
    {
      id: 5,
      gname: 'G5',
      color: 'white',
      colotext: 'black',
    },
    {
      id: 2,
      gname: 'G6',
      color: 'red',
      colotext: 'white',
    },
    {
      id: 3,
      gname: 'G7',
      color: 'red',
      colotext: 'white',
    },
    {
      id: 4,
      gname: 'G8',
      color: 'red',
      colotext: 'white',
    },
    {
      id: 5,
      gname: 'G9',
      color: 'white',
      colotext: 'black',
    },
    {
      id: 2,
      gname: 'G10',
      color: 'green',
      colotext: 'white',
    },
    {
      id: 3,
      gname: 'z1',
      color: 'red',
      colotext: 'white',
    },
    {
      id: 4,
      gname: 'z2',
      color: 'green',
      colotext: 'white',
    },
    {
      id: 5,
      gname: 'z3',
      color: 'white',
      colotext: 'black',
    },
    {
      id: 2,
      gname: 'z4',
      color: 'green',
      colotext: 'white',
    },
    {
      id: 2,
      gname: 'z5',
      color: 'green',
      colotext: 'white',
    },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem1 = ({item, index}) => {
    return (
      // alert('Ather')
      <View style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity
          style={{
            height: 55,
            width: 55,
            margin: 5,
            backgroundColor: item.color,
            borderWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: 'grey',
          }}
          onPress={() => navigation.navigate('Trafficrule1')}>
          <Text
            style={{
              alignItems: 'center',
              alignContent: 'center',
              margin: 5,
              color: item.colotext,
            }}>
            {item.gname}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    const Icon = item.icontype;
    return (
      <TouchableOpacity
        // onPress={() => {
        //   navigation.navigate(item.onPress);
        //   // alert('ather');

        // }}
        onPress={toggleModal}
        key={index}
        activeOpacity={0.9}>
        <View
          style={{
            height: 166,
            width: 180,
            borderWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{height: 50}}>
            <Image style={{height: 40, width: 40}} source={item.src}></Image>
            {/* <Icon iconType={item.icontype} name={item.icon}/> */}
          </View>
          <Text
            style={{
              fontSize: 11,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                height: 8,
                width: 8,
                backgroundColor: 'red',
                borderRadius: 100,
                margin: 3,
              }}></View>
            <Text style={{fontSize: 11}}>0</Text>
            <View
              style={{
                height: 8,
                width: 8,
                backgroundColor: 'green',
                borderRadius: 100,
                margin: 3,
              }}></View>
            <Text style={{fontSize: 11}}>0</Text>
            <View
              style={{
                height: 8,
                width: 8,
                backgroundColor: 'orange',
                borderRadius: 100,
                margin: 3,
              }}></View>
            <Text style={{fontSize: 11}}>0</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        backgroundColor={'red'}
        leftComponent={
          <Feather
            onPress={() => navigation.goBack()}
            name="home"
            size={24}
            color="white"></Feather>
        }
        centerComponent={{
          text: 'Topic sheets',
          style: {color: '#fff', fontWeight: 'bold', fontSize: 20},
        }}
        rightComponent={
          <Feather name="alert-circle" size={24} color="white"></Feather>
        }
      />
      <ScrollView style={{backgroundColor: 'white '}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index.toString()}
          // showsVerticalScrollIndicator={false}
          numColumns={2}
        />

        <Modal
          transparent={true}
          coverScreen={false}
          animationIn="slideInLeft"
          isVisible={isModalVisible}>
          <FlatList
            data={groupdata}
            renderItem={renderItem1}
            numColumns={5}></FlatList>
        </Modal>
      </ScrollView>

      {/* <View style={styles.textlangah}>
        <Text style={styles.langahtext}>Langah Fahrschulcard @ 2021</Text>
      </View> */}
    </View>
  );
};
export default Topicsheet;
