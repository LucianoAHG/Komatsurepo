import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function CreditHistoryTable() {
  const creditHistory = [
    { date: "2023-01-01", description: "Pago Puntual", amount: 50000 },
    { date: "2023-02-01", description: "Pago Puntual", amount: 50000 },
    { date: "2023-03-01", description: "Pago Atrasado", amount: 30000 },
    // Agrega más antecedentes según sea necesario
  ];

  return (
    <div>
      <Typography variant="h7" gutterBottom>
        Antecedentes del Credito
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: "white" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Monto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {creditHistory.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.description}</TableCell>
                <TableCell>{record.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CreditHistoryTable;
