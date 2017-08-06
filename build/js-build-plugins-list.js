const noop = function(){};
const plugins = {
	// Include all needed modules here for your tasks
	// This reduces the need to load dependencies multiple times for each individual task file.

	// Configuration settings can go here.
	config: {
		rootPath: './build/',
		taskPath: 'gulp/tasks/'
	},

	// Plugins go here
	gulp: require('gulp'), // task-runner
	markdownInclude: require('markdown-include'), // markdown builder
	chalk: require('chalk'), // console text color API

	// Helper methods
	runTask: function(task){
		return require(plugins.config.rootPath + plugins.config.taskPath + task)(plugins.gulp, plugins);
	},
	waitFor: function(taskName, waitList, fn){
		var wrapper = function(){
			console.info('Done waiting for: ' + waitList.length ? waitList.join(', ') : 'Nothing');
			// if the third argument was provided then call it otherwise call a dummy.
			return (fn || noop)();
		};
		plugins.gulp.task(taskName, waitList, fn || function(){
			return wrapper();
		});
	}
}

// Export the plugins object.
module.exports = plugins;
