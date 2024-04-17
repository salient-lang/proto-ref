@refer i32 /web-assembly/type/i32
@refer iovec /wasi/iovec

Write to a file without adjusting its offset
@param fd: i32 - The file descriptor of the file to write to
@param iovs: i32 - A pointer to an array of iovec structures describing the buffers from which data will be read
@param iovs_len: i32 - The number of vectors iovecs in the iovs array
@param offset: i32 - The offset indicating the position at which the data will be written
@param nwritten: i32 - A pointer to store the number of bytes written
@return error: i32
---

The `fd_pwrite()` function is used to write data to a file identified by the provided file descriptor (`fd`) without modifying its offset. It takes an array of {@type iovec} structures describing the buffers from which data will be read, the number of vectors (`iovs_len`) in the {@type iovec} array, the offset indicating the position at which the data will be written, and a pointer to store the number of bytes written. The function writes the data to the file at the specified offset and returns the number of bytes written.

In POSIX systems, writing data to a file typically involves updating the file cursor, which determines the next position at which data will be written. However, the `fd_pwrite()` function provides a way to write data to a file without adjusting its offset. This can be useful in scenarios where applications need to write data at a specific location in a file without modifying the file cursor's state.

### Note

The `fd_pwrite()` function allows writing data to a file identified by the file descriptor `fd` without adjusting its offset. It takes the file descriptor, an array of buffers from which data will be read, the number of vectors in the {@type iovec} array, the offset indicating the position at which the data will be written, and a pointer to store the number of bytes written. The function writes the data to the file at the specified offset without modifying the file cursor's state. It returns an error code to indicate the success or failure of the operation. If the data is successfully written to the file, it returns `Errno::Success`. Otherwise, it returns an appropriate error code.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_pwrite)
