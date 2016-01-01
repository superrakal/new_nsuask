module Api
  module V1
    class UsersController < Api::V1::BaseController

      respond_to :json

      def index
        @users = User.all
        respond_with @users
      end

      def show
        @user = User.find params[:id]
        respond_with @user
      end
    end
  end
end