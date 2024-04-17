@refer i32 /web-assembly/type/i32
@refer iovec /wasi/iovec

Write data to the file descriptor
@param fd: i32 - The file descriptor (opened with writing permission) to write to
@param iovs: i32 - A wasm pointer to an array of iovec structures, each describing a buffer to write data from
@param iovs_len: i32 - The length of the iovs array
@param nwritten: i32 - A wasm pointer to an offset value where the number of bytes written will be written
@return error: i32
---

The `fd_write()` function writes data from one or more buffers to the specified file descriptor. It is similar to the POSIX `write()` function, but with additional support for writing multiple non-contiguous buffers in a single function call using the {@type iovec} parameter.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_write)
