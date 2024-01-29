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

# Configurar el motor de la base de datos SQLite
DATABASE_URL = 'sqlite:///komatsupruebas.db'
engine = create_engine(DATABASE_URL, echo=True)

# Crear las tablas en la base de datos
Base.metadata.create_all(bind=engine)

# Configurar la sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
