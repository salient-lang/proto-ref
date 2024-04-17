@refer i32 /web-assembly/type/i32
@refer iovec /wasi/iovec

Read data from a file descriptor
@param fd: i32 - The file descriptor of the file to read from
@param iovs: i32 - A pointer to an array of iovec structures describing the buffers where the data will be stored
@param iovs_len: i32 - The number of vectors iovec in the `iovs` array
@param nread: i32 - 
@return error: i32
---

### Description

The `fd_read()` function is used to read data from a file identified by the provided file descriptor (`fd`). It takes an array of {@type iovec} structures ({@type iovec}) describing the buffers where the data will be stored, the number of vectors (`iovs_len`) in the {@type iovec} array, and a pointer to store the number of bytes read. The function reads data from the file into the specified buffers and returns the number of bytes read.

In POSIX systems, reading data from a file typically involves updating the file cursor, which determines the next position from which data will be read. The `fd_read()` function allows reading data from a file without modifying the file cursor's position. This can be useful in scenarios where applications need to read data from a specific location in a file without altering the cursor's state.

### Note

The `fd_read()` function allows reading data from a file identified by the file descriptor `fd`. It takes the file descriptor, an array of buffers where the data will be stored, the number of vectors in the {@type iovec} array, and a pointer to store the number of bytes read. The function reads data from the file into the specified buffers without modifying the file cursor's position. It returns an error code to indicate the success or failure of the operation. If the data is successfully read from the file, it returns `Errno::Success`. Otherwise, it returns an appropriate error code.

[Read More](https://wasix.org/docs/api-reference/wasi/)
