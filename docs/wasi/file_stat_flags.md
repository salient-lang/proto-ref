@structure
@param _: u16 - This whole structure is actually just a uint16_t
---

| Flag      | Bit Mask | Description |
| :-        |   :-:    | :- |
| ATIME     |  1 << 0  | Adjust the last data access timestamp to the value stored in `filestat::atim`. |
| ATIME_NOW |  1 << 1  | Adjust the last data access timestamp to the time of clock `clockid::realtime`. |
| MTIME     |  1 << 2  | Adjust the last data modification timestamp to the value stored in `filestat::mtim`. |
| MTIME_NOW |  1 << 3  | Adjust the last data modification timestamp to the time of clock `clockid::realtime`. |