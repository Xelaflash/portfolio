activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end


require 'sprockets/es6'
activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end
activate :livereload

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html, remove_input_attributes: false
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.branch       = 'gh-pages'
  deploy.deploy_method = :git
end
