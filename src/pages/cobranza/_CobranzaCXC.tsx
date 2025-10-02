import { useFetch } from "src/hooks/useFetch";
import LoadingCircle from "src/components/LoadingCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TableModalWrapper } from "src/components/TableModalWrapper";

import * as React from 'react';
import type { GridColDef } from '@mui/x-data-grid';
// Ya no necesitamos 'formatNumber' aquí si el formateo se movió al Footer
// import { formatNumber } from 'src/utils/FormatNumbers'; 

// Importamos el nuevo componente genérico de footer
import CustomTableFooter from "src/components/CustomTableFooter"; 

// Mantenemos la interfaz TotalesData aquí para tipar la respuesta de la API
interface TotalesData {
  [key: string]: number;
  total_cxc: number;
  total_vence_no: number;
  total_vence_no_p: number;
  total_t_coord_p: number;
  total_vence: number;
  total_vence_p: number;
  total_t_vence_p: number;
  total_v_0: number;
  total_v_1_5: number;
  total_v_6_10: number;
  total_v_11_15: number;
  total_v_16_21: number;
  total_v_21: number;
}

export type { TotalesData };

type RowType = {
  id: number;
  vendedor: string;
  cxc: number;
  vence_no: number;
  vence_no_p: number;
  t_coord_p: number;
  vence: number;
  vence_p: number;
  t_vence_p: number;
  v_0: number;
  v_1_5: number;
  v_6_10: number;
  v_11_15: number;
  v_16_21: number;
  v_21: number;
}[];

type SingleRowType = RowType[number];

// Eliminamos CustomFooterProps y CustomFooterCobranza ya que ahora son genéricos en CustomTableFooter.tsx

interface ApiResponse {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: SingleRowType[]; 
  pageSizeOptions: number[];
  totales: TotalesData;
}

const RowDetailContent: React.FC<{ rowData: SingleRowType }> = ({ rowData }) => {
  return (
    <Box>
      {Object.entries(rowData).map(([key, value]) => {
        if (key === 'id') return null; 

        return (
          <Typography key={key} variant="body2" sx={{ my: 0.5 }}>
            <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                {key.replace(/_/g, ' ')}:
            </span>{' '}
            {String(value)}
          </Typography>
        );
      })}
    </Box>
  );
};

const ComponenteCobranzaCXC = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COBRANZA_COBRANZA_CXC;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <LoadingCircle />
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }
  
  if (!data) {
    return null;
  }

  // Ahora usamos el componente genérico CustomTableFooter
  const cobranzaFooter = (
    <CustomTableFooter 
      totales={data.totales} 
      columns={data.columns as GridColDef<any>[]} 
      totalsPrefix="total_" 
    />
  );

  return (
    <>
      <TableModalWrapper<SingleRowType> 
        rows={data.rows as SingleRowType[]}
        columns={data.columns as GridColDef<RowType[number]>[]}
        initialState={{
          pagination: {
            paginationModel:
            { page: 0, pageSize: data.columns.length }
          }
        }}
        pageSizeOptions={data.pageSizeOptions}
        modalTitle={"Cobranza por día"}
        renderModalContent={(rowData) => <RowDetailContent rowData={rowData} />}
        footerSlot={cobranzaFooter} // Usamos el footer genérico aquí
      />
    </>
  )
}

export default ComponenteCobranzaCXC;