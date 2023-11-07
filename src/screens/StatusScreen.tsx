import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const StatusScreen: React.FC = () => {
  const FloatingButton: React.FC<{onPress: () => void}> = ({onPress}) => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.button}>
          <Entypo name={'camera'} size={23} color={'#FFFFFF'} />
        </View>
      </TouchableOpacity>
    );
  };

  const handleButtonPress = () => {
    console.log('Floating button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.myStatusContainer}>
        <View style={styles.myStatusLeftSide}>
          <View style={styles.myStatusWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.imageStatus}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                My Status
              </Text>
              <Text style={styles.time}>Just Now</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="ellipsis-h" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.recentUpdatesContainer}>
        <Text style={{color: 'white', marginBottom: 20}}>Recent updates</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                  style={styles.imageStatus}
                />
              </TouchableOpacity>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                  John
                </Text>
                <Text style={styles.time}>Today, 7:50 pm</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                  style={styles.imageStatus}
                />
              </TouchableOpacity>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                  Budi
                </Text>
                <Text style={styles.time}>Today, 17:50 pm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FloatingButton onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121B22',
  },
  myStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1F2C34',
  },
  myStatusLeftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  myStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageStatus: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 3,
    borderColor: 'gray',
  },
  recentUpdatesContainer: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#1F2C34',
    marginTop: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    width: 55,
    height: 55,
    backgroundColor: '#60af1e',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 5,
  },
});

export default StatusScreen;
