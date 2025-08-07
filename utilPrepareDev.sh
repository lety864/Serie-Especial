#!/bin/bash

echo "======================================================="
echo "Cleaning old node_modules"
sh ./scriptDeleteNodeModules.sh
echo "======================================================="
echo "Installing node_modules"
sh ./scriptInstallNodeModules.sh

echo "======================================================="
echo "Finished"
echo "======================================================="
