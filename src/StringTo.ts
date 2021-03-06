import {Base64} from 'js-base64'

export function StringToArrayBuffer (value: string): ArrayBuffer {
   return StringToUint8Array(value).buffer
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

export function StringWithBinaryDataToBase64 (value: string): string {
   return Base64.btoa(value)
}

export function StringToUint8Array (value: string) {
   let uint8Array = new Uint8Array(value.length)
   for (let i = 0; i < value.length; i++) {
      uint8Array[i] = value.charCodeAt(i)
   }
   return uint8Array
}
