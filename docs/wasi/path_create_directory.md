@refer i32 /web-assembly/type/i32

Create a directory at a path
@param fd: i32 - The file descriptor representing the directory that the path is relative to
@param path: i32 - A wasm pointer to a null-terminated string containing the path data
@param path_len: i32 - The length of the path string
@return error: i32
---

The `path_create_directory()` function creates a new directory at the specified path relative to the given directory. It requires the `PATH_CREATE_DIRECTORY` right to be set on the directory where the new directory will be created.

On POSIX systems, a similar functionality is provided by the `mkdir()` function. It creates a new directory with the given name and the specified permission mode. The `mkdir()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `path_create_directory()` function creates a new directory at the specified path relative to the given directory. It checks if the specified directory has the necessary rights and creates the directory accordingly. On POSIX systems, a similar functionality is provided by the `mkdir()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_create_directory)
