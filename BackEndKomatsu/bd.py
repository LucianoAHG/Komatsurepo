from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base, Session

Base = declarative_base()

class MantenimientoDistribuidores(Base):
    __tablename__ = 'Mantenimiento_Distribuidores'
    id = Column(Integer, primary_key=True)
    distribuidor = Column(String)
    sap_code = Column(String)
    aval = Column(String)
    rol_unico = Column(String)
    
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
    id = Column(Integer, primary_key=True)
    Producto = Column(String)
    

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
DATABASE_URL = 'sqlite:///C:/Users/desar/OneDrive/Documentos/komatsu/BackEndKomatsu/komatsupruebas.db'
engine = create_engine(DATABASE_URL, echo=True)

# Crear las tablas en la base de datos
print("Creando las tablas en la base de datos...")
Base.metadata.create_all(bind=engine)
print("Tablas creadas exitosamente.")

# Configurar la sesión
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def agregar_usuarios_ejemplo():
    # Crear instancias de las clases
    distribuidor1 = MantenimientoDistribuidores(
        distribuidor="Distribuidor1",
        sap_code="SAP123",
        aval="Aval1",
        rol_unico="Rol1"
    )

    aval1 = Avales(
        tipo_id="Tipo1",
        identificador="Identificador1",
        razon_social="RazonSocial1",
        domicilio="Direccion1",
        pais="Pais1"
    )

    marca1 = Marcas(
        Nombre_Marca="Marca1"
    )

    producto1 = Producto(
        Producto="Producto1"
    )

    participacion1 = Participacion(
        Participacion="Participacion1"
    )

    socio1 = Socio(
        Nombre_Socio="Socio1"
    )

    comentario1 = Comentarios(
        Comentario_Positivo="Positivo1",
        Comentario_Negativos="Negativo1",
        Comentario_otros="Otros1"
    )

    # Agregar a la sesión y hacer commit
    session = Session()
    session.add(distribuidor1)
    session.commit()

# Llamar a la función
agregar_usuarios_ejemplo()
