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

    avales = relationship('Avales', back_populates='mantenimiento_distribuidores', uselist=False)
    marcas = relationship('Marcas', back_populates='mantenimiento_distribuidores')
    productos = relationship('Producto', back_populates='mantenimiento_distribuidores')
    participaciones = relationship('Participacion', back_populates='mantenimiento_distribuidores')
    socios = relationship('Socio', back_populates='mantenimiento_distribuidores')
    comentario = relationship('Comentarios', back_populates='mantenimiento_distribuidores', uselist=False)

class Avales(Base):
    __tablename__ = 'Avales'
    id = Column(Integer, primary_key=True)
    tipo_id = Column(String)
    identificador = Column(String)
    razon_social = Column(String)
    domicilio = Column(String)
    pais = Column(String)

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
        }

    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='marcas')

class Producto(Base):
    __tablename__ = 'Producto'
    id = Column(Integer, primary_key=True)
    Producto = Column(String)

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
        }

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
        }

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
        }

    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='comentario')

class Indicadores(Base):
    __tablename__ = 'Indicadores_overview'
    id = Column(Integer, primary_key=True)
    Fecha = Column(Integer)
    Años_Komatsu = Column(String)
    Comportamiento_Pago = Column(String)
    Credito_Promedio = Column(String)
    Linea_Amarilla = Column(String)
    Sblc = Column(String)
    Garantias_Otras = Column(String)
    Deuda_Sap = Column(String)
    Embi = Column(String)

    def serialize(self):
        return {
            'id': self.id,
            'Fecha': self.Fecha,
            'Años_Komatse': self.Años_Komatsu,
            'Comportamiento_Pago': self.Comportamiento_Pago,
            'Credito_Promedio' : self.Credito_Promedio,
            'Linea_Amarilla': self.Linea_Amarilla,
            'Sblc': self.Sblc,
            'Garantias_Otras': self.Garantias_Otras,
            'Deuda_Sap': self.Deuda_Sap,
            'Embi': self.Embi
        }

class Consultar_Distribuidores:
    def __init__(self):
        DATABASE_URL = 'sqlite:///C:/Users/desar/OneDrive/Documentos/komatsu/BackEndKomatsu/komatsupruebas.db'
        self.engine = create_engine(DATABASE_URL, echo=True)
        self.Session = sessionmaker(bind=self.engine)

    def Traer_Info(self, fields, filter_params):
        try:
            session = self.Session()

            filter_conditions = [
                func.lower(getattr(MantenimientoDistribuidores, key)).ilike(func.lower(value))
                for key, value in filter_params.items()
            ]

            query = session.query(MantenimientoDistribuidores).filter(or_(*filter_conditions))

            data_mant_distribuidores_info = query.all()

        except SQLAlchemyError as e:
            print(f"Error al recuperar datos: {e}")
            session.rollback()
            return {'error': 'Error al recuperar datos de la base de datos'}
        except Exception as e:
            print(f"Error inesperado: {e}")
            return {'error': 'Error inesperado'}
        finally:
            session.close()

        if data_mant_distribuidores_info:
            serialized_data = [item.serialize() for item in data_mant_distribuidores_info]
            return serialized_data
        else:
            return {'message': 'No se encontraron resultados para los parámetros proporcionados'}

class Guardar_Producto:
    def __init__(self):
        DATABASE_URL = 'sqlite:///C:/Users/desar/OneDrive/Documentos/komatsu/BackEndKomatsu/komatsupruebas.db'
        self.engine = create_engine(DATABASE_URL, echo=True)
        self.Session = sessionmaker(bind=self.engine)   

    def guardar_data(self, producto_nuevo):
        try:
            session = self.Session()
            nuevo_producto = Producto(Producto=producto_nuevo.get('producto'))
            session.add(nuevo_producto)
            session.commit()
            session.refresh(nuevo_producto)
            return {'message': 'Agregado Exitosamente', 'nuevo_producto': producto_nuevo.serialize()}
        except Exception as e:
            print(f"Error al agregar datos: {e}")
            session.rollback()
            return {'error': 'Error al agregar a la bd'}
        finally:
            session.close()
