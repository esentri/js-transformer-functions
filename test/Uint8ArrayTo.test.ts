import {
   Uint8ArrayToHexString,
   Uint8ArrayToString,
   Uint8ArrayWithBinaryDataToString,
   Uint8ArrayToBase64,
   Uint8ArrayWithBinaryDataToBase64,
   Uint8ArrayToArrayObject,
   Uint8ArrayToArrayBuffer
} from '../src/transformer-functions'
import {
   ArrayBuffer_10_11_12,
   Uint8Array_10_11_12,
   Uint8ArrayHelloWorld
} from './testData/ArrayBuffers'
import {HelloWorldHex} from './testData/HexStrings'
import {HelloWorldBase64} from './testData/Base64Strings'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import * as path from 'path'

const DIRNAME = path.resolve(path.dirname(''))

describe('Uint8Array to', () => {

   it('hex string', () => {
      const hexString = Uint8ArrayToHexString(Uint8ArrayHelloWorld)
      expect(hexString).toEqual(HelloWorldHex)
   })

   it('string', () => {
      const str = Uint8ArrayToString(Uint8ArrayHelloWorld)
      expect(str).toBe('hello world')
   })

   it('string (binary)', () => {
      const str = Uint8ArrayWithBinaryDataToString(Uint8ArrayHelloWorld)
      expect(str).toBe('hello world')
   })

   it('base64', () => {
      const base64 = Uint8ArrayToBase64(Uint8ArrayHelloWorld)
      expect(base64).toEqual(HelloWorldBase64)
   })

   it('base64 (binary)', () => {
      const base64 = Uint8ArrayWithBinaryDataToBase64(Uint8ArrayHelloWorld)
      expect(base64).toEqual(HelloWorldBase64)
   })

   it('array object', () => {
      const mapObject = Uint8ArrayToArrayObject(Uint8Array_10_11_12)
      expect(mapObject).toEqual({0: 10, 1: 11, 2: 12})
   })

   it('ArrayBuffer', () => {
      let buffer = Uint8ArrayToArrayBuffer(Uint8Array_10_11_12)
      expect(ArrayBufferEqual(buffer, ArrayBuffer_10_11_12)).toBeTruthy()
   })

})
