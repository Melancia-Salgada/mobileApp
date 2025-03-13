import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  profile: {
    fontSize: 50, 
    fontWeight: 'bold', 
  }
})

const Profile = () => {
  return (
    <View style={style.container}>
      <Text style={style.profile}>Profile</Text> 
    </View>
  )
}

export default Profile;
