import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {COLORS} from '../../contants/Colors'
import {FONT_SIZES, FONT_WEIGHTS} from '../../contants/Fonts' 

const AccountPrompt = ({
  message = "Already have an account?",
  actionText = "Login Here",
  onPress = () => {}
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.actionText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPrompt;

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
      AccountText: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.textDark,
  },
  AccontContainter: {
    flexDirection: "row",
     alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  LoginText: {
    fontWeight: FONT_WEIGHTS.bold,
    fontsize: FONT_SIZES.lg
  },
  actionText: {
fontSize: FONT_SIZES.lg,
fontWeight: FONT_WEIGHTS.bold,
color: COLORS.textDark
  }
})