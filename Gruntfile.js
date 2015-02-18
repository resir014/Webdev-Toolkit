module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    autoprefixer: {
      build: {
        files: [{
          src: 'app/css/main.css',
          dest: 'app/css/main.css'
        }]
      }
    },

    browserSync: {
      serve: {
        options: {
          watchTask: true,
          server: {
            baseDir: 'app'
          }
        },
        bsFiles: {
          src: ['app/*.html', 'app/css/*.css']
        }
      }
    },

    csscomb: {
      build: {
        options: {
          config: '.csscomb.json'
        },
        files: [{
          expand: true,
          cwd: 'app/_sass/',
          src: ['components/*.scss'],
          dest: 'app/_sass/'
        }]
      }
    },

    cssmin: {
      build: {
        files: [{
          src: 'app/css/main.css',
          dest: 'app/css/main.min.css'
        }]
      }
    },

    sass: {
      build: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: [{
          src: 'app/_sass/main.scss',
          dest: 'app/css/main.css'
        }]
      }
    },

    watch: {
      serve: {
        files: [
          'app/*.html', 'app/_sass/**/*.scss'
        ],
        tasks: ['build']
      }
    }

  });

  grunt.registerTask('build', [
    'csscomb:build', 'sass:build', 'autoprefixer:build', 'cssmin:build'
  ]);

  // browsersync task
  grunt.registerTask('serve', ['browserSync', 'watch']);

  // default task
  grunt.registerTask('default', 'build');
}
