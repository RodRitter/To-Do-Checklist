import sqlite3
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
conn = None
c = None


@app.route("/")
def todo():
    return render_template("todo.html")


@app.route("/todo", methods=['GET', 'POST'])
def endpoint_todo():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    if request.method == 'GET':
        c.execute("SELECT * FROM items")
        items = c.fetchall()
        return jsonify(items)
    elif request.method == 'POST':
        todo = request.form['todo']
        if todo:
            c.execute("INSERT INTO items (checked, todo) VALUES (0,\"{}\")".format(todo))
            conn.commit()
            return jsonify(todo)
        
        return "Error: You have not provided a valid argument"

    conn.close()


@app.route("/todo/delete/<int:id>", methods=['POST'])
def endpoint_delete(id):
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    if request.method == 'POST':
        c.execute("DELETE from items WHERE id = \"{}\"".format(id))
        conn.commit()
        conn.close()
        return "Deleted item with ID {}".format(id)


@app.route("/todo/<int:id>", methods=['POST'])
def endpoint_update(id):
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    if request.method == 'POST':
        checked = request.form['checked']

        if checked:
            c.execute("UPDATE items SET checked = \"{}\" WHERE id = \"{}\"".format(checked, id))
            conn.commit()
            conn.close()
            return "Updated item with ID {}".format(id)
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
