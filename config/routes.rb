Rails.application.routes.draw do

  namespace :api do
    resources :item_type
  end
  
end
