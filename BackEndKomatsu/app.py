from flask import Flask, jsonify, request
from flask_cors import CORS
from Controllers.controllers import DataController

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
data_controller = DataController()

@app.route('/api/data', methods=['GET'])
def get_data():
    # Obtén los campos que se desean consultar desde los parámetros de la URL
    fields = request.args.getlist('fields')
    data = data_controller.query_data(fields)
    return jsonify({'data': data})

@app.route('/api/data', methods=['POST'])
def add_data():
    request_data = request.get_json()
    new_data = request_data.get('new_data')
    
    if new_data:
        data_controller.add_data(new_data)
        return jsonify({'message': 'Data added successfully'})
    else:
        return jsonify({'error': 'Invalid data'})

if __name__ == '__main__':
    app.run(debug=True)
