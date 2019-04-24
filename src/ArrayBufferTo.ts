import {
   StringToBase64,
   StringWithBinaryDataToBase64,
   Uint8ArrayToArrayObject,
   Uint8ArrayToHexString,
   Uint8ArrayToString
} from './transformer-functions'

export function ArrayBufferToHexString (arrayBuffer: ArrayBuffer): string {
   return Uint8ArrayToHexString(ArrayBufferToUint8Array(arrayBuffer))
}

export function ArrayBufferToString (arrayBuffer: ArrayBuffer): string {
   return Uint8ArrayToString(ArrayBufferToUint8Array(arrayBuffer))
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
   if (byteLength === 8) return Uint8ArrayToArrayObject(ArrayBufferToUint8Array(arrayBuffer))
   if (byteLength === 16) return JSON.parse(JSON.stringify(new Uint16Array(arrayBuffer)))
   throw new Error('Unsupported type length: ' + byteLength)
}

export function ArrayBufferToUint8Array (arrayBuffer: ArrayBuffer): Uint8Array {
   return new Uint8Array(arrayBuffer)
}
