@function
@refer i32 /web-assembly/type/i32
@param address_family: i32 - The address family of the socket
@param sock_type: i32 - The socket type, either datagram or stream
@param sock_proto: i32 - The socket protocol
@param ro_sock: i32 - A WebAssembly pointer to a memory location where the file descriptor of the opened socket will be stored
@return error: i32
Create an endpoint for communication
---

- The `sock_open()` function creates an endpoint for communication.
- The endpoint is created using the specified address family (`af`), socket type (`ty`), and socket protocol (`pt`).
- The file descriptor returned by the function refers to the opened socket endpoint.
- The file descriptor will be the lowest-numbered file descriptor not currently open for the process.
- The function `sock_open()` is similar to the `socket` function in POSIX, using the `PF_INET` address family.
- The behavior and limitations of the `sock_open()` function may vary depending on the specific runtime environment and underlying networking implementation. It is important to consult the documentation or specifications of the specific environment to understand its behavior in that context.

#### Address Family Values

| Type        | Value | Description |
|  :-         |  :-:  | :-          |
| `AF_UNSPEC` |   0   | Unspecified placeholder |
| `AF_INET`   |   1   | Represents a IPv4 address family, and will require a [`sockaddr_in`](./sock_bind#ipv4) when binding |
| `AF_INET6`  |   2   | Represents a IPv6 address family, and will require a [`sockaddr_in6`](./sock_bind#ipv6) when binding |
| `AF_LOCAL`  |   3   | Internal socket used for communicating within the same system for IPC calls, this will require a [`sockaddr_un`](./sock_bind#ipc) when binding |

Please refer to [this file](https://github.com/wasix-org/wasix-libc/blob/main/expected/wasm32-wasi/predefined-macros.txt) in the case the value you are looking for isn't here

#### Socket Type Values

| Type           | Value | Description |
| :-             |  :-:  | :-          |
| `SOCK_STREAM`  |   1   | TCP Socket  |
| `SOCK_DGRAM`   |   2   | UDP Socket  |
| `SOCK_CLOEXEC` | `0x00002000` | This is a flag that can be combined with other socket types using the bitwise OR operator  `\|` |

Please refer to [this file](https://github.com/wasix-org/wasix-libc/blob/main/expected/wasm32-wasi/predefined-macros.txt) in the case the value you are looking for isn't here

[See](https://wasix.org/docs/api-reference/wasix/sock_open)