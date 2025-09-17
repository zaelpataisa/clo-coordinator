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
        cxc: string;
        vence_no: string;
        vence_no_p: string;
        t_coord_p: string;
        vence: string;
        vence_p: string;
        t_vence_p: string;
        v_0: string;
        v_1_5: string;
        v_6_10: string;
        v_11_15: string;
        v_16_21: string;
        v_21: string;
    }[];
    pageSizeOptions: number[];
}

const Componente_cobranza_cxc = () => {
  // const DATA_API = import.meta.env.PUBLIC_COORD_GRAPHIC_VENTA;

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
    { field: 'vendedor', headerName: 'Vendedores', flex: 1, minWidth: 100 },
    { field: 'cxc', headerName: 'Cobranza', flex: 1, minWidth: 100 },
    { field: 'vence_no', headerName: 'Por vencer', flex: 1, minWidth: 100 },
    { field: 'vence_no_p', headerName: '%PV', flex: 1, minWidth: 100 },
    { field: 't_coord_p', headerName: '%TPVC', flex: 1, minWidth: 100 },
    { field: 'vence', headerName: 'Vencida', flex: 1, minWidth: 100 },
    { field: 'vence_p', headerName: '%V', flex: 1, minWidth: 100 },
    { field: 't_vence_p', headerName: '%TVC', flex: 1, minWidth: 100 },
    { field: 'v_0', headerName: '0 días', flex: 1, minWidth: 100 },
    { field: 'v_1_5', headerName: '1 a 5 días', flex: 1, minWidth: 100 },
    { field: 'v_6_10', headerName: '6 a 10 días', flex: 1, minWidth: 100 },
    { field: 'v_11_15', headerName: '11 a 15 días', flex: 1, minWidth: 100 },
    { field: 'v_16_21', headerName: '16 a 21 días', flex: 1, minWidth: 100 },
    { field: 'v_21', headerName: '+21 días', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, vendedor: 'Adamo', cxc: '53.948,65', vence_no: '46.051,35', vence_no_p: '46.05%', t_coord_p: '10%', vence: '17.539,27', vence_p: '17.54%', t_vence_p: '2%', v_0: '4.500,00', v_1_5: '5.000,00', v_6_10: '4.500,00', v_11_15: '3.000,00', v_16_21: '2.500,00', v_21: '2.539,27' },
    { id: 2, vendedor: 'Mario', cxc: '62.100,20', vence_no: '50.250,15', vence_no_p: '50.25%', t_coord_p: '12%', vence: '11.850,05', vence_p: '11.85%', t_vence_p: '1.5%', v_0: '2.000,00', v_1_5: '3.000,00', v_6_10: '2.500,00', v_11_15: '2.000,00', v_16_21: '1.850,05', v_21: '2.500,00' },
    { id: 3, vendedor: 'Elias', cxc: '45.000,00', vence_no: '35.500,00', vence_no_p: '35.50%', t_coord_p: '8%', vence: '9.500,00', vence_p: '9.50%', t_vence_p: '1.2%', v_0: '1.500,00', v_1_5: '2.500,00', v_6_10: '2.000,00', v_11_15: '1.500,00', v_16_21: '1.500,00', v_21: '2.000,00' },
    { id: 4, vendedor: 'Jesus', cxc: '78.500,50', vence_no: '60.300,25', vence_no_p: '60.30%', t_coord_p: '15%', vence: '18.200,25', vence_p: '18.20%', t_vence_p: '3%', v_0: '5.000,00', v_1_5: '6.000,00', v_6_10: '5.000,00', v_11_15: '3.200,25', v_16_21: '2.000,00', v_21: '2.000,00' },
    { id: 5, vendedor: 'Maria', cxc: '90.250,75', vence_no: '75.100,50', vence_no_p: '75.10%', t_coord_p: '18%', vence: '15.150,25', vence_p: '15.15%', t_vence_p: '2.5%', v_0: '3.500,00', v_1_5: '4.500,00', v_6_10: '4.000,00', v_11_15: '3.000,00', v_16_21: '2.000,25', v_21: '1.650,00' },
    { id: 6, vendedor: 'Pedro', cxc: '34.800,00', vence_no: '28.700,00', vence_no_p: '28.70%', t_coord_p: '7%', vence: '6.100,00', vence_p: '6.10%', t_vence_p: '0.8%', v_0: '1.000,00', v_1_5: '2.000,00', v_6_10: '1.500,00', v_11_15: '1.000,00', v_16_21: '800,00', v_21: '800,00' },
    { id: 7, vendedor: 'Ana', cxc: '12.500,90', vence_no: '10.000,00', vence_no_p: '10.00%', t_coord_p: '2%', vence: '2.500,90', vence_p: '2.50%', t_vence_p: '0.3%', v_0: '500,00', v_1_5: '1.000,00', v_6_10: '500,00', v_11_15: '400,00', v_16_21: '300,90', v_21: '300,00' },
    { id: 8, vendedor: 'Luis', cxc: '55.300,10', vence_no: '48.950,00', vence_no_p: '48.95%', t_coord_p: '11%', vence: '6.350,10', vence_p: '6.35%', t_vence_p: '0.9%', v_0: '1.000,00', v_1_5: '2.000,00', v_6_10: '1.500,00', v_11_15: '1.200,10', v_16_21: '850,00', v_21: '800,00' },
    { id: 9, vendedor: 'Carla', cxc: '88.000,00', vence_no: '72.500,00', vence_no_p: '72.50%', t_coord_p: '16%', vence: '15.500,00', vence_p: '15.50%', t_vence_p: '2.8%', v_0: '3.000,00', v_1_5: '5.000,00', v_6_10: '4.000,00', v_11_15: '3.000,00', v_16_21: '2.500,00', v_21: '1.000,00' },
    { id: 10, vendedor: 'Carlos', cxc: '102.500,45', vence_no: '90.100,30', vence_no_p: '90.10%', t_coord_p: '20%', vence: '12.400,15', vence_p: '12.40%', t_vence_p: '2.2%', v_0: '2.500,00', v_1_5: '4.000,00', v_6_10: '3.500,00', v_11_15: '2.000,15', v_16_21: '1.500,00', v_21: '1.400,00' }
  ];
  const pageSizeOptions = [20];

  return (
    <>
      <Tables
          rows={rows}
          columns={columns}
          initialState={{
              pagination: {
                  paginationModel:
                  { page: 0, pageSize: 20 }
              }
          }}
          pageSizeOptions={pageSizeOptions}
      />
    </>
  )
}

export default Componente_cobranza_cxc;