from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class MantenimientoDistribuidores(Base):
    __tablename__ = 'Mantenimiento_Distribuidores'

    id = Column(Integer, primary_key=True)
    distribuidor = Column(String)
    sap_code = Column(String)
    aval = Column(String)
    rol_unico = Column(String)

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.distribuidor,
            'sapcode': self.sap_code,
            'aval': self.aval,
            'rolunico': self.rol_unico
        }

class DataModel:
    def __init__(self):
        # Configuración de la conexión a la base de datos SQL
        DATABASE_URL = 'sqlite:///komatsupruebas.db'
        self.engine = create_engine(DATABASE_URL, echo=True)
        self.Session = sessionmaker(bind=self.engine)

    def Traer_Info(self, fields):
        # Recupera datos de la base de datos
        session = self.Session()
        data_mant_distribuidores_info = session.query(MantenimientoDistribuidores).all()
        session.close()

        # Serializa los datos antes de enviarlos al frontend
        serialized_data = [item.serialize() for item in data_mant_distribuidores_info]

        return serialized_data
