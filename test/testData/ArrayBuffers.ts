export const Uint8ArrayHelloWorld = new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100])
export const Uint8ArrayHelloWorldWithoutSpace = new Uint8Array([104, 101, 108, 108, 111, 119, 111, 114, 108, 100])
// noinspection TsLint
export const Uint8Array_10_11_12 = new Uint8Array([10, 11, 12])

export const ArrayBufferHelloWorld = Uint8ArrayHelloWorld.buffer as ArrayBuffer
export const ArrayBufferHelloWorldWithoutSpace = Uint8ArrayHelloWorldWithoutSpace.buffer as ArrayBuffer

// noinspection TsLint
export const ArrayBuffer_10_11_12 = Uint8Array_10_11_12.buffer as ArrayBuffer

// noinspection TsLint
export const ArrayBuffer_16b_10_11_12 =
   new Uint16Array([10, 11, 12]).buffer as ArrayBuffer
