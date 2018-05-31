# To-Do Application

## Dependencies
This application uses a Vagrant virtual environment to run a CRUD server

- Vagrant
- Virtualbox (Vagrant needs this)

## Install & Usage
Installation for a local environment using `Vagrant`

First make sure you're in the project root

- `$ vagrant up` - Install the virtual environent. This might take a little while
- `$ vagrant ssh` - This will log you into the virtual environment
- `$ vagrant@machine: cd /vagrant` - Takes you to the synced folder with project files
- `$ vagrant@machine: python3 server.py` - run the server.

You can now navigate to `localhost:8080`

## Server
- `db_setup.py` - This will do some intial setup for the database
- `server.py` - Local server to handle CRUD routing

### API Endpoints
- `/todo/` - [GET] Will return all todo items
- `/todo/delete/<id>` - [POST] Will delete an item with ID
- `/todo/<id>` - [POST] Will update an items details

## Tech Stack
### Backend
- Vagrant
- Flask (A Python framework to help with the CRUD routes on the server)
- SQLite3

### Frontend
- jQuery
- Bootstrap