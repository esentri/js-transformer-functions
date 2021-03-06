import {ArrayObjectToArrayBuffer, ArrayObjectToUint8Array} from '../src/ArrayObjectTo'
import {ArrayObject_10_11_12, ArrayObjectInconsistent} from './testData/ArrayObjects'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import {
   ArrayBuffer_10_11_12,
   ArrayBuffer_16b_10_11_12,
   Uint8Array_10_11_12
} from './testData/ArrayBuffers'

describe('Array object to', () => {

   it('ArrayBuffer (default)', () => {
      const arrayBuffer = ArrayObjectToArrayBuffer(ArrayObject_10_11_12)
      expect(ArrayBufferEqual(arrayBuffer, ArrayBuffer_10_11_12)).toBeTruthy()
   })

   it('ArrayBuffer (byte length 8)', () => {
      const arrayBuffer = ArrayObjectToArrayBuffer(ArrayObject_10_11_12, 8)
      expect(ArrayBufferEqual(arrayBuffer, ArrayBuffer_10_11_12)).toBeTruthy()
   })

   it('ArrayBuffer (byte length 16)', () => {
      const arrayBuffer = ArrayObjectToArrayBuffer(ArrayObject_10_11_12, 16)
      expect(ArrayBufferEqual(arrayBuffer, ArrayBuffer_16b_10_11_12)).toBeTruthy()
   })

   it('ArrayBuffer (byte length unsupported)', () => {
      for (let byteLength = 0; byteLength <= 128; byteLength++) {
         if (byteLength === 8 || byteLength === 16) continue
         expect(() => ArrayObjectToArrayBuffer(ArrayObject_10_11_12, byteLength)).toThrow()
      }
   })

   it('ArrayBuffer (inconsistent)', () => {
      expect(() => ArrayObjectToArrayBuffer(ArrayObjectInconsistent)).toThrow()
   })

   it('Uint8Array', () => {
      const array = ArrayObjectToUint8Array(ArrayObject_10_11_12)
      expect(array).toEqual(Uint8Array_10_11_12)
   })

})
