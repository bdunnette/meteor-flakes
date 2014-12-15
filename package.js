Package.describe({
  name: 'bdunnette:flakes',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: 'https://github.com/bdunnette/meteor-flakes.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.use('jquery', 'client');
  api.use('bdunnette:snapjs', 'client');
  api.use('bdunnette:responsive-elements', 'client');
  api.use('bdunnette:gridforms', 'client');
  api.addFiles('js/base.js', 'client');
  api.addFiles('css/all.css', 'client');
});