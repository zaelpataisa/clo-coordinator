import { useFetch } from "src/hooks/useFetch";
import LoadingCircle from "src/components/LoadingCircle";
import { TableModalWrapper } from "src/components/TableModalWrapper";
import type { GridColDef } from '@mui/x-data-grid';
import CustomTableFooter from "src/components/CustomTableFooter"; 
import { CobranzaCXCModal } from "../_modals/m_cobranzaCXC";

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
  // @ts-expect-error
  total_ranking: [string, number][];
}

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
        modalTitle={"Cobranza por día"}
        renderModalContent={(rowData) => <CobranzaCXCModal rowData={rowData} totalRanking={data.totales.total_ranking} />}
        footerSlot={cobranzaFooter} 
      />
    </>
  )
}

export default ComponenteCobranzaCXC;