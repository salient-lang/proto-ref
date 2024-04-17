@refer i32 /web-assembly/type/i32

Rename a file or directory
@param old_fd: i32 - The file descriptor representing the base directory for the source path
@param old_path: i32 - A wasm pointer to a null-terminated string containing the source path of the file or directory to be renamed
@param old_path_len: i32 - The length of the old_path string
@param new_fd: i32 - The file descriptor representing the base directory for the target path
@param new_path: i32 - A wasm pointer to a null-terminated string containing the target path with the new name for the file or directory
@param new_path_len: i32 - The length of the new_path string
@return error: i32
---

The `path_rename()` function renames a file or directory specified by the given path. It requires the `PATH_RENAME_SOURCE` right on the source directory and the `PATH_RENAME_TARGET` right on the target directory.

On POSIX systems, a similar functionality is provided by the `rename()` function. It renames a file or directory with the specified source and target paths. The `rename()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `path_rename()` function renames a file or directory specified by the given source path to the target path. It checks the necessary rights on both the source and target directories. On POSIX systems, a similar functionality is provided by the `rename()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_rename)