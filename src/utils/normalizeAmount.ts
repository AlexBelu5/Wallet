import {TokenTransfer} from '@multiversx/sdk-core/out';

export function normalizeAmount(amount: string) {
  return TokenTransfer.egldFromBigInteger(amount).toPrettyString();
}
