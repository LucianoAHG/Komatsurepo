from flask import Flask, jsonify, request
from flask_cors import CORS
from Controllers.controllers import Consultar_Dist
from bd import Producto, engine

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://10.8.0.18:3000"}})
data_controller = Consultar_Dist()

@app.route('/api/data', methods=['GET', 'POST'])
def get_data():
    if request.method == 'POST':
        # Obtener datos del formulario
        formulario_data = request.get_json()

        with engine.connect() as connection:
            with connection.begin() as trans:
                try:
                    nuevo_producto = Producto(Producto=formulario_data.get('producto'))
                    connection.execute(nuevo_producto.__table__.insert().values(formulario_data))
                    trans.commit()
                    return jsonify({'message': 'Producto agregado exitosamente', 'nuevo_producto': {'id': nuevo_producto.id, 'Producto': nuevo_producto.Producto}})
                except Exception as e:
                    trans.rollback()
                    return jsonify({'error': f'Error al agregar producto: {str(e)}'})

    elif request.method == 'GET':
        # Obtén los campos que se desean consultar desde los parámetros de la URL
        fields = request.args.getlist('fields')

        # Obtén los parámetros de filtro desde los parámetros de la URL
        filter_params = {key: request.args[key] for key in request.args if key != 'fields'}

        data = data_controller.query_data(fields, filter_params)
        return jsonify({'data': data})

if __name__ == '__main__':
    app.run(debug=True)
