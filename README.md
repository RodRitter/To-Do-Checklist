# To-Do Application

## Dependencies
This application uses a Vagrant virtual environment to run a CRUD server

- Vagrant
- Virtualbox

## Install & Usage
Installation for a local environment using `Vagrant`

First make sure you're in the project root

`$ vagrant up` - This might take a little while

`$ vagrant ssh` - This will log you into the virtual environment

`$ vagrant@machine: cd /vagrant` - Takes you to the synced folder with project files

`$ python3 server.py` - run the server.

You can no navigate to `localhost:5000`

## Server
`db_setup.py` - This will do some intial setup for the database
`server.py` - Local server to handle CRUD routing

## Tech Stack

### Backend
- Vagrant
- Flask (A Python framework to help with the CRUD routes on the server)
- SQLite3

### Frontend
- jQuery
- Bootstrap