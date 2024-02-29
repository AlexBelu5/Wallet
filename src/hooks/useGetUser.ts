import {Account} from '@multiversx/sdk-core/out';
import {useEffect, useState} from 'react';
import {getUserService} from '~/services';

import {useAppSelector} from './useAppSelector';

//because we are not waiting for the transaction to be completed(we only wait for it to be sent) we do no have the exact last real data
export function useGetUser() {
  const {address, lastTransactionCompleted: lastTransactionHash} =
    useAppSelector(state => state.user);
  const [user, setUser] = useState<Account | null>(null);

  useEffect(() => {
    async function getUser() {
      const newUser = await getUserService(address);
      setUser(newUser);
    }
    getUser();
  }, [address, lastTransactionHash]);

  return user;
}
