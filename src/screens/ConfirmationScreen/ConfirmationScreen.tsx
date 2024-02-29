import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {Images} from '~/assets';
import {Button, Layout} from '~/components/ui';
import {Title} from '~/components/ui/Title';
import {useAppSelector} from '~/hooks/useAppSelector';
import {WalletRoutes} from '~/navigation/Routes';

import styles from './ConfirmationScreen.style';
import {ConfirmationScreenNavigationProp} from './ConfirmationScreen.types';

export function ConfirmationScreen() {
  const navigation = useNavigation<ConfirmationScreenNavigationProp>();
  const completedTransaction = useAppSelector(
    state => state.user.lastTransactionCompleted,
  );

  function handleLinkPress() {
    Linking.openURL(
      `https://testnet-explorer.multiversx.com/transactions/${completedTransaction?.txHash}`,
    );
  }

  function handleButtonPress() {
    navigation.navigate(WalletRoutes.Wallet);
  }

  if (!completedTransaction) {
    return (
      <Layout.Screen>
        <View style={styles.container}>
          <Text>No completed transaction</Text>
        </View>
      </Layout.Screen>
    );
  }

  return (
    <Layout.Screen>
      <View style={styles.container}>
        <Title text="Confirmation" />
        <Image source={Images.CheckMark} style={styles.image} />
        <Text style={styles.amount}>{completedTransaction.amount} Egld</Text>
        <Text style={styles.grayText}>Successfully sent to</Text>
        <Text style={styles.text}>{completedTransaction.receiver}</Text>
        <Text style={styles.grayText}>Tx hash:</Text>
        <Text style={styles.text}>{completedTransaction.txHash}</Text>
        <Text style={styles.link} onPress={handleLinkPress}>
          Open in browser
        </Text>
        <Button onPress={handleButtonPress} title="Back to wallet" />
      </View>
    </Layout.Screen>
  );
}
