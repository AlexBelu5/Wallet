import {Account, Address} from '@multiversx/sdk-core/out';
import {apiNetworkProvider} from '~/utils';

export async function getUserService(stringAddress: string) {
  const address = new Address(stringAddress);

  const newUser = new Account(address);

  const fetchedUser = await apiNetworkProvider.getAccount(new Address(address));
  newUser.update(fetchedUser);

  return newUser;
}
