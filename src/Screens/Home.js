import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Linking,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import Loader from '../Components/Loader';
const Home = ({navigation, ...props}) => {
  const [isLoading, setisLoading] = useState(true);
  const [Loading1, setLoading] = useState(false);

  const downloadFile = () => {
    setisLoading(false);
    let FilePath =
      'https://www.precisioncompression.com/images/brochures/Precision_Compression_Brochure_20_w.pdf';
    const {dirs} = RNFetchBlob.fs;
    if (Platform.OS === 'android') {
      RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: `${dirs.DownloadDir}/test.pdf`,
          description: 'Downloading..',
        },
      })
        .fetch('GET', FilePath, {})
        .then(res => {
          console.log('The file saved to ', res.data);
          setisLoading(true);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      const configfb = {
        fileCache: true,
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        path: `${dirs.DocumentDir}/${FilePath}.pdf`,
      };
      const configOptions = Platform.select({
        ios: {
          fileCache: configfb.fileCache,
          path: configfb.path,
        },
      });
      RNFetchBlob.config(configOptions)
        .fetch('GET', FilePath, {})
        .then(res => {
          setLoading(false);
          RNFetchBlob.ios.openDocument(res.data);
        })
        .catch(e => {
          console.log('The file saved to ERROR', e.message);
        });
    }
    setisLoading(true);
    setLoading(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      {Loading1 && <Loader />}

      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.precisioncompression.com/')}
        style={{alignItems: 'center', justifyContent: 'center', flex: 1 / 9}}>
        <Image
          source={require('../Assets/Logo.png')}
          resizeMode="contain"
          style={{width: '90%', height: '100%'}}
        />
      </TouchableOpacity>
      <View style={{flex: 1 / 2}}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('UnitPage_1')}>
          <View style={{marginTop: 20, position: 'absolute'}}>
            <Text style={styles.text}>PC 50-1</Text>
          </View>
          <Image
            source={require('../Assets/PC_50-1.png')}
            style={{width: '100%', height: '80%'}}
          />
          <View style={{width: '80%'}}>
            <Text style={styles.text}>
              Precision Compression PC 50-1 Single Stage Unit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1 / 2}}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('UnitPage_2')}>
          <View style={{marginTop: 20, position: 'absolute'}}>
            <Text style={styles.text}>PC 50</Text>
          </View>
          <Image
            source={require('../Assets/PC_50.png')}
            style={{width: '100%', height: '80%'}}
          />
          <View style={{width: '75%'}}>
            <Text style={styles.text}>
              Precision Compression PC 50 2 Stage Unit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1 / 9,
        }}>
        {isLoading ? (
          <TouchableOpacity
            disabled={Loading1}
            onPress={() => {
              setLoading(true);
              setTimeout(() => downloadFile(), 2000);
            }}
            style={styles.button}>
            <Text style={styles.text1}>DOWNLOAD BROCHURE</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{fontSize: 20, color: '#fff'}}>Loading....</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '700',
    color: 'red',
    textAlign: 'center',
  },
  button: {
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'red',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
