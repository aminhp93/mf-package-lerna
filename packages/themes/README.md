## Getting Started

### Install Node

Start by installing Node if it is not already installed on your machine. Install here: https://nodejs.org/en/download/

By the time writing we recommend using Node version 16.15.0 as it is tested and works as expected in this environment. You can check that node is correctly installed by running the command:

```
node --version
```

### Install Yarn

Node ships with its own package manager called NPM. You can use NPM to install the package manager used in Foresight frontends which is yarn:

```
npm install --global yarn
```

### Install project dependencies

Once Yarn is installed we will use this to download the project dependencies. Make sure your current directory is the project root, and run the command:

```
yarn
```

which will populate the `node_modules` directory with dependencies.

&nbsp;

## Run Tests

Tests are configured to run automatically in bitbucket pipeline. However, if you want to run the tests locally on your machine you can do so by running the command

```
yarn test
```

&nbsp;

## Using private npm registry

- Set registry url: `npm config set registry https://nexus.piscada.tools/repository/npm-group/`
- Set always auth: `npm config set always-auth=true`
- Set auth credentials: `npm config set _auth="BASE64_TOKEN"` , to get BASE64_TOKEN `echo -n 'USER_NAME:PASSWORD' | openssl base64`

&nbsp;

## Developing foresight-common-ui-components standalone:

- Go into foresight-common-ui-components: `cd YOUR_FOLDER/foresight-common-ui-components`
- Install dependencies: `yarn install`

&nbsp;

## Developing foresight-common-ui-components with other projects (portal-next , webPMP ...etc):

- Go into foresight-common-ui-components: `cd YOUR_FOLDER/foresight-common-ui-components`
- Install dependencies: `yarn install`
- Create a global link in your machine: `yarn link`

- Go into project: `cd YOUR_FOLDER/portal-next`
- Create a link from project to local repository: `yarn link @piscada/foresight-common-ui-components` (To cancel that link: `yarn unlink @piscada/foresight-common-ui-components`)
