@refer i32 /web-assembly/type/i32
Change the size of an open file, zeroing out any new bytes
@param fd: i32 - The file descriptor of the open file to adjust
@param st_size: i32 - The new size to set for the file
@return error: i32
---

The `fd_filestat_set_size()` function is used to modify the size of an open file identified by a file descriptor. It allows adjusting the size of the file and zeroing out any newly allocated bytes.

In POSIX systems, files have a size attribute that represents the amount of data stored in the file. The `fd_filestat_set_size()` function enables applications to change the size of an open file. When increasing the file size, any newly allocated bytes are automatically filled with zeros.

### Parameters

- `ctx`: A mutable reference to the function environment.
- `fd`: The file descriptor of the open file to adjust.
- `st_size`: The new size to set for the file.

### Note

The `fd_filestat_set_size()` function allows changing the size of an open file identified by the provided file descriptor. If the file size is increased, any newly allocated bytes are zeroed out. This function requires appropriate access rights on the file descriptor, and failure to meet the access requirements will result in an `Errno::Access` error.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_filestat_set_size)
