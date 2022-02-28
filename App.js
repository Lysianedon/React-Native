// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {createContext, useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, ActivityIndicator } from 'react-native';

export default function App() {

  const [showLoading, setShowLoading] = useState(true);

  const handlePress = () => {
    console.log("you pressed on the button !");
    // alert('bravo, tu as cliqué !')

    setShowLoading((prevState) => {
      
       if (prevState) {
         prevState = false
       } else {
         prevState = true
       }
       console.log(prevState);
    })

  }


  return (
    <ScrollView style={styles.container}>
      <View style = {styles.textContent}>
      <Text style={styles.texts, styles.size30}>Open up App.js to start working on your app!</Text>
      <Text style={styles.texts, styles.center}>Open up App.js to start working on your app!</Text>
      <Text style={styles.texts, styles.bold}>Open up App.js to start working on your app!</Text>
      </View>
      <Image
      style={styles.img}
      source={{uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}/>
      <Image
      style={styles.img}
      source={require('./src/img/konexio-logo_1.png')}/>

      {/* Button  */}
      <Pressable onPress={handlePress} style={styles.btn}>
        <Text style={styles.textButton}>CLICK ME !</Text>
      </Pressable>
     
      {/* ActivityIndicator */}
      {
        showLoading ? 
        ( <ActivityIndicator size="large" color="#00ff00" class='loading'/>)
        :
        ( null)
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor : "blue",
  },

  textContent: {
    backgroundColor : "white",
  },

  texts : {
    marginTop: 80,
    marginBottom: 80,
  },

  size30: {
    fontSize: 30,
  },

  center : {
    textAlign: 'center',
  },

  bold : {
    fontWeight : 'bold',
  },

  img : {
    width: 200,
    height: 60,
    marginLeft: 25,
  },
  btn : {
    width: 200,
    height: 80,
    margin: 'auto',
    marginTop: 15,
    border: 'red',
  },

  textButton : {
    padding: 13,
    fontSize: 20,
    color: 'white',
  },



})