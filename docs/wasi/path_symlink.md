@refer i32 /web-assembly/type/i32

Create a symlink
@param old_path: i32 - A wasm pointer to a null-terminated string containing the source path of the symlink
@param old_path_len: i32 - The length of the old_path string
@param fd: i32 - The file descriptor representing the base directory from which the paths are understood
@param new_path: i32 - A wasm pointer to a null-terminated string containing the target path where the symlink will be created
@param new_path_len: i32 - The length of the new_path string
@return error: i32
---


The `path_symlink()` function creates a symbolic link (symlink) with the specified source path pointing to the target path. It requires the `PATH_SYMLINK` right on the base directory.

On POSIX systems, a similar functionality is provided by the `symlink()` function. It creates a symbolic link with the specified source and target paths. The `symlink()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `path_symlink()` function creates a symbolic link (symlink) with the specified source path pointing to the target path. It checks the necessary rights on the base directory. On POSIX systems, a similar functionality is provided by the `symlink()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_symlink)
