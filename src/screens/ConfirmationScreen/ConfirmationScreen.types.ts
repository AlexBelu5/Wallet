import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {WalletStackParams} from '~/navigation';
import {WalletRoutes} from '~/navigation/Routes';

export type ConfirmationRouteProp = RouteProp<
  WalletStackParams,
  WalletRoutes.Confirmation
>;

export type ConfirmationScreenNavigationProp =
  StackNavigationProp<WalletStackParams>;
