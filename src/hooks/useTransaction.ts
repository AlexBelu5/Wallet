import {
  Address,
  GasEstimator,
  TokenTransfer,
  Transaction,
  TransactionPayload, // TransactionWatcher,
} from '@multiversx/sdk-core/out';
import {useState} from 'react';
import {getUserService} from '~/services/getUserService';
import {
  // invalidateTags,
  useBroadcastTransactionMutation,
} from '~/store/transactions/slice';
import {setLastTransactionCompleted} from '~/store/user/slice';
import {signTransaction} from '~/utils';

import {useAppDispatch} from './useAppDispatch';
import {useAppSelector} from './useAppSelector';

export function useTransaction() {
  const {mnemonicWords, address: stringAddress} = useAppSelector(
    state => state.user,
  );
  const dispatch = useAppDispatch();
  const [loading, setIsLoading] = useState(false);

  const address = new Address(stringAddress);

  const [broadcastTransaction] = useBroadcastTransactionMutation();

  // const watcher = new TransactionWatcher(apiNetworkProvider);

  async function initTransaction(amount: string, receiver: string) {
    setIsLoading(true);
    try {
      const data = '';

      const user = await getUserService(stringAddress);
      const gasLimit = new GasEstimator().forEGLDTransfer(data.length);

      const transaction = new Transaction({
        nonce: user.getNonceThenIncrement(),
        value: TokenTransfer.egldFromAmount(amount),
        sender: address,
        receiver: new Address(receiver),
        data: new TransactionPayload(),
        gasPrice: 1000000000,
        gasLimit: gasLimit,
        chainID: 'T', // we could have used networkConfig.ChainID
      });
      const signedTransaction = await signTransaction(
        transaction,
        mnemonicWords,
      );

      await broadcastTransaction(signedTransaction.toSendable());
      dispatch(
        setLastTransactionCompleted({
          amount,
          receiver,
          txHash: transaction.getHash().toString(),
        }),
      ); //if we have waited for the completion of the transaction then we would not have to keep this as a separate part because we could get these from the transactions slice

      // await watcher.awaitCompleted(transaction);
      // dispatch(invalidateTags(['transactions'])); //I added this to invalidate the tag after the watcher for the transactions signal it as complete so it can be fetched again so we have the actual data in wallet
      //if we remove the comments the wallet should work with real time data
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  }

  return {initTransaction, loading};
}
