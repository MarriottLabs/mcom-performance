#!/bin/bash

USERNAME=$(curl https://api.github.com/repos/MarriottLabs/mcom-performance/pulls/$ghprbPullId?access_token=06894fe9104bf3dfa8360a62146222bc664e8eda | jq -r .user.login)

aws s3 mb s3://mcom-perf-${USERNAME}
aws s3 website s3://mcom-perf-${USERNAME}/ --index-document index.html
aws s3 sync --acl public-read --delete ratelist-menu/ s3://mcom-perf-${USERNAME}/
