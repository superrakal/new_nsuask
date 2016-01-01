import DS from 'ember-data';
var Message;

Message = DS.Model.extend({
  text: DS.attr('string'),
  category: DS.attr('string'),
  state: DS.attr('string', {
    defaultValue: "new"
  }),
  created_at: DS.attr('date'),
  formatted_created_at: (function() {
    var date, format;
    date = this.get('created_at');
    format = "DD.MM.YYYY";
    return moment(date).locale('ru').format(format);
  }).property('created_at'),
  "class": (function() {
    if (this.get('state') === 'new') {
      return 'success';
    } else {
      if (this.get('state') === 'ignored' || this.get('state') === 'deleted') {
        return 'active';
      } else {
        if (this.get('state') === 'published') {
          return 'info';
        }
      }
    }
  }).property('state'),
  isIgnored: (function() {
    return this.get('state') === 'ignored';
  }).property('state'),
  isVisibleActions: (function() {
    return this.get('state') === 'deleted' || this.get('state') === 'published';
  }).property('state')
});

export default Message;
