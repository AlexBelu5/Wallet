import {Transaction} from '@multiversx/sdk-core/out';
import {CrossWindowProviderResponseEnums} from '@multiversx/sdk-web-wallet-cross-window-provider/out/types';
import cloneDeep from 'lodash.clonedeep';
import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {SignModal} from '~/components/SignModal';
import {Button, Layout} from '~/components/ui';
import {useAppSelector} from '~/hooks/useAppSelector';
import {useGetToken} from '~/hooks/useGetToken';
import {signTransaction} from '~/utils';

import styles from './DAppConnectionScreen.style';

export function DAppConnectionScreen() {
  const webviewRef = useRef<WebView>(null);

  const {mnemonicWords} = useAppSelector(state => state.user);
  const {token} = useGetToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDappOpen, setIsDappOpen] = useState(false);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  function handleClose() {
    setIsModalOpen(false);
  }

  async function handleSign() {
    if (transaction) {
      const newTransaction = cloneDeep(transaction);
      const signedTransaction = await signTransaction(
        newTransaction,
        mnemonicWords,
      );

      const message = {
        type: CrossWindowProviderResponseEnums.signTransactionsResponse,
        message: {transactions: [signedTransaction.toPlainObject()]},
      };

      webviewRef.current?.postMessage(JSON.stringify(message));
    }
  }

  async function handleWebViewMessage(event: any) {
    const data = JSON.parse(event.nativeEvent.data);

    setTransaction(Transaction.fromPlainObject(data.message[0]));
    setIsModalOpen(true);
  }

  function handleOpenDApp() {
    setIsDappOpen(prevState => !prevState);
  }

  if (!token || !mnemonicWords) {
    return (
      <Layout.Screen>
        <View style={styles.notConnectedContainer}>
          <Text>
            {!mnemonicWords ? 'There is no wallet connected' : 'Loading...'}
          </Text>
        </View>
      </Layout.Screen>
    );
  }

  const titleMessage = isDappOpen ? 'Close dApp' : 'Open dApp';
  return (
    <Layout.Screen>
      <View style={styles.container}>
        <Button
          onPress={handleOpenDApp}
          title={titleMessage}
          style={styles.openDAppButton}
        />
        {isDappOpen && (
          <WebView
            style={styles.webview}
            ref={webviewRef}
            source={{
              uri: `https://testnet.template-dapp.multiversx.com?accessToken=${token}`,
            }}
            onMessage={handleWebViewMessage}
          />
        )}
        {transaction && (
          <SignModal
            receiver={transaction.getReceiver().bech32()}
            amount={transaction.getValue().toString()}
            open={isModalOpen}
            handlePress={handleSign}
            onClose={handleClose}
          />
        )}
      </View>
    </Layout.Screen>
  );
}
