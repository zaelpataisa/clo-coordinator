import { useFetch } from "src/hooks/useFetch";
import LoadingCircle from "src/components/LoadingCircle";
import { TableModalWrapper } from "src/components/TableModalWrapper";
import type { GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ChartPie from "src/components/ChartPie";
import CustomTableFooter from "src/components/CustomTableFooter"; 
import { formatDate, parseEuropeanNumber } from "src/utils/FormattingFunctions";

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

interface RowDetailContentProps {
    rowData: SingleRowType;
    totalRanking: [string, number][];
}

const RowDetailContent: React.FC<RowDetailContentProps> = ({ rowData, totalRanking }) => {
  // Estilos
  const modals_container = "flex flex-row w-full h-auto";
  const section01_div = "flex flex-col justify-start items-start w-1/3 space-y-2";
  const section02_div = "flex flex-col w-1/2 space-y-2";
  const modal_titles = "font-rFont text-[1rem] text-[var(--colors-06)]";
  const modal_span = "font-bold text-[var(--colors-03)]";

  // Data pie
  const data_text = ['Sin Vencer', 'Vencido', '0 días', '1-5 días', '6-10 días', '11-15 días', '16-21 días', '+21 días'];
  const data_values = [rowData.vence_no, rowData.vence, rowData.v_0, rowData.v_1_5, rowData.v_6_10, rowData.v_11_15, rowData.v_16_21, rowData.v_21].map(parseEuropeanNumber);
  const data_colors = [
    'var(--colors-04)',     // Sin vencer
    'var(--colors-05)',     // Vencido
    'var(--colors-05_50)',  // V0
    'var(--colors-05_50)',  // V1-5
    'var(--colors-05_50)',  // V6-10
    'var(--colors-05_50)',  // V11-15
    'var(--colors-05_50)',  // V16-21
    'var(--colors-05_50)'   // V21+
  ];

  // Porcentajes CXC
  const total_sum = data_values.reduce((sum, value) => sum + value, 0);
  const data_values_percent = data_values.map(value => {
      if (total_sum === 0) {
          return 0;
      }
      const raw_percent = (value / total_sum) * 100;
      return Math.round(raw_percent * 100) / 100;
  });

  // Periodo
  const fechaFin = formatDate(new Date());
  const fechaInicio = formatDate(new Date(new Date().setDate(new Date().getDate() - 30)));
  
  // Ranking
  const currentRankItem = totalRanking.find(
      ([vendedor]) => vendedor === rowData.vendedor
  );
  const currentRank = currentRankItem ? currentRankItem[1] : 'N/A';
  const totalRows = totalRanking.length;

  return (
    <>
      <div className="flex flex-col w-full h-auto space-y-2">
        {/* Header */}
        <div className={modals_container}>
          <div className={section01_div}>
            <p className={modal_titles}>
              <span className={modal_span}>Vendedor: </span>
              {rowData.vendedor}
            </p>
            <p className={modal_titles}>
              <span className={modal_span}>Ranking: </span>
              {currentRank} / {totalRows}
            </p>
          </div>
          <div className={section01_div}>
            <p className={modal_titles}>
              <span className={modal_span}>CXC: </span>
              {rowData.cxc} $
            </p>
            <p className={modal_titles}>
              <span className={modal_span}>Coord. %: </span>
              {rowData.t_coord_p} %
            </p>
          </div>
          <div className={section01_div}>
            <p className={modal_titles}>
              <span className={modal_span}>Periodo: </span>
              {fechaInicio} - {fechaFin}
            </p>
          </div>
        </div>

        {/* Middle */}
        <div className={modals_container}>
          <div className={section02_div}>
            <p className={modal_titles}>
              <span className={modal_span}>Cobranza:</span>
            </p>
            <div className="flex h-full w-full px-6">
              <ul className="list-disc w-full space-y-2">
                <li>
                  <span className={modal_span}>Sin Vencer: </span>
                  <span>{rowData.vence_no} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[0]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>Vencido: </span>
                  <span>{rowData.vence} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[1]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>0 días: </span>
                  <span>{rowData.v_0} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[2]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>1-5 días: </span>
                  <span>{rowData.v_1_5} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[3]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>6-10 días: </span>
                  <span>{rowData.v_6_10} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[4]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>11-15 días: </span>
                  <span>{rowData.v_11_15} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[5]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>16-21 días: </span>
                  <span>{rowData.v_16_21} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[6]}%)</span>
                </li>
                <li>
                  <span className={modal_span}>+21 días: </span>
                  <span>{rowData.v_21} $</span>
                  <span className="text-[var(--colors-05)]"> ({data_values_percent[7]}%)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={section02_div}>
            <Box>
              <ChartPie 
                data_text={data_text}
                data_values={data_values}
                data_colors={data_colors}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
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
        renderModalContent={(rowData) => <RowDetailContent rowData={rowData} totalRanking={data.totales.total_ranking} />}
        footerSlot={cobranzaFooter} 
      />
    </>
  )
}

export default ComponenteCobranzaCXC;