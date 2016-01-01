import DS from 'ember-data';
var Message;

Message = DS.Model.extend({
  text: DS.attr('string'),
  category: DS.attr('string'),
  state: DS.attr('string', {
    defaultValue: "new"
  })
});

export default Message;