import {StringToBase64} from './StringTo'

export function HexStringToArrayBuffer (str: string): ArrayBuffer {
   let a = []
   const length = str.length
   for (let i = 0; i < length; i += 2) {
      a.push(parseInt(str.substr(i, 2), 16))
   }
   return new Int8Array(a).buffer as ArrayBuffer
}

export function HexStringToString (hexString: string): string {
   let hexes = hexString.match(/.{1,2}/g) || []
   let decodedString = ''
   for (let index = 0; index < hexes.length; index++) {
      decodedString += String.fromCharCode(parseInt(hexes[index], 16))
   }
   return decodedString
}

export function HexStringToBase64 (hexString: string) {
   return StringToBase64(HexStringToString(hexString))
}
