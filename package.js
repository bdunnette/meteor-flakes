Package.describe({
  name: 'bdunnette:flakes',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: 'https://github.com/bdunnette/meteor-flakes.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('js/base.js', 'client');
  api.addFiles('js/utils.js', 'client');
  api.addFiles('css/all.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteor-flakes');
  api.addFiles('meteor-flakes-tests.js');
});
