[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Setup

- Clone down the repo
- `cd` into the repo and `rm -rf .git` to remove the .git folder
- in `src/server/index.js`, set database name where it says `YOUR-DB-NAME`
- run `yarn start` in the root to install dependencies and run start scripts in
  each package
- run `lerna bootstrap` to install dependencies only
