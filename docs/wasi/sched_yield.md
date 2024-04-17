@refer i32 /web-assembly/type/i32

@return error: i32
---

Yields the execution of the current thread.

The `sched_yield()` function is used to yield the execution of the current thread, allowing other threads to run. When called, the current thread voluntarily gives up the CPU and goes into a "yielded" state, allowing the scheduler to schedule another thread for execution.

This function is similar to the POSIX `sched_yield()` function, which allows a thread to give up its current time slice and move to the end of the scheduling queue.

### Notes

- The `sched_yield()` function provides a way for a thread to voluntarily relinquish the CPU and allow other threads to run. It is particularly useful in situations where threads with lower priority need to be given an opportunity to execute.
- When called, the `sched_yield()` function does not guarantee that another thread will be immediately scheduled for execution. The actual behavior depends on the underlying scheduler and the scheduling policies in place.
- This function is typically used in multi-threaded environments where multiple threads share the same CPU resources. By yielding the execution, a thread can give other threads a chance to make progress and prevent excessive monopolization of CPU time by a single thread.
- The `sched_yield()` function is a cooperative mechanism and relies on the underlying scheduler to schedule threads fairly. It is not intended for precise control over thread execution order or timing.
- The exact behavior of `sched_yield()` may vary depending on the specific runtime environment and underlying operating system. It is important to consult the documentation or specifications of the specific environment to understand its behavior in that context.

[Read More](https://wasix.org/docs/api-reference/wasi/sched_yield)