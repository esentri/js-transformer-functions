import {StringToBase64, StringWithBinaryDataToBase64} from './transformer-functions'

export function Uint8ArrayToHexString (array: Uint8Array): string {
   return Array.from(array)
      .map(x => ('00' + x.toString(16)).slice(-2)).join('')
}

export function Uint8ArrayToString (array: Uint8Array): string {
   let converted: any = []
   array.forEach(function (byte) {
      converted.push(String.fromCharCode(byte))
   })
   return converted.join('')
}

export function Uint8ArrayWithBinaryDataToString (array: Uint8Array): string {
   return Uint8ArrayToString(array)
}

export function Uint8ArrayToBase64 (array: Uint8Array): string {
   return StringToBase64(Uint8ArrayToString(array))
}

export function Uint8ArrayWithBinaryDataToBase64 (array: Uint8Array): string {
   return StringWithBinaryDataToBase64(Uint8ArrayWithBinaryDataToString(array))
}

export function Uint8ArrayToArrayObject (array: Uint8Array): string {
   return JSON.parse(JSON.stringify(array))
}

export function Uint8ArrayToArrayBuffer (array: Uint8Array): ArrayBuffer {
   return array.buffer
}
