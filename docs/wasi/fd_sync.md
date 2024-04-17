@refer i32 /web-assembly/type/i32

Synchronize file and metadata to disk
@param fd: i32 - The file descriptor to sync
@return error: i32
---

The `fd_sync()` function synchronizes the file and metadata associated with a file descriptor to disk. This ensures that any changes made to the file and its metadata are persisted and visible to other processes.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_sync)
