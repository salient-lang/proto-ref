@function
@refer i32 /web-assembly/type/i32
@param fd: i32 - The file descriptor of the socket to bind
@param addr: i32 - A WebAssembly pointer to the address to bind the socket to
@return error: i32
Binds a socket to a specific address
---

### Notes

- The `sock_bind()` function is used to associate a specific address with a socket.
- The behavior and limitations of the `sock_bind()` function may vary depending on the specific runtime environment and underlying networking implementation. It is important to consult the documentation or specifications of the specific environment to understand its behavior in that context.
- In POSIX, the `bind` function can be used with different address families and protocols, such as IPv6 (PF_INET6) and Unix domain sockets (PF_UNIX). However, in the current context of WASI, the `sock_bind()` function specifically uses the PF_INET address family to bind the socket.
- The `addr` parameter should contain the IP address and port number to which the socket will be bound.


#### Sock Address In Layout

For information on valid `sin_family` values refer to the documentation on [`sock_open()`](/wasix/sock_open#address-family-values)

##### IPv4

```typescript
interface sockaddr_in {
  sin_family: i16;
  sin_port:   i16;
  sin_addr:   i8[4]; // IPv4 address, i.e. 124.456.789.012
  sin_zero:   i8[8]; // padding for size compatibility with sockaddr
}
```

##### IPv6

```typescript
interface sockaddr_in6 {
  sin6_family:   i16;
  sin6_port:     i16;
  sin6_flowinfo: i32;
  sin6_addr:     i16[8];
  sin6_scope_id: i32;
}
```

##### IPC

```typescript
interface sockaddr_un {
  sun_family: i16;
  sun_path:   i8[108];
}
```

[See](https://wasix.org/docs/api-reference/wasix/sock_bind)