import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../utils';

const CustomButton = ({
  title,
  onPress,
  backgroundColor = '#6A0DAD',
  textColor = '#FFFFFF',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height:theme.verticalSpacing.space_48,
    width: theme.horizontalSpacing.space_370,
    paddingVertical: theme.verticalSpacing.space_12,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: theme.fontSizes.size_16,
    fontWeight:'bold'
  },
});

export default CustomButton;
