(function(){
  
  var Page = {
    init: function() {
      this.initFoundation();
      this.initLibraries();
      this.initEventListeners();
    },

    initUI: function() {
      FastClick.attach(document.body);
    },

    initFoundation: function() {
      $(document).foundation();
    },

    initEventListeners: function() {
      // Add code
    },

    initLibraries: function() {
      // Add additional libraries inits
    }
  };

  Page.init();

})();