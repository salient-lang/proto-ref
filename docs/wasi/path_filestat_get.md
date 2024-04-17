@refer i32 /web-assembly/type/i32
@refer Filestat /wasi/filestat

Access metadata about a file or directory
@param fd: i32 - The file descriptor representing the directory that the path is relative to
@param flags: i32 - Flags to control how the path is understood
@param path: i32 - A wasm pointer to a null-terminated string containing the file path
@param path_len: i32 - The length of the `path` string
@param statPtr: i32 - A wasm pointer to a Filestat object where the metadata will be stored
@return error: i32
---

The `path_filestat_get()` function allows accessing metadata {@type Filestat} for a file or directory specified by a path relative to the given directory. It retrieves information such as the size, timestamps, and file type.

On POSIX systems, a similar functionality is provided by the `stat()` or `lstat()` functions, depending on whether symbolic links should be followed or not. These functions retrieve information about a file or symbolic link and store it in a `struct stat` object.

### Note

The `path_filestat_get()` function allows accessing metadata (file statistics) for a file or directory specified by a path relative to the given directory. It checks if the specified directory has the necessary rights and retrieves the file statistics accordingly. On POSIX systems, a similar functionality is provided by the `stat()` or `lstat()` functions.

[Read More](https://wasix.org/docs/api-reference/wasi/path_filestat_get)
