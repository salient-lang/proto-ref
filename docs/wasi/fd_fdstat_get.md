@refer i32 /web-assembly/type/i32
Get metadata of a file descriptor
@param fd: i32 - The file descriptor whose metadata will be accessed
@param buf_ptr: i32 - A WebAssembly pointer to a memory location where the metadata will be written
@return error: i32
---

The `fd_fdstat_get()` function is used to retrieve the metadata of a file descriptor. It provides information about the state of the file descriptor, such as its rights, flags, and file type.

In POSIX systems, file descriptors are small, non-negative integers used to represent open files, sockets, or other I/O resources. They serve as handles that allow processes to read from or write to these resources. The `fd_fdstat_get()` function allows applications to retrieve information about a specific file descriptor, gaining insights into its properties and characteristics.

### POSIX Context

In POSIX-compliant systems, file descriptors are fundamental to I/O operations. They are obtained through various system calls such as `open()`, `socket()`, or `pipe()`. Each file descriptor maintains its own set of properties, including access rights, flags, and file type.

The `fd_fdstat_get()` function corresponds to the POSIX `fstat()` system call, which retrieves information about an open file descriptor. By invoking `fd_fdstat_get()`, applications can query the metadata associated with a file descriptor and access relevant details, such as the file's mode, size, or ownership.

### Note

The `fd_fdstat_get()` function retrieves the metadata of the specified file descriptor. It writes the metadata to the provided memory location. This allows applications to examine the properties of a file descriptor and make informed decisions based on its characteristics.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_fdstat_get)
