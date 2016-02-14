//Initialise Chrome Platform Analytics (allows Google Analytics in Chrome Apps).
var service = analytics.getService('Chrome Platform Analytics for Angulartics');
service.getConfig().addCallback(
  function(config) {
    config.setTrackingPermitted(true);
  }
);
var tracker = service.getTracker('UA-XXXXXX-X');
