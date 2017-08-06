# gulp-template
A simple scaffold for gulp based projects. Includes a couple of starter devDependencies and provides
a flexible gulp scaffold to speed up the build development.

## What this template does
This template provides a customizable scaffold for your projects that are going to use **gulp**.

It has a powerful markdown builder setup for building your **README.md** files or other markdown
files.

It also contains a list of useful development dependencies that you can add to your projects. These
are dependencies covering a broad list of capabilities and will be described so you can determine
quickly if you wish to use them or not.

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

You can also copy the pattern to generate other markdown files pretty easily.

### Removing all this stuff
Ideally if you use this template you would want to keep everything it provides but everyone has
their own work-flow and opinions so feel free to fork this and create your own template. If you come
up with something cool I'd love to see it.

# Getting Started

## Clone, Download or Fork
Using the GitHub UI or your favorite Git client you can grab this repository in a number of ways:

* **GitHub Clone or Download** - On the top-right of the files list on GitHub you'll see a
**Clone or download** button. Clicking that button with give you options to download or instructions
on how to clone the repository to your computer. This provides a URL that can be used in your Git
clients to grab a copy of the repository. Keep in mind you won't be able to push back to the master.
* **GitHub Forking** - Forking is where you create a new copy of the repository on your GitHub
account. This has the benefits of being able to keep a link to the original while allowing you to do
whatever you want with the copy. After forking you can just point your Git client to your copy and
you will be able to **push** and **pull** from it as needed. It also allows **rebasing** which is
nice but can be kind-of a headache. In order to Fork the repository you'll see a button in the
top-right called 'Fork' (you may be asked to authenticate so it knows where to send the fork).
Clicking this button will create a fork on your account.

What we recommend is that you Fork it if you have a GitHub account. This allows you to keep a link
between this repository and your forked repository but allow you to make your own version to suit
your needs.

## Getting the Dependencies
First if you don't know you need **node.js**. Once you have that installed come back and we'll
continue. I'll be right here waiting...

Got it! Good! Lets begin...

1. Open a command prompt and navigate to where you saved your local repository.
2. Run the command: **npm install**
  - This will get all of the dependencies listed in **package.json** and store them in a folder named **node_modules**

If at any point you wish to add or remove dependencies just modify the **package.json** file. It
should be mentioned however that the **node_modules** folder doesn't self-clean so the easiest way
to make sure you don't have left-over dependencies that aren't wanted any-more is to delete the folder
and re-install.

## Updating Dependencies
With the console open and in your repository root folder just type: **npm update**

This will make sure all of the dependencies are up-to-date.

## Modifying and Running the README.md Generator
If you are using the **readme-builder.js** scaffold you need to replace the files in
**build/readme-md** with what you want to show on your **README.md**. The entry file default is
**build/_README.md**. You will probably want to keep that and just edit it to suit your needs.
The rest of the files in that folder however should be deleted unless in some strange turn of events
your project happens to need them.

You will want to run the **readme-builder.js** file every time you change something in its markdown
files. You will want to do this before you commit as it generates the README.md in the projects root
folder that GitHub uses as the landing page of your repository.

To run the builder open up your trusty command prompt, navigate to the project root and run the
following command: **node readme-builder.js**

If you get an error saying that node is not a recognized application or whatever then that means
node.js isn't added to your path.

To learn how to fix this go to Google and search for: **how to add node.js to my path**

You should get tons of results.

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


