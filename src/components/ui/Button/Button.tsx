import React from 'react';
import {StyleProp, ViewStyle, TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  title: string;
  testId?: string;
  onPress: () => void;
}

export function Button({title, testId, disabled, style, onPress}: ButtonProps) {
  return (
    <TouchableOpacity
      testID={testId}
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
