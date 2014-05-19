var ListItemView = Ember.ListView.extend({
  height: 500,
  rowHeight: 50,
  itemViewClass: Ember.ListItemView.extend({templateName: "row_item"})
});

export default ListItemView;
