import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileScreenRouteProp, RoomChatScreenRouteProp} from '../navigation';
import request from 'superagent';

const ProfileScreen: React.FC<{
  navigation: ProfileScreenRouteProp;
  route: ProfileScreenRouteProp;
}> = ({navigation, route}) => {
  const {roomId, name, image} = route.params;

  useEffect(() => {}, []);
  return (
    <View
      style={{
        backgroundColor: '#121B22',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
      }}>
      <Image
        source={{uri: image}}
        style={{
          width: 200,
          height: 200,
          borderRadius: 200,
        }}
      />
      <Text style={{color: 'white', fontSize: 28, marginTop: 15}}>{name}</Text>
    </View>
  );
};

export default ProfileScreen;
