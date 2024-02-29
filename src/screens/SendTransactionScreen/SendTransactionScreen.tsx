import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Button, Layout} from '~/components/ui';
import {Title} from '~/components/ui/Title';
import {useTransaction} from '~/hooks/useTransaction';
import {WalletRoutes} from '~/navigation/Routes';

import styles from './SendTransactionScreen.style';
import {SendTransactionScreenNavigationProp} from './SendTransactionScreen.types';

export function SendTransactionScreen() {
  const [receiver, setReceiver] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const {loading, initTransaction} = useTransaction();

  const navigation = useNavigation<SendTransactionScreenNavigationProp>();

  function handleAmountChange(text: string) {
    setAmount(text);
  }

  function handleReceiverChange(text: string) {
    setReceiver(text);
  }

  async function handleSubmit() {
    await initTransaction(amount, receiver);
    navigation.navigate(WalletRoutes.Confirmation);
  }

  return (
    <Layout.Screen>
      <View style={styles.container}>
        <Title text="Submit Transaction" />
        <Text>To</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleReceiverChange}
        />
        <Text>Amount</Text>
        <TextInput style={styles.textInput} onChangeText={handleAmountChange} />
        <Button
          disabled={loading}
          onPress={handleSubmit}
          title="Send Transaction"
        />
        {loading && <Text style={styles.loading}>Sending...</Text>}
      </View>
    </Layout.Screen>
  );
}
