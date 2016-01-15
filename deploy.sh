#!/bin/bash

USERNAME=$(curl https://api.github.com/repos/MarriottLabs/mcom-performance/pulls/$ghprbPullId?access_token=$GH_OAUTH | jq -r .user.login)
COMMENT_URI=$(curl https://api.github.com/repos/MarriottLabs/mcom-performance/pulls/$ghprbPullId?access_token=$GH_OAUTH | jq -r ._links.comments.href)
aws s3 mb s3://mcom-hackathon-${USERNAME}
aws s3 sync --acl public-read --delete ratelist-menu/ s3://mcom-hackathon-${USERNAME}/
aws s3 website s3://mcom-hackathon-${USERNAME}/ --index-document index.html
HOSTED_URI=http://mcom-hackathon-${USERNAME}.s3-website-us-east-1.amazonaws.com/
COMMENT_BODY="This build is now hosted at ${HOSTED_URI}"
curl -H "Content-Type: application/json" -X POST -d '{"body":"'"${COMMENT_BODY}"'"}' ${COMMENT_URI}?access_token=$GH_OAUTH