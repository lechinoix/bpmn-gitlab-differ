# BpmnGitlabDiffer

A project to help visualize BPMN diff during a code review

## Install

Clone project and install

```
npm i
cp ./src/environments/environment.secret.example.ts ./src/environments/environment.secret.ts
```

Then generate a gitlab token and add it to your localStorage at the variable `gitToken`

## Run locally

Run Chrome disabling CORS requests

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

Then run the local server with

```
npm run start
```


Visit http://localhost:4200/?mergeRequestId={YOUR_PULL_REQUEST_ID}&repositoryPath=${YOUR_PROJECT_FULL_PATH}&gitlabBaseUrl=${YOUR_GITLAB_BASE_URL} to see the diff

URL example on BEL: http://localhost:4200/?mergeRequestId=5897&repositoryPath=bel-reloaded%2Fmothership&gitlabBaseUrl=https:%2F%2Frepo1.laforge.cloud.bpifrance.fr
