## Install relevant packages
`npm install -g firebase-tools`

## Firebase login
`firebase login`
A new browser tab will be opened to allow firebase connection on local device.

## Install packages for functions
Go to `functions` directory and run `npm install`

## Modify google cloud app name
Go to `.firebaserc` and change `"default"` to yours

## Deploy new functions
In `root directory`, run
`firebase deploy`