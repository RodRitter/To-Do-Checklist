# To-Do Application
<img src="http://projects.ritter.co.za/storage/mockup.png" width="980">

## Structure
- `[static]` - Holds styles & scripts
- `[templates]` - Holds all html views
- `server.py` - The script that runs the server & handles CRUD routing
- `db_setup.py` - Initial setup of database & table if required

## Install & Usage
Installation for a local environment using `Vagrant`

### Dependencies
- Vagrant
- Virtualbox (Vagrant needs this)

### Installation
First make sure you're in the project root

- `$ vagrant up` - Install the virtual environent. This might take a little while
- `$ vagrant ssh` - This will log you into the virtual environment
- `$ vagrant@machine: cd /vagrant` - Takes you to the synced folder with project files
- `$ vagrant@machine: python3 server.py` - run the server.

You can now navigate to `localhost:8080`

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
