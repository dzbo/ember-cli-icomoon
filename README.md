# ember-cli-icomoon

Ember addon that download, extract and copy [Icomoon](https://icomoon.io) files from
`Project.json` file. Addon is basically wrapper for [icomoon-build](https://www.npmjs.com/package/icomoon-build) npm package.

## Installation

```
npm install ember-cli-icomoon --save-dev
```

After adding addon to your project go to Icomoon web app and download
your `Project.json` file.

## Configuration

Add configuration to `ember-cli-build.js`

```
var app = new EmberAddon(defaults, {
  // Add options here

  icomoon: {
    projectFile: 'Project.json',
    styleOutputFile: 'app/styles/vendor/icomoon/style.css',
    fontsOutputFolder: 'public/fonts'
  }
});
```

* `projectFile` - path to project file from Icomoon
* `styleOutputFile` - path where style file should be placed
* `fontsOutputFolder` - folder where font files should be placed

## Usage

After setting configuration you are done. Icomoon files will be
pulled each time you start project build. Addon will check if project
file has dirty git status to ensure files are generated only
when necessary.
