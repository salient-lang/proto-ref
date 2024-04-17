@refer i32 /web-assembly/type/i32

Read data from a directory specified by the file descriptor
@param fd: i32 - The file descriptor of the directory to read from
@param buf: i32 - A pointer to the buffer where directory entries will be stored
@param buf_len: i32 - The length of the buffer in bytes
@param cookie: i32 - The directory cookie indicating the position to start reading from
@param bufused: i32 - A pointer to store the number of bytes stored in the buffer
@return error: i32
---

The `fd_readdir()` function reads directory entries from a directory identified by the provided file descriptor (`fd`). It stores the directory entries in the buffer specified by `buf` and returns the number of bytes stored in the buffer via the `bufused` pointer.

### Note

The `fd_readdir()` function reads directory entries from a directory identified by the file descriptor `fd`. It takes the file descriptor, a buffer where the directory entries will be stored, the length of the buffer in bytes, the directory cookie indicating the position to start reading from, and a pointer to store the number of bytes stored in the buffer.

The function reads the directory entries and stores them in the buffer according to the specified format. The `bufused` pointer will be updated with the number of bytes stored in the buffer. If the entire directory has been read and there is no more data to read, the function will indicate this by storing a value less than `buf_len` in `bufused`.

The function returns an `Errno` value to indicate the success or failure of the operation. If the directory entries are successfully read and stored in the buffer, it returns `Errno::Success`. Otherwise, it returns an appropriate error code.

[Read More](https://wasix.org/docs/api-reference/wasi/fd_readdir)
