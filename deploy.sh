#!/bin/bash

USERNAME=$(curl https://api.github.com/repos/MarriottLabs/mcom-performance/pulls/$ghprbPullId?access_token=$GH_OAUTH | jq -r .user.login)
COMMENT_URI=$(curl https://api.github.com/repos/MarriottLabs/mcom-performance/pulls/$ghprbPullId?access_token=$GH_OAUTH | jq -r ._links.comments.href)
aws s3 sync --acl public-read --exclude ".git/*" --exclude "deploy.sh" --delete . s3://labs.marriott.com/${USERNAME}/
HOSTED_URI=http://labs.marriott.com/${USERNAME}/
COMMENT_BODY="This build is now hosted at ${HOSTED_URI}"
curl -H "Content-Type: application/json" -X POST -d '{"body":"'"${COMMENT_BODY}"'"}' ${COMMENT_URI}?access_token=$GH_OAUTH
