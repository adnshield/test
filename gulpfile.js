var gulp = require("gulp");

gulp.task("style", function() {
gulp.src("source/sass/style.scss")

  .pipe(gulp.dest("source/css"))
  .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/"
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html");
    .on("change", server.reload);

});
