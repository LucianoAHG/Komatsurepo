from sqlalchemy import create_engine, Column, Integer, String, or_, func, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.exc import SQLAlchemyError

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
            'distribuidor': self.distribuidor,
            'sap_code': self.sap_code,
            'aval': self.aval,
            'rol_unico': self.rol_unico
            
        }
    
    # Relación con la tabla Avales (uno a uno)
    avales = relationship('Avales', back_populates='mantenimiento_distribuidores', uselist=False)
    # Relación con la tabla Marcas (uno a muchos)
    marcas = relationship('Marcas', back_populates='mantenimiento_distribuidores')
    # Relación con la tabla Producto (uno a muchos)
    productos = relationship('Producto', back_populates='mantenimiento_distribuidores')
    # Relación con la tabla Participacion (uno a muchos)
    participaciones = relationship('Participacion', back_populates='mantenimiento_distribuidores')
    # Relación con la tabla Socio (uno a muchos)
    socios = relationship('Socio', back_populates='mantenimiento_distribuidores')
    # Relación con la tabla Comentarios (uno a uno)
    comentario = relationship('Comentarios', back_populates='mantenimiento_distribuidores', uselist=False)

class Avales(Base):
    __tablename__ = 'Avales'
    id = Column(Integer, primary_key=True)
    tipo_id = Column(String)
    identificador = Column(String)
    razon_social = Column(String)
    domicilio = Column(String)
    pais = Column(String)
    
    
    # Relación con MantenimientoDistribuidores
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='avales')

class Marcas(Base):
    __tablename__ = 'Marcas'
    id = Column(Integer, primary_key=True)
    Nombre_Marca = Column(String)

    def serialize(self):
        return {
            'id': self.id,
            'Nombre_Marca': self.Nombre_Marca
            # Agrega más campos según sea necesario
        }
    
    # Relación con MantenimientoDistribuidores (muchos a uno)
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='marcas')

class Producto(Base):
    __tablename__ = 'Producto'
    id = Column(Integer, primary_key=True)
    Producto = Column(String)
    def serialize(self):
        return {
            'id': self.id,
            'Producto': self.Producto
            # Agrega más campos según sea necesario
        }
    
    # Relación con MantenimientoDistribuidores (muchos a uno)
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='productos')

class Participacion(Base):
    __tablename__ = 'Participacion'
    id = Column(Integer, primary_key=True)
    Participacion = Column(String)
    def serialize(self):
        return {
            'id': self.id,
            'Participacion': self.Participacion
            # Agrega más campos según sea necesario
        }
    # Relación con MantenimientoDistribuidores (muchos a uno)
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='participaciones')

class Socio(Base):
    __tablename__ = 'Socio'
    id = Column(Integer, primary_key=True)
    Nombre_Socio = Column(String)

    def serialize(self):
        return {
            'id': self.id,
            'Nombre_Socio': self.Nombre_Socio
            # Agrega más campos según sea necesario
        }
    
    # Relación con MantenimientoDistribuidores (muchos a uno)
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='socios')

class Comentarios(Base):
    __tablename__ = 'Comentarios'
    id = Column(Integer, primary_key=True)
    Comentario_Positivo = Column(String)
    Comentario_Negativos = Column(String)
    Comentario_otros = Column(String)
    def serialize(self):
        return {
            'id': self.id,
            'Comentario_Positivo': self.Comentario_Positivo,
            'Comentario_Negativos': self.Comentario_Negativos,
            'Comentario_otros': self.Comentario_otros
            # Agrega más campos según sea necesario
        }
    # Relación con MantenimientoDistribuidores (uno a uno)
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='comentario')



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

            # Construye dinámicamente las condiciones de búsqueda insensibles a mayúsculas y minúsculas
            filter_conditions = [
            func.lower(getattr(MantenimientoDistribuidores, key)).ilike(func.lower(value))
            for key, value in filter_params.items()
            ]

            # Aplica la búsqueda usando OR entre las condiciones
            query = session.query(MantenimientoDistribuidores).filter(or_(*filter_conditions))

            data_mant_distribuidores_info = query.all()

        except SQLAlchemyError as e:
            # Manejo de excepciones específicas de SQLAlchemy
            print(f"Error al recuperar datos: {e}")
            session.rollback()  # Revierte la transacción en caso de error
            return {'error': 'Error al recuperar datos de la base de datos'}
        except Exception as e:
            # Manejo de otras excepciones
            print(f"Error inesperado: {e}")
            return {'error': 'Error inesperado'}
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