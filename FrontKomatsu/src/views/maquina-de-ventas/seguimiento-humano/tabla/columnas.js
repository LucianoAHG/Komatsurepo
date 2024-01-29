import { useMemo } from 'react';

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Marca',
        accessor: 'marca'
      },
      {
        Header: 'Modelo',
        accessor: 'modelo'
      },
      {
        Header: 'Segmento',
        accessor: 'segmento'
      },
      {
        Header: 'Año',
        accessor: 'anio'
      }
    ],
    []
  );

  return columns;
}
