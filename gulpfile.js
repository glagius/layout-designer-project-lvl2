const { src, dest, watch } = require("gulp");
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('src/scss/*.scss')
    .pipe(sass({ sourceMap: false }))
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(dest('dist/styles/'))
    .pipe(browserSync.stream());
}

const browserSyncJob = () => {
  browserSync.init({
    server: "dist/"
  });

  watch('scss/*.scss', buildSass);
};

exports.buildSass = buildSass;
exports.server = browserSyncJob;
