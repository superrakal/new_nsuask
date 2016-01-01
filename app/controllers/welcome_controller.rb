class WelcomeController < ApplicationController

  respond_to :json

  def index
  end

  def helper_mail
    message = params[:message]
    HelperMailer.send_message(message).deliver
    respond_with nil, status: 200, location: false
  end
end
