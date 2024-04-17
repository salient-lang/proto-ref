@refer i32 /web-assembly/type/i32

Send a signal to the process of the calling thread.

@param sig: i32 - The signal to be raised for the process
@return error: i32
---

The `proc_raise()` function sends a signal to the process of the calling thread. It takes a `Signal` as input, which represents the signal to be raised for the process.

This function is similar to the `raise` function in POSIX, which sends a signal to the current process or a specific process.

### Notes

- The `proc_raise()` function sends a signal to the process of the calling thread.
- It uses the `signal_process()` method of the current process to send the signal.
- This function is similar to the `raise` function in POSIX, which sends a signal to the current process or a specific process.
- After sending the signal, the function calls `WasiEnv::process_signals_and_exit()` to process any pending signals and handle process termination if necessary.

[Read More](https://wasix.org/docs/api-reference/wasi/proc_raise)
