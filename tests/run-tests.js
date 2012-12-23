/*jshint indent: 2 */
/*global phantom, QUnit, console, require, window */
// PhantomJS QUnit Test Runner

var args = phantom.args;
if (args.length < 1 || args.length > 2) {
  console.log("Usage: " + phantom.scriptName + " <URI> <timeout>");
  phantom.exit(1);
}

var page = require('webpage').create();

var warnRe = /^WARNING:/;
page.onConsoleMessage = function (msg) {
  if (!warnRe.test(msg)) 
    console.log(msg);
};

var uri = args[0];

function addLogging() {
  var testErrors = [];
  var assertionErrors = [];

  QUnit.moduleDone(function (context) {
    if (context.failed) {
      var msg = "Module Failed: " + context.name + "\n" + testErrors.join("\n");
      console.error(msg);
      testErrors = [];
    }
  });

  QUnit.testDone(function (context) {
    if (context.failed) {
      var msg = "  Test Failed: " + context.name + assertionErrors.join("    ");
      testErrors.push(msg);
      assertionErrors = [];
    }
  });

  QUnit.log(function (context) {
    if (context.result) return;

    var msg = "\n    Assertion Failed:";
    if (context.message) {
      msg += " " + context.message;
    }

    if (context.expected) {
      msg += "\n      Expected: " + context.expected + ", Actual: " + context.actual;
    }

    assertionErrors.push(msg);
  });

  QUnit.done(function (context) {
    var stats = [
      "Time: " + context.runtime + "ms",
      "Total: " + context.total,
      "Passed: " + context.passed,
      "Failed: " + context.failed
    ];
    console.log(stats.join(", "));
    console.log(testErrors);
    window.qunitDone = context;
  });
}

page.open(uri, function (status) {
  if (status !== 'success') {
    console.error("Unable to access: " + uri + " [" + status + "]");
    phantom.exit(1);
  } else {
    page.evaluate(addLogging);

    var timeout = parseInt(args[1] || 30000, 10);
    var start = Date.now();
    var interval = this.setInterval(function () {
      if (Date.now() > start + timeout) {
        console.error("Tests timed out");
        phantom.exit(1);
      } else {
        var qunitDone = page.evaluate(function () {
          return window.qunitDone;
        });

        if (qunitDone) {
          this.clearInterval(interval);
          if (qunitDone.failed > 0) {
            phantom.exit(1);
          } else {
            phantom.exit();
          }
        }
      }
    }, 500);
  }
});
