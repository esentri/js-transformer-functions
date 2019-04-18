import {
   ArrayBufferToBase64,
   ArrayBufferToHexString,
   ArrayBufferToArrayObject,
   ArrayBufferToString,
   ArrayBufferWithBinaryDataToString, Base64ToArrayBuffer, ArrayBufferWithBinaryDataToBase64
} from '../src/transformer-functions'
import {ArrayBuffer_16b_10_11_12, ArrayBuffer_10_11_12, ArrayBufferHelloWorld} from './testData/ArrayBuffers'
import {HelloWorldHex} from './testData/HexStrings'
import {HelloWorldBase64} from './testData/Base64Strings'
import * as fs from 'fs'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import * as path from 'path'

const DIRNAME = path.resolve(path.dirname(''))

describe('ArrayBuffer to', () => {

   it('hex string', () => {
      const hexString = ArrayBufferToHexString(ArrayBufferHelloWorld)
      expect(hexString).toEqual(HelloWorldHex)
   })

   it('string', () => {
      const str = ArrayBufferToString(ArrayBufferHelloWorld)
      expect(str).toBe('hello world')
   })

   it('string (binary)', () => {
      const str = ArrayBufferWithBinaryDataToString(ArrayBufferHelloWorld)
      expect(str).toBe('hello world')
   })

   it('base64', () => {
      const base64 = ArrayBufferToBase64(ArrayBufferHelloWorld)
      expect(base64).toEqual(HelloWorldBase64)
   })

   it('base64 (binary)', () => {
      const base64 = ArrayBufferWithBinaryDataToBase64(ArrayBufferHelloWorld)
      expect(base64).toEqual(HelloWorldBase64)
   })

   it('base64 as file', () => {
      let file = fs.readFileSync(DIRNAME + '/test/testData/text.txt')
      let arrayBuffer = new Uint8Array(file).buffer as ArrayBuffer
      let base64 = ArrayBufferToBase64(arrayBuffer)
      let decodedArrayBuffer = Base64ToArrayBuffer(base64)
      expect(ArrayBufferEqual(decodedArrayBuffer, arrayBuffer)).toBeTruthy()
   })

   it('array object (default)', () => {
      const mapObject = ArrayBufferToArrayObject(ArrayBuffer_10_11_12)
      expect(mapObject).toEqual({0: 10, 1: 11, 2: 12})
   })

   it('array object (byte length 8)', () => {
      const mapObject = ArrayBufferToArrayObject(ArrayBuffer_10_11_12, 8)
      expect(mapObject).toEqual({0: 10, 1: 11, 2: 12})
   })

   it('array object (byte length 16)', () => {
      const mapObject = ArrayBufferToArrayObject(ArrayBuffer_16b_10_11_12, 16)
      expect(mapObject).toEqual({0: 10, 1: 11, 2: 12})
   })

   it('array object (unsupported byte length)', () => {
      for (let byteLength = 0; byteLength <= 128; byteLength++) {
         if (byteLength === 8 || byteLength === 16) continue
         expect(() => ArrayBufferToArrayObject(ArrayBuffer_16b_10_11_12, byteLength))
            .toThrow()
      }
   })

})
