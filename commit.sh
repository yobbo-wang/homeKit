#!/bin/bash
git add android/*
git add app.json
git add index.js
git add ios/*
git add package.json
git add package-lock.json
git add yarn.lock
git add README.md
git add react.svg
git add src/*
git add resources/*
git add mox/*
git add .babelrc
git add .buckconfig
git add .flowconfig
git add .gitattributes
git add .gitignore
git add .watchmanconfig
git add commit.sh
git commit -m "first commit"
#git remote add origin https://github.com/yobbo-wang/homeKit.git
git push -u origin master
