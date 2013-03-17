/*jshint indent: 2 */
/*global require, module, test, ok, App */

require('uranime/core');
require('uranime/views/anime/episodes/episode');

var application, searchView;

module("episode", {
  setup: function () {
    //application = Ember.Application.create();
  },

  teardown: function () {
    //searchView.destroy();
    //application.destroy();
  }
});

test("The Episode View is defined", function () {
  ok(typeof App.EpisodeView !== 'undefined', "EpisodeView is undefined");
})

test("The Episode View can be appended to DOM", function () {
  var episode = App.EpisodeView.create();
  appendIntoDOM(episode);
  ok(isAppendedToDOM(episode), "EpisodeView is not in DOM");
});

test("The Episode View can be removed from the DOM by esc", function() {
  console.log("hello");
});