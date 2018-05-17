export function StringToArrayBuffer (str: string): ArrayBuffer {
   return (new Uint8Array([].map.call(str, (x: any) => {
      return x.charCodeAt(0)
   }))).buffer as ArrayBuffer
}

export function StringToBase64 (value: string): string {
   if (window.btoa) return btoa(value)
   return Buffer.from(value, 'binary').toString('base64')
}

export function StringToHexString (str: string): string {
   let hexString = ''
   for (let index = 0; index < str.length; index++) {
      let hex = str.charCodeAt(index).toString(16)
      hexString += ('0' + hex).slice(-2)
   }
   return hexString
}
