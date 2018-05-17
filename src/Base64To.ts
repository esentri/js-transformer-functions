import {StringToArrayBuffer, StringToHexString} from './StringTo'

export function Base64ToString (base64: string): string {
   if (window.atob) return atob(base64)
   return new Buffer(base64, 'base64').toString('utf8')
}

export function Base64ToHexString (base64: string): string {
   return StringToHexString(Base64ToString(base64))
}

export function Base64ToArrayBuffer (base64: string): ArrayBuffer {
   return StringToArrayBuffer(Base64ToString(base64))
}
