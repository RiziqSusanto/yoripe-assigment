import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoomChat from '../screens/RoomChat';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import TopBar from './TopBar';
import StatusScreen from '../screens/StatusScreen';

type RootStackParamList = {
  Chats: undefined;
  RoomChat: {roomId: string | number; name: string; image: string};
  Profile: {roomId: string | number; name: string; image: string};
  Status: undefined;
};

type ChatsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Chats'
>;
type RoomChatScreenRouteProp = RouteProp<RootStackParamList, 'RoomChat'>;
type RoomChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RoomChat'
>;

type StatusScreenRouteProp = RouteProp<RootStackParamList, 'Status'>;
type StatusScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Status'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

export type {
  RootStackParamList,
  ChatsScreenNavigationProp,
  RoomChatScreenRouteProp,
  RoomChatScreenNavigationProp,
  StatusScreenRouteProp,
  StatusScreenNavigationProp,
  ProfileScreenRouteProp,
};

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={TopBar}
          options={{
            title: 'WhatsApp',
            headerStyle: {backgroundColor: '#1F2C34'},
            headerTintColor: '#fff',
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="camera"
                  size={18}
                  color="#fff"
                  style={{marginRight: 15}}
                />
                <Icon
                  name="search"
                  size={18}
                  color="#fff"
                  style={{marginRight: 15}}
                />
                <Icon name="ellipsis-v" size={18} color="#fff" />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name={'RoomChat'}
          component={RoomChat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            title: '',
            headerStyle: {backgroundColor: '#1F2C34'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name={'Status'}
          component={StatusScreen}
          options={{
            title: '',
            headerStyle: {backgroundColor: '#1F2C34'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
