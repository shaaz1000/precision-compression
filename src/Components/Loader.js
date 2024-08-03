import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        top: '40%',
        position: 'absolute',
        zIndex: 1,
      }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loader;
