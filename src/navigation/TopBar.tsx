import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import StatusScreen from '../screens/StatusScreen';

const Tab = createMaterialTopTabNavigator();

const TopBar: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={'Chats'}>
      <Tab.Screen
        options={{
          tabBarStyle: {backgroundColor: '#1F2C34'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        }}
        name={'Chats'}
        component={ChatsScreen}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {backgroundColor: '#1F2C34'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        }}
        name={'Status'}
        component={StatusScreen}
      />
    </Tab.Navigator>
  );
};

export default TopBar;
