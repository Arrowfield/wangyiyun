var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var concat = require('gulp-concat');//合并文件
var uglify = require('gulp-uglify');//压缩文件
var sass = require('gulp-sass');//编译sass
var rename = require('gulp-rename');//重命名
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');//监听
var connect  = require('gulp-connect');//创建服务器
var open = require('open');

//添加任务
gulp.task('sass',function(){
    return gulp.src('./src/sass/*.{scss,wxss}')
        .pipe(sass().on('error',sass.logError))
        .pipe(rename({
            extname:".wxss"
        }))
        .pipe(gulp.dest('./dist/wxss/'))
        .pipe(livereload())
        .pipe(connect.reload())
});
gulp.task('html',function(){
    return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace:true,removeComments: true,}))
    .pipe(gulp.dest("dist/"))
    .pipe(livereload())
    .pipe(connect.reload())
});
//注册监视任务
gulp.task('watch',['default'],function(){
    livereload.listen();
    //确定目标以及相应的任务
    gulp.watch('src/sass/*.scss',['sass']);
});

//创建服务器(全自动)
gulp.task('server',['default'],function(){
    connect.server({
        root:"dist/",
        livereload:true,
        port:5000
    })
});

open("http://localhost:5000");

gulp.task('default',['sass','html']);
