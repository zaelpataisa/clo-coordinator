import { useFetch } from "src/hooks/useFetch";
import { Tables } from "src/components/Tables"
import LoadingCircle from "src/components/LoadingCircle";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TableModalWrapper } from "src/components/TableModalWrapper";
import type { GridColDef } from "@mui/x-data-grid";
import CustomTableFooter from "src/components/CustomTableFooter";

interface TotalesData {
  [key: string]: number;
  fact_meta: number;
  fact: number;
  fact_rest: number;
  meta_percent: number;
  cobr: number;
}

type RowType = {
  id: number;
  asesor: string;
  fact_meta: number;
  fact: number;
  fact_rest: number;
  fact_percent: number;
  cobr_rest: number;
}[];

type SingleRowType = RowType[number];

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

const ComponenteTableAsesor = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_TABLE_ASESOR;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <LoadingCircle />
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  if(!data){
    return <p>Error al obtener los datos: {error}</p>;
  }

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
            { page: 0, pageSize: data.rows.length }
          }
        }}
        pageSizeOptions={data.pageSizeOptions}
        modalTitle={"Detalles por vendedor"}
        renderModalContent={(rowData) => <RowDetailContent rowData={rowData} />}
        footerSlot={cobranzaFooter} 
      />
    </>
  )
}

export default ComponenteTableAsesor;