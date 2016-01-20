class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :category, :created_at
end
