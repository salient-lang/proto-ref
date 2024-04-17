@refer i32 /web-assembly/type/i32
Advise the system about how a file will be used
@param fd: i32 - The file descriptor to which the advice applies
@param offset: i32 - The offset from which the advice applies
@param len: i32 - The length from the offset to which the advice applies
@param advice: i32 - The advice to be given to the operating system
@return error: i32
---

The `fd_advise()` function is used to provide advice to the operating system about the intended usage of a file. This advice can help the system optimize performance or memory usage based on the specified parameters.

| Advice     | Value | Description |
| :-         |  :-:  | :- |
| Normal     |   0   | Indicates that the application has no advice to give about its access pattern for the specified data. If no advice is given for an open file, this is the default assumption |
| Random     |   1   | The application expects to access the specified data sequentially (with lower offsets read before higher ones) |
| Sequential |   2   | The specified data will be accessed in random order |
| Will Need  |   3   | The specified data will be accessed only once |
| Don't Need |   4   | The specified data will be accessed in the near future |
| NOR Use    |   5   | The specified data will not be accessed in the near future |

| Error  | Value | Description |
| :-     |  :-:  | :- |
| EBADF  |   9   | The fd argument was not a valid file descriptor |
| EINVAL |  22   | An invalid value was specified for advice       |
| ESPIPE |  29   | The specified file descriptor refers to a pipe or FIFO. (Linux actually returns EINVAL in this case.) |

[Read More](https://wasix.org/docs/api-reference/wasi/fd_advise)
