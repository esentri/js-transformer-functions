import {StringToArrayBuffer, StringToHexString} from './StringTo'
import {Base64} from 'js-base64'

export function Base64ToBinaryString (base64: string): string {
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
