// MessageOptions.js
import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface MessageOptionsProps {
  onReaction: (emoji: string) => void;
  isMyMessage: boolean;
}

const reactionEmojis = ['👍', '❤️', '😃', '🎉', '😢', '😡'];

const MessageOptions: FC<MessageOptionsProps> = ({isMyMessage, onReaction}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
          backgroundColor: isMyMessage ? 'white' : '#DCF8C5',
        },
      ]}>
      <View style={styles.emojiContainer}>
        {reactionEmojis.map(emoji => (
          <TouchableOpacity key={emoji} onPress={() => onReaction(emoji)}>
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: -5,
    marginLeft: 5,
    maxWidth: '80%',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default MessageOptions;
