from flask import jsonify
from sqlalchemy.exc import SQLAlchemyError
from Models.models import Consultar_Distribuidores, Guardar_Producto

class Consultar_Dist:
    def __init__(self):
        self.consultar = Consultar_Distribuidores()

    def query_data(self, fields, filter_params=None):
        filter_params = filter_params or {}
        field_mapping = {'distribuidor': 'distribuidor', 'sap_code': 'sap_code', 'aval': 'aval', 'rol_unico': 'rol_unico'}
        filter_params_mapped = {field_mapping[key]: value for key, value in filter_params.items()}

        try:
            all_data = self.consultar.Traer_Info(fields, filter_params_mapped)
            return all_data
        except Exception as e:
            print(f"Error en query_data: {e}")
            return None


class Guardar_Producto_form:
    def __init__(self):
        self.guardar = Guardar_Producto()

    def guardar_data(self, producto_nuevo):
        try:
            print(f"Tipo de dato recibido: {type(producto_nuevo)}")  # Agrega esta línea para imprimir el tipo de dato
            print(f"Dato recibido: {producto_nuevo}")  # Agrega esta línea para imprimir el dato completo

            result = self.guardar.guardar_data(producto_nuevo)
            return jsonify(result)
        except Exception as e:
            print(f"Error al agregar datos {e}")
            return jsonify({'Error': 'error al agregar desde controlador'})