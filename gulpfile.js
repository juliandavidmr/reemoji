const gulp = require("gulp")
const mocha = require("gulp-mocha")

gulp.task("test", function () {
  gulp.src("test/*", {
      read: false
    })
    .pipe(mocha({
      reporter: 'nyan'
    }))
})

gulp.task("watch", () => {
  gulp.watch("src/*", ["test"])
})

gulp.watch("test/*", ["test"])

gulp.task("default", ["test"])