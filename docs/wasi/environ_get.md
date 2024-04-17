@refer i32 /web-assembly/type/i32
Read environment variable data
@param environ: i32 - A WebAssembly pointer to a buffer where the environment variable pointers will be written
@param environ_buf: i32 - A WebAssembly pointer to a buffer where the environment variable string data will be written
@return error: i32
---

The `environ_get()` function is used to read the environment variable data. It writes the environment variable pointers and string data to the specified buffers. The sizes of the buffers should match the values returned by the `environ_sizes_get()` function.

### Note

The `environ_get()` function reads the environment variable data and writes the environment variable pointers and string data to the specified buffers. The actual data is retrieved from the WebAssembly module's state.

[Read More](https://wasix.org/docs/api-reference/wasi/environ_get)
