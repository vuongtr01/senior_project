Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'closets#index'
  resources :closets do
    resources :items
    collection do
      get :autocomplete
    end
  end

  resources :users
  resources :items
end
