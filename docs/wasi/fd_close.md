@refer i32 /web-assembly/type/i32
Close an open file descriptor.
@param fd: i32 - The file descriptor mapping to an open file to close.
@return error: i32
---

The `fd_close()` function is used to close an open file descriptor. For sockets, this function will flush the data before closing the socket.

### Note

The `fd_close()` function is used to close an open file descriptor. It releases any resources associated with the file descriptor.

For sockets, it is best practise to run [`sock_shutdown()`](./sock_shutdown) before closing, because otherwise it can have unexpected runtime and latency side affects in some wasm runtimes.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_close)