import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {createContext, useContext, useEffect, useState} from 'react';
import {AllValues} from '../../App'

export default function Button() {

    const allValues = useContext(AllValues);

    const handlePress = () => {
        console.log("you pressed on the button !");
        alert('bravo, tu as cliqué !')
    
        //Toggle loading status
        allValues.setShowLoading(prevState => !prevState )
    
      }

  return (

    <View>
      <Pressable onPress={handlePress} style={styles.btn}>
        <Text style={styles.textButton}>CLICK ME !</Text>
      </Pressable>
    </View>

  )
}

//--------------------- STYLE COMPONENTS ---------------------

const styles = StyleSheet.create({

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
