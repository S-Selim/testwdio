# Project Title

Getting Started with WebdriverIO
A brief description of what this project does and who it's for
WebdriverIO is a popular test automation framework used to automate browser testing. It is built on top of the WebDriver protocol, which allows it to communicate with various browsers and perform actions on them. This guide will help you get started with WebdriverIO and provide step-by-step instructions on how to set it up.

## Prerequisites

To get started with WebdriverIO, you will need the following:

Node.js (https://nodejs.org/en/download/)
NPM

## Create a Project Directory

1- Open the command line
2- mkdir testwdio
3- cd testwdio

## Create Package.JSON

```bash
npm init –y
```

-

*

## Installing WebdriverIO

You can install WebdriverIO using NPM, the Node.js package manager. Follow the steps below to install WebdriverIO:

```bash
npm install @wdio/cli
```

## Create Webdriver configuration

```bash
npx wdio config
```

## Writing your first test

Once you have installed WebdriverIO, you can write your first test. Follow the steps below to create a new test:

This code will open Google in the Chrome browser, retrieve the page title, and log it to the console.

1- Create a new JavaScript file in your project directory and name it test.js.

2- Add the following code to the test.js file:

3- Open a terminal or command prompt and navigate to your project directory.

4- Run the following command to execute the test:

\*npx wdio ./test.js

OR

- npx wdio wdio.conf.js

```bash
  const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('https://www.google.com');
  const title = await browser.getTitle();
  console.log(`Title: ${title}`);

  await browser.deleteSession();
})();

```
