var gulp=require("gulp");
var minjs=require("gulp-uglify");

//Aqui establecimos la tarea de minificar
gulp.task('mainminjs', function(){
	gulp.src('./src/js/main.js') //decimos la ruta del archivo a minificar
	.pipe(minjs())
	.pipe(gulp.dest('./build/js')); //le decimos el destino del archivo ya minificado
});


//Esta tarea hace update de los cambios que se hacen de forma automática
gulp.task('varmainjs', function(){
	gulp.watch('./src/js/*.js',['mainminjs']);
});