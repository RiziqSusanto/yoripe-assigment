import React, {useState, useRef, FC, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import Message from '../components/Message';
import InputBox from '../components/InputBox';
import DropdownMenu from '../components/DropdownMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RoomChatScreenRouteProp} from '../navigation';
import request from 'superagent';

interface Options {
  label: string;
  value: string;
}

const RoomChat: FC<{
  navigation: RoomChatScreenRouteProp;
  route: RoomChatScreenRouteProp;
}> = ({navigation, route}) => {
  const {roomId, name, image} = route.params;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const flatListRef: React.RefObject<FlatList> = useRef(null);
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await request.get(
        'https://private-896e2-riziqsusanto.apiary-mock.com/room-chats',
      );
      if (response.body) {
        setMessage(response.body);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = (newChat) => {
    setMessage([newChat, ...message]);
  };

  const scrollToMessage = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  };

  const options = [{label: 'Search', value: 'search'}];

  const handleOptionSelection = (option: Options) => {
    setDropdownVisible(false);
    if (option.value === 'search') {
      setIsSearching(true);
    }
  };

  const CustomHeader = ({
    navigation,
    isSearching,
  }: {
    navigation: RoomChatScreenRouteProp;
    isSearching: boolean;
  }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#1F2C34',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (isSearching) {
                setIsSearching(false);
                setSearchQuery('');
              } else {
                navigation.goBack();
              }
            }}>
            <Icon
              name="arrow-left"
              size={20}
              color="#fff"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          {!isSearching ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Profile', {
                  roomId: roomId,
                  name: name,
                  image: image,
                })
              }
              style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Image
                source={{uri: image}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
                {name}
              </Text>
            </TouchableOpacity>
          ) : (
            <TextInput
              style={{
                color: '#fff',
                fontSize: 18,
              }}
              autoFocus
              autoCapitalize="none"
              onSubmitEditing={event => {
                setSearchQuery(event.nativeEvent.text.toLowerCase());
                scrollToMessage();
              }}
              placeholder="Search..."
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            />
          )}
        </View>
        {!isSearching && (
          <>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {}}>
                <Icon
                  name="phone"
                  size={20}
                  color="#fff"
                  style={{marginRight: 20}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDropdownVisible(!dropdownVisible);
                }}>
                <Icon name="ellipsis-v" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <CustomHeader navigation={navigation} isSearching={isSearching} />
      <View style={styles.container}>
        <DropdownMenu
          isVisible={dropdownVisible}
          options={options}
          onSelect={handleOptionSelection}
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#FFFFFF" />
        ) : (
          <FlatList
            ref={flatListRef}
            data={message}
            renderItem={({item}) => (
              <Message message={item} searchText={searchQuery} />
            )}
            style={styles.list}
            inverted
          />
        )}
        {!isSearching && <InputBox onSend={sendMessage} />}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5DD',
  },
  list: {
    padding: 10,
  },
});

export default RoomChat;
