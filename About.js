

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View styles={styles.container} >
      <Text styles={styles.salam} >ASSALAMUALAIKUM I AM RANA RABEES HUSSAIN</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
container:{
    backgroundColor:'green',
},
salam:{
    color:'red',
}
})