import React from 'react';
import Login from './src/screens/Auth/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './src/screens/App/Dashboard';
import Trafficrule1 from './src/screens/App/Trafficrule1/Trafficrule1';
import Trafficrule2 from './src/screens/App/Trafficrule2/Trafficrule2';
import Topicsheet from './src/screens/App/TopicSheet';
import Basicinfo from './src/screens/App/BasicInformation';
import Spacial from './src/screens/App/Special/Special';

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trafficrule2"
          component={Trafficrule2}
          options={{headerShown: false}}
        />


        <Stack.Screen
          name="Topicsheet"
          component={Topicsheet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trafficrule1"
          component={Trafficrule1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basicinfo"
          component={Basicinfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Spacial"
          component={Spacial}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNav;
