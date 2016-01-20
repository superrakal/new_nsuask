class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :text
  field :category

  validates_presence_of :text, :category
end
