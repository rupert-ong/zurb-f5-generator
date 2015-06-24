# Foundation Generator (Libsass)

This is a template to start a Foundation project that uses Grunt and libsass.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [Uglify] (<https://www.npmjs.org/package/grunt-contrib-uglify>): `npm install grunt-contrib-uglify --save-dev` 
  * [Grunt Sass] (<https://www.npmjs.com/package/grunt-sass>): `npm install grunt-sass --save-dev`
  * [Watch] (<https://www.npmjs.org/package/grunt-contrib-watch>): `npm install grunt-contrib-watch --save-dev`
  * [Copy] (<https://www.npmjs.org/package/grunt-contrib-copy>): `npm install grunt-contrib-copy --save-dev`
  * [Matchdep] (<https://www.npmjs.com/package/matchdep>): `npm install matchdep --save-dev`
  * [Autoprefixer] (<https://www.npmjs.com/package/autoprefixer>): `npm install grunt-autoprefixer --save-dev`
  * [CSSMin] (<https://www.npmjs.com/package/grunt-contrib-cssmin>): `npm install grunt-contrib-cssmin --save-dev`
  * [BrowserSync] (<https://www.npmjs.com/package/browser-sync>): `npm install browser-sync --save-dev`

## Quickstart

```bash
git clone https://mssm-rupert@bitbucket.org/montanasteele/foundation-libsass-generator.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

To watch a project and use BrowserSync, run:

`grunt start`

## Directory Structure

  * `scss/base/_settings.scss`: Foundation configuration settings go in here
  * `scss/_app.scss`: Foundation styles to include go here
  * `scss.style.scss`: Application styles go here
