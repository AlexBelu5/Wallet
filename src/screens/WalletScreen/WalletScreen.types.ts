import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {WalletStackParams} from '~/navigation';
import {WalletRoutes} from '~/navigation/Routes';

export type WalletRouteProp = RouteProp<WalletStackParams, WalletRoutes.Wallet>;

export type WalletScreenNavigationProp = StackNavigationProp<WalletStackParams>;
