define(                                                                   // определение модуля, все модули или "куски" программы оборачиваем в метод define
  'view',                                                                 // название модуля
  ['jquery', 'model'],                                                    // список зависимостей (что ему нужно подгрузить, прежде чем загрузится этот модуль)
  function() {
    function View(model) {                                                                // Берем данные и выводим их на страницу
      var self = this;

      function init() {                                                                   // внутренний метод, вставка каркаса
        var wrapper = tmpl($('#wrapper-template').html());                                // шаблон wrapper который будем потом вставлять

        $('body').append(wrapper);                                                        
        self.elements = {                                                                 
          input: $('.item-value'),                                                        
          addBtn: $('.item-add'),                                                         
          listContainer: $('.item-list')                                                  
        };
        self.renderList(model.data);                                                      
      };

      self.renderList = function (data) {                                                 
        var list = tmpl($('#list-template').html(), {data: data});                        
        self.elements.listContainer.html(list);                                           
      };

      init();                                                                             

      self.elements.listContainer.on('focus', '.item-text-edit', function () {            
        $(this).siblings('.item-delete').fadeOut( 'fast', function () {                   
          $(this).siblings('.item-edit').fadeIn('fast').css({'visibility' : 'visible'});  
        });
      });

      self.elements.listContainer.on('focusout', '.item-text-edit', function () {         
        $(this).siblings('.item-edit').fadeOut( 'fast', function () {                     
          $(this).siblings('.item-delete').fadeIn('fast');                                
        });
      });

    };
    return View;
  }
);