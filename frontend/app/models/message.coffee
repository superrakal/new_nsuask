`import DS from 'ember-data'`

Message = DS.Model.extend
  text:      DS.attr 'string'
  category:  DS.attr 'string'
  created_at: DS.attr 'date'

  formattedCreatedAt: (->
    if !@get('created_at') then '' else moment(@get('created_at')).format('DD.MM.YYYY HH:mm')
  ).property('created_at')

`export default Message`
