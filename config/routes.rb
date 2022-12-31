Rails.application.routes.draw do
  root to: 'tests#top'
  get 'scroll_snap/top'
  get "/search" => 'scroll_snap#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
