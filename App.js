// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {

  handlePress = () => {
    console.log("you pressed on the button !");
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

      <Pressable onPress={handlePress}>
        <Text>CLICK ME !</Text>
      </Pressable>
     

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



})