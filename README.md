# Webdev Toolkit

Webdev Toolkit is a web development toolkit based on [Grunt](http://gruntjs.com/). It serves as a simple and lightweight debugging tool for developing simple HTML and CSS websites, with several useful features like code linting, autoprefixing, image optimisation, and LiveReload support.

## Installation

### Requirements

1. [Node.js](http://nodejs.org) (>=0.10.0)
2. [Grunt](http://gruntjs.com/) (>=0.4.5)

### Installation guide

If you haven't installed Node.js already, head over to the [Node.js](http://nodejs.org) website and install it. (<b>Note</b>: After installation, you may need to update your PATH variable to include the Node binaries and npm. This step is dependent on your operating system.)

Next, install Grunt by running `npm install -g grunt-cli`.

Finally, `cd` to the Webdev Toolkit directory from your terminal window, and run `npm install` to install all of the remaining dependencies.

You're done! If you have an existing website in development, you can move it into the `src` directory of Webdev Toolkit. Otherwise you can use the included files to experiment with the program.

## Usage

### Watch for changes & automatically reload pages

`grunt serve`

Opens the page in your default browser and rebuilds the website when changes are detected. Press `Ctrl + C` to stop the command.

### Compile SASS, handle vendor prefixing

`grunt` or `grunt build`

Cleans up the CSS code, its formatting and adds the appropriate vendor prefixes when necessary. This also compiles any SASS you have for now. (It'll be a separate command soon.)

### Build and publish

`grunt publish`

This will run the same build process, but everything will be copied to the `dist` directory for publishing.

### Lint JS code

`grunt test`

Performs JS linting using [xo](https://github.com/sindresorhus/xo).

## License

[MIT](https://github.com/resir014/Webdev-Toolkit/blob/master/LICENSE).
