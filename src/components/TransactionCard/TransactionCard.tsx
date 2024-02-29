import React from 'react';
import {Text, View} from 'react-native';
import {StoreTransaction} from '~/store/transactions/types';
import {normalizeAmount} from '~/utils';

import styles from './TransactionCard.style';

export function TransactionCard({value, receiver, sender}: StoreTransaction) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amount: {normalizeAmount(value)}</Text>
      <Text style={styles.text}>Sender: {sender} </Text>
      <Text>Receiver: {receiver}</Text>
    </View>
  );
}
