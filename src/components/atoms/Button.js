import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../Contants/Colors'
import { FONT_SIZES, LINE_HEIGHTS } from '../../Contants/Fonts';

const Button = ({
  title,
  onPress
}) => {
  return (
      <TouchableOpacity style={styles.ButtonContainer} onPress={onPress}>
            <LinearGradient
            colors={[COLORS.primary, COLORS.primary, COLORS.primaryDark]}
            locations={[0, 0.5, 1]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerContainer}
          >
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
        </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    headerContainer: {
        borderRadius: 5,
        paddingVertical: 13,
        alignItems: 'center',
        justifyContent: 'center', 
         alignSelf: "center", 
         paddingHorizontal: 70,
         paddingVertical: 13,
    },  
    ButtonContainer: {
        marginVertical: 33,
     
    },
    buttonText: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZES.md,
        lineHeight: LINE_HEIGHTS.loose,
        textAlign: 'center'
    }
})