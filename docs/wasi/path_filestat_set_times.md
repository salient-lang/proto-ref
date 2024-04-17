@refer lookup_flags /wasi/lookup_flags
@refer fst_flags /wasi/file_stat_flags
@refer i32 /web-assembly/type/i32

Update time metadata on a file or directory
@param fd: i32 - The file descriptor representing the directory that the path is relative to
@param flags: lookup_flags - Flags to control how the path is understood
@param path: i32 - A wasm pointer to a null-terminated string containing the file path
@param path_len: i32 - The length of the path string
@param atime: u64 - The timestamp that the last accessed time attribute is set to
@param mtime: u64 - The timestamp that the last modified time attribute is set to
@param control: fst_flags - A bitmask controlling which attributes are set
@return error: i32
---

The `path_filestat_set_times()` function allows updating the time metadata (last accessed time and last modified time) for a file or directory specified by a path relative to the given directory.

On POSIX systems, a similar functionality is provided by the `utimensat()` function. It updates the timestamps (access time and modification time) of a file or directory with nanosecond precision.

### Note

The `path_filestat_set_times()` function allows updating the time metadata (last accessed time and last modified time) for a file or directory specified by a path relative to the given directory. It checks if the specified directory has the necessary rights and updates the timestamps accordingly. On POSIX systems, a similar functionality is provided by the `utimensat()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_filestat_set_times)
