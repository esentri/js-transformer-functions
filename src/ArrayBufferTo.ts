import {StringToBase64, StringWithBinaryDataToBase64} from './transformer-functions'

export function ArrayBufferToHexString (arrayBuffer: ArrayBuffer): string {
   return Array.from(new Uint8Array(arrayBuffer))
      .map(x => ('00' + x.toString(16)).slice(-2)).join('')
}

export function ArrayBufferToString (arrayBuffer: ArrayBuffer): string {
   let uintArray = new Uint8Array(arrayBuffer)
   let converted: any = []
   uintArray.forEach(function (byte) {
      converted.push(String.fromCharCode(byte))
   })
   return converted.join('')
}

export function ArrayBufferWithBinaryDataToString (arrayBuffer: ArrayBuffer): string {
   return ArrayBufferToString(arrayBuffer)
}

export function ArrayBufferWithBinaryDataToBase64 (arrayBuffer: ArrayBuffer): string {
   return StringWithBinaryDataToBase64(ArrayBufferWithBinaryDataToString(arrayBuffer))
}

export function ArrayBufferToBase64 (arrayBuffer: ArrayBuffer): string {
   return StringToBase64(ArrayBufferToString(arrayBuffer))
}

export function ArrayBufferToArrayObject (arrayBuffer: ArrayBuffer, byteLength: number = 8): string {
   if (byteLength === 8) return JSON.parse(JSON.stringify(new Uint8Array(arrayBuffer)))
   if (byteLength === 16) return JSON.parse(JSON.stringify(new Uint16Array(arrayBuffer)))
   throw new Error('Unsupported type length: ' + byteLength)
}
