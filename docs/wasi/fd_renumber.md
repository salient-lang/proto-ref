@refer i32 /web-assembly/type/i32

Atomically copy a file descriptor
@param from: i32 - The file descriptor to copy
@param to: i32 - The location to copy the file descriptor to
@return error: i32
---

The `fd_renumber()` function atomically copies a file descriptor from one location to another. It ensures that the copying operation is performed atomically and returns an `Errno` value indicating the success or failure of the operation.

### Note

The `fd_renumber()` function atomically copies a file descriptor from one location to another. It takes the source file descriptor `from` and the destination file descriptor `to`. If the `from` and `to` file descriptors are the same, the function returns `Errno::Success` without performing any copying operation.

The function retrieves the file descriptor map from the WASI environment and attempts to find the file descriptor entry corresponding to `from`. If the entry is found, a new file descriptor entry is created with the same properties as the original entry, except for the file descriptor number, which is set to `to`. The new entry is then inserted into the file descriptor map with the `to` file descriptor number.

The function returns an `Errno` value to indicate the success or failure of the operation. If the file descriptor is successfully copied, it returns `Errno::Success`. Otherwise, it returns an appropriate error code.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_renumber)
