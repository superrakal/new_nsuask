Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    post 'api/v1/authenticate' => 'api/v1/sessions#create'
  end

  namespace :api do
    namespace :v1 do
      resources :messages, except: [:update]
      resources :users, only: [:index, :show]
    end
  end

  root 'welcome#index'
  get '/*path' => 'welcome#index', format: 'html'
end
