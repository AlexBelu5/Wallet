import {setUser as setUserData} from '~/store';
import {getSecretKeyFromMnemonicString} from '~/utils';

import {useAppDispatch} from './useAppDispatch';

export function useImportWalletFromMnemonic() {
  const dispatch = useAppDispatch();

  function importWallet(mnemonicWords: string) {
    const userSecretKey = getSecretKeyFromMnemonicString(mnemonicWords);

    const userPublicKey = userSecretKey.generatePublicKey();
    const address = userPublicKey.toAddress();
    const bech32Address = address.bech32();

    dispatch(
      setUserData({
        address: bech32Address,
        mnemonicWords,
      }),
    );
  }

  return {importWallet};
}
