import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../utils';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  style,
  inputStyle,
  leftIcon,
  onLeftIconPress,
  rightIcon,
  numberOfLines,
  multiline = false,
  editable= true,
  // key,
  onRightIconPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && (
        <TouchableOpacity onPress={onLeftIconPress} style={styles.iconContainer}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <TextInput
        value={value}
        // key={key}
        editable={editable}
        onChangeText={onChangeText}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, inputStyle]}
        placeholderTextColor={theme.lightColor.gray}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#F7F8F9',
    borderRadius:10,
    borderWidth:0.3,
    borderColor: theme.lightColor.gray,
    paddingHorizontal: theme.horizontalSpacing.space_12,
    height: theme.verticalSpacing.space_56,
    marginTop:theme.verticalSpacing.space_10
  },
  input: {
    flex: 1,
    fontSize: theme.fontSizes.size_14,
    color: theme.darkModeColor.blackColor,
    paddingHorizontal: theme.horizontalSpacing.space_8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.horizontalSpacing.space_8,
  },
});

export default CustomTextInput;