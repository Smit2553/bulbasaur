from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
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


@app.route('/api/test', methods=['GET'])
def test_route():
    return jsonify({"message": "Backend is working!"})


@app.route('/api/info', methods=['GET'])
def info_route():
    quick_stats = QuickStats(0, 0, 0)
    return jsonify(quick_stats.get_quick_stats())


if __name__ == '__main__':
    app.run(debug=True)
