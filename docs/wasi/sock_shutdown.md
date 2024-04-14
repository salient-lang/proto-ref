@refer i32 /web-assembly/type/i32
Shut down socket send and receive channels.
@param fd: i32 - The file descriptor of the socket to shut down.
@param how: i32 - Specifies which channels on the socket to shut down.
@return error: i32 - The function returns an `Errno` value. If the operation is successful, `Errno::Success` is returned. Otherwise, an appropriate `Errno` value indicating the error is returned.
---
- The `sock_shutdown()` function allows you to shut down the send and/or receive channels of a socket.
- The `how` parameter specifies which channels to shut down. It can take one of the following values:
  - `__WASI_SHUT_RD`: Shut down the receive channel.
  - `__WASI_SHUT_WR`: Shut down the send channel.
  - `__WASI_SHUT_RD | __WASI_SHUT_WR`: Shut down both the send and receive channels.
- The function maps the `how` value to the corresponding `std::net::Shutdown` enum variant and passes it to the underlying socket's `shutdown()` method.
- The specific behavior of the `sock_shutdown()` function may vary depending on the runtime environment and underlying networking implementation.

| Type        | Value | Description                                   |
| :-          |  :-:  | :-                                            |
| `SHUT_RD`   |   1   | Shut down the receive channel                 |
| `SHUT_WR`   |   2   | Shut down the send channel.                   |
| `SHIT_RDWR` |   3   | Shut down both the send and receive channels. |