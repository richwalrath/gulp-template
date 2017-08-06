## Executing Your Gulp Tasks
Running your **gulp** tasks is pretty simple. All you need to do is open your command prompt,
navigate to the project root directory and enter: **gulp**

If all is setup correctly this should run your tasks and hopefully your build should complete
successfully.

If you encounter an error saying that **gulp** is not a recognized application or command then you
can try installing **gulp** globally with this command: **npm install -g gulp**

**Pro-Tip** - You can run a specific task with the **gulp** command by entering: **gulp task-name**

This makes it easy to break your tasks up into logical groups and either run all of them with just
the **gulp** command or a specific one with **gulp task-name**. Also the great thing about pattern
used in this template is that your gulp task doesn't even need to be at the top-level of the build.
You can use it on tasks that are included using the **plugins.runTask** helper.
