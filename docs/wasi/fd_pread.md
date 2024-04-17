@refer i32 /web-assembly/type/i32
Read from the file at the given offset without updating the file cursor. This acts like a stateless version of Seek + Read
@param fd: i32 - The file descriptor of the file to read from
@param iovs: i32 - A pointer to an array of iovec structures describing the buffers where the data will be stored
@param iovs_len: i32 - The number of vectors iovecs in the iovs array
@param offset: i32 - The file cursor indicating the starting position from which data will be read
@param nread: i32 - A pointer to store the number of bytes read
@return error: i32
---

The `fd_pread()` function is used to read data from a file identified by the provided file descriptor (`fd`) at a specified offset (`offset`). Unlike regular reading operations, `fd_pread()` does not update the file cursor, making it a stateless operation. The function reads data into the provided buffers (`iovs`) and returns the number of bytes read.

In POSIX systems, file reading operations typically involve updating the file cursor, which determines the next position from which data will be read. However, `fd_pread()` allows reading data from a specific offset without modifying the file cursor's position. This can be useful in scenarios where applications need to read data from a file at a specific location without altering the cursor's state.

### Note

The `fd_pread()` function allows reading data from a file at a specified offset without updating the file cursor. It provides a stateless alternative to the traditional `Seek` + `Read` operations. The function takes the file descriptor, an array of buffers to store the data, the offset indicating the starting position, and a pointer to store the number of bytes read.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_pread)
