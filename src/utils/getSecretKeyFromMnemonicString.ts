import {Mnemonic} from '@multiversx/sdk-wallet/out';

export function getSecretKeyFromMnemonicString(mnemonicWords: string) {
  const mnemonic = Mnemonic.fromString(mnemonicWords.replace(/\s+/g, ' '));
  return mnemonic.deriveKey();
}
