class HelperMailer < ActionMailer::Base
  helper :application

  def send_message(message)
    @message = message
    mail(to: 'topolnyak012@gmail.com', subject: 'Новое сообщение с NSUASK.RU')
  end
end
