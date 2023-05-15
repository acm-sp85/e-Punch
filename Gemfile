source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

gem 'rails', '~> 6.1.4', '>= 6.1.4.1'

gem 'puma', '~> 5.0'
gem 'bcrypt', '~> 3.1.7'
gem "rails_same_site_cookie"
gem 'bootsnap', '>= 1.4.4', require: false
gem 'rack-cors'
gem "faker"
gem "active_model_serializers", "~> 0.10.12"
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]



group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'spring'
  gem "sqlite3"
end


group :development, :test do
  gem 'rspec-rails', '~> 5.0.0'
end

group :test do
  gem 'rspec-json_expectations'
  gem 'shoulda-matchers', '~> 4.0'
end

group :production do
  gem 'pg'
end
