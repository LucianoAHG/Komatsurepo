import React from 'react';
import { useTable } from 'react-table';
import useRows from './rows';
import useColumns from './columnas';
import { useTheme } from '@mui/material/styles';

function TableCustom() {
  const theme = useTheme();
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = table;
  return (
    <>
      {/* Añadimos las propiedades a nuestra tabla nativa */}
      <table {...getTableProps()} style={{ width: '100%', height: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {
            // Recorremos las columnas que previamente definimos
            headerGroups.map((headerGroup) => (
              // Añadimos las propiedades al conjunto de columnas
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {
                  // Recorremos cada columna del conjunto para acceder a su información
                  headerGroup.headers.map((column) => (
                    // Añadimos las propiedades a cada celda de la cabecera
                    <th
                      key={column.id}
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: `1px solid ${theme.palette.grey[200]}`
                      }}
                    >
                      {
                        // Pintamos el título de nuestra columna (propiedad "Header")
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Añadimos las propiedades al cuerpo de la tabla */}
        <tbody {...getTableBodyProps()}>
          {
            // Recorremos las filas
            rows.map((row, index) => {
              // Llamamos a la función que prepara la fila previo renderizado
              prepareRow(row);
              const rowStyle = {
                backgroundColor: index % 2 === 0 ? 'white' : '#f2f2f2'
              };
              return (
                // Añadimos las propiedades a la fila
                <tr key={row.id} {...row.getRowProps()} style={rowStyle}>
                  {
                    // Recorremos cada celda de la fila
                    row.cells.map((cell) => {
                      // Añadimos las propiedades a cada celda de la fila
                      return (
                        <td
                          key={cell.column.id}
                          {...cell.getCellProps()}
                          style={{ borderBottom: `1px solid ${theme.palette.grey[200]}`, padding: 8 }}
                        >
                          {
                            // Pintamos el contenido de la celda
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}
export default TableCustom;
