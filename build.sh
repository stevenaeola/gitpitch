#!/bin/bash
sed '/^---/ d' PITCHME.md | sed '/^@/ d' > README.md
PATHEND=$(pwd | rev | cut -d'/' -f-2 | rev)
git add .
git commit -m "Working on presentation $PATHEND"
git push -u origin master
echo "https://gitpitch.com/stevenaeola/gitpitch/master?p=${PATHEND}"
