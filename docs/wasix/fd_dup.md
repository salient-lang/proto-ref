Duplicates a file handle.
@function
@typedef i32 /web-assembly/type/i32
@param file_descriptor: i32
@return ret_fd: i32
---
The `fd_dup()` function duplicates a file handle. It takes the file handle `fd` to be cloned and a WebAssembly memory pointer `ret_fd` where the new file handle will be stored.

The function retrieves the memory view and the file system state from the WASI environment using the function context. It then calls the `clone_fd()` method on the file system state to duplicate the file handle. The `clone_fd()` method creates a new file handle that is a duplicate of the original file handle.

The duplicated file handle is stored in the WebAssembly memory using the provided memory pointer `ret_fd`.

The function returns an `Errno` value to indicate the success or failure of the operation. If the file handle is successfully duplicated, it returns `Errno::Success`. Otherwise, it returns an appropriate error code.

[See](https://wasix.org/docs/api-reference/wasix/fd_dup)