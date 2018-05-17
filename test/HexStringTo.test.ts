import {HelloWorldHex} from './testData/HexStrings'
import {ArrayBufferEqual} from './helper/ArrayBufferFunctions'
import {ArrayBufferHelloWorld} from './testData/ArrayBuffers'
import {HexStringToArrayBuffer, HexStringToBase64, HexStringToString} from '../src/HexStringTo'
import {HelloWorldString} from './testData/Strings'
import {HelloWorldBase64} from './testData/Base64Strings'

describe('HexString to', () => {

   it('ArrayBuffer', () => {
      const arrayBuffer = HexStringToArrayBuffer(HelloWorldHex)
      expect(ArrayBufferEqual(arrayBuffer, ArrayBufferHelloWorld)).toBeTruthy()
   })

   it('string', () => {
      const str = HexStringToString(HelloWorldHex)
      expect(str).toEqual(HelloWorldString)
   })

   it('string with empty string', () => {
      const str = HexStringToString('')
      expect(str).toEqual('')
   })

   it('base64', () => {
      const base64 = HexStringToBase64(HelloWorldHex)
      expect(base64).toEqual(HelloWorldBase64)
   })
})
