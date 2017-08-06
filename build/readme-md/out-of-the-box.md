## Out-Of-The-Box Capabilities
The following is a break-down of what you get out-of-the-box by using this template:

### Baked-in dependencies
* **gulp** - This is your task runner that you will use to build your projects.
* **chalk** - An API for coloring console output. This shouldn't be too hard to get rid of if you
don't want it.
* **markdown-include** - Used to allow you to build complex markdown files easily. We used this with
this template to build the **README.md** you're reading right now.

### gulpfile.js scaffold
We provide a default **gulpfile.js** with a template showing how to utilize the plugins
(**build/js-build-plugins-list.js**) object. The plugins object allows you to require packages just
once and share those across your build process. You can also define helper functions and
configurations you want to pass around in the plugins object returned.

One of the biggest advantages is that the plugins object contains some useful helper functions for
you:

* **plugins.runTask** - This function allows you to put tasks in other files and then load them in
as needed. There are very simple examples in how to write external task files in the
**build/gulp/task/** folder.
* **plugins.waitFor** - Allows you to setup a task whose sole purpose is to wait for other tasks to
complete. This is mostly an organizational and code clarity function but it does function a little
different under-the-hood than **gulp.task**.

### README.md builder scaffold
This template also provides a scaffolding to show you how to generate your own large or complex
**README.md** files through a build process.

### Removing all this stuff
Ideally if you use this template you would want to keep everything it provides but everyone has
their own work-flow and opinions so feel free to fork this and create your own template. If you come
up with something cool I'd love to see it.
