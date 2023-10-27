import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface OptionsMenu {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  isVisible: boolean;
  options: [];
  onSelect: (value: OptionsMenu) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const {isVisible, options, onSelect} = props;
  if (!isVisible) {
    return null;
  }

  return (
    <View style={[styles.container, styles.rightPosition]}>
      {options.map((option: OptionsMenu, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(option)}
          style={{marginTop: 5, marginBottom: 5}}>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2C34',
    padding: 10,
    position: 'absolute',
    width: '50%',
    top: 0,
    right: 0,
    zIndex: 999,
  },
  rightPosition: {
    right: 0,
  },
  optionText: {
    fontSize: 16,
    paddingVertical: 8,
    color: 'white',
  },
});

export default DropdownMenu;
