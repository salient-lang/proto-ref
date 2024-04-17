@refer i32 /web-assembly/type/i32
Get the metadata of an open file
@param fd: i32 - The file descriptor of the open file whose metadata will be read
@param buf: i32 - A WebAssembly pointer to a memory location where the metadata will be written
@return error: i32
---

The `fd_filestat_get()` function is used to retrieve the metadata of an open file identified by a file descriptor. It provides information about the file's attributes, such as its size, timestamps, and permissions.

In POSIX systems, file descriptors are used to perform I/O operations on files. The `fd_filestat_get()` function allows applications to obtain the metadata of an open file, providing access to important details about the file.

### Note

The `fd_filestat_get()` function retrieves the metadata of an open file identified by the provided file descriptor. The metadata includes information about the file's attributes, such as its size, timestamps, and permissions. The retrieved metadata is written to the specified memory location.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_filestat_get)
