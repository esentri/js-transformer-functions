export function ArrayBufferToHexString (arrayBuffer: ArrayBuffer): string {
   return Array.from(new Uint8Array(arrayBuffer))
      .map(x => ('00' + x.toString(16)).slice(-2)).join('')
}

export function HexStringToArrayBuffer (str: string): ArrayBuffer {
   let a = []
   const length = str.length
   for (let i = 0; i < length; i += 2) {
      a.push(parseInt(str.substr(i, 2), 16))
   }
   return new Uint8Array(a).buffer as ArrayBuffer
}

export function ArrayBufferToString (arrayBuffer: ArrayBuffer): string {
   return String.fromCharCode.apply(null, new Uint8Array(arrayBuffer))
}

export function StringToArrayBuffer (str: string): ArrayBuffer {
   return (new Uint8Array([].map.call(str, (x: any) => {
      return x.charCodeAt(0)
   }))).buffer as ArrayBuffer
}
