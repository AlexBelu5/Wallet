import {getSecretKeyFromMnemonicString} from '../getSecretKeyFromMnemonicString';

jest.mock('@multiversx/sdk-wallet/out', () => ({
  Mnemonic: {
    fromString: (stringMnemonicWords: string) => ({
      deriveKey: () => stringMnemonicWords,
    }),
  },
}));

const MNEMONIC_TEST_WORDS = 'test1 test2 test3 test4';

it('return the result from deriveKey correctly', () => {
  const result = getSecretKeyFromMnemonicString(MNEMONIC_TEST_WORDS);
  expect(result).toEqual(MNEMONIC_TEST_WORDS);
});
