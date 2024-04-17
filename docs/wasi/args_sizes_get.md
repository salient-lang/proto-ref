@refer i32 /web-assembly/type/i32
Return command-line argument data sizes
@param countPtr: i32 - A WebAssembly pointer to a memory location where the number of arguments will be written
@param sizePtr: i32 - A WebAssembly pointer to a memory location where the size of the argument string data will be written
@return error: i32
---

The `args_sizes_get()` function is used to retrieve the sizes of the command-line argument data provided to the WebAssembly module. The sizes are written to the specified output pointers.

### Note

The `args_sizes_get()` function returns the sizes of the command-line argument data provided to the WebAssembly module. The number of arguments and the size of the argument string data are written to the specified memory locations.

[Read More](https://wasix.org/docs/api-reference/wasi/args_sizes_get)