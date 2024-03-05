# Luther College CS Senior Project (team Wolfpack)

A web application to help people keep track of their belongings.

## Installation:

1. Install rbenv (version manager for Ruby): https://github.com/rbenv/rbenv

2. Install ruby 3.2.2
```
rbenv install 3.2.2
```
3. Set ruby 3.2.2 global version
```
rbenv global 3.2.2
```
Double check ruby global version:
```
which ruby
```
should return 
```
> /Users/username/.rbenv/shims/ruby
```
not
```
> /usr/bin/ruby
```
4. Install NodeJS: https://nodejs.org/en
Make sure node is installed
```
node -v
```
5. Install yarn: https://classic.yarnpkg.com/lang/en/docs/install/
```
yarn --version
```
6. Install postgresql: https://www.postgresql.org/download/

## Setup Project
1. Clone project and go to project directory:
```
git clone git@github.com:vuongtr01/senior_project.git
cd senior_project
```
2. Install gem:
```
bundle install
```
3. Install front end package
```
yarn install
```
4. Install development database:
```
rails db:create
```
5. Migrate current database migrations:
```
rails db:migrate
```
6. Seeding data:
```
rails db:seed
```
7. Run application:
* For quick start:
```
bin/dev
```
* If you want to run backend and frontend seperately for easier debuging:
open one terminal and start backend server:
```
rails s
```
Then, open another terminal, run run front end part:
```
yarn build --watch
```
Go to your browser: localhost:3000

## Testing
1. For backend, we use Rspec.
* To run unit tests for a specific file, from project root directory:
```
bundle exec rspec spec/path_to_file
```
* To run all unit tests, from project root directory:
```
bundle exec rspec spec
```
* The coverage file will be generated in the coverage folder. To see coverage:
```
open coverage/index.html
```

2. For frontend component unit test, we use Jest.
* To run unit tests for each component:
```
yarn test path_to_file
```

* To run unit tests for all components:
```
yarn test
```

* To run unit tests and generate coverage:
```
yarn test --coverage
```
## Deployment
Coming soon