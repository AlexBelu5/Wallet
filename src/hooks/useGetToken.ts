// import {useExtensionLogin} from '@multiversx/sdk-dapp/hooks';
import {NativeAuthClient} from '@multiversx/sdk-native-auth-client';
import {UserSigner} from '@multiversx/sdk-wallet/out';
import {useCallback, useEffect, useState} from 'react';
import {getSecretKeyFromMnemonicString} from '~/utils';

import {useAppSelector} from './useAppSelector';

export const API_URL = 'https://testnet-api.multiversx.com';

export function useGetToken() {
  const [token, setToken] = useState('');
  const {address, mnemonicWords} = useAppSelector(state => state.user);

  const getToken = useCallback(async () => {
    const client = new NativeAuthClient({
      apiUrl: API_URL,
      expirySeconds: 7200,
    });
    const initialPart = await client.initialize();
    const userSecretKey = getSecretKeyFromMnemonicString(mnemonicWords);
    const userSigner = new UserSigner(userSecretKey);
    const signature = await userSigner.sign(
      Buffer.from(`${address}${initialPart}`),
    );
    const accessToken = client.getToken(
      address,
      initialPart,
      signature.toString('hex'),
    );
    setToken(accessToken);
  }, [address, mnemonicWords]);

  useEffect(() => {
    getToken();
  }, [address, getToken, mnemonicWords]);

  return {getToken, token};
}
