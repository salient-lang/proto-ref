@refer i32 /web-assembly/type/i32

Fill a buffer with high-quality random data. This function may be slow and block.

@param buf: i32 - A pointer to the buffer where the random bytes will be written
@param buf_len: i32 - The number of bytes to be written
@return error: i32
---

The `random_get()` function is used to fill a buffer with high-quality random data. It takes a pointer to a buffer and the number of bytes to be written as input. The function will generate random bytes and write them to the specified buffer.

Generating high-quality random data may be a slow operation and may block in certain cases, especially when the system's entropy pool is depleted. Therefore, this function should be used with caution in performance-sensitive scenarios.

### Note

- The `random_get()` function fills a buffer with high-quality random data.
- It uses the `getrandom` crate to generate the random data.
- The function creates a `u8` buffer with the specified length and calls `getrandom::getrandom()` to generate random bytes.
- If the random data is generated successfully, it writes the data to the buffer specified by `buf`.
- The function returns `Errno::Success` if the operation is successful.
- If there is an error generating the random data, such as when the system's entropy pool is depleted, it returns `Errno::Io`.

[Read More](https://wasix.org/docs/api-reference/wasi/random_get)
