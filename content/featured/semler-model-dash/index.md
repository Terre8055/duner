---
date: '0'
title: 'Semler Model Dashboard'
cover: './smd.png'
github: 'http://smd-503859553.eu-west-1.elb.amazonaws.com'
external: 'http://smd-503859553.eu-west-1.elb.amazonaws.com'
tech:
  - ECS
  - EFS
  - Lambda
  - S3
  - Github Actions
---

Deployed a multi-container application on AWS Fargate, leveraging Amazon Elastic File System (EFS) for persistent
storage. Configured AWS Lambda to automate start/stop tasks and resource management.

Integrated EFS into Fargate task definitions using bind mounts, ensuring data persistence for critical files.

Automated the mounting of an EFS volume to Fargate services and set up secure access via AWS Identity and Access
Management (IAM) roles and Security Groups.

Configured Lambda functions to start and stop Fargate services on a schedule, optimizing resource utilization and costs.

Handled data transfer between S3 and EFS, automating file movement for application workflows.

Troubleshot and resolved issues with EFS access permissions, security group configurations, and Fargate resource
limits.
