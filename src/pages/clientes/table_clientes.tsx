import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import { Tables } from "src/components/Tables"

interface ApiResponse {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: {
    id: number;
    rif: string;
    name: string;
    vend: string;
    cont_esp: string;
    estado: string;
    location: string;
  }[];
  pageSizeOptions: number[];
}

const Componente_table_clientes = () => {
  // const DATA_API = import.meta.env.PUBLIC_CLIENTES_TABLE_CLIENTES;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //      <CircularProgress />
  //   );
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const columns = [
    { field: 'rif', headerName: 'RIF', flex: 1, minWidth: 100 },
    { field: 'name', headerName: 'Nombre', flex: 1, minWidth: 100 },
    { field: 'vend', headerName: 'Vendedor', flex: 1, minWidth: 100 },
    { field: 'cont_esp', headerName: 'Cont. Especial', flex: 1, minWidth: 100 },
    { field: 'estado', headerName: 'Estado', flex: 1, minWidth: 100 },
    { field: 'location', headerName: 'Localización', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, rif: 'J-00000000-1', name: 'Alex Ubago', vend: '10 - Adamos', cont_esp: 'SI', estado: 'Activo', location: 'Zulia - Maracaibo' },
    { id: 2, rif: 'V-10000000-2', name: 'John Smith C.A.', vend: '11 - Maria', cont_esp: 'NO', estado: 'Inactivo', location: 'Carabobo - Valencia' },
    { id: 3, rif: 'G-20000000-3', name: 'Maria Rodriguez', vend: '12 - Elias', cont_esp: 'SI', estado: 'Activo', location: 'Miranda - Caracas' },
    { id: 4, rif: 'J-30000000-4', name: 'Distribuidora Global', vend: '10 - Adamos', cont_esp: 'NO', estado: 'Activo', location: 'Lara - Barquisimeto' },
    { id: 5, rif: 'V-40000000-5', name: 'Servicios Rápido', vend: '11 - Maria', cont_esp: 'SI', estado: 'Inactivo', location: 'Zulia - Cabimas' },
    { id: 6, rif: 'J-50000000-6', name: 'Tecnología Integral', vend: '12 - Elias', cont_esp: 'NO', estado: 'Activo', location: 'Aragua - Maracay' },
    { id: 7, rif: 'V-60000000-7', name: 'Inversiones Luna', vend: '10 - Adamos', cont_esp: 'SI', estado: 'Activo', location: 'Anzoátegui - Barcelona' },
    { id: 8, rif: 'G-70000000-8', name: 'Farmacia Central', vend: '11 - Maria', cont_esp: 'NO', estado: 'Inactivo', location: 'Zulia - Maracaibo' },
    { id: 9, rif: 'J-80000000-9', name: 'Construcciones del Futuro', vend: '12 - Elias', cont_esp: 'SI', estado: 'Activo', location: 'Miranda - Guatire' },
    { id: 10, rif: 'V-90000000-0', name: 'Comercial P&G', vend: '10 - Adamos', cont_esp: 'NO', estado: 'Activo', location: 'Lara - Barquisimeto' },
  ];
  const pageSizeOptions = [5, 10, 25, 50, 100];

  return (
    <>
      <Tables
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel:
            { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={pageSizeOptions}
      />
    </>
  )
}

export default Componente_table_clientes;