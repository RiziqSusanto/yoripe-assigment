import React from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation';

dayjs.extend(relativeTime);

interface ListChatsItemProps {
  chat: {
    id: number;
    user: {
      image: string;
      name: string;
    };
    lastMessage: {
      text: string;
      createdAt: string;
    };
  };
  navigation: StackNavigationProp<RootStackParamList, 'Chats'>;
}

const ListChatsItem: React.FC<ListChatsItemProps> = props => {
  const {chat, navigation} = props;

  const goToRoomChat = () => {
    navigation.navigate('RoomChat', {
      roomId: chat.id,
      name: chat.user.name,
      image: chat.user.image,
    });
  };

  return (
    <Pressable onPress={goToRoomChat} style={styles.container} key={chat.id}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.time}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text style={styles.chat} numberOfLines={1}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
    height: 70,
    backgroundColor: '#121B22',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
  },
  time: {
    color: '#828D93',
  },
  chat: {
    color: '#828D93',
  },
});

export default ListChatsItem;
