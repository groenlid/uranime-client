/*jshint indent: 2 */
/*global require, module, test, ok, App */

require('uranime/core');

module("core");

test("App is defined", function () {
  ok(typeof App !== 'undefined', "App is undefined");
});
