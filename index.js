// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Origin = require('core/origin');
  var TestIntegrationView = require('./views/testIntegrationView.js');
  var TestIntegrationSidebarView = require('./views/testIntegrationSidebarView.js');

  var featurePermissions = ["*/*:create","*/*:read","*/*:update","*/*:delete"];

  Origin.on('origin:dataReady login:changed', function() {
    Origin.permissions.addRoute('testIntegration', featurePermissions);

    if (Origin.permissions.hasPermissions(featurePermissions)) {
      Origin.globalMenu.addItem({
        "location": "global",
        "text": "Test integration",
        "icon": "fa-puzzle-piece",
        "callbackEvent": "testIntegration:open"
      });
    }
  });

  Origin.on('globalMenu:testIntegration:open', function(location, subLocation, action) {
    Origin.router.navigateTo('testIntegration');
  });

  Origin.on('router:testIntegration', function(location, subLocation, action) {
    Origin.contentPane.setView(TestIntegrationView, { model: new Backbone.Model() });
    Origin.sidebar.addView(new TestIntegrationSidebarView().$el);
  });
});
