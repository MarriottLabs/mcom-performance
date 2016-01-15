#!/bin/bash

USERNAME=$(curl https://api.github.com/repos/MarriottLabs/mcom-performance/pulls/$ghprbPullId?access_token=$GH_OAUTH | jq -r .user.login)
aws s3 mb s3://mcom-hackathon-${USERNAME}
aws s3 sync --acl public-read --delete ratelist-menu/ s3://mcom-hackathon-${USERNAME}/
aws s3 website s3://mcom-hackathon-${USERNAME}/ --index-document index.html
