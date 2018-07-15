#!/usr/bin/env bash

arguments=("$@")

for filepath in "${arguments[@]}"; do
  git update-index --no-skip-worktree "$filepath"
done
