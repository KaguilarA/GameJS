const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const sass = require("gulp-sass");

sass.compiler = require(`node-sass`);

gulp.task(`sass`, function () {
  return gulp.src(`./sass/styles.scss`)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(gulp.dest(`./public/css`));
});

gulp.task(`sass:watch`, function () {
  gulp.watch(`./sass/**/*.scss`, gulp.series(gulp.parallel(`sass`, `start`, `sass:watch`)));
});

gulp.task(`start`, (done) => {
  nodemon({
    script: `app.js`,
    ext: `js html`,
    done: done
  })
});

gulp.task(`default`, gulp.series(gulp.parallel(`sass`, `start`, `sass:watch`)))