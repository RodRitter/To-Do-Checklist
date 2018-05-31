import sqlite3


conn = sqlite3.connect('database.db')
c = conn.cursor()


# Create table
c.execute('''CREATE TABLE items 
        (id INTEGER PRIMARY KEY, 
        checked INTEGER,
        todo TEXT)''')

conn.commit()