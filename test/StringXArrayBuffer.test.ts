import {ArrayBufferToHexString, ArrayBufferToString, HexStringToArrayBuffer, StringToArrayBuffer} from '../src/StringXArrayBuffer'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'

describe('HexString <-> ArrayBuffer converter', () => {
   const arrayBufferHelloWorld =
      new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]).buffer as ArrayBuffer

   const helloWorldHex = '68656c6c6f20776f726c64'

   it('ArrayBuffer to hex string', () => {
      const hexString = ArrayBufferToHexString(arrayBufferHelloWorld)
      expect(hexString).toEqual(helloWorldHex)
   })

   it('hex string to ArrayBuffer', () => {
      const arrayBuffer = HexStringToArrayBuffer(helloWorldHex)
      expect(ArrayBufferEqual(arrayBuffer, arrayBufferHelloWorld)).toBeTruthy()
   })

   it('ArrayBuffer to string', () => {
      const str = ArrayBufferToString(arrayBufferHelloWorld)
      expect(str).toBe('hello world')
   })

   it('string to ArrayBuffer', () => {
      const str = 'hello world'
      const arrayBuffer = StringToArrayBuffer(str)
      expect(ArrayBufferEqual(arrayBufferHelloWorld, arrayBuffer)).toBeTruthy()
   })
})
