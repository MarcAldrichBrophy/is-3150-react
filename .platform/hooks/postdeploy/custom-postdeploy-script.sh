#!/bin/bash
sudo su
cd /var/app/current
if [ ! -e "./node_modules" ]; then
  echo "ADDING FILE, DNE"
  mkdir node_modules
  npm install --omit=dev
fi

echo "PREDEPLOY COMPLETED"