@typedef i32 /web-assembly/type/i32
Close an open file descriptor.
@param fd: i32 - The file descriptor mapping to an open file to close.
@return error: i32 - The function returns a `Result` containing an `Errno` value indicating the success or failure of the operation. An `Errno::Success` value indicates a successful closure.
---
The `fd_close()` function is used to close an open file descriptor. It releases any resources associated with the file descriptor.
For sockets, it is best practise to run [`sock_shutdown()`](/wasi/sock_shutdown) before closing, because otherwise it can have unexpected runtime and latency side affects in some wasm runtime.