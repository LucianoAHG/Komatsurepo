from Models.models import DataModel

class DataController:
    def __init__(self):
        self.data_model = DataModel()

    def query_data(self, fields, filter_params=None):
        # Si no se proporcionan parámetros de filtro, inicializa un diccionario vacío
        filter_params = filter_params or {}

        # Mapea los nombres de los campos del modelo a los nombres utilizados en la URL
        field_mapping = {'distribuidor': 'distribuidor', 'sap_code': 'sap_code', 'rol_unico': 'rol_unico'}
        filter_params_mapped = {field_mapping[key]: value for key, value in filter_params.items()}

        try:
            all_data = self.data_model.Traer_Info(fields, filter_params_mapped)
            return all_data
        except Exception as e:
            # Agrega un manejo de errores para imprimir información útil en la consola
            print(f"Error en query_data: {e}")
            return None

    def add_data(self, new_data):
        # Agrega lógica para agregar nuevos datos a la base de datos
        pass
