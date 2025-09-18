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
    vendedor: string;
    cant_cobr: string;
    mont_cobr: string;
    cant_pdds: string;
    mont_pdds: string;
    cant_fact: string;
    mont_fact: string;
  }[];
  pageSizeOptions: number[];
}

const Componente_table_vendedores = () => {
  // const DATA_API = import.meta.env.PUBLIC_VENDS_TABLE_VENDEDORES;

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
    { field: 'vendedor', headerName: 'Vendedor', flex: 1, minWidth: 100 },
    { field: 'cant_cobr', headerName: 'Cant. Cobranzas', flex: 1, minWidth: 100 },
    { field: 'mont_cobr', headerName: 'Monto Cobranzas', flex: 1, minWidth: 100 },
    { field: 'cant_pdds', headerName: 'Cant. Pedidos', flex: 1, minWidth: 100 },
    { field: 'mont_pdds', headerName: 'Monto Pedidos', flex: 1, minWidth: 100 },
    { field: 'cant_fact', headerName: 'Cant. Facturas', flex: 1, minWidth: 100 },
    { field: 'mont_fact', headerName: 'Monto Facturas', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, vendedor: '10 - Adamos', cant_cobr: '32', mont_cobr: '32.888$', cant_pdds: '34', mont_pdds: '34.888$', cant_fact: '12', mont_fact: '32.88$' },
    { id: 2, vendedor: '11 - Maria', cant_cobr: '25', mont_cobr: '25.500$', cant_pdds: '28', mont_pdds: '29.100$', cant_fact: '10', mont_fact: '25.40$' },
    { id: 3, vendedor: '12 - Elias', cant_cobr: '40', mont_cobr: '41.200$', cant_pdds: '42', mont_pdds: '45.000$', cant_fact: '15', mont_fact: '41.15$' },
    { id: 4, vendedor: '13 - Juan', cant_cobr: '18', mont_cobr: '18.900$', cant_pdds: '20', mont_pdds: '21.000$', cant_fact: '7', mont_fact: '18.85$' },
    { id: 5, vendedor: '14 - Sofia', cant_cobr: '30', mont_cobr: '31.500$', cant_pdds: '33', mont_pdds: '34.500$', cant_fact: '11', mont_fact: '31.45$' },
    { id: 6, vendedor: '15 - Carlos', cant_cobr: '22', mont_cobr: '23.000$', cant_pdds: '24', mont_pdds: '25.100$', cant_fact: '9', mont_fact: '22.95$' },
    { id: 7, vendedor: '16 - Ana', cant_cobr: '35', mont_cobr: '36.700$', cant_pdds: '38', mont_pdds: '39.800$', cant_fact: '14', mont_fact: '36.65$' },
    { id: 8, vendedor: '17 - Jorge', cant_cobr: '28', mont_cobr: '29.300$', cant_pdds: '31', mont_pdds: '32.400$', cant_fact: '10', mont_fact: '29.25$' },
    { id: 9, vendedor: '18 - Laura', cant_cobr: '45', mont_cobr: '46.100$', cant_pdds: '48', mont_pdds: '49.200$', cant_fact: '17', mont_fact: '46.05$' },
    { id: 10, vendedor: '19 - Andres', cant_cobr: '20', mont_cobr: '21.000$', cant_pdds: '22', mont_pdds: '23.100$', cant_fact: '8', mont_fact: '20.95$' },
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

export default Componente_table_vendedores;