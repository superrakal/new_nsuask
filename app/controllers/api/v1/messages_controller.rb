module Api
  module V1
    class MessagesController < ApplicationController
      require 'net/http'
      require 'uri'
      respond_to :json
      before_action :set_message, only:[:show, :destroy, :ignore, :push]

      def index
        @messages = Message.all
        respond_with @messages
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
