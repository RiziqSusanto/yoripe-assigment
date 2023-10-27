import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

interface InputBoxProps {
  onSend: (chat: any) => void;
}

const InputBox: React.FC<InputBoxProps> = ({onSend}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') {
      return;
    }

    // Create a new chat message and send it to the parent component
    const newChat = {
      id: `id-m-${Math.random()}`,
      text: message,
      createdAt: new Date().toISOString(),
      user: {
        id: 'u-1',
        name: 'Your Name',
      },
    };

    onSend(newChat);

    // Clear the input field
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FontAwesome5 name={'laugh'} size={24} color={'#84929A'} />
        <TextInput
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          placeholder={'Message'}
          placeholderTextColor={'#84929A'}
        />
        <Entypo
          name={'attachment'}
          size={22}
          color={'#84929A'}
          style={styles.iconAttachment}
        />
        <Entypo name={'camera'} size={23} color={'#84929A'} />
      </View>
      <TouchableOpacity style={styles.iconSend} onPress={handleSend}>
        <MaterialIcons name={'send'} size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  iconAttachment: {marginRight: 10},
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1F2C34',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  iconSend: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#00A984',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  input: {
    marginLeft: 5,
    flex: 1,
    color: 'white',
  },
});

export default InputBox;
