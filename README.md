# Zurb Foundation 5 Generator

This is a template to jump-start a Foundation (version 5) project that uses a [Grunt](http://gruntjs.com) based workflow, concatenating and minifying your JavaScript and preprocessing your CSS with Sass (using Libsass). It also includes several utility mixins and a [BrowserSync](https://www.npmjs.com/package/browser-sync) workflow for debugging across multiple browsers.

**Please note:** This repo is for [Zurb Foundation 5](http://foundation.zurb.com/sites/docs/v/5.5.3/). It was hosted on a private BitBucket account for internal use at my former place of work. 

As it currently stands, this repo is strictly for *educational and archival purposes*, but if I decide to keep using Foundation for quick prototypes and websites, I'll definitely port this to the [Foundation for Sites 6](http://foundation.zurb.com/sites.html).

## Table of contents

* [Dependencies](#dependencies)
* [Quick start](#quick-start)
* [Directory Structure](#directory-structure)
* [Contributors](#contributors)
* [Contributing](#contributing)
* [Copyright and license](#copyright-and-license)

## Dependencies

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [Uglify](<https://www.npmjs.org/package/grunt-contrib-uglify>): `npm install grunt-contrib-uglify --save-dev` 
  * [Grunt Sass](<https://www.npmjs.com/package/grunt-sass>): `npm install grunt-sass --save-dev`
  * [Watch](<https://www.npmjs.org/package/grunt-contrib-watch>): `npm install grunt-contrib-watch --save-dev`
  * [Copy](<https://www.npmjs.org/package/grunt-contrib-copy>): `npm install grunt-contrib-copy --save-dev`
  * [Matchdep](<https://www.npmjs.com/package/matchdep>): `npm install matchdep --save-dev`
  * [Autoprefixer](<https://www.npmjs.com/package/autoprefixer>): `npm install grunt-autoprefixer --save-dev`
  * [CSSMin](<https://www.npmjs.com/package/grunt-contrib-cssmin>): `npm install grunt-contrib-cssmin --save-dev`
  * [Critical CSS](<https://www.npmjs.com/package/grunt-criticalcss>): `npm install grunt-criticalcss --save-dev`
  * [BrowserSync](<https://www.npmjs.com/package/browser-sync>): `npm install browser-sync --save-dev`

## Quick start

```bash
git clone https://github.com/rupert-ong/zurb-f5-generator.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

To watch a project and use BrowserSync, run:

`grunt start`

## Directory Structure

**CSS/SCSS Structure**  

  * `scss/base/_settings.scss`: Foundation configuration settings go in here
  * `scss/_app.scss`: Foundation styles to include go here
  * `scss/style.scss`: Imported application styles go here
  
## Contributors

**Rupert Ong**

* <https://twitter.com/rupertong>
* <https://github.com/rupert-ong>

## Contributing

If you find this repo useful and wish to add or continue where I left off, feel free to fork it and make a pull request. Happy coding everyone!

## Copyright and license

Foundation Framework: &copy;2016 Zurb. All rights reserved.

Zurb Foundation 5 Generator is released under the [MIT License](http://www.opensource.org/licenses/MIT).
