#!/bin/sh

BARE_REPO=/tmp/meetup-devops-bare

mkdir -p "$BARE_REPO" 
cd "$BARE_REPO"
git --bare init
          