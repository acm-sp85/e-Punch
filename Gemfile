source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"


gem 'rails', '~> 7.0', '>= 7.0.0'  # Latest Rails version
gem 'io-console', '~> 0.6.0'
gem 'puma', '~> 6.6'
gem 'bcrypt', '~> 3.1', '>= 3.1.20'
gem "rails_same_site_cookie", '~> 0.1.10'  # Use the latest available version

gem 'bootsnap', '>= 1.10', require: false  # Latest Bootsnap version
gem 'rack-cors', '~> 2.0.2'  # Latest available version

gem "faker", '~> 2.22'  # Latest Faker version
gem "active_model_serializers", "~> 0.10.15"  # Latest available version

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]  # Latest tzinfo-data
gem 'nokogiri', '~> 1.14'  # Latest Nokogiri version

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]  # Latest byebug version
end

group :development do
  gem 'listen', '~> 3.8'  # Latest Listen version
  gem 'spring', '~> 3.1'  # Latest Spring version
  gem "sqlite3", '~> 1.5'  # Latest SQLite3 version
end

group :development, :test do
gem 'rspec-rails', '~> 5.0.0'  # Latest available version

end

group :test do
gem 'rspec-json_expectations', '~> 2.2'

  gem 'shoulda-matchers', '~> 5.0'  # Latest Shoulda Matchers version
end

group :production do
  gem 'pg', '~> 1.2'  # Latest PG version
end