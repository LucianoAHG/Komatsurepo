import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import './App2.css';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      tipoid: '',
      identificador: '',
      razonsocial: '',
      domicilio: '',
      pais: ''
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (id, field, value) => {
    setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleAddToTable = () => {
    const formData = data[0];
    if (formData.tipoid && formData.identificador && formData.razonsocial && formData.domicilio && formData.pais) {
      setTableData((prevTableData) => [...prevTableData, { ...formData }]);
      setData([
        {
          id: data[0].id + 1,
          tipoid: '',
          identificador: '',
          razonsocial: '',
          domicilio: '',
          pais: ''
        }
      ]);
    }
  };

  const handleRemoveFromTable = () => {
    if (selectedItem) {
      setTableData((prevTableData) => {
        const updatedData = prevTableData.filter((item) => item.id !== selectedItem.id);
        return updatedData;
      });
      setSelectedItem(null);
    }
  };

  const fetchDistribuidores = async () => {
    try {
      const response = await fetch('URL_DEL_ENDPOINT_PARA_CONSULTAR_DISTRIBUIDORES_Y_AVALES');
      const result = await response.json();
      setTableData(result.data); // Ajusta según la estructura de tu respuesta del servidor

      // Agregar lógica para marcar los distribuidores con aval en tu data de distribuidores
      const updatedData = data.map((distribuidor) => {
        const tieneAval = result.data.some((aval) => aval.idDistribuidor === distribuidor.id);
        return { ...distribuidor, tieneAval };
      });
      setData(updatedData);
    } catch (error) {
      console.error('Error al obtener datos de distribuidores y avales', error);
    }
  };

  useEffect(() => {
    fetchDistribuidores();
  }, []);

  const fields = [
    { field: 'tipoid', headerName: 'Tipo ID', width: 300 },
    { field: 'identificador', headerName: 'Identificador', width: 300 },
    { field: 'razonsocial', headerName: 'Razon Social', width: 300 },
    { field: 'domicilio', headerName: 'Domicilio', width: 300 },
    { field: 'pais', headerName: 'Pais', width: 300 },
    { field: 'tieneAval', headerName: 'Tiene Aval', width: 150 } // Agregar columna para mostrar si tiene aval
  ];

  const opcionesTipoID = ['Opción 1', 'Opción 2', 'Opción 3'];

  const columns = fields.map((field) => ({
    field: field.field,
    headerName: field.headerName,
    editable: true,
    width: field.width || 150,
    renderCell: (params) => (
      <div>
        {field.field === 'tipoid' ? (
          <Form.Select
            value={params.row[field.field]} // Use params.row[field.field] to get the value from the row data
            onChange={(e) => handleInputChange(params.id, field.field, e.target.value)}
            style={{ fontSize: '0.8rem' }}
          >
            {opcionesTipoID.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </Form.Select>
        ) : (
          <Form.Control
            type="text"
            value={params.field === 'tieneAval' ? (params.row[field.field] ? 'Sí' : 'No') : params.value}
            onChange={(e) => handleInputChange(params.id, field.field, e.target.value)}
            style={{ fontSize: '0.8rem' }}
          />
        )}
      </div>
    )
  }));

  return (
    <>
      <Col md={12} className="form-container form-container-left">
        {data.map((item) => (
          <Row key={item.id} className="mb-3">
            {fields.map((field) => (
              <Col key={field.field} md={4}>
                <Form.Group controlId={`${field.field}-${item.id}`}>
                  <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{field.headerName}</Form.Label>
                  {field.field === 'tipoid' ? (
                    <Form.Select
                      value={item[field.field]}
                      onChange={(e) => handleInputChange(item.id, field.field, e.target.value)}
                      style={{ fontSize: '0.8rem' }}
                    >
                      <option value="">Selecciona un tipo</option>
                      {opcionesTipoID.map((opcion, index) => (
                        <option key={index} value={opcion}>
                          {opcion}
                        </option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type="text"
                      value={item[field.field]}
                      onChange={(e) => handleInputChange(item.id, field.field, e.target.value)}
                      style={{ fontSize: '0.8rem' }}
                    />
                  )}
                </Form.Group>
              </Col>
            ))}
          </Row>
        ))}
      </Col>

      <Row className="d-flex justify-content-end pe-3">
        <Col className="d-flex button-container justify-content-start">
          <Button variant="primary" className="mt-3 me-3" onClick={handleAddToTable} style={{ backgroundColor: ' $blue', border: 'none' }}>
            Agregar
          </Button>
          <Button variant="primary" className="mt-3" onClick={handleRemoveFromTable} style={{ backgroundColor: ' $blue', border: 'none' }}>
            Eliminar
          </Button>
        </Col>
      </Row>

      <Col md={12} className="form-container form-container-right" style={{ marginTop: '40px' }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={5}
          style={{ height: '300px', width: '100%' }}
          autoHeight
          disableSelectionOnClick
          onSelectionModelChange={(ids) => {
            const selectedId = ids.length > 0 ? ids[0] : null;
            setSelectedItem(tableData.find((item) => item.id === selectedId) || null);
          }}
        />
      </Col>
    </>
  );
};

export default EditableTable;
