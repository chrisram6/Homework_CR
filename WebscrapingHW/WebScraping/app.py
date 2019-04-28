from flask import Flask, jsonify, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars
import json
from pprint import pprint
import os



import scrape_mars


connection = "mongodb://localhost:27017"


mars_client = pymongo.MongoClient(connection)


db = mars_client.mars


db.mars_client_data.drop()



app = Flask(__name__)

@app.route('/scrape')
def scrape():
    mars_scraped_data = scrape_mars.scrape()
    db.mars_data.update({}, mars_scraped_data, upsert=True)
    return redirect("/")

@app.route('/')
def index():
    mars_data_from_mongo = db.mars_data.find_one()
    return render_template("index.html", mars_d=mars_data_from_mongo)





if __name__ == "__main__":
    app.run(debug=True)

