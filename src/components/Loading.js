import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


export default function Loading() {
  return (
      <View>
          <Text style={styles.text}>Charging</Text>
          <ActivityIndicator size="large" color="#00ff00"/>

      </View>
  )
}

//--------------------- STYLE COMPONENTS ---------------------

const styles = StyleSheet.create({

text : {
  textAlign: 'center',
  marginBottom: 15,
  fontSize: 20,
}

})
