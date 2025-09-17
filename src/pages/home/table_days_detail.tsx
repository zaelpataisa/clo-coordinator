import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

import { Tables } from "src/components/Tables"

interface ApiResponse {
    columns: {
        field: string;
        headerName: string;
        flex: number;
    }[];
    rows: {
        id: number;
        asesor: string;
        fact_meta: string;
        fact: string;
        fact_rest: string;
        fact_percent: string;
        meta_cobr: string;
        cobr: string;
        cobr_rest: string;
        cobr_percent: string;
    }[];
    pageSizeOptions: number[];
}

const Componente_table_days_detail = () => {
  // const DATA_API = import.meta.env.PUBLIC_COORD_GRAPHIC_VENTA;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //       <CircularProgress />
  //     );
  //   ;
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const columns = [
    { field: 'days', headerName: 'Día', flex: 1, minWidth: 100 },
    { field: 'fact', headerName: 'Facturado', flex: 1, minWidth: 100 },
    { field: 'cobr', headerName: 'Cobrado', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, days: '01 - Miércoles', fact: '130.697', cobr: '121.365' },
    { id: 2, days: '02 - Jueves', fact: '115.823', cobr: '54.912' },
    { id: 3, days: '03 - Viernes', fact: '24.706', cobr: '110.634' },
    { id: 4, days: '04 - Sábado', fact: '65.234', cobr: '89.702' },
    { id: 5, days: '05 - Domingo', fact: '101.450', cobr: '141.650' },
    { id: 6, days: '06 - Lunes', fact: '45.189', cobr: '76.021' },
    { id: 7, days: '07 - Martes', fact: '129.567', cobr: '33.845' },
    { id: 8, days: '08 - Miércoles', fact: '88.342', cobr: '137.910' },
    { id: 9, days: '09 - Jueves', fact: '147.990', cobr: '98.765' },
    { id: 10, days: '10 - Viernes', fact: '55.213', cobr: '12.430' },
    { id: 11, days: '11 - Sábado', fact: '90.546', cobr: '67.890' },
    { id: 12, days: '12 - Domingo', fact: '12.087', cobr: '145.678' },
    { id: 13, days: '13 - Lunes', fact: '78.345', cobr: '21.098' },
    { id: 14, days: '14 - Martes', fact: '119.654', cobr: '102.345' },
    { id: 15, days: '15 - Miércoles', fact: '43.908', cobr: '78.543' },
    { id: 16, days: '16 - Jueves', fact: '132.876', cobr: '19.234' },
    { id: 17, days: '17 - Viernes', fact: '68.543', cobr: '112.987' },
    { id: 18, days: '18 - Sábado', fact: '14.098', cobr: '45.765' },
    { id: 19, days: '19 - Domingo', fact: '99.876', cobr: '130.456' },
    { id: 20, days: '20 - Lunes', fact: '27.456', cobr: '56.789' },
    { id: 21, days: '21 - Martes', fact: '105.789', cobr: '88.901' },
    { id: 22, days: '22 - Miércoles', fact: '76.450', cobr: '149.000' },
    { id: 23, days: '23 - Jueves', fact: '138.900', cobr: '25.678' },
    { id: 24, days: '24 - Viernes', fact: '32.100', cobr: '123.456' },
    { id: 25, days: '25 - Sábado', fact: '111.234', cobr: '90.123' },
    { id: 26, days: '26 - Domingo', fact: '59.876', cobr: '10.567' },
    { id: 27, days: '27 - Lunes', fact: '14.345', cobr: '140.987' },
    { id: 28, days: '28 - Martes', fact: '85.678', cobr: '34.567' },
    { id: 29, days: '29 - Miércoles', fact: '127.890', cobr: '115.678' },
    { id: 30, days: '30 - Jueves', fact: '49.012', cobr: '79.012' },
  ];
const pageSizeOptions = [31];
  
  return (
    <>
      <Tables
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel:
            { page: 0, pageSize: 31 }
          }
        }}
        pageSizeOptions={pageSizeOptions}
      />
    </>
  )
}

export default Componente_table_days_detail;