class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :category, :state, :created_at

  def state
    @object.state.to_s
  end

end
