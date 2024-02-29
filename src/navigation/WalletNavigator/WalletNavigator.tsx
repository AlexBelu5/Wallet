import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ConfirmationScreen,
  SendTransactionScreen,
  WalletScreen,
  WelcomeScreen,
} from '~/screens';

import {WalletRoutes} from '../Routes';
import {WalletStackParams} from './WalletNavigator.types';

export const WalletStack = createNativeStackNavigator<WalletStackParams>();

export function WalletNavigator() {
  return (
    <WalletStack.Navigator screenOptions={{headerShown: false}}>
      <WalletStack.Screen
        name={WalletRoutes.Welcome}
        component={WelcomeScreen}
      />
      <WalletStack.Screen name={WalletRoutes.Wallet} component={WalletScreen} />
      <WalletStack.Screen
        name={WalletRoutes.Submit}
        component={SendTransactionScreen}
      />
      <WalletStack.Screen
        name={WalletRoutes.Confirmation}
        component={ConfirmationScreen}
      />
    </WalletStack.Navigator>
  );
}
