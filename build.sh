#!/bin/bash
sed '/^---/ d' PITCHME.md | sed '/^@/ d' > README.md
git add .
git commit -m "Working on presentation"
git push -u origin master
echo "https://gitpitch.com/stevenaeola/gitpitch/master?p=prog/git"
