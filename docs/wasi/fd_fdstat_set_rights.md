@refer i32 /web-assembly/type/i32
Set the rights of a file descriptor. This can only be used to remove rights
@param ctx: i32 - A mutable reference to the function environment
@param fd: i32 - The file descriptor to apply the new rights to
@param fs_rights_base: i32 - The base rights to apply to the file descriptor
@param fs_rights_inheriting: i32 - The inheriting rights to apply to the file descriptor
@return error: i32
---

The `fd_fdstat_set_rights()` function is used to set the rights of a file descriptor. It allows modifying the access rights associated with the file descriptor by applying new rights or removing existing rights.

In POSIX systems, file descriptors are associated with access rights that define the operations that can be performed on the file or resource represented by the descriptor. These access rights control actions such as reading, writing, or seeking within the file. The `fd_fdstat_set_rights()` function enables applications to modify the access rights associated with a file descriptor, restricting or expanding the available operations.

### Note

The `fd_fdstat_set_rights()` function is used to modify the access rights associated with a file descriptor. It allows applications to set or remove rights from the file descriptor. However, it can only be used to remove rights, not add new ones.

Please note that when setting new rights, they must be a subset of the current rights. If any of the new rights are not included in the current rights, the function will return `Errno::Notcapable`.


[Read More](https://wasix.org/docs/api-reference/wasi/fd_fdstat_set_rights)
