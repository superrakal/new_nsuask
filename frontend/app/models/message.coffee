`import DS from 'ember-data'`

Message = DS.Model.extend

  text:       DS.attr 'string'
  category:   DS.attr 'string'
  state:      DS.attr 'string', defaultValue: "new"
  created_at: DS.attr 'date'

  formatted_created_at: (->
    date = @get 'created_at'
    format = "DD.MM.YYYY"
    moment(date).locale('ru').format format
  ).property('created_at')

  class: (->
    if @get('state') == 'new'
      'success'
    else
      if @get('state') == 'ignored' || @get('state') == 'deleted'
        'active'
      else
        if @get('state') == 'published'
          'info'
  ).property('state')

  isIgnored: (->
    @get('state') == 'ignored'
  ).property('state')

  isVisibleActions: (->
    @get('state') == 'deleted' || @get('state') == 'published'
  ).property('state')
`export default Message`
