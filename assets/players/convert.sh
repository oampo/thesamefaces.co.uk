#! /bin/bash
for file in *.jpg; do
convert  -auto-gamma -auto-level -normalize -resize 150x150^ $file "${file%.jpg}-color.jpg"
convert  -auto-gamma -auto-level -normalize -resize 150x150^ -set colorspace Gray -separate -average $file "${file%.jpg}-grey.jpg"
done
