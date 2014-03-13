'use strict';

angular.module('wearscriptPlaygroundApp')

  .factory( 'Profile', function($rootScope,$log,Storage){

    var profile = {
      authenticated: false,
      complete: false,
      github_user: false,
      google_user: false,
      glass_id: false,
      vim_mode: Storage.get('vim_mode') || false,
      set: function(key, val) {
        this[key] = val;
        Storage.set(key, val);
      },
      get: function(key) {
        return this[key] || Storage.get(key);
      }
    }

    return profile

  })
