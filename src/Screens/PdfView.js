// import React from "react";
// import { View, Text, PermissionsAndroid } from "react-native";
// import RNFetchBlob from "rn-fetch-blob";

// export default downloadFile = () => {
//   checkPermission();
//   // Get today's date to add the time suffix in filename
//   let date = new Date();
//   // File URL which we want to download
//   let FILE_URL =
//     "https://www.precisioncompression.com/images/brochures/Precision_Compression_Brochure_20_w.pdf";
//   // Function to get extention of the file url
//   let file_ext = getFileExtention(FILE_URL);

//   file_ext = "." + file_ext[0];

//   // config: To get response by passing the downloading related options
//   // fs: Root directory path to download
//   const { config, fs } = RNFetchBlob;
//   let RootDir = fs.dirs.PictureDir;
//   let options = {
//     fileCache: true,
//     addAndroidDownloads: {
//       path:
//         RootDir +
//         "/file_" +
//         Math.floor(date.getTime() + date.getSeconds() / 2) +
//         file_ext,
//       description: "downloading file...",
//       notification: true,
//       // useDownloadManager works with Android only
//       useDownloadManager: true,
//     },
//   };
//   config(options)
//     .fetch("GET", FILE_URL)
//     .then((res) => {
//       // Alert after successful downloading
//       console.log("res -> ", JSON.stringify(res));
//       alert("File Downloaded Successfully.");
//     });
// };
// const getFileExtention = (fileUrl) => {
//   // To get the file extension
//   return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
// };
// const checkPermission = async () => {
//   if (Platform.OS === "ios") {
//     downloadFile();
//   } else {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: "Storage Permission Required",
//           message: "Application needs access to your storage to download File",
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         // Start downloading
//         downloadFile();
//         console.log("Storage Permission Granted.");
//       } else {
//         // If permission denied then show alert
//         Alert.alert("Error", "Storage Permission Not Granted");
//       }
//     } catch (err) {
//       // To handle permission related exception
//       console.log("++++" + err);
//     }
//   }
// };
import React, { Component } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default class PdfView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={this.props.navigation.navigate('Home')}
          style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
        <WebView
          style={{ height: '50%', width: '50%' }}
          originWhitelist={['*']}
          useWebKit
          source={{
            uri:
              'https://www.precisioncompression.com/images/brochures/Precision_Compression_Brochure_20_w.pdf'
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          mixedContentMode={'always'}
          onFileDownload={({ nativeEvent: { downloadUrl } }) =>
            console.log('File downloaded', downloadUrl)
          }
        />
      </View>
    )
  }
}
