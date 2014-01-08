// Generated by CoffeeScript 1.6.3
(function() {
  var Ressource, RessourceAttributesMixin, debug,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  debug = require('debug')('slumber:API');

  RessourceAttributesMixin = require('./RessourceAttributesMixin').RessourceAttributesMixin;

  Ressource = require('./Ressource').Ressource;

  module.exports.API = (function(_super) {
    __extends(API, _super);

    function API(url, opts, fn) {
      this.url = url;
      this.opts = opts;
      debug('constructor');
      API.__super__.constructor.apply(this, arguments);
      process.nextTick(function() {
        return fn(this);
      });
      return this.getattr;
    }

    return API;

  })(RessourceAttributesMixin);

}).call(this);