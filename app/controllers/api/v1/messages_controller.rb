module Api
  module V1
    class MessagesController < ApplicationController

      require 'telegram/bot'
      include Collection

      respond_to :json
      before_action :set_message, only:[:show, :destroy]

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
          TelegramBotWorker.new.perform_async('Новое сообщение для Подслушано НГУ: ' + @message.text)
          respond_with @message, status: :created, location: false
        else
          respond_with @message, status: :unprocessable_entity
        end
      end

      def destroy
        @message.destroy
        respond_with @message, status: :success, location: false
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
