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
