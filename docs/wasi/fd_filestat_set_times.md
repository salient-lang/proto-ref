@refer fst_flags /wasi/file_stat_flags
@refer i32 /web-assembly/type/i32

Set timestamp metadata on a file
@param fd: i32 - The file descriptor of the file to set the timestamp metadata
@param st_atime: i32 - The last accessed time to set
@param st_mtime: i32 - The last modified time to set
@param control: fst_flags - A bit-vector that controls which times to set
@return error: i32
---

The `fd_filestat_set_times()` function is used to set the timestamp metadata on a file identified by a file descriptor. It allows modifying the last accessed time (`st_atime`) and last modified time (`st_mtime`) of the file. The function also provides a bit-vector (`fst_flags`) to control which times should be set.

In POSIX systems, files have associated timestamp metadata that stores information about the file's access and modification times. The `fd_filestat_set_times()` function enables applications to update these timestamps. It allows setting the last accessed and last modified times to specific values or using the current time.

### Note

The `fd_filestat_set_times()` function allows setting the timestamp metadata of a file identified by the provided file descriptor. Applications can specify the last accessed and last modified times using the provided parameters. The `fst_flags` bit-vector is used to control which times should be set.

Please note that if both `SET_ATIME` and `SET_ATIME_NOW` flags are set, or if both `SET_MTIME` and `SET_MTIME_NOW` flags are set in `fst_flags`, the function will return `Errno::Inval`.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_filestat_set_times)
