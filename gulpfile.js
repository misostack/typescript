const { dest, watch } = require("gulp");
const source = require("vinyl-source-stream");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const tsify = require("tsify");

function defaultTask() {
  watch("src/*.ts", { events: "all" }, function () {
    // place code for your default task here
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write("./"))
      .pipe(dest("dist"));
  });
}

exports.default = defaultTask;
