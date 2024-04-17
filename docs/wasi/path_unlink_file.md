@refer i32 /web-assembly/type/i32

Unlink a file, deleting it if the number of hardlinks is 1
@param fd: i32 - The file descriptor representing the base directory from which the path is understood
@param path: i32 - A wasm pointer to a null-terminated string containing the path of the file to be unlinked
@param path_len: i32 - The length of the path string
@return error: i32
---

The `path_unlink_file()` function unlinks a file at the specified path. If the file has only one hardlink (i.e., its link count is 1), it will be deleted from the file system. It requires the `PATH_UNLINK_FILE` right on the base file descriptor.

On POSIX systems, a similar functionality is provided by the `unlink()` function. It removes the specified file from the file system. If the file has no other hardlinks, it is completely deleted. The `unlink()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `path_unlink_file()` function unlinks a file at the specified path, deleting it if the number of hardlinks is 1. It checks the necessary rights on the base file descriptor. On POSIX systems, a similar functionality is provided by the `unlink()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_unlink_file)
