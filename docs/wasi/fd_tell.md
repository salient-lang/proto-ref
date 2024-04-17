@refer i32 /web-assembly/type/i32

Get the offset of the file descriptor
@param fd: i32 - The file descriptor to access
@param offsetPtr: i32 - A wasm pointer to a `Filesize` where the offset will be written
@return error: i32
---

The `fd_tell()` function retrieves the current offset of the specified file descriptor relative to the start of the file.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_tell)
