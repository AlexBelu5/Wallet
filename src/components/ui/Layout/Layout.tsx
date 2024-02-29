import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenProps {
  children?: React.ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

function Screen({children, scroll, style}: ScreenProps) {
  const insets = useSafeAreaInsets();

  if (scroll) {
    return (
      <View
        style={[
          {
            flex: 1,
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingLeft: insets.left,
          },
          style,
        ]}>
        {children}
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

export function Layout() {
  return null;
}

Layout.Screen = Screen;
