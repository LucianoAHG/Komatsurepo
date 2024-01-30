from Models.models import DataModel

class DataController:
    def __init__(self):
        self.data_model = DataModel()

    def query_data(self, fields, filter_params=None):
        # Si no se proporcionan parámetros de filtro, inicializa un diccionario vacío
        filter_params = filter_params or {}

        # Mapea los nombres de los campos del modelo a los nombres utilizados en la URL
        field_mapping = {'distribuidor': 'distribuidor', 'sap_code': 'sap_code', 'aval': 'aval.razon_social', 'rol_unico': 'rol_unico'}
        
        # Filtra las claves que tienen un valor no vacío
        filter_params_filtered = {key: value for key, value in filter_params.items() if value}

        # Construye dinámicamente los filtros basados en los valores proporcionados desde el frontend
        filters = {field_mapping[key]: value for key, value in filter_params_filtered.items() if key in field_mapping}

        try:
            all_data = self.data_model.Traer_Info(fields, filters)
            return all_data
        except Exception as e:
            # Agrega un manejo de errores para imprimir información útil en la consola
            print(f"Error en query_data: {e}")
            return None

    def add_data(self, new_data):
        # Agrega lógica para agregar nuevos datos a la base de datos
        pass
