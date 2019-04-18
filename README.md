# Transformer Functions
[![Build Status](https://travis-ci.org/esentri/js-transformer-functions.svg?branch=master)](https://travis-ci.org/esentri/js-transformer-functions)
[![Coverage Status](https://coveralls.io/repos/github/esentri/js-transformer-functions/badge.svg?branch=master)](https://coveralls.io/github/esentri/js-transformer-functions?branch=master)
[![npm version](https://badge.fury.io/js/%40esentri%2Ftransformer-functions.svg)](https://badge.fury.io/js/%40esentri%2Ftransformer-functions)

Simple functions for transforming from one data type into another.

# Install

```
npm install @esentri/transformer-functions
```

```
yarn add @esentri/transformer-functions
```

# Usage

Choose the needed function from the table (left = from, top = to):

|  From \ To   | String | HexString | ArrayBuffer | Base64 | ArrayObject | BinaryString |
|--------------|--------|-----------|-------------|--------|-------------|--------------|
| String       | -      | X         | X           |   X    | -           | -            |
| HexString    | X      | -         | X           |   X    | -           | -            |
| ArrayBuffer  | X      | X         | -           |   X    | X           | -            |
| Base64       | X      | X         | X           |   -    | -           | X            |
| ArrayObject  | -      | -         | X           |   -    | -           | -            |
| BinaryString | -      | -         | -           |   X    | -           | -            |

The corresponding method will be called:

[Type]To[Type]  e.g.: StringToArrayBuffer
[Type]WithBinaryDataTo[Type]: if you need to transform binary data

NOTE: String, HexString, and Base64 are all of type **string**. They differ in the way
what they represent (and therefor in the way they are handled).

## Special Types

**HexString**: A string that contains only hex values (e.g. `68656c6c6f20776f726c64`).
**ArrayObject**: An object that can be transformed to an array (e.g. `{0: 10, 1: 298, 2: 233}`)

# Projects used

* [js-base64](https://github.com/dankogai/js-base64)
  * BSD 3-Clause
  * for de/encoding from/to Base64

* [Typescript Library Starter](https://github.com/alexjoverm/typescript-library-starter)
  * License: MIT
  * as a template for the setup

<details>
   <summary>Typescript Library Starter dependencies</summary>

  * [JEST](https://facebook.github.io/jest/)
    * License: MIT
  * [Colors](https://github.com/Marak/colors.js)
    * License: MIT
  * [Commitizen](https://github.com/commitizen/cz-cli)
    * License: MIT
  * [Definitley Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)
    * License: MIT
  * [Coveralls](https://github.com/nickmerwin/node-coveralls)
    * License: BSD-2-Clause
  * [Cross-env](https://github.com/kentcdodds/cross-env)
    * License: MIT
  * [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
    * License: MIT
  * [Husky](https://github.com/typicode/husky)
    * License: MIT
  * [lint-staged](https://github.com/okonet/lint-staged)
    * License: MIT
  * [lodash.camelcase](https://github.com/lodash/lodash)
    * License: MIT
  * [Prompt](https://github.com/flatiron/prompt)
    * License: MIT
  * [replace-in-file](https://github.com/adamreisnz/replace-in-file)
    * License: MIT
  * [rimraf](https://github.com/isaacs/rimraf)
    * License: ISC
  * [rollup](https://github.com/rollup/rollup)
    * License: MIT
  * [semantic-release](https://github.com/semantic-release/semantic-release)
    * License: MIT
  * [tslint](https://github.com/palantir/tslint)
    * License: Apache-2.0
  * [typedoc](http://typedoc.org/)
    * License: Apache-2.0
  * [typescript](http://typescriptlang.org/)
    * License: Apache-2.0 
  * [validate-commit-msg](https://github.com/conventional-changelog/validate-commit-msg)
    * License: MIT
</details>


# License

MIT License

Copyright (c) 2018 esentri AG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
