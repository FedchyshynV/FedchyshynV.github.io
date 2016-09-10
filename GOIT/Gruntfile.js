
module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

       concat: {
      options: {
        separator: ';'
      },
          dist: {
              src: ['js/src/*.js'],
              dest: 'js/dist/script.min.js',
          },
    },
    uglify: {
      dist:{
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
      }
    },  concat_css: {
    options: {
      // Task-specific options go here. 
    },
    all: {
      src: ['css/reset.css','css/dist/fonts.css', 'css/dist/allStyle.css','css/dist/sprite.css', 
      'css/dist/Desctop.css','css/dist/Tablet.css', 'css/dist/Mobile.css'],
      dest: "css/styles.css"
    },
  },

imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
        }]
    }
},
sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css/src',
        src: ['*.scss'],
        dest: 'css/dist',
        ext: '.css'
      }]
    }
  },
   
 watch: {
            files: 'css/*.scss', 
            tasks: ['sass']
          //   files: 'js/src/*.js', 
          //  tasks: ['concat', 'uglify']
        },
           browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    	'js/dist/*.js',
                    	'css/*.css',
                        '/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '.'
                }
            }
        },

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
     grunt.registerTask('default', ['concat', 'uglify','imagemin','sass','concat_css', 'browserSync', 'watch']);
  
};