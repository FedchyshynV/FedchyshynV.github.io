requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
    'tmpl': 'tmpl'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});

require(
  [
    'jquery',
    'tmpl',
    'model',
    'view',
    'controller'
  ],
  function ($, tmpl, Model, View, Controller) {
    var firstToDoList = ['learn html', 'learn css', 'learn js'];       
    var model = new Model(firstToDoList);                              
    var view = new View(model);                                        
    var controller = new Controller(model, view);                       
  }                                                                     

);