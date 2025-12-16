import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT_SIZES, FONT_WEIGHTS } from '../../Contants/Fonts'

const Header = ({title}) => {
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
      <Text>Hello</Text>
      <Text>Welcome</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        fontSize: FONT_SIZES.headerText,
        fontWeight: FONT_WEIGHTS.bold
    }
})