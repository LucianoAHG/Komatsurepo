from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class MantenimientoDistribuidores(Base):
    __tablename__ = 'Mantenimiento_Distribuidores'

    id = Column(Integer, primary_key=True)
    distribuidor = Column(String)
    sap_code = Column(String)
    rol_unico = Column(String)

    def serialize(self):
        return {
            'id': self.id,
            'distribuidor': self.distribuidor,
            'sap_code': self.sap_code,
            'rol_unico': self.rol_unico
        }

class DataModel:
    def __init__(self):
        # Configuración de la conexión a la base de datos SQL
        DATABASE_URL = 'sqlite:///komatsupruebas.db'
        self.engine = create_engine(DATABASE_URL, echo=True)
        self.Session = sessionmaker(bind=self.engine)

    def Traer_Info(self, fields, filter_params):
        try:
            # Recupera datos de la base de datos
            session = self.Session()
            query = session.query(MantenimientoDistribuidores).filter_by(**filter_params)
            data_mant_distribuidores_info = query.all()
        except Exception as e:
            # Manejo de excepciones específicas de SQLAlchemy
            print(f"Error al recuperar datos: {e}")
            return {'error': 'Error al recuperar datos de la base de datos'}
        finally:
            session.close()

        # Verifica si hay resultados antes de serializarlos
        if data_mant_distribuidores_info:
            # Serializa los datos antes de enviarlos al frontend
            serialized_data = [item.serialize() for item in data_mant_distribuidores_info]
            return serialized_data
        else:
            # Si no hay resultados, devuelve un mensaje indicando que no existe
            return {'message': 'No se encontraron resultados para los parámetros proporcionados'}
