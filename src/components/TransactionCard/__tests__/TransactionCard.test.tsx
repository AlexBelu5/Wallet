import React from 'react';
import renderer from 'react-test-renderer';

import {TransactionCard} from '../TransactionCard';

jest.mock('@multiversx/sdk-wallet/out', () => {});
jest.mock('@multiversx/sdk-core/out', () => ({
  TokenTransfer: {
    egldFromBigInteger: (amount: string) => ({
      toPrettyString: () => amount,
    }),
  },
}));

it('TransactionCard renders correctly', () => {
  const receiver = 'testReceiver';
  const sender = 'testSender';
  const value = 'testAmount';
  const tree = renderer
    .create(
      <TransactionCard receiver={receiver} sender={sender} value={value} />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
