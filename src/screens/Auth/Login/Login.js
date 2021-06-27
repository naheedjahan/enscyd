import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import {loginaction} from '../../../Redux/action/Action';

// import Register from '../Register';
import {connect} from 'react-redux';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Login = ({navigation, loginaction, user}) => {

  console.log(JSON.stringify(user));

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onlogin = async () => {
    if (email == '') {
      alert('Kindly Enter Email');
    } else if (password == '') {
      alert('Enter a password');
    }

    const formdata = new FormData();
    formdata.append('username', email);
    formdata.append('password', password);

    const res = await loginaction(formdata);
    console.log('resssssssssssssssssponnnnnnnnnseeeeeeeeeeeeeeeeeeeeeeeee',res)
    console.log(res.status)
    if (res.data.error!=true) {
      navigation.navigate('Dashboard');
    } else {
      alert('Enter a Correct Information');
    }
  };
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require('../../../assets/car.png')}
        style={styles.imageback}>
        <View style={styles.logo}>
          <Text style={styles.textwelcome}>Welcome</Text>
        </View>

        <View style={styles.textinput}>
          <View style={styles.viewinput}>
            {/* <View
            style={{
              justifyContent: 'center',
            }}>
            <Zocial name="email" size={20}  style={styles.marginn}></Zocial>
          </View> */}

            <TextInput
              placeholderTextColor="gray"
              style={styles.emailfield}
              value={email}
              onChangeText={text => setemail(text)}
              placeholder="Enter Email"></TextInput>
          </View>

          <View style={styles.viewinput}>
            {/* <View
            style={{
              justifyContent: 'center',
            }}>
            <Fontisto name="locked" size={20}  style={styles.marginn}></Fontisto>
          </View> */}

            <TextInput
              placeholderTextColor="gray"
              style={styles.emailfield}
              value={password}
              onChangeText={text => setpassword(text)}
              placeholder="Enter Password"></TextInput>
          </View>
        </View>

        <TouchableOpacity onPress={onlogin} style={styles.loginbutton}>
          <Text style={styles.textlogin}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.textlangah}>
          <Text style={styles.langahtext}>Langah Fahrschulcard @ 2021</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = state => {
  const {user} = state.auth;

  return {user};
};
export default connect(mapStateToProps, {loginaction})(Login);
