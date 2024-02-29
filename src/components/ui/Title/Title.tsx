import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

import styles from './Title.style';

interface TitleProps {
  text: string;
  testId?: string;
  style?: StyleProp<TextStyle>;
}

export function Title({text, testId, style}: TitleProps) {
  return (
    <Text testID={testId} style={[styles.title, style]}>
      {text}
    </Text>
  );
}
