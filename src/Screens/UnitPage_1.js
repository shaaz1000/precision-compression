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
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import * as database from '../RealmDataBase/allSchemas';
import RNFetchBlob from 'rn-fetch-blob';
import Loader from '../Components/Loader';

const UnitPage_1 = ({navigation, ...props}) => {
  const [opensuction, setOpensuction] = useState(false);
  const [opendischarge, setOpendischarge] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [valuesuction, setValuesuction] = useState(null);
  const [valuedischarge, setValuedischarge] = useState(null);
  const [value, setValue] = useState('Flow rate');

  const [suction, setsuction] = useState([
    {label: '20', value: 20},
    {label: '25', value: 25},
    {label: '30', value: 30},
    {label: '35', value: 35},
    {label: '40', value: 40},
    {label: '45', value: 45},
    {label: '50', value: 50},
    {label: '55', value: 55},
    {label: '60', value: 60},
  ]);
  const [discharge, setdischarge] = useState([
    {label: '100', value: 100},
    {label: '125', value: 125},
    {label: '150', value: 150},
    {label: '250', value: 250},
    {label: '300', value: 300},
    {label: '350', value: 350},
    {label: '400', value: 400},
    {label: '425', value: 450},
  ]);
  const [discharge20, setdischarge20] = useState([
    {label: '100', value: 100},
    {label: '125', value: 125},
    {label: '150', value: 150},
    {label: '250', value: 250},
    {label: '300', value: 300},
    {label: '350', value: 350},
    {label: '400', value: 400},
    {label: '425', value: 425},
  ]);
  const [discharge30, setdischarge30] = useState([
    {label: '100', value: 100},
    {label: '150', value: 150},
    {label: '175', value: 175},
    {label: '250', value: 250},
    {label: '300', value: 300},
    {label: '350', value: 350},
    {label: '400', value: 400},
    {label: '425', value: 425},
  ]);
  const [discharge40, setdischarge40] = useState([
    {label: '100', value: 100},
    {label: '150', value: 150},
    {label: '200', value: 200},
    {label: '250', value: 250},
    {label: '300', value: 300},
    {label: '350', value: 350},
    {label: '400', value: 400},
    {label: '425', value: 425},
  ]);

  const [CompressionData, setCompressionData] = useState([
    // { suction: 20, discharge: 100, FLOW_RATE_MCF: "281" },
    // { suction: 20, discharge: 125, FLOW_RATE_MCF: "258" },
    // { suction: 20, discharge: 150, FLOW_RATE_MCF: "N/A" },
    // { suction: 20, discharge: 250, FLOW_RATE_MCF: "N/A" },
    // { suction: 20, discharge: 300, FLOW_RATE_MCF: "N/A" },
    // { suction: 20, discharge: 350, FLOW_RATE_MCF: "N/A" },
    // { suction: 20, discharge: 400, FLOW_RATE_MCF: "N/A" },
    // { suction: 20, discharge: 425, FLOW_RATE_MCF: "N/A" },

    // { suction: 25, discharge: 100, FLOW_RATE_MCF: "336" },
    // { suction: 25, discharge: 125, FLOW_RATE_MCF: "313" },
    // { suction: 25, discharge: 150, FLOW_RATE_MCF: "291" },
    // { suction: 25, discharge: 250, FLOW_RATE_MCF: "N/A" },
    // { suction: 25, discharge: 300, FLOW_RATE_MCF: "N/A" },
    // { suction: 25, discharge: 350, FLOW_RATE_MCF: "N/A" },
    // { suction: 25, discharge: 400, FLOW_RATE_MCF: "N/A" },
    // { suction: 25, discharge: 425, FLOW_RATE_MCF: "N/A" },

    // { suction: 30, discharge: 100, FLOW_RATE_MCF: "240" },
    // { suction: 30, discharge: 150, FLOW_RATE_MCF: "237" },
    // { suction: 30, discharge: 200, FLOW_RATE_MCF: "234" },
    // { suction: 30, discharge: 250, FLOW_RATE_MCF: "230" },
    // { suction: 30, discharge: 300, FLOW_RATE_MCF: "227" },
    // { suction: 30, discharge: 350, FLOW_RATE_MCF: "224" },
    // { suction: 30, discharge: 400, FLOW_RATE_MCF: "221" },
    // { suction: 30, discharge: 450, FLOW_RATE_MCF: "N/A" },
    // { suction: 30, discharge: 500, FLOW_RATE_MCF: "N/A" },
    // { suction: 30, discharge: 550, FLOW_RATE_MCF: "N/A" },
    // { suction: 30, discharge: 585, FLOW_RATE_MCF: "N/A" },

    // { suction: 35, discharge: 100, FLOW_RATE_MCF: "267" },
    // { suction: 35, discharge: 150, FLOW_RATE_MCF: "265" },
    // { suction: 35, discharge: 200, FLOW_RATE_MCF: "261" },
    // { suction: 35, discharge: 250, FLOW_RATE_MCF: "258" },
    // { suction: 35, discharge: 300, FLOW_RATE_MCF: "268" },
    // { suction: 35, discharge: 350, FLOW_RATE_MCF: "265" },
    // { suction: 35, discharge: 400, FLOW_RATE_MCF: "261" },
    // { suction: 35, discharge: 450, FLOW_RATE_MCF: "258" },
    // { suction: 35, discharge: 500, FLOW_RATE_MCF: "255" },
    // { suction: 35, discharge: 550, FLOW_RATE_MCF: "N/A" },
    // { suction: 35, discharge: 585, FLOW_RATE_MCF: "N/A" },

    // { suction: 40, discharge: 100, FLOW_RATE_MCF: "N/A" },
    // { suction: 40, discharge: 150, FLOW_RATE_MCF: "N/A" },
    // { suction: 40, discharge: 200, FLOW_RATE_MCF: "304" },
    // { suction: 40, discharge: 250, FLOW_RATE_MCF: "301" },
    // { suction: 40, discharge: 300, FLOW_RATE_MCF: "297" },
    // { suction: 40, discharge: 350, FLOW_RATE_MCF: "294" },
    // { suction: 40, discharge: 400, FLOW_RATE_MCF: "290" },
    // { suction: 40, discharge: 450, FLOW_RATE_MCF: "287" },
    // { suction: 40, discharge: 500, FLOW_RATE_MCF: "284" },
    // { suction: 40, discharge: 550, FLOW_RATE_MCF: "260" },
    // { suction: 40, discharge: 585, FLOW_RATE_MCF: "N/A" },

    // { suction: 45, discharge: 100, FLOW_RATE_MCF: "N/A" },
    // { suction: 45, discharge: 150, FLOW_RATE_MCF: "N/A" },
    // { suction: 45, discharge: 200, FLOW_RATE_MCF: "333" },
    // { suction: 45, discharge: 250, FLOW_RATE_MCF: "330" },
    // { suction: 45, discharge: 300, FLOW_RATE_MCF: "326" },
    // { suction: 45, discharge: 350, FLOW_RATE_MCF: "323" },
    // { suction: 45, discharge: 400, FLOW_RATE_MCF: "319" },
    // { suction: 45, discharge: 450, FLOW_RATE_MCF: "305" },
    // { suction: 45, discharge: 500, FLOW_RATE_MCF: "290" },
    // { suction: 45, discharge: 550, FLOW_RATE_MCF: "276" },
    // { suction: 45, discharge: 585, FLOW_RATE_MCF: "274" },

    // { suction: 50, discharge: 100, FLOW_RATE_MCF: "N/A" },
    // { suction: 50, discharge: 150, FLOW_RATE_MCF: "N/A" },
    // { suction: 50, discharge: 200, FLOW_RATE_MCF: "363" },
    // { suction: 50, discharge: 250, FLOW_RATE_MCF: "359" },
    // { suction: 50, discharge: 300, FLOW_RATE_MCF: "356" },
    // { suction: 50, discharge: 350, FLOW_RATE_MCF: "352" },
    // { suction: 50, discharge: 400, FLOW_RATE_MCF: "336" },
    // { suction: 50, discharge: 450, FLOW_RATE_MCF: "321" },
    // { suction: 50, discharge: 500, FLOW_RATE_MCF: "305" },
    // { suction: 50, discharge: 550, FLOW_RATE_MCF: "290" },
    // { suction: 50, discharge: 585, FLOW_RATE_MCF: "288" },

    // { suction: 55, discharge: 100, FLOW_RATE_MCF: "N/A" },
    // { suction: 55, discharge: 150, FLOW_RATE_MCF: "N/A" },
    // { suction: 55, discharge: 200, FLOW_RATE_MCF: "392" },
    // { suction: 55, discharge: 250, FLOW_RATE_MCF: "389" },
    // { suction: 55, discharge: 300, FLOW_RATE_MCF: "385" },
    // { suction: 55, discharge: 350, FLOW_RATE_MCF: "381" },
    // { suction: 55, discharge: 400, FLOW_RATE_MCF: "364" },
    // { suction: 55, discharge: 450, FLOW_RATE_MCF: "334" },
    // { suction: 55, discharge: 500, FLOW_RATE_MCF: "318" },
    // { suction: 55, discharge: 550, FLOW_RATE_MCF: "315" },
    // { suction: 55, discharge: 585, FLOW_RATE_MCF: "310" },

    // { suction: 60, discharge: 100, FLOW_RATE_MCF: "N/A" },
    // { suction: 60, discharge: 150, FLOW_RATE_MCF: "N/A" },
    // { suction: 60, discharge: 200, FLOW_RATE_MCF: "N/A" },
    // { suction: 60, discharge: 250, FLOW_RATE_MCF: "418" },
    // { suction: 60, discharge: 300, FLOW_RATE_MCF: "414" },
    // { suction: 60, discharge: 350, FLOW_RATE_MCF: "411" },
    // { suction: 60, discharge: 400, FLOW_RATE_MCF: "380" },
    // { suction: 60, discharge: 450, FLOW_RATE_MCF: "357" },
    // { suction: 60, discharge: 500, FLOW_RATE_MCF: "343" },
    // { suction: 60, discharge: 550, FLOW_RATE_MCF: "N/A" },
    // { suction: 60, discharge: 585, FLOW_RATE_MCF: "N/A" },

    {suction: 20, discharge: 100, FLOW_RATE_MCF: '281'},
    {suction: 20, discharge: 125, FLOW_RATE_MCF: '258'},
    {suction: 20, discharge: 150, FLOW_RATE_MCF: 'N/A'},
    {suction: 20, discharge: 250, FLOW_RATE_MCF: 'N/A'},
    {suction: 20, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 20, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 20, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 20, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 25, discharge: 100, FLOW_RATE_MCF: '336'},
    {suction: 25, discharge: 125, FLOW_RATE_MCF: '313'},
    {suction: 25, discharge: 150, FLOW_RATE_MCF: '291'},
    {suction: 25, discharge: 250, FLOW_RATE_MCF: 'N/A'},
    {suction: 25, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 25, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 25, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 25, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 30, discharge: 100, FLOW_RATE_MCF: '391'},
    {suction: 30, discharge: 150, FLOW_RATE_MCF: '345'},
    {suction: 30, discharge: 175, FLOW_RATE_MCF: '323'},
    {suction: 30, discharge: 250, FLOW_RATE_MCF: 'N/A'},
    {suction: 30, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 30, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 30, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 30, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 35, discharge: 100, FLOW_RATE_MCF: '447'},
    {suction: 35, discharge: 150, FLOW_RATE_MCF: '400'},
    {suction: 35, discharge: 175, FLOW_RATE_MCF: '377'},
    {suction: 35, discharge: 250, FLOW_RATE_MCF: 'N/A'},
    {suction: 35, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 35, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 35, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 35, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 40, discharge: 100, FLOW_RATE_MCF: '503'},
    {suction: 40, discharge: 150, FLOW_RATE_MCF: '455'},
    {suction: 40, discharge: 200, FLOW_RATE_MCF: '409'},
    {suction: 40, discharge: 250, FLOW_RATE_MCF: 'N/A'},
    {suction: 40, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 40, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 40, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 40, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 45, discharge: 100, FLOW_RATE_MCF: '560'},
    {suction: 45, discharge: 150, FLOW_RATE_MCF: '510'},
    {suction: 45, discharge: 200, FLOW_RATE_MCF: '464'},
    {suction: 45, discharge: 250, FLOW_RATE_MCF: 'N/A'},
    {suction: 45, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 45, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 45, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 45, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 50, discharge: 100, FLOW_RATE_MCF: '616'},
    {suction: 50, discharge: 150, FLOW_RATE_MCF: '566'},
    {suction: 50, discharge: 200, FLOW_RATE_MCF: '440'},
    {suction: 50, discharge: 250, FLOW_RATE_MCF: '358'},
    {suction: 50, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 50, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 50, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 50, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 55, discharge: 100, FLOW_RATE_MCF: '673'},
    {suction: 55, discharge: 150, FLOW_RATE_MCF: '622'},
    {suction: 55, discharge: 200, FLOW_RATE_MCF: '539'},
    {suction: 55, discharge: 250, FLOW_RATE_MCF: '463'},
    {suction: 55, discharge: 300, FLOW_RATE_MCF: 'N/A'},
    {suction: 55, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 55, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 55, discharge: 425, FLOW_RATE_MCF: 'N/A'},

    {suction: 60, discharge: 100, FLOW_RATE_MCF: '731'},
    {suction: 60, discharge: 150, FLOW_RATE_MCF: '679'},
    {suction: 60, discharge: 200, FLOW_RATE_MCF: '591'},
    {suction: 60, discharge: 250, FLOW_RATE_MCF: '476'},
    {suction: 60, discharge: 300, FLOW_RATE_MCF: '406'},
    {suction: 60, discharge: 350, FLOW_RATE_MCF: 'N/A'},
    {suction: 60, discharge: 400, FLOW_RATE_MCF: 'N/A'},
    {suction: 60, discharge: 425, FLOW_RATE_MCF: 'N/A'},
  ]);

  useEffect(() => {
    Savedata();
    return () => {
      console.log('close');
    };
  }, []);

  const Savedata = () => {
    setisLoading(false);
    database
      .DeleteDataMaster()
      .then(() => {})
      .catch(error => {
        alert('Unable to add Product.Try again');
        console.log('insert', error);
      });
    var data;

    for (let j = 0; j < CompressionData.length; j++) {
      data = {
        PC_PkeyID: j,
        SUCTION_PSI: CompressionData[j].suction,
        DISCHARGE_PS: CompressionData[j].discharge,
        FLOW_RATE_MCF: CompressionData[j].FLOW_RATE_MCF,
      };

      database
        .InsertDataMaster(data)
        .then(() => {
          setisLoading(true);
        })
        .catch(error => {
          alert('Unable to add Product.Try again');
          console.log('insert', error);
        });
    }
    Display();
    // console.log('minal1231231', data)
  };
  const Display = () => {
    database
      .queryAllDataMaster()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        // setValue("Error");
        // alert("Unable to add Product.Try again");
        // console.log('select1', error)
      });
  };

  const Result = valuedischarge1 => {
    // console.log('valuedischarge1', valuedischarge1)
    database
      .querySelectedDataMaster(valuedischarge1.value, valuesuction)
      .then(res => {
        console.log('setValue', res[0][0].FLOW_RATE_MCF);
        setValue(res[0][0].FLOW_RATE_MCF);
      })
      .catch(error => {
        setValue('Error');
        // alert("Unable to add Product.Try again");
        console.log('select', error);
      });
  };
  const Result1 = valuesuction => {
    // console.log('valuesuction', valuedischarge, valuesuction.value)
    database
      .querySelectedDataMaster(valuedischarge, valuesuction.value)
      .then(res => {
        console.log('querySelectedDataMaster', res);
        setValue(res[0][0].FLOW_RATE_MCF);
      })
      .catch(error => {
        setValue('Error');

        // alert("Unable to add Product.Try again");
        console.log('insert2', error);
      });
  };
  const DischargeValue = item => {
    console.log(item);
    if (item.value === 20) {
      setdischarge(discharge20);
    } else if (item.value === 25) {
      setdischarge(discharge20);
    } else if (item.value === 30) {
      // alert(item.value);
      setdischarge(discharge30);
    } else if (item.value === 35) {
      // alert(item.value);
      setdischarge(discharge30);
      console.log('discharge', discharge30);
    } else {
      setdischarge(discharge40);
    }
    // console.log("minaldischarge", discharge);
  };
  const SelectitemSunction = item => {
    DischargeValue(item);
    Result1(item);
  };
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
          setisLoading(true);

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
      {Loading && <Loader />}
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.precisioncompression.com/')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1 / 9,
          // backgroundColor: "pink",
        }}>
        <Image
          source={require('../Assets/Logo.png')}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: '20%', zIndex: 111}}
        onPress={() => navigation.goBack()}>
        <Icon name="left" color="#FFFFFF" size={30} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          flex: 1 / 2,
        }}>
        <View style={{marginTop: 10, position: 'absolute'}}>
          <Text style={styles.text}>PC 50-1</Text>
        </View>

        <Image
          resizeMode="stretch"
          source={require('../Assets/PC_50-1.png')}
          style={{width: '100%', height: '80%'}}
        />
        <View style={{width: '80%'}}>
          <Text style={styles.text}>
            Precision Compression PC50-1 Single Stage Unit Flow Rate
            Calculations
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1 / 3,
          // backgroundColor: "pink",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '50%'}}>
          <View style={styles.viewstyle}>
            <Text style={styles.title}>SUCTION PSI</Text>
            <DropDownPicker
              labelStyle={styles.labelstyle}
              textStyle={styles.textstyle}
              // showArrowIcon={false}
              open={opensuction}
              value={valuesuction}
              items={suction}
              setOpen={setOpensuction}
              setValue={setValuesuction}
              setItems={setsuction}
              style={styles.dropdown}
              dropDownDirection="TOP"
              onSelectItem={item => {
                SelectitemSunction(item);
              }}
              arrowIconStyle={{
                backgroundColor: '#fff',
              }}
              placeholder="Select an item"
              placeholderStyle={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 10,
              }}
            />
          </View>
          <View style={styles.viewstyle}>
            <Text style={styles.title}>DISCHARGE PSI</Text>
            <DropDownPicker
              labelStyle={styles.labelstyle}
              textStyle={styles.textstyle}
              // showArrowIcon={false}
              open={opendischarge}
              value={valuedischarge}
              items={discharge}
              setOpen={setOpendischarge}
              setValue={setValuedischarge}
              setItems={setdischarge}
              style={styles.dropdown}
              dropDownDirection="TOP"
              onSelectItem={item => {
                Result(item);
              }}
              arrowIconStyle={{
                backgroundColor: '#fff',
              }}
              placeholder="Select an item"
              placeholderStyle={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 10,
              }}
            />
          </View>
        </View>

        <View
          style={{
            // backgroundColor: "green",
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.viewstyle}>
            <Text style={styles.title}>FLOW RATE MCF</Text>
            <View
              style={{
                ...styles.dropdown,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: '700',
                  color: '#fff',
                  marginVertical: 2,
                }}>
                {value}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1 / 9,
        }}>
        {isLoading ? (
          <TouchableOpacity
            disabled={Loading}
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

export default UnitPage_1;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 30,
    fontWeight: '700',
    color: 'red',
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    color: 'blue',
  },
  title: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: '700',
    color: 'red',
    marginVertical: 2,
  },
  box: {
    borderWidth: 3,
    height: 40,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
  },
  line: {
    borderBottomWidth: 3,
    transform: [{rotate: '-75deg'}],
    width: 110,
    position: 'absolute',
    bottom: 230,
  },
  line2: {
    borderBottomWidth: 3,
    transform: [{rotate: '-50deg'}],
    width: 30,
    position: 'absolute',
    bottom: 185,
    left: 45,
  },
  number: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
  },
  dropdown: {
    borderWidth: 3,
    backgroundColor: '#000',
    borderColor: '#FFFFFF',
    borderRadius: 0,
    width: '95%',
    height: 40,
  },
  textstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  labelstyle: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  viewstyle: {
    // backgroundColor: "yellow",
    width: '80%',
    alignItems: 'center',
    marginVertical: '5%',
    marginLeft: 10,
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
    fontWeight: '700',
  },
});
