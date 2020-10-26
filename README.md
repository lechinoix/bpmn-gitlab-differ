# BpmnGitlabDiffer

A project to help visualize BPMN diff during a code review

## Install

Clone project and install

```
npm i
cp ./src/environments/environment.secret.example.ts ./src/environments/environment.secret.ts
```

Then generate a gitlab token and add it to your `environment.secret.example.ts`.

## Run locally

Run Chrome disabling CORS requests

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

Then run the local server with

```
npm run start
```

Visit http://localhost:4200/?mergeRequestId={YOUR_PULL_REQUEST_ID}&projectFullPath=${YOUR_PROJECT_FULL_PATH} to see the diff

URL example on BEL: http://localhost:4200/?mergeRequestId=5897&projectFullPath=bel-reloaded%2Fmothership
