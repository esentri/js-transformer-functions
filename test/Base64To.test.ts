import {Base64ToArrayBuffer, Base64ToBinaryString, Base64ToHexString, Base64ToString} from '../src/Base64To'
import {BinaryStringBase64, HelloWorldBase64} from './testData/Base64Strings'
import {BinaryString, HelloWorldString} from './testData/Strings'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import {ArrayBufferHelloWorld} from './testData/ArrayBuffers'
import {HelloWorldHex} from './testData/HexStrings'

describe('base64 to', () => {

   it('string', () => {
      const str = Base64ToString(HelloWorldBase64)
      expect(str).toEqual(HelloWorldString)
   })

   it('binary string', () => {
      const str = Base64ToBinaryString(BinaryStringBase64)
      expect(str).toEqual(BinaryString)
   })

   it('to string (without atob)', () => {
      const bufferedAtoB = atob
      delete window.atob
      const str = Base64ToString(HelloWorldBase64)
      expect(str).toEqual(HelloWorldString)
      window.atob = bufferedAtoB
   })

   it('hex string', () => {
      const str = Base64ToHexString(HelloWorldBase64)
      expect(str).toEqual(HelloWorldHex)
   })

   it('ArrayBuffer', () => {
      const arrayBuffer = Base64ToArrayBuffer(HelloWorldBase64)
      expect(ArrayBufferEqual(arrayBuffer, ArrayBufferHelloWorld)).toBeTruthy()
   })
})
