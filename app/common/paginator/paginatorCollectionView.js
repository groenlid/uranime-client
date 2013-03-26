App.PaginatorCollectionView = Ember.CollectionView.extend({
		//contentBinding: 'parentView.content',
		tagName: 'ul',
		classNames:['pagination'],

		itemViewClass: Ember.View.extend({
			tagName: 'li',
			classNameBindings: ['content.class'],

			templateName: "common/paginator/paginatorItemView",
		})
});