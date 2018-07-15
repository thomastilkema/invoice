#!/usr/bin/env bash

arguments=("$@")

for filepath in "${arguments[@]}"; do
  git update-index --skip-worktree "$filepath"
done
