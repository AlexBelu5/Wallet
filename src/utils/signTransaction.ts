import {Transaction} from '@multiversx/sdk-core/out';
import {UserSigner} from '@multiversx/sdk-wallet/out';

import {getSecretKeyFromMnemonicString} from '.';

export async function signTransaction(
  transaction: Transaction,
  mnemonicWords: string,
) {
  const serializedTransaction = transaction.serializeForSigning();

  const userSecretKey = getSecretKeyFromMnemonicString(mnemonicWords);

  const userSigner = new UserSigner(userSecretKey);
  const signature = await userSigner.sign(serializedTransaction);

  transaction.applySignature(signature);

  return transaction;
}
