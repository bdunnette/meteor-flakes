Package.describe({
  name: 'bdunnette:flakes',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: 'https://github.com/bdunnette/meteor-flakes.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.use('jquery', 'client');
  api.use('bdunnette:snapjs@1.0.0', 'client');
  api.use('bdunnette:responsive-elements@1.0.0', 'client');
  api.use('bdunnette:gridforms@1.0.0', 'client');
  api.addFiles('js/base.js', 'client');
  api.addFiles('css/all.css', 'client');
});