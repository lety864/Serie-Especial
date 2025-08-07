#!/bin/bash

echo "======================================================="
echo "Cleaning old node_modules"
sh ./scriptDeleteNodeModules.sh
echo "======================================================="
echo "Installing node_modules"
sh ./scriptInstallNodeModules.

echo "======================================================="
echo "Finished"
echo "======================================================="
