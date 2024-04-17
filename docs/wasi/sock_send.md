@refer i32 /web-assembly/type/i32

Send a message on a socket
@param sock: i32 - The file descriptor of the socket to send on
@param si_data: i32 - A list of scatter/gather vectors containing the data to be sent
@param si_data_len: i32 - The length of the scatter/gather vector list
@param si_flags: i32 - Message flags
@param ret_data_len: i32 - A pointer to store the number of bytes transmitted
@return error: i32
---

The `sock_send()` function is used to send a message on a socket. It is similar to the `send` function in POSIX, but it also supports writing the data from multiple buffers in the manner of `writev`.

The function sends a message using the provided scatter/gather vectors. It retrieves the data from the buffers specified by the scatter/gather vectors and transmits it on the socket. The number of bytes transmitted is returned.

### Notes

- The `sock_send()` function sends a message on a socket using the provided scatter/gather vectors.
- The function supports writing the data from multiple buffers.
- The `si_data` parameter represents a list of scatter/gather vectors, where each vector contains a buffer and its length.
- The `si_data_len` parameter specifies the length of the scatter/gather vector list.
- The data to be sent is retrieved from the buffers specified by the scatter/gather vectors.
- The number of bytes transmitted is stored in `ret_data_len`.
- The specific behavior of the `sock_send()` function may vary depending on the runtime environment and underlying networking implementation.

[Read More](https://wasix.org/docs/api-reference/wasi/sock_send)
