The hardest part is web3 environment.
> because web3 need node.js environment but rn don't have,so I use rn-nodeify.
I have try visit web3 github issue ,they have not resolve this issue.

you need to do this step:
1. yarn add node-libs-browser
2. in metro.config.js
```
const extraNodeModules = require('node-libs-browser');


module.exports = {
  extraNodeModules,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
```
3. yarn add react-native-crypto react-native-randombytes
4. yarn add --dev tradle/rn-nodeify
5. react-native link 
6. ./node_modules/.bin/rn-nodeify --hack --install
7. in  App.js  add:
```
import './shim.js'
```
8. yarn add web3
9. in  package.json add :
```
"postinstall": "rn-nodeify --install --hack"
```
>note: if have 'Error: ENOENT: no such file or directory ...shim.js'
> run :react-native link    yarn add --dev tradle/rn-nodeify  ./node_modules/.bin/rn-nodeify --hack --install


