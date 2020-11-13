const {src,dest,parallel,series,watch} = require('gulp');
const browserSync                      = require('browser-sync').create();
const concat                           = require('gulp-concat');
const uglify                           = require('gulp-uglify-es').default;
const autoprefixer                     = require('gulp-autoprefixer');
const cleancss                         = require('gulp-clean-css');
const del                              = require('del')


function browsersync() {
	browserSync.init({
		server:{baseDir:'./',
		index: 'indexx.html'}
	})
}

function scripts () {
	return src([
		'./public/assets/datepicker- uk.js',
		'./public/assets/jquery.inputmask.js',
		'./public/js/myValidate.js',
		'./public/js/main.js'
	])
	.pipe(concat('form.min.js'))
	.pipe(uglify())
	.pipe(dest('./public/js/'))
	.pipe(browserSync.stream())

}

function styles (){
	return src('./public/css/style.css')
	.pipe(concat('form.min.css'))
	.pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss(({ level:{ 1: {specialComents: 0} }})))
	.pipe(dest('./public/css/'))
}
function cleandist () {
	return del('./dist/**',{force:true})
}
function buildcopy (){
	return src([
		'./public/css/*.min.css',
		'./public/js/*.min.js',
		'./*.html'
		],{base:'./'})
	.pipe(dest('./dist'))
}

function startwatch () {
	watch(['./public/**/*.css'],styles);
	watch(['./public/**/*.js', '!./public/**/*.min.js'],scripts);
	watch('./*.html').on('change',browserSync.reload);

}
exports.browsersync = browsersync; 
exports.scripts     = scripts; 
exports.styles      = styles;
exports.build       = series(cleandist,styles,scripts,buildcopy);

exports.default     = parallel(scripts, styles,browsersync , startwatch);