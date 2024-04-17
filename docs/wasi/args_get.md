@refer i32 /web-assembly/type/i32
Read command-line argument data
@param argv: i32 - A WebAssembly pointer to a buffer where the argument pointers will be written
@param argv_buf: i32 - A WebAssembly pointer to a buffer where the argument string data will be written
@return error: i32
---

The `args_get()` function is used to read the command-line argument data provided to the WebAssembly module. The sizes of the buffers should match the values returned by the `args_sizes_get()` function.

### Note

The `args_get()` function reads the command-line argument data provided to the WebAssembly module. The argument pointers and string data are written to the specified buffers. The actual data is retrieved from the WebAssembly module's state.

[Read More](https://wasix.org/docs/api-reference/wasi/args_get)