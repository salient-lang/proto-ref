@function
@typedef i32 /web-assembly/type/i32
@param file_descriptor: i32
@param address: i32
@return error: i32
---
The sock_bind() function is used to bind a socket to a specific address. This function is similar to the bind function in POSIX, which is used to associate a specific address with a socket.

In POSIX, the bind function is typically used with sockets that use the PF_INET address family, which corresponds to IPv4 addresses. Similarly, in the WASI context, sock_bind() uses the PF_INET address family to bind the socket.

Binding a socket to a specific address allows the socket to receive incoming connections or send data from the specified address. It restricts the socket to operate on a specific network interface and port.

[See](https://wasix.org/docs/api-reference/wasix/sock_bind)