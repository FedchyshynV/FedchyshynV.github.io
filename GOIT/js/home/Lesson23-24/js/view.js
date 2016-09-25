define(
	'view', 
	['jquery', 'model'],
	() =>	function View(model) {
			
			 init = () => {
				var wrapper = tmpl($('#wrapper-template').html());

				$('.container').append(wrapper);

				this.elements = {
					input: $('.controlls__item-value'),
					addBtn: $('.controlls__item-add'),
					listContainer: $('.todo-list'),
					inputItem: $('.todo-list__input')
				};

				this.renderList(model.data);

			};

			this.renderList = (data) => {
				var list = tmpl($('#list-template').html(), {
					data: data
				});

				this.elements.listContainer.html(list)
			};

			init();

		});