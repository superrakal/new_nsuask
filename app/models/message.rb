class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :text
  field :category

  state_machine :state, :initial => :new do
    event :publish do
      transition [:new, :ignored] => :published
    end

    event :ignore do
      transition :new => :ignored
    end
  end

  validates_presence_of :text, :category
end
