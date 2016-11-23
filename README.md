# polybot-cli

[![Build Status](https://travis-ci.org/polybotIO/polybot-cli.svg?branch=master)](https://travis-ci.org/polybotIO/polybot-cli)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Slack Channel](https://chat.polybot.io/badge.svg)](https://chat.polybot.io)

The command line interface for polybot.io

## Usage

Firstly, make sure to install the package:

```bash
$ npm install -g polybot-cli
```

In any directory with a `polybot.json`, run:

```bash
$ polybot
```

For more examples, usage instructions and other commands run:

```bash
$ polybot help
```

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Transpile the source code and watch for changes: `npm start`
4. You can now start using `polybot` from the command line!

As always, you can use `npm test` to run the tests and see if your changes have broken anything.
