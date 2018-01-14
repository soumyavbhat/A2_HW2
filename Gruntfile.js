module.exports = function(grunt) {
  // 1. all config stuff goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // reads the packages etc inside that file
      concat: {
        // configure the concatenation task (info / details come from the repo on Github)
        dist: {
          src: [
            'js/modules/*.js',
            'js/main.js'
          ],
          dest: 'prod/production.js'
        }
      },

      uglify: {
        build: {
          src: 'prod/production.js',
          dest: 'prod/production.min.js'
        }
      },

      watch: {
        scripts: {
          files: ['js/main.js', 'js/modules/*.js'],
          tasks: ['concat', 'uglify-es'],
          options: {
            spawn: false
          }
        },

        sass: {
          files: ['sass/main.scss', 'sass/modules/*.scss'],
          tasks: ['sass']
        }
      },

      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'css/main.css':'sass/main.scss'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
  grunt.registerTask('watchFiles', ['watch', 'sass']);
};
