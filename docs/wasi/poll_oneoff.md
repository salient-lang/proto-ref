@refer i32 /web-assembly/type/i32

Concurrently poll for a set of events.

@param in_: __wasi_subscription_t - A wasm pointer to an array of `__wasi_subscription_t` structures representing the events to subscribe to
@param out_: __wasi_event_t - A wasm pointer to an array of `__wasi_event_t` structures where the occurred events will be stored
@param nsubscriptions: u32 - The number of subscriptions and the number of events
@param nevents: u32 - A wasm pointer to a `u32` variable that will store the number of events seen
@return error: i32
---

The `poll_oneoff()` function allows concurrent polling for a set of events. It takes an array of event subscriptions and returns the events that have occurred since the last poll. It is instrumented with `trace` level logging for debugging purposes.

On POSIX systems, a similar functionality is provided by the `poll()` function. It allows monitoring multiple file descriptors for various types of events, such as read or write readiness, error conditions, or hang-up events. The `poll()` function is part of the POSIX standard and is widely supported across different platforms.

### Note

The `poll_oneoff()` function enables concurrent polling for a set of events. It internally uses the `poll_oneoff_internal()` function to perform the actual polling operation.

The function first processes any pending signals and exits if necessary. It then increments the poll seed to ensure different event ordering in subsequent calls.

Next, it retrieves the event subscriptions from the input array and creates a list of subscription objects. Each subscription object represents an event subscription.

The function clears the number of events to prepare for the upcoming polling.

[Read More](https://wasix.org/docs/api-reference/wasi/poll_oneoff)
