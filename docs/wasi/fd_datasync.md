@refer i32 /web-assembly/type/i32
Synchronize the file data to disk
@param fd: i32 - The file descriptor to synchronize
@return error: i32
---

The `fd_datasync()` function is used to synchronize the file data associated with a file descriptor to disk. It ensures that any modified data for the file is written to the underlying storage device.

### Note

The `fd_datasync()` function is used to synchronize the file data associated with a file descriptor to disk. It ensures that any modified data for the file is written to the underlying storage device. Only file descriptors with the appropriate `Rights::FD_DATASYNC` permission can be synchronized.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_datasync)
