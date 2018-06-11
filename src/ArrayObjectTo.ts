export function ArrayObjectToArrayBuffer (arrayObject: any, byteLength = 8): ArrayBuffer {
   let index = 0
   let array = []
   for (let property in arrayObject) {
      if (property !== index.toString()) {
         throw new Error('Inconsistence in array object: ' + property + ' != ' + index)
      }
      array.push(arrayObject[property])
      index++
   }
   if (byteLength === 8) return new Int8Array(array).buffer as ArrayBuffer
   if (byteLength === 16) return new Int16Array(array).buffer as ArrayBuffer
   throw new Error('Unsupported byte length: ' + byteLength)
}
