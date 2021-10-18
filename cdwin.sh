#!/bin/bash

# cdwin - use cd on WSL directly with windows-style paths
#
# this script is supposed to be sourced
# usage:
#    source cdwin 'X:some\windows\path'
# or...
#    . cdwin 'X:some\windows\path'

A=$(echo $1 | perl -pe 's/\\/\//g')
# 'X:/some/windows/path'

B=$(echo $A | perl -pe 's/(.)(:)/\L\/mnt\/\1/')
# '/mnt/x/some/windows/path'

cd "$B"