var get = Ember.get;
 
/**
  @extends Ember.Mixin
 
  Implements common pagination management properties for controllers.
*/
Ember.PaginationSupport = Ember.Mixin.create({
  /**
   */
  total: 0,
 
  /**
   */
  rangeStart: 0,
 
  /**
   */
  rangeWindowSize: 10,
 
  /**
   */
  maxPaginationLinks: 5,

  /**
   */
  rangeStop: Ember.computed('total', 'rangeStart', 'rangeWindowSize', function() {
    var rangeStop = get(this, 'rangeStart') + get(this, 'rangeWindowSize'),
    total = get(this, 'total');
    if (rangeStop < total) {
      return rangeStop;
    }
    return total;
  }).cacheable(),

  /**
   */
  page: Ember.computed('rangeStart', 'rangeWindowSize', function() {
    return (get(this, 'rangeStart') / get(this, 'rangeWindowSize')) + 1;
  }).cacheable(),
 
  /**
   */
  totalPages: Ember.computed('total', 'rangeWindowSize', function() {
    return Math.ceil(get(this, 'total') / get(this, 'rangeWindowSize'));
  }).cacheable(),
 
  /**
   */
  hasPrevious: Ember.computed('rangeStart', function() {
    return get(this, 'rangeStart') > 0;
  }).cacheable(),
 
  /**
   */
  hasNext: Ember.computed('rangeStop', 'total', function() {
    return get(this, 'rangeStop') < get(this, 'total');
  }).cacheable(),
 
  /**
  */
  didRequestRange: Ember.K,
 
  /**
   */
  nextPage: function() {
    if (get(this, 'hasNext')) {
      this.incrementProperty('rangeStart', get(this, 'rangeWindowSize'));
    }
  },
 
  /**
   */
  previousPage: function() {
    if (get(this, 'hasPrevious')) {
      this.decrementProperty('rangeStart', get(this, 'rangeWindowSize'));
    }
  },
 
  rangeDidChange: Ember.observer(function() {
    this.didRequestRange(get(this, 'rangeStart'), get(this, 'rangeStop'));
  }, 'rangeStart', 'rangeStop'),

  paginate: function(item){
    var range = this.get('rangeWindowSize');
    if(item.action == 'goToPage')
      this.set('rangeStart', (item.actionValue -1) * range);
  },

  paginator: function(){
    var paginatorArray = Ember.A(), 
        maxlinks = this.get('maxPaginationLinks'),
        totalPages = this.get('totalPages'),
        currentPage = this.get('page');

    for(var o = 0; paginatorArray.get('length') < maxlinks && o <= totalPages; o = o + 0.5)
    {
      var left = currentPage - Math.ceil(o),
          right = currentPage + o,
          action = 'goToPage',
          leftClass = (currentPage == left) ? 'active' : '',
          rightClass = (currentPage == right) ? 'active' : '';

      if( o % 1  && left >= 1 )
        paginatorArray.insertAt(0,Ember.Object.create({
          title: left,
          action: 'goToPage',
          actionValue: left,
          class: leftClass
        }));
      else if(o % 1 == 0 && right < totalPages + 1)
        paginatorArray.pushObject(Ember.Object.create({
          title: right,
          action: 'goToPage',
          actionValue: right,
          class: rightClass
        }));
    }

    paginatorArray.insertAt(0, Ember.Object.create({
      title: '«',
      action: (currentPage !== 1) ? 'goToPage' : '',
      actionValue: 1,
      class: (currentPage == 1) ? 'disabled' : '',
    }));

    paginatorArray.pushObject(Ember.Object.create({
      title: '»',
      action: (currentPage !== totalPages) ? 'goToPage' : '',
      actionValue: totalPages,
      class: (currentPage == totalPages) ? 'disabled' : '',
    }));

    return paginatorArray;
  }.property('maxlinks','totalPages','page'),

});