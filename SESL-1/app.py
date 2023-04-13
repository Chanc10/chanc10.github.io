from flask import Flask, render_template, request, jsonify
import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/click", methods=["POST"])
def click():
    # Get the IP address
    ip_address = request.remote_addr

    # Use the ipapi service to get location information
    api_key = os.getenv("IPAPI_KEY")
    response = requests.get(f"https://ipapi.co/{ip_address}/json/?key={api_key}")
    location_data = json.loads(response.text)

    # Return location data
    return jsonify(location_data)

if __name__ == "__main__":
    app.run(debug=True)
