@refer i32 /web-assembly/type/i32

@param fd: i32 - The file descriptor representing the base directory from which the path is resolved
@param path: i32 - A wasm pointer to a null-terminated string containing the path of the directory to remove
@param path_len: i32 - The length of the path string
@return error: i32
---

The `path_remove_directory()` function removes a directory specified by the given path. It requires the `PATH_REMOVE_DIRECTORY` right to be set on the directory.

On POSIX systems, a similar functionality is provided by the `rmdir()` function. It removes an empty directory with the specified path. The `rmdir()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `path_remove_directory()` function removes a directory specified by the given path. It checks if the directory is empty and has the necessary rights to be removed. On POSIX systems, a similar functionality is provided by the `rmdir()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_remove_directory)