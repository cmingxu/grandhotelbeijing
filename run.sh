#!/bin/bash
docker build . -t zhuzhu && docker run -it -p 80:80 -d zhuzhu
