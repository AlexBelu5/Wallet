export interface User {
  address: string;
  mnemonicWords: string;
  lastTransactionCompleted?: CompletedTransaction;
}

export interface CompletedTransaction {
  receiver: string;
  txHash: string;
  amount: string;
}
