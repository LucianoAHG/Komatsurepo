import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";

function Index() {
  // Lista de tipos de documentos
  const documentTypes = ["Contrato", "Factura", "Recibo", "Otro"];

  // Estado para almacenar la lista de documentos
  const [documentList, setDocumentList] = useState([]);
  // Estado para almacenar los tipos de documentos seleccionados
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Método para manejar la carga de documentos
  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Aquí puedes realizar el procesamiento necesario con los archivos
    // Por ahora, simplemente los agregamos a la lista de documentos
    setDocumentList([...documentList, ...files]);
  };

  // Método para manejar la selección de tipos de documentos
  const handleTypeSelection = (event) => {
    const { value } = event.target;
    // Actualizar los tipos de documentos seleccionados
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(value)
        ? prevSelectedTypes.filter((type) => type !== value)
        : [...prevSelectedTypes, value]
    );
  };

  return (
    <MainCard title="Documentos Legales">
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <FormGroup>
            <InputLabel>Tipos de Documentos</InputLabel>
            {documentTypes.map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onChange={handleTypeSelection}
                    value={type}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>
          <Input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            multiple
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span" fullWidth>
              Adjuntar
            </Button>
          </label>
        </Grid>
        <Grid item md={9} xs={12}>
          {documentList.length > 0 ? (
            <List>
              {documentList.map((document, index) => (
                <ListItem key={index}>
                  <ListItemText primary={document.name} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No hay documentos adjuntos.</Typography>
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Index;
