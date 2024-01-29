from Models.models import DataModel

class DataController:
    def __init__(self):
        self.data_model = DataModel()

    def query_data(self, fields):
        all_data = self.data_model.Traer_Info(fields)
        return all_data

    def add_data(self, new_data):
        # Agrega lógica para agregar nuevos datos a la base de datos
        pass
