import React, {useState} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Highlighter from 'react-native-highlight-words';
import MessageOptions from '../MessageOptios';
dayjs.extend(relativeTime);

interface MessageProps {
  message: {
    id: number;
    text: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
    };
  };
  searchText: string;
}

const Message: React.FC<MessageProps> = props => {
  const {message, searchText} = props;
  const [showOptions, setShowOptions] = useState(false);

  const isMyMessage = () => {
    return message.user.id === 'u-1';
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  console.log(searchText);

  return (
    <View
      style={{
        width: '100%',
        alignItems: isMyMessage() ? 'flex-end' : 'flex-start',
      }}>
      <Pressable
        onPress={toggleOptions}
        style={[
          styles.container,
          {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
          },
        ]}>
        <View style={styles.messageContent}>
          <Highlighter
            searchWords={[searchText.toLowerCase()]}
            textToHighlight={message.text}
            style={styles.text}
            highlightStyle={{backgroundColor: 'yellow'}}
          />
          <Text style={styles.time}>
            {dayjs(message.createdAt).fromNow(true)}
          </Text>
        </View>
        {!isMyMessage() && (
          <View
            style={[
              styles.triangle,
              {
                borderLeftColor: 'white',
                left: 0,
              },
            ]}
          />
        )}
      </Pressable>
      {showOptions && (
        <MessageOptions
          isMyMessage={isMyMessage()}
          onReaction={emoji => console.log(emoji, 'adsad')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    position: 'relative',
  },
  messageContent: {
    position: 'relative',
  },
  text: {
    color: '#000',
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
  triangle: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },
});

export default Message;
