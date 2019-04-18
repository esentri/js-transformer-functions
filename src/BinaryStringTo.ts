import {Base64} from 'js-base64'

export function BinaryStringToBase64 (value: string): string {
   return Base64.btoa(value)
}
