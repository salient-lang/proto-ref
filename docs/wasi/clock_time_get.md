@refer i32 /web-assembly/type/i32
Get the time of the specified clock
@param clock_id: i32 - The ID of the clock to query
@param precision: i32 - The maximum amount of error the reading may have
@param time: i32 - A WebAssembly pointer to a memory location where the value of the clock will be written
@return error: i32
---

The `clock_time_get()` function is used to retrieve the time of the specified clock. It returns the value of the clock in nanoseconds.

### Note

The `clock_time_get()` function retrieves the time of the specified clock. The time value is returned in nanoseconds and is written to the specified memory location.

[Read More](https://wasix.org/docs/api-reference/wasi/clock_res_get)
