import {Base64} from 'js-base64'
import {StringToArrayBuffer, StringToHexString} from './transformer-functions'
import {StringToUint8Array} from './StringTo'

export function Base64WithBinaryDataToString(base64: string): string {
   return Base64.atob(base64)
}

export function Base64ToString (base64: string): string {
   return Base64.decode(base64)
}

export function Base64ToHexString (base64: string): string {
   return StringToHexString(Base64ToString(base64))
}

export function Base64ToArrayBuffer (base64: string): ArrayBuffer {
   return StringToArrayBuffer(Base64ToString(base64))
}

export function Base64WithBinaryDataToArrayBuffer (base64: string): ArrayBuffer {
   return StringToArrayBuffer(Base64WithBinaryDataToString(base64))
}

export function Base64ToUint8Array (base64: string): Uint8Array {
   return StringToUint8Array(Base64ToString(base64))
}

export function Base64WithBinaryDataToUint8Array (base64: string): Uint8Array {
   return StringToUint8Array(Base64WithBinaryDataToString(base64))
}
