const plugins = require('./build/js-build-plugins-list');
const gulp = plugins.gulp;
const runTask = plugins.runTask;
const waitFor = plugins.waitFor;

// Tasks //
runTask('task-a');
runTask('task-b');

// Async waits:
waitFor('my-async-wait', ['task-a','task-b']/*, optional function param here */);

// On Complete //
gulp.task('default', ['my-async-wait'], function(){
	// Gulp code here. most of the time it is setting up watch commands.
});
