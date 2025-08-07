#!/bin/bash

if [ -f yarn.lock ]; then
    rm yarn.lock
    echo "yarn.lock removed"
else
    echo "No yarn.lock to remove"
fi

if [ -f package-lock.json ]; then
    rm package-lock.json
    echo "package-lock.json removed"
else
    echo "No package-lock.json to remove"
fi

if [ -d node_modules ]; then
    rm -rf node_modules
    echo "Folder with node_modules removed"
else
    echo "No node_modules folder to remove"
fi
