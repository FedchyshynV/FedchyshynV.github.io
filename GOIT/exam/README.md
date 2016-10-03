     Проект "Final Exam GOIT".
1. Кроссбраузерность IE8+
2. Пиксельная точность для Chrome latest
3. Верстка responsive, три макета для разных девайсов. "Mobile first"
4. Препроцессор Sass
5. Подход gracefull degradation
6. Все файлы собираются с помощью Gulp
7. Слайдеры  сделани с помощью jQuery-плагина
8. В нижней части макета блок картинок с заголовком "Discover holiday activity ideas",расположин с помощью плагина Masonry.

Чтоб запустить проект нужно в nodejs:
-npm init;
-npm install gulp --save-dev;
-npm install gulp-sass --save-dev;
-npm install browser-sync --save-dev;
-npm install gulp-useref --save-dev;
-npm install gulp-uglify --save-dev;
-npm install gulp-if --save-dev;
-npm install gulp-minify-css;
-npm install gulp-imagemin --save-dev;
-npm install gulp-cache --save-dev;
-npm install del --save-dev;
-npm install run-sequence --save-dev;
-gulp build;
-gulp;

Исходники хранятся в папке "app", production в папке "dist".
