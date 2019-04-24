function ArrayObjectToArray(arrayObject: any): any {
   let index = 0
   let array = []
   for (let property in arrayObject) {
      if (property !== index.toString()) {
         throw new Error('Inconsistence in array object: ' + property + ' != ' + index)
      }
      array.push(arrayObject[property])
      index++
   }
   return array
}

export function ArrayObjectToArrayBuffer (arrayObject: any, byteLength = 8): ArrayBuffer {
   if (byteLength === 8) return ArrayObjectToUint8Array(arrayObject).buffer as ArrayBuffer
   if (byteLength === 16) return new Uint16Array(ArrayObjectToArray(arrayObject)).buffer as ArrayBuffer
   throw new Error('Unsupported byte length: ' + byteLength)
}

export function ArrayObjectToUint8Array (arrayObject: any): Uint8Array {
   let array = ArrayObjectToArray(arrayObject)
   return new Uint8Array(array)
}
