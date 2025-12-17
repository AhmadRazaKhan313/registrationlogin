import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FONT_SIZES, LINE_HEIGHTS} from '../../contants/Fonts'
import {COLORS} from '../../contants/Colors'

const SubHeader = ({
    text
}) => {
  return (
    <View>
      <Text style={styles.SubHeaderText}>{text}</Text>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
    SubHeaderText: {
        fontSize: FONT_SIZES.inputText,
        lineHeight: 28,
        color: COLORS.text
       

    }
})