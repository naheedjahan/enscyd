import React from 'react';
import {Text, View, FlatList,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import { ScrollView } from 'react-native-gesture-handler';
const Dashboard = ({navigation}) => {
  const data = [
    {
        id: 0,
        title: 'Basic Information',
        onPress: 'Basicinfo',
        src: require('../../../assets/notebook.png'),
      },
    {
        id: 1,
        title: 'Special ',
        onPress: 'Spacial',
        src: require('../../../assets/badge.png'),
      },
      {
        id: 2,
        title: 'Exams',
        onPress: 'Spacial',
        src: require('../../../assets/test.png'),
      },
      {
        id: 3,
        title: 'Learning Progress',
        onPress: 'Trafficrule1',
        src: require('../../../assets/knowledge.png'),
      },
      {
        id: 4,
        title: 'Question',
        onPress: 'Trafficrule1',
        src: require('../../../assets/conversation.png'),
      },
      {
        id: 5,
        title: 'Message',
        onPress: 'Trafficrule1',
        src: require('../../../assets/chat.png'),
      },
      {
        id: 4,
        title: 'Topic Sheets',
        onPress: 'Trafficrule1',
        src: require('../../../assets/checklist1.png'),
      },
      {
        id: 5,
        title: 'All Questions Practice ',
        onPress: 'Trafficrule1',
        src: require('../../../assets/conversation.png'),
      },
      {
        id: 5,
        title: 'New Questions Practice',
        onPress: 'Trafficrule1',
        src: require('../../../assets/conversation.png'),
      },


  ];
  const renderItem = ({item, index}) => {
    return (
        <TouchableOpacity

        onPress={() => {
          navigation.navigate(item.onPress);
        }}
        key={index}
        activeOpacity={0.9}
    >
        <View style={{height:150,width:180,borderWidth:0.5,justifyContent:'center',alignItems:'center',borderColor:'grey'}}>
<View style={{height:60,}}>
<Image  style={{height:40,width:40}}  source={item.src}></Image>
</View>
<Text>
{item.title}
</Text>
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
            onPress={() => alert('open')}
            name="align-justify"
            size={24}
            color="white"></Feather>
        }
        //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={
          <Feather name="alert-circle" size={24} color="white"></Feather>
        }
      />

<View style={styles.progessbarview}>
</View>
        <View style={styles.viewbar}>
          <View>
              <View style={{height:105,backgroundColor:'white',borderRadius:60,width:105,justifyContent:'center',alignContent:'center',alignItems:'center',marginRight:-3}}>
            <ProgressCircle
              percent={70}
              radius={45}
              borderWidth={6}
              color="green"
              shadowColor="#999"
              bgColor="#fff">
              <View style={styles.inseideprogress}>
                <Text style={{fontSize: 12}}>{'100/200'}</Text>
              </View>
              <View style={styles.inseideprogress}>
                <View style={styles.colorprogress}></View>
                <View style={styles.colorprogress1}></View>
                <View style={styles.colorprogress2}></View>
              </View>
              <View style={styles.inseideprogress}>
                <Text style={styles.textstyle}>15</Text>
                <Text style={styles.textstyle1}>26</Text>
                <Text style={styles.textstyle1}>11</Text>
              </View>
            </ProgressCircle>
            </View>
            <Text style={styles.textprogress}>Topic Sheets</Text>
          </View>
          <View>
          <View style={{height:145,backgroundColor:'white',borderRadius:100,width:145,justifyContent:'center',alignContent:'center',alignItems:'center',marginRight:-3}}>

            <ProgressCircle
              percent={65}
              radius={65}
              borderWidth={6}
              color="green"
              shadowColor="#999"
              bgColor="#fff">
              <Text style={{fontSize: 40}}>{'65%'}</Text>
            </ProgressCircle>
            </View>
            <Text style={styles.textprogress}>Learning Progress</Text>
          </View>
          <View>
          <View style={{height:105,backgroundColor:'white',borderRadius:60,width:105,justifyContent:'center',alignContent:'center',alignItems:'center',marginLeft:-3}}>
            <ProgressCircle
              percent={45}
              radius={45}
              borderWidth={6}
              color="green"
              shadowColor="#999"
              bgColor="#fff">
              <View style={styles.inseideprogress}>
                <Text style={{fontSize: 12}}>{'45'}</Text>
              </View>
              <View style={styles.inseideprogress}>
                <View style={styles.colorprogress}></View>
                <View style={styles.colorprogress1}></View>
              </View>
              <View style={styles.inseideprogress}>
                <Text style={styles.textstyle}>45</Text>
                <Text style={styles.textstyle1}>25</Text>
              </View>
            </ProgressCircle>
            </View>
            <Text style={styles.textprogress}>Testing Sheets</Text>
          </View>

      </View>

      <ScrollView style={{backgroundColor:'white',marginBottom:44}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index.toString()}
        // showsVerticalScrollIndicator={false}
        numColumns={2}
      />
      </ScrollView>

<View style={styles.textlangah}>
  <Text style={styles.langahtext}>
Langah Fahrschulcard @ 2021
  </Text>
</View>
    </View>
  );
};
export default Dashboard;
