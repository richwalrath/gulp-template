const plugins = require('./build/js-build-plugins-list');
const markdownInclude = plugins.markdownInclude;
const chalk = plugins.chalk;

markdownInclude.compileFiles("readme-md.json")
	.then(function(data){
		console.info(chalk.green('\nREADME.md was successfully built.'));
	})
	.catch(function(err){
		console.error(chalk.white.bgRed('\n' + err));
	});
