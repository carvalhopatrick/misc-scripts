# cdwin
Utility shell script to facilitate navigating in Windows directories when using WSL (Windows Subsystem for Linux).

Lets you copy a Windows-style directory path (`X:some\windows\path`) and the script converts it to a WSL Unix-style path (`/mnt/x/some/windows/path`)

### Usage
1. Add the file to a PATH directory (e.g. `/usr/local/bin`)
2. Rename it from `cdwin.sh` to `cdwin` (removing the extension)
3. Make it executable (`chmod +x cdwin`)
4. Use it anywhere via `source cdwin 'X:some\windows\path'` (remember the ' ')

