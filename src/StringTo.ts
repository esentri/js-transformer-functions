import {Base64} from 'js-base64'

export function StringToArrayBuffer (str: string): ArrayBuffer {
   return (new Int8Array([].map.call(str, (x: any) => {
      return x.charCodeAt(0)
   }))).buffer as ArrayBuffer
}

export function StringToBase64 (value: string): string {
   return Base64.encode(value)
}

export function StringToHexString (str: string): string {
   let hexString = ''
   for (let index = 0; index < str.length; index++) {
      let hex = str.charCodeAt(index).toString(16)
      hexString += ('0' + hex).slice(-2)
   }
   return hexString
}
