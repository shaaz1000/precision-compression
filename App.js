import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {StackNavigation} from './src/Navigation/MainStack';
// import {LogBox} from 'react-native';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
