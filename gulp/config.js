var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      outputStyle: 'compressed'
    }
  },
  browserify: {
    settings: {
      transform: ['babelify', 'reactify']
    },
    src: src + '/js/index.js',
    dest: dest + '/js',
    outputName: 'index.js',
    debug: gutil.env.type === 'dev'
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  images: {
    src: src + '/images/**/*.{jpg,png}',
    dest:  dest + '/images',
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
