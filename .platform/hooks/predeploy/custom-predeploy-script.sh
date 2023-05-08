#!/bin/bash
sudo su
cd /var/app/current

if [ ! -e "./node_modules" ]; then
  mkdir node_modules
  npm install --omit=dev
fi

echo "PREDEPLOY COMPLETED"