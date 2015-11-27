module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass files
    sass: {
      options: {
        precision: 6,
        sourceComments: false,
        outputStyle: 'compressed'
      },
      build: {
        files: {
          'src/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    // Clean up CSS
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['css/main.css'],
          dest: 'src/'
        }]
      }
    },

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['css/main.css'],
          dest: 'src/'
        }]
      }
    },

    // Optimise/minify images
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['img/**/*.{png,jpg,gif}'],
          dest: 'src'
        }]
      },
    },

    // Builds a complete site to the `dist` folder
    copy: {
      deploy: {
        expand: true,
        cwd: 'src/',
        src: ['**/*', '!**/scss/**'],
        dest: 'dist/'
      },
    },

    // Cleans up the `dist` folder
    clean: {
      deploy: {
        src: 'dist'
      }
    },

    // Starts a local server with LiveReload instance
    connect: {
      server: {
        options: {
          livereload: true,
          open: true,
          base: 'src/',
          hostname: '*',
          port: 9001
        }
      }
    },

    // Watch for changes in files
    watch: {
      options: {
        livereload: true
      },
      serve: {
        files: ['src/**/*'],
        tasks: ['build']
      }
    }

  });

  grunt.registerTask('build', [
    'sass', 'postcss', 'imagemin'
  ]);

  // server task
  grunt.registerTask('serve', ['build', 'connect', 'watch']);

  // deploy task
  grunt.registerTask('deploy', ['build', 'clean', 'copy:deploy']);

  // default task
  grunt.registerTask('default', 'build');
}
