## Playing with this application.

You will need node installed as a development dependency. See [node's
site](http://nodejs.org/) for help with that.

One you have node installed run

```shell
npm install -g grunt-cli
```

To install the grunt task execution script available `g`lobally. Depending on how you
installed node on your system, you may need to use `sudo` to run this command.

Next, from this project folder run

```shell 
npm install
```

This will install the development dependencies listed in the `package.json` file
and store them in locally in `node_modules/`. You won't need `sudo` here.
`node_modules` is not tracked by version control.

Once all the development dependencies are installed you can start the
development tasks with

```shell 
grunt
```

Which will build development versions of your application and start watching 
for any changes. See `Gruntfile.js` for a deeper dive into what happens here.

Now you can open `build/index.html` in a browser.

The application uses sass and compass for the styling, so you might have to install ruby and compass through the gem repo.

First, check if you have ruby installed.
```shell
ruby -v
```

Then, update or install compass through the gem command.
```shell
gem update --system && gem install compass
```
