@refer i32 /web-assembly/type/i32
Get metadata about a preopened file descriptor
@param fd: i32 - The preopened file descriptor to query
@param buf: i32 - A pointer to a `Prestat` structure where the metadata will be written
@return error: i32
---

The `fd_prestat_get()` function is used to retrieve metadata about a preopened file descriptor (`fd`). Preopened file descriptors represent files or directories that are provided to a WebAssembly module at startup. This function allows obtaining information about such preopened file descriptors.

The function takes the file descriptor as input and writes the corresponding metadata into the provided buffer (`buf`) of type `__wasi_prestat`. The metadata includes information such as the type of the preopened resource.

### Note

The `fd_prestat_get()` function is used to retrieve metadata about a preopened file descriptor. Preopened file descriptors are files or directories that are available to the WebAssembly module at startup. The function takes the preopened file descriptor as input and writes the corresponding metadata into the provided buffer. The metadata provides information about the type of the preopened resource.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_prestat_get)
