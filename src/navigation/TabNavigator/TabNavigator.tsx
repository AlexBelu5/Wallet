import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {DAppConnectionScreen} from '~/screens';

import {Tabs} from '../Routes';
import {WalletNavigator} from '../WalletNavigator';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={Tabs.Wallet} component={WalletNavigator} />
      <Tab.Screen name={Tabs.Connection} component={DAppConnectionScreen} />
    </Tab.Navigator>
  );
}
