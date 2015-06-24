module.exports = function(grunt) {

   // No longer have to register each npmTask. Needs matchdep plugin
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      dist: {
        files: {
          'dist/lib/modernizr.min.js':  [
                                                'bower_components/modernizr/modernizr.js'
                                              ],
          'dist/js/plugins.min.js':           [
                                                'bower_components/foundation/js/vendor/fastclick.js'
                                              ],
          'dist/js/app.min.js':               [
                                                'bower_components/foundation/js/foundation/foundation.js',
                                                'src/js/app.js'
                                              ]
        }
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
          precision: 2,
        },
        files: [{
          expand: true,
          cwd:  'src/scss',
          src:  ['**/*.scss'],
          dest: 'dist/',
          ext:  '.css'
        }]
      }
    },

    copy: {
      main: {
        files: [
          {
            expand:   true,
            cwd:      'src/',
            src:      ['**', '.htaccess', '!**/*.scss', '!/.sass-cache', '!js/app.js'],
            dest:     'dist/',
            filter:   'isFile'
          },
        ]
      }
    },

    autoprefixer: {
      compile: {
        files: {
          'dist/style.css': 'dist/style.css'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/style.css': 'dist/style.css'
        }
      }
    },

    browserSync: {
      bsFiles: {
        src : ['dist/*.css', 'dist/*.html', 'dist/*.php']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "dist"
        }
      }
    },

    criticalcss: {
        custom: {
            options: {
                url: "dist/index.html",
                width: 1200,
                height: 900,
                outputfile: "dist/critical.css",
                filename: "dist/style.css"
            }
        }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },
      html: {
        files:    ['src/**/*.html', 'src/**/*.php'],
        tasks:    ['copy']
      },
      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass', 'copy', 'autoprefixer', 'cssmin']
      },
      js: {
        files:    ['src/js/**/*.js'],
        tasks:    ['uglify', 'copy']
      }
    }
  });

  /*grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');*/

  grunt.registerTask('default', ['uglify', 'sass', 'copy', 'autoprefixer', 'criticalcss']);
  grunt.registerTask('start', ['browserSync', 'watch']);
  /*grunt.registerTask('default', ['build',' watch']);*/
};
