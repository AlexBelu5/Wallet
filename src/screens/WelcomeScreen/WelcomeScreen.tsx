import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Button, Layout} from '~/components/ui';
import {Title} from '~/components/ui/Title';
import {useImportWalletFromMnemonic} from '~/hooks/useImportWalletFromMnemonic';
import {WalletRoutes} from '~/navigation/Routes';

import styles from './WelcomeScreen.style';
import {WelcomeScreenNavigationProp} from './WelcomeScreen.types';

export function WelcomeScreen() {
  const [text, setText] = useState('');
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const {importWallet} = useImportWalletFromMnemonic();

  function handleImportWallet() {
    importWallet(text);
    navigation.navigate(WalletRoutes.Wallet);
  }

  return (
    <Layout.Screen>
      <View style={styles.container}>
        <Title text="Welcome" />
        <Text style={styles.text}>24 words</Text>
        <TextInput
          testID="MnemonicTextInput"
          selectTextOnFocus
          multiline
          style={styles.textInput}
          onChangeText={e => setText(e)}
          value={text}
        />
        <Button
          testId="ImportWalletButton"
          onPress={handleImportWallet}
          title="Import wallet"
        />
      </View>
    </Layout.Screen>
  );
}
