@refer path_filestat_get /wasi/path_filestat_get

@structure
File attributes
@param dev: u64 - Device ID of device containing the file
@param ino: u64 - File serial number
@param filetype: __wasi_filetype_t
@param nlink: u64 - 
@param size: u64 - For regular files, the file size in bytes. For symbolic links, the length in bytes of the pathname contained in the symbolic link
@param atim: u64 - Last data access timestamp
@param mtim: u64 - Last data modification timestamp
@param ctim: u64 - Last file status change timestamp
---
Used by {@function path_filestat_get}