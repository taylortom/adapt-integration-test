// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require){
  var Origin = require('core/origin');
  var OriginView = require('core/views/originView');

  var TestIntegrationView = OriginView.extend({
    tagName: 'div',
    className: 'testIntegration'
  }, {
    template: 'testIntegration'
  });

  return TestIntegrationView;
});
