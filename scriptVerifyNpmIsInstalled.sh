#!/bin/bash

if ! command -v npm &> /dev/null
then
    echo "npm no está instalado. Por favor instala Node.js (incluye npm)"
    exit 1
else
    echo "npm está instalado: versión $(npm -v)"
fi
