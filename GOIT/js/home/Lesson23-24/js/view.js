define(
	'view',
	['jquery', 'model'],
	() => class View {
		constructor(model) {
			this.model = model;
			this.init();
		}

		init() {
			let wrapper = tmpl($('#wrapper-template').html());
			$('.container').append(wrapper);
			this.elements = {
				input: $('.controlls__item-value'),
				addBtn: $('.controlls__item-add'),
				listContainer: $('.todo-list'),
				inputItem: $('.todo-list__input')
			};
			this.renderList(this.model.data);
		}

		renderList(data) {
			let list = tmpl($('#list-template').html(), {
				data: data
			});
			this.elements.listContainer.html(list);
		}
	});