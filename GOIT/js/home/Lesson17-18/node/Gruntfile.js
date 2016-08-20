
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.min.js'
    	}
      },
      uglify: {
      	  dist: {
        src: ['js/dist/script.main.min.js'],
        dest: 'js/dist/script.main.min.js'
    	}
      },
        watch: {
            files: 'scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    	'js/*.js',
                        'css/*.css',
                        '/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '.'
                }
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
  
  grunt.registerTask('default', ['concat', 'uglify', 'browserSync', 'watch']);
  
  

};