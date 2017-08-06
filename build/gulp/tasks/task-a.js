module.exports = function(gulp, plugins){
  const runTask = plugins.runTask; // you can reference any of the needed plugins without reloading!

  // You can use runTask to link in other tasks
  runTask('task-c');

  // You can define any of your tasks here just like you normally would.
  gulp.tasks('task-a', ['task-c'], function(){
    return true;
  });
};
