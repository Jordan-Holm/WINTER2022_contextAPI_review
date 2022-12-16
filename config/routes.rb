Rails.application.routes.draw do

  namespace :api do
    
    resources :item_type do
      resources :product
    end

  end
  
end
