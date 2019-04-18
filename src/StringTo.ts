import {Base64} from 'js-base64'

export function StringToArrayBuffer (str: string): ArrayBuffer {
   let buf = new ArrayBuffer(str.length)
   let bufView = new Uint8Array(buf)
   for (let i = 0; i < str.length; i++) {
      bufView[i] = str.charCodeAt(i)
   }
   return buf
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
