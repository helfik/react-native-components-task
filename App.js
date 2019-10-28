
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Text, Image, TextInput} from 'react-native';

import Beautifulbutton from './components/Beautifulbutton'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}>
          <Image style={styles.imageStyle} source={ require('./images/pendants.jpeg')}/>
          <View style={styles.body}>
            <Beautifulbutton/>
            <View style={styles.textCont}>
              <Text style={styles.textStyle}>One day Gregor Zamza opened his eyes in his room lying in his bed and realised that he became an awful bug. This is the only sentence I remember from this book of Kafka. </Text>
            </View>
            <View>
              <TextInput style={styles.textInput} placeholder="some text"/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fafafa',
  },

  body: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  imageStyle: {
    width: '100%',
    height: 200,
  },

  textStyle: {
    fontSize: 20,
    color: '#888',
    textAlign: 'justify',
  },

  textCont: {
    alignItems: 'center',
    padding: 30,
  },

  textInput: {
    borderRadius: 10,
    borderColor: '#666',
    borderWidth: 1,
    width: 200,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },

});

export default App;
