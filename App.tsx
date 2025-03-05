/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Alert, StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';

const App: React.FC = () => {
  const handleMessage = (event: any) => {
    Alert.alert(
      'Message from WebView',
      JSON.stringify({code: event.nativeEvent.data}),
    );
  };

  return (
    <View style={styles.container}>
      <Text>
        react-native-webview version 13.12.5 on react-native 0.76 (old arch)
      </Text>
      <WebView
        style={styles.webview}
        source={{
          html: `
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                  button { font-size: 24px; padding: 20px 40px; }
                </style>
                <script>
                  function sendMessage() {
                    window.ReactNativeWebView.postMessage(0);
                  }
                  function sendMessageString() {
                    window.ReactNativeWebView.postMessage('0');
                  }
                </script>
              </head>
              <body>
                <button onclick="sendMessage()">Send 0 code</button>
                <button onclick="sendMessageString()">Send '0' code'</button>
              </body>
            </html>
          `,
        }}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
