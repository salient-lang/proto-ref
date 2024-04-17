@refer i32 /web-assembly/type/i32

Create a hard link
@param old_fd: i32 - 
@param fd: i32 - The file descriptor representing the directory that the old_path is relative to
@param old_flags: i32 - Flags to control how the old_path is understood
@param old_path: i32 - A wasm pointer to a null-terminated string containing the old file path
@param old_path_len: i32 - The length of the old_path string
@param new_fd: i32 - The file descriptor representing the directory that the new_path is relative to
@param new_path: i32 - A wasm pointer to a null-terminated string containing the new file path
@param new_path_len: i32 - The length of the new_path string
@return error: i32
---

> **WARNING**: I think this documentation from [wasmer](https://wasix.org/docs/api-reference/wasi/path_link) may be incorrect, based on the implementation details in [wasix-libc](https://github.com/wasix-org/wasix-libc/tree/main/libc-bottom-half/headers/public/wasi/api_wasi.h#L2024-L2042)

The `path_link()` function creates a hard link between two files. It creates a new directory entry with the specified name in the destination directory, which refers to the same underlying file as the source file.

On POSIX systems, a similar functionality is provided by the `link()` function. It creates a new link (directory entry) for an existing file. The new link and the original file refer to the same inode and share the same content.

### Note

The `path_link()` function creates a hard link between two files. It checks if the necessary rights are present on both the source and target directories. It then creates a new directory entry in the target directory with the specified name, linking it to the source file.

On POSIX systems, a similar functionality is provided by the `link()` function.

[Read More](https://wasix.org/docs/api-reference/wasi/path_link)
