import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import dummy from '../../assets/data/chats.json';
import ListChatsItem from '../components/ListChatsItem';
import {ChatsScreenNavigationProp} from '../navigation';
import request from 'superagent';

const ChatsScreen: React.FC<{navigation: ChatsScreenNavigationProp}> = ({
  navigation,
}) => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await request.get(
        'https://private-896e2-riziqsusanto.apiary-mock.com/chats',
      );
      if (response.body) {
        setChats(response.body);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching:', error);
    }
  };

  return (
    <View style={{backgroundColor: '#121B22'}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#FFFFFF" />
      ) : (
        <FlatList
          data={chats}
          renderItem={({item}) => (
            <ListChatsItem chat={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default ChatsScreen;
