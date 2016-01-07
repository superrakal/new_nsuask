module Api
  module V1
    class MessagesController < ApplicationController

      include Collection

      respond_to :json
      before_action :set_message, only:[:show, :destroy, :ignore, :push]

      def index
        @messages = filtered_collection(Message)
        @messages = @messages.order(created_at: :desc).page(params[:page]).per(params[:per_page])
        respond_with @messages, meta: {total_pages: @messages.total_pages}
      end

      def show
        respond_with @message
      end

      def create
        @message = Message.new message_params
        if @message.save
          respond_with @message, status: :created, location: false
        else
          respond_with @message, status: :unprocessable_entity
        end
      end

      def destroy
        @message.destroy
        respond_with nil, status: :success, location: false
      end

      def ignore
        @message.ignore
        respond_with @message, status: 200, location: false
      end

      def push
        @message.publish
        respond_with @message, status: 200, location: false
      end

      def new_messages_count
        overhear_messages_count = Message.where(category: 'overhear', state: 'new').count
        love_messages_count =     Message.where(category: 'love', state: 'new').count
        besit_messages_count =    Message.where(category: 'besit', state: 'new').count
        render(json: {:overhear_messages_count => overhear_messages_count, :love_messages_count => love_messages_count,
                      :besit_messages_count => besit_messages_count})
      end

      private
        def message_params
          params.require(:message).permit :text, :category
        end

        def set_message
          @message = Message.find(params[:id])
        end
    end
  end
end
