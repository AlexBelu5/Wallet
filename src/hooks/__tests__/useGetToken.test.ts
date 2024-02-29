import {act, renderHook} from '@testing-library/react-native';

import * as appSelector from '../useAppSelector';
import {useGetToken} from '../useGetToken';

jest.mock('@multiversx/sdk-native-auth-client', () => ({
  NativeAuthClient: () => ({
    initialize: () => 'testAddress',
    getToken: () => 'testToken',
  }),
}));

jest.mock('@multiversx/sdk-wallet/out', () => ({
  Mnemonic: {
    fromString: (stringMnemonicWords: string) => ({
      deriveKey: () => stringMnemonicWords,
    }),
  },
  UserSigner: () => ({
    sign: (buffer: Buffer) => Buffer.from(buffer),
  }),
}));

jest.spyOn(appSelector, 'useAppSelector').mockReturnValue({
  mnemonicWords: 'test',
  address: 'testAddress',
  lastTransactionHash: 'testHash',
});

describe('useGetToken', () => {
  it('should return the user', async () => {
    const {result} = renderHook(() => useGetToken());

    await act(async () => await result.current.getToken());

    expect(result.current?.token).toBe('testToken');
  });
});
