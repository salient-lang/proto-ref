@function
@typedef i32 /web-assembly/type/i32
@param address_family: i32 - some extra text here
@param sock_type: i32
@param sock_proto: i32
@return error: i32
---
The `sock_open()` function creates an endpoint for communication and returns a file descriptor that refers to that endpoint. The file descriptor returned by a successful call will be the lowest-numbered file descriptor not currently open for the process.

[See](https://wasix.org/docs/api-reference/wasix/sock_open)