import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  ajustes: {
    fontSize: 50,
    fontWeight: 'bold', 
  }
})

const Ajustes = () => {
  return (
    <View style={style.container}>
      <Text style={style.ajustes}>Ajustes</Text> 
    </View>
  )
}

export default Ajustes;
