@refer i32 /web-assembly/type/i32
Get the resolution of the specified clock
@param clock_id: i32 - The ID of the clock to get the resolution of
@param resolution: i32 - A WebAssembly pointer to a memory location where the resolution of the clock will be written
@return error: i32
---

The `clock_res_get()` function is used to retrieve the resolution of the specified clock. It returns the resolution of the clock in nanoseconds.

### Note

The `clock_res_get()` function retrieves the resolution of the specified clock. The resolution is returned in nanoseconds and is written to the specified memory location.

[Read More](https://wasix.org/docs/api-reference/wasi/clock_res_get)
