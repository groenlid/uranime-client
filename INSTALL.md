Ember Skeleton
==============

Running
-------

    $ bundle install
    $ bundle exec rackup

    $ bundle exec rakep build ## to build
    $ bundle exec rakep server ## for 9292

Testing
-------

You can test the app by invoking:

    $ bundle exec rake test

This executes the tests by using [PhantomJS](http://www.phantomjs.org/),
which you need to have installed.

Or you can run the tests via:

    $ bundle exec rackup
    $ open http://localhost:9292/tests/index.html

If you want to continuously run the tests every time a file changes, invoke:

    $ bundle exec guard
