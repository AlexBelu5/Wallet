import * as ed from '@noble/ed25519';
import {sha512} from '@noble/hashes/sha512';
import {AppRegistry} from 'react-native';
import 'react-native-get-random-values';

import {name as appName} from './app.json';
import {App} from './src/App';

/**
 * @format
 */
global.Buffer = require('buffer').Buffer;

(async () => {
  const privKey = ed.utils.randomPrivateKey();
  const message = Uint8Array.from([0xab, 0xbc, 0xcd, 0xde]);
  const pubKey = await ed.getPublicKeyAsync(privKey);
  const signature = await ed.signAsync(message, privKey);
  const isValid = await ed.verifyAsync(signature, message, pubKey);
})();

ed.etc.sha512Sync = (...m) => sha512(ed.etc.concatBytes(...m));
ed.etc.sha512Async = (...m) => Promise.resolve(ed.etc.sha512Sync(...m));

AppRegistry.registerComponent(appName, () => App);
