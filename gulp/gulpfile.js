// Before I have to install gulp.
// Gulp works with async functions. Every time I have to return from the function something async - stream, Promise etc.
// series - executes functions inside step by step in their order
// parallel - executes functions in the same time
// if we'll have an error series just stop, parallel stop as well but some functions may executed and some not
// src - can read files from the directory and put them into the memory
// dest - the output directory
// .pipe - works with stream -> src(*.js).pipe(gulp-babel()).pipe(dest(/build))

const { parallel, series, dest, src } = require('gulp');

const clean = (cb) => {
  //  doing something
  //  cb - is the callback functio which will be executed when we will have an error
  console.log('clean');
}

const build = (cb) => {
  // doing something
  console.log('build');
}

exports.build = build // in this case when we execute 'gulp build' our build function will execute
exports.default = series(build, clean); // in this case when we execute 'gulp' will execute what we put in the defaul export