App.PaginatorCollectionView = Ember.View.extend({
	
	classNames:['pagination', 'pagination-right'],

	template: Ember.Handlebars.compile('{{view view.childView contentBinding="view.content"}}'),

	childView: Ember.CollectionView.extend({
		//contentBinding: 'parentView.content',
		tagName: 'ul',
		itemViewClass: Ember.View.extend({
			tagName: 'li',
			classNameBindings: ['content.class'],

			templateName: "uranime/~templates/common/paginator/paginatorItemView",
		})
	}),

	
//<li {{bindAttr class="item.class"}}></li>
});