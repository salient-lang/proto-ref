@refer i32 /web-assembly/type/i32
Return environment variable data sizes
@param environ_count: i32 - A WebAssembly pointer to a memory location where the number of environment variables will be written
@param environ_buf_size: i32 - A WebAssembly pointer to a memory location where the size of the environment variable string data will be written
@return error: i32
---

The `environ_sizes_get()` function is used to retrieve the sizes of the environment variable data. It returns the number of environment variables and the size of the environment variable string data.


### Note

The `environ_sizes_get()` function returns the sizes of the environment variable data provided to the WebAssembly module. The number of environment variables and the size of the environment variable string data are written to the specified memory locations.

[Read More](https://wasix.org/docs/api-reference/wasi/environ_sizes_get)
