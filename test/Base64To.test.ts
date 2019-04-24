import {BinaryStringBase64, HelloWorldBase64} from './testData/Base64Strings'
import {BinaryString, HelloWorldString} from './testData/Strings'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import {ArrayBufferHelloWorld, Uint8ArrayHelloWorld} from './testData/ArrayBuffers'
import {HelloWorldHex} from './testData/HexStrings'
import {
   Base64ToArrayBuffer,
   Base64ToHexString,
   Base64ToString, Base64ToUint8Array,
   Base64WithBinaryDataToArrayBuffer,
   Base64WithBinaryDataToString, Base64WithBinaryDataToUint8Array
} from '../src/transformer-functions'

describe('base64 to', () => {

   it('string', () => {
      const str = Base64ToString(HelloWorldBase64)
      expect(str).toEqual(HelloWorldString)
   })

   it('string (binary)', () => {
      const str = Base64WithBinaryDataToString(BinaryStringBase64)
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

   it('ArrayBuffer (binary)', () => {
      const arrayBuffer = Base64WithBinaryDataToArrayBuffer(HelloWorldBase64)
      expect(ArrayBufferEqual(arrayBuffer, ArrayBufferHelloWorld)).toBeTruthy()
   })

   it('Uint8Array', () => {
      const array = Base64ToUint8Array(HelloWorldBase64)
      expect(array).toEqual(Uint8ArrayHelloWorld)
   })

   it('Uint8Array (binary)', () => {
      const array = Base64WithBinaryDataToUint8Array(HelloWorldBase64)
      expect(array).toEqual(Uint8ArrayHelloWorld)
   })
})
