#!/bin/sh
# move files around until jsonresume allows other files that resume.json
npx resume export --theme kendall --format html resume.html;
mv resume.json resume.en.json;
mv cv.json resume.json;
npx resume export --theme kendall --format html cv.html;
mv resume.json cv.json;
mv resume.en.json resume.json;
node augmentFiles.js;
