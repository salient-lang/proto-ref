@refer i32 /web-assembly/type/i32

Terminate the process normally. An exit code of 0 indicates successful termination of the program. The meanings of other values are dependent on the environment.
@param code: i32 - The exit code to return to the operating system
@return error: i32
---

The `proc_exit()` function is similar to the `exit()` function in POSIX systems. It allows the program to gracefully terminate with an exit code. The provided exit code is returned to the operating system.

### Notes

- The behavior of `proc_exit()` is similar to the POSIX `exit()` function, which terminates the calling process.
- The `exit()` function in POSIX does not have a return value, as the termination of the process is immediate.
- It is important to note that `proc_exit()` is specific to the WASIX system call toolchain for WebAssembly and may have slight differences from the POSIX `exit()` function.
- In POSIX systems, the `exit()` function is usually called at the end of the program or when an error occurs that requires immediate termination.
- The exit code returned by `proc_exit()` can be used by the parent process or by the operating system to determine the status of the terminated process.
- The meanings of exit codes other than 0 depend on the specific environment or application. In POSIX systems, non-zero exit codes are often used to indicate different types of errors or exceptional conditions.
- When writing portable code, it is important to consider the exit code meanings in the target environment and ensure proper handling of different exit codes.

[Read More](https://wasix.org/docs/api-reference/wasi/proc_exit)
