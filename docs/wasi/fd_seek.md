@refer i32 /web-assembly/type/i32

Update file descriptor offset
@param fd: i32 - The file descriptor to update
@param offset: i32 - The number of bytes to adjust the offset by
@param whence: i32 - The position that the offset is relative to
@param newoffset: i32 - A WebAssembly memory pointer where the new offset will be stored
@return error: i32
---

The `fd_seek()` function updates the offset of a file descriptor. It allows you to adjust the offset by a specified number of bytes relative to a given position.

| Whence   | Value | Description |
| :-       |  :-:  | :- |
| SEEK_SET |   0   | Sets the offset to an absolute value |
| SEEK_CUR |   1   | Adjusts the offset relative to the current position |
| SEEK_END |   2   | Adjusts the offset relative to the end of the file |

[Read More](https://wasix.org/docs/api-reference/wasi/fd_seek)
