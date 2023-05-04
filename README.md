# IS-3150 Warehouse

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Problem & Overview

In my informations systems class, the final project of simulating a business using excel
felt very far from realistic. In the project, the entire class in involved. There's a number of teams that get excel spreadsheets to work together, one of them being inventory management. I thought
it would be awesome for that team to be able to scan NFC tags to simulate warehouse scanning, and
my professor agreed.

## Project Design

The main development goal was to create a website deployed onto AWS, connected to an AWS database, and
use a web interface to populate a noSQL table.

The first iteration used the classic HTML/CSS/JS front-end stack, and was later changed to React
in order to be able to dynamically change the amount of items being used in the warehouse.

The react app utilizes JavaScript in order to invoke API requests to AWS using API Gateway, using Lambda
as a serverless backend. You can see the Lambda code written in Python [here](https://github.com/MarcAldrichBrophy/IS-3150-Lambda).

The Lambda code reads and writes to a table using DynamoDB on AWS, and is invoked by GET requests to
display current table amounts, and also by user input and interaction.

## Project Deployment

When the code is pushed onto the master branch, an AWS CodePipeline is invoked, deploying the project
into an Elastic Beanstalk environment on AWS. The app from here gets placed onto an EC2 instance, ready
to be consumed on a website.

View the demo page [here](https://3150warehouse.com).