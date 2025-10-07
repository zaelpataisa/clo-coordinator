import { useFetch } from "src/hooks/useFetch";
import LoadingCircle from "src/components/LoadingCircle";
import { TableModalWrapper } from "src/components/TableModalWrapper";
import type { GridColDef } from '@mui/x-data-grid';
import CustomTableFooter from "src/components/CustomTableFooter"; 
import { TableDaysDetails } from "../_modals/m_tabledaysdetail";

interface TotalesData {
  [key: string]: number;
  total_fact: number;
  total_cobr: number;
}

type RowType = {
  id: number;
  days: string;
  vent: number;
  cobr: number;
  fecha: string[];
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

const ComponenteTableDaysDetail = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_DAYS_DETAIL;
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
        modalTitle={"Ventas vs Cobranza"}
        renderModalContent={(rowData) => <TableDaysDetails rowData={rowData} />}
        footerSlot={cobranzaFooter} 
      />
    </>
  )
}

export default ComponenteTableDaysDetail;