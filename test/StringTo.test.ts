import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import {StringToArrayBuffer, StringToBase64, StringToHexString, StringWithBinaryDataToBase64} from '../src/transformer-functions'
import {ArrayBufferHelloWorld} from './testData/ArrayBuffers'
import {BinaryString, HelloWorldString} from './testData/Strings'
import {BinaryStringBase64, HelloWorldBase64} from './testData/Base64Strings'
import {HelloWorldHex} from './testData/HexStrings'

describe('string to', () => {

   it('ArrayBuffer', () => {
      const str = 'hello world'
      const arrayBuffer = StringToArrayBuffer(str)
      expect(ArrayBufferEqual(ArrayBufferHelloWorld, arrayBuffer)).toBeTruthy()
   })

   it('base64', () => {
      const base64 = StringToBase64(HelloWorldString)
      expect(base64).toEqual(HelloWorldBase64)
   })

   it('base64 (binary)', () => {
      const base64 = StringWithBinaryDataToBase64(BinaryString)
      expect(base64).toEqual(BinaryStringBase64)
   })

   it('base64 (without btoa)', () => {
      const bufferedBtoA = btoa
      delete window.btoa
      const base64 = StringToBase64(HelloWorldString)
      expect(base64).toEqual(HelloWorldBase64)
      window.btoa = bufferedBtoA
   })

   it('hex string', () => {
      const hexString = StringToHexString(HelloWorldString)
      expect(hexString).toEqual(HelloWorldHex)
   })
})
