import {BinaryString} from './testData/Strings'
import {BinaryStringBase64} from './testData/Base64Strings'
import {BinaryStringToBase64} from '../src/transformer-functions'

describe('binary string to', () => {

   it('base64', () => {
      const base64 = BinaryStringToBase64(BinaryString)
      expect(base64).toEqual(BinaryStringBase64)
   })
})
