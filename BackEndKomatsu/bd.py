from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class MantenimientoDistribuidores(Base):
    __tablename__ = 'Mantenimiento_Distribuidores'
    id = Column(Integer, primary_key=True)
    distribuidor = Column(String)
    sap_code = Column(String)
    aval = Column(String)
    rol_unico = Column(String)

    # Relación con la tabla Producto (uno a muchos)
    productos = relationship('Producto', back_populates='mantenimiento_distribuidores')

class Avales(Base):
    __tablename__ = 'Avales'
    id = Column(Integer, primary_key=True)
    tipo_id = Column(String)
    identificador = Column(String)
    razon_social = Column(String)
    domicilio = Column(String)
    pais = Column(String)

class Marcas(Base):
    __tablename__ = 'Marcas'
    id = Column(Integer, primary_key=True)
    Nombre_Marca = Column(String)

class Producto(Base):
    __tablename__ = 'Producto'
    id = Column(Integer, primary_key=True, autoincrement=True)
    Producto = Column(String)
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='productos')

    @staticmethod
    def agregar_producto(session, producto_data, distribuidor_id):
        nuevo_producto = Producto(Producto=producto_data.get('producto'), mantenimiento_distribuidores_id=distribuidor_id)
        session.add(nuevo_producto)
        session.commit()
        session.refresh(nuevo_producto)
        return nuevo_producto

class Participacion(Base):
    __tablename__ = 'Participacion'
    id = Column(Integer, primary_key=True)
    Participacion = Column(String)

class Socio(Base):
    __tablename__ = 'Socio'
    id = Column(Integer, primary_key=True)
    Nombre_Socio = Column(String)

class Comentarios(Base):
    __tablename__ = 'Comentarios'
    id = Column(Integer, primary_key=True)
    Comentario_Positivo = Column(String)
    Comentario_Negativos = Column(String)
    Comentario_otros = Column(String)

# Configuración del motor de la base de datos SQLite
DATABASE_URL = 'sqlite:///komatsupruebas.db'
engine = create_engine(DATABASE_URL, echo=True)

