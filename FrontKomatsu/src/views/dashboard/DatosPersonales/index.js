import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Grid, Typography, Button, TextField } from "@mui/material";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    // Aquí puedes agregar la lógica para enviar la nueva contraseña al servidor
    console.log("Nueva contraseña:", newPassword);
    // Además, puedes realizar alguna validación antes de enviar la solicitud al servidor
  };

  return (
    <MainCard title="Cambiar Contraseña">
      <Grid container direction="column">
        <Grid item md={12}>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Ingrese su nueva contraseña:
          </Typography>
          <TextField
            type="password"
            label="Nueva Contraseña"
            variant="outlined"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleChangePassword}
            sx={{ width: "100%" }}
          >
            Cambiar Contraseña
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default ChangePassword;

