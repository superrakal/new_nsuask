require 'telegram/bot'

class TelegramBotWorker
  include Sidekiq::Worker

  TOKEN = '188807300:AAG9v4GNS8LLgZotlW-XLAiYHwnjnoP53x8'

  def perform_async(message)
    Telegram::Bot::Client.run(TOKEN) do |bot|
      admins = User.all
      admins.each do |admin|
        if admin.telegram_channel.present?
          bot.api.send_message(chat_id: admin.telegram_channel, text: message)
        end
      end
    end
  end
end