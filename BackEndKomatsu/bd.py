from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship, declarative_base

Base = declarative_base()

class MantenimientoDistribuidores(Base):
    __tablename__ = 'Mantenimiento_Distribuidores'

    id = Column(Integer, primary_key=True, index=True)
    distribuidor = Column(String)
    sap_code = Column(String)
    aval = Column(String)
    rol_unico = Column(String)
    
    # Relación con la tabla Avales
    avales = relationship('Avales', back_populates='mantenimiento_distribuidores')
    datos_mant_vaciados = relationship('Mantenedor_Vaciado', back_populates='mantenimiento_distribuidores_datos')
    
class Avales(Base):
    __tablename__ = 'Avales'
    
    id = Column(Integer, primary_key=True, index=True)
    tipo_id = Column(String, index=True)
    identificador = Column(String)
    razon_social = Column(String)
    domicilio = Column(String)
    pais = Column(String)
    
    # Relación con MantenimientoDistribuidores
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores = relationship('MantenimientoDistribuidores', back_populates='avales')


class Marcas(Base):
    __tablename__ = 'Marcas'
    id = Column(Integer, primary_key=True, index=True)
    Nombre_Marca = Column(String)
    Producto = Column(String)
    Participacion = Column(String)
    Socios= Column(String)
    Comentario_Positivo = Column(String)
    Comentario_Negativos = Column(String)
    Comentario_otros = Column(String)
    
class Mantenedor_Vaciado(Base):
    __tablename__ = 'Mantenedor_Vaciado'
    id = Column(Integer, primary_key=True, index=True)
    
    # Relación con MantenimientoDistribuidores
    mantenimiento_distribuidores_id = Column(Integer, ForeignKey('Mantenimiento_Distribuidores.id'))
    mantenimiento_distribuidores_datos = relationship('MantenimientoDistribuidores', back_populates='datos_mant_vaciados')


# Configuración del motor de la base de datos SQLite
DATABASE_URL = 'sqlite:///C:/Users/desar/OneDrive/Documentos/komatsu/BackEndKomatsu/komatsupruebas.db'
engine = create_engine(DATABASE_URL, echo=True)

# Crear las tablas en la base de datos
print("Creando las tablas en la base de datos...")
Base.metadata.create_all(bind=engine)
print("Tablas creadas exitosamente.")

# Configurar la sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Agregar dos usuarios de ejemplo
def agregar_usuarios_ejemplo():
    session = SessionLocal()

    # Usuario 1
    usuario1 = MantenimientoDistribuidores(
        distribuidor="Distribuidor1",
        sap_code="SAP123",
        aval="Aval1",
        rol_unico="Rol1",
        avales=[],
        datos_mant_vaciados=[]
    )
    session.add(usuario1)

    aval1 = Avales(
        tipo_id="Tipo1",
        identificador="Identificador1",
        razon_social="RazonSocial1",
        domicilio="Direccion1",
        pais="Pais1",
        mantenimiento_distribuidores=usuario1
    )
    session.add(aval1)

    # Usuario 2
    usuario2 = MantenimientoDistribuidores(
        distribuidor="Distribuidor2",
        sap_code="SAP456",
        aval="Aval2",
        rol_unico="Rol2",
        avales=[],
        datos_mant_vaciados=[]
    )
    session.add(usuario2)

    aval2 = Avales(
        tipo_id="Tipo2",
        identificador="Identificador2",
        razon_social="RazonSocial2",
        domicilio="Direccion2",
        pais="Pais2",
        mantenimiento_distribuidores=usuario2
    )
    session.add(aval2)

    session.commit()
    session.close()

# Llamamos a la función para agregar usuarios de ejemplo
agregar_usuarios_ejemplo()
