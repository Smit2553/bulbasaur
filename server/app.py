from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import pandas as pd
import base64
import cv2
import numpy as np

app = Flask(__name__)

# Load the machine learning model from a pickle file
classification_model = pickle.load(open("wildfire_classification_model.pkl", "rb"))

CORS(app)

# Class that holds the following info:
# Active Fires
# Acres Burned
# Containment
class QuickStats:
    def __init__(self, active_fires, acres_burned, containment):
        self.active_fires = active_fires
        self.acres_burned = acres_burned
        self.containment = containment

    # Function to get quick stats
    def get_quick_stats(self, active_fires=50, acres_burned=1000, containment=10):
        # Pretend we are getting this data from a database
        self.active_fires = active_fires
        self.acres_burned = acres_burned
        self.containment = containment
        return self.__dict__


@app.route('/', methods=['GET'])
def test_route():
    return jsonify({"message": "Backend is working!"})


@app.route('/api/info', methods=['GET'])
def info_route():
    quick_stats = QuickStats(0, 0, 0)
    return jsonify(quick_stats.get_quick_stats())

# Define a route for making predictions
@app.route("/predict", methods=["POST"])
def predict():
    # Get JSON data from the request
    json_ = request.get_json()

    # Convert JSON data into an image
    image = base64.b64decode(json_["image"])
    image = cv2.resize(image,(32,32))
    image = np.array(image)
    image = image/255

    # Use the loaded model to make predictions on the DataFrame
    prediction = classification_model.predict(np.array([image]))

    # Convert the prediction into a label
    # Define label based on the probability
    label = {
        0: "No wildfire",
        1: "Wildfire"
    }
    predicted_label = label[(prediction > 0.5).astype('int32')[0][0]]

    # Return the predictions as a JSON response
    return jsonify({"Prediction": predicted_label})

if __name__ == '__main__':
    # Allow CORS
    CORS(app)
    app.run(debug=True)
