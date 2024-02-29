import {fireEvent, render, screen} from '@testing-library/react-native';
import * as hooks from 'hooks/useImportWalletFromMnemonic';
import React from 'react';
import {WalletRoutes} from '~/navigation/Routes';

import {WelcomeScreen} from '../WelcomeScreen';

const mockImportWallet = jest.fn();
const mockNavigation = jest.fn();

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  }),
}));

jest.mock('hooks/useGetUser.ts', () => ({
  address: 'fakeAddress',
  mnemonicWords: 'fakeWords',
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigation,
  }),
}));

jest
  .spyOn(hooks, 'useImportWalletFromMnemonic')
  .mockReturnValue({importWallet: mockImportWallet});

it('should call initiateWallet and navigate to wallet page', () => {
  render(<WelcomeScreen />);

  const importWalletButton = screen.getByTestId('ImportWalletButton');
  const input = screen.getByTestId('MnemonicTextInput');

  fireEvent.changeText(input, 'TestInput');

  fireEvent.press(importWalletButton);

  expect(mockImportWallet).toHaveBeenCalledWith('TestInput');
  expect(mockNavigation).toHaveBeenCalledWith(WalletRoutes.Wallet);
});
