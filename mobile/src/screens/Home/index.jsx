import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  home: {
    fontSize: 50, 
    fontWeight: 'bold', 
  }
})

const Home = () => {
  return (
    <View style={style.container}> 
      <Text style={style.home}>Home</Text>
    </View>
  )
}

export default Home;
