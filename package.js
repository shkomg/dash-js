Package.describe({
    name: 'shkomg:dash-js',
    version: '0.0.1',
    summary: "A smart package that makes it easy to use Dash-js",
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('ecmascript');
    api.addFiles('dash-js.js','client');
});
