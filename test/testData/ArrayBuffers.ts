export const ArrayBufferHelloWorld =
   new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]).buffer as ArrayBuffer

export const ArrayBufferHelloWorldWithoutSpace =
   new Uint8Array([104, 101, 108, 108, 111, 119, 111, 114, 108, 100]).buffer as ArrayBuffer

// noinspection TsLint
export const ArrayBuffer_10_11_12 =
   new Uint8Array([10, 11, 12]).buffer as ArrayBuffer

// noinspection TsLint
export const ArrayBuffer_16b_10_11_12 =
   new Uint16Array([10, 11, 12]).buffer as ArrayBuffer
