import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../contants/Fonts'
import { COLORS } from '../../contants/Colors'

const Input = ({ 
  icon: Icon, 
  placeholder = 'Enter text',
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  RightIcon,
  touched,
  error,
  ...otherProps 
}) => {
  return (
     <>
    <View style={styles.inputContainer}>
      {Icon && <Icon width={24} height={24} />}
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={COLORS.placeholder || '#515151'}
        {...otherProps}
      />
      {RightIcon && <Icon width={24} height={24} />}
    </View>
    {touched && error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
     </>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    backgroundColor: COLORS.inputBackground,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 30,
  },
  input: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    lineHeight: LINE_HEIGHTS.loose,
    fontWeight: FONT_WEIGHTS.regular
  },
  errorText: {
    paddingTop: 2,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingLeft: 10,
    color: COLORS.textError
  }
})