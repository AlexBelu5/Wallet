import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {TransactionCard} from '~/components';
import {Button, Layout} from '~/components/ui';
import {Title} from '~/components/ui/Title';
import {useAppSelector} from '~/hooks/useAppSelector';
import {useGetUser} from '~/hooks/useGetUser';
import {WalletRoutes} from '~/navigation/Routes';
import {useGetTransactionQuery} from '~/store/transactions/slice';
import {normalizeAmount} from '~/utils';

import styles from './WalletScreen.styles';
import {WalletScreenNavigationProp} from './WalletScreen.types';

export function WalletScreen() {
  const navigation = useNavigation<WalletScreenNavigationProp>();

  const address = useAppSelector(state => state.user.address);

  const {data: transactions} = useGetTransactionQuery(address);
  const user = useGetUser();

  function handleNavigate() {
    navigation.navigate(WalletRoutes.Submit);
  }

  if (!user) {
    return (
      <Layout.Screen>
        <View style={styles.container}>
          <Text>No wallet selected</Text>
        </View>
      </Layout.Screen>
    );
  }

  return (
    <Layout.Screen>
      <View style={styles.container}>
        <Title text="Wallet" testId="Title" />
        <Text>Address:</Text>
        <Text style={styles.text}>{user.address.bech32()}</Text>
        <Text>Balance:</Text>
        <Text style={styles.text}>
          {normalizeAmount(user.balance.toString())}
        </Text>
        <Button onPress={handleNavigate} title="Send Transaction" />
        <FlatList
          style={styles.list}
          data={transactions}
          keyExtractor={(item, index) => `${item.receiver}-${index}`}
          renderItem={({item}) => <TransactionCard {...item} />}
        />
      </View>
    </Layout.Screen>
  );
}
