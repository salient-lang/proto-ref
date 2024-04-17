@refer i32 /web-assembly/type/i32

Read the value of a symlink

@param dir_fd: i32 - The file descriptor representing the base directory from which the symlink is understood
@param path: i32 - A wasm pointer to a null-terminated string containing the path to the symlink
@param path_len: i32 - The length of the path string
@param buf: i32 - A wasm pointer to a buffer where the target path of the symlink will be written
@param buf_len: i32 - The available space in the buffer pointed to by buf
@param buf_used: i32 - A wasm pointer to a variable where the number of bytes written to the buffer will be stored
@return error: i32
---

The `path_readlink()` function reads the target path that a symlink points to. It requires the `PATH_READLINK` right to be set on the base directory from which the symlink is understood.

On POSIX systems, a similar functionality is provided by the `readlink()` function. It reads the value of a symbolic link and stores it in a buffer. The `readlink()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `path_readlink()` function reads the target path of a symlink. It checks if the base directory has the necessary rights and reads the target path accordingly. On POSIX systems, a similar functionality is provided by the `readlink()` function.


[Read More](https://wasix.org/docs/api-reference/wasi/path_readlink)