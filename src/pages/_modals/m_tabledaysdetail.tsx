import type { GridColDef } from "@mui/x-data-grid";
import CustomTableFooter from "src/components/CustomTableFooter";
import LoadingCircle from "src/components/LoadingCircle";
import Tables from "src/components/Tables";
import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

type RowType = {
  id: number;
  days: string;
  vent: number;
  cobr: number;
  fecha: string[];
}

interface TotalesPedidosData {
  [key: string]: number;
  montoPedidos: number;
}[];
interface TotalesFacturacionData {
  [key: string]: number;
  montoFacturacion: number;
}[];
interface TotalesCobranzaData {
  [key: string]: number;
  montoCobranza: number;
}[];

type TablesEstructurePedidos = {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: {
    id: string;
    n_docPedidos: string;
    clientPedidos: string;
    vendedorPedidos: string;
    montoPedidos: string;
  }[];
  pageSizeOptions: number[];
  totales: TotalesPedidosData;
}
type TablesEstructureFacturacion = {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: {
    id: string;
    n_docFact: string;
    t_docFact: string;
    vendedorFact: string;
    clientFact: string;
    montoFact: string;
  }[];
  pageSizeOptions: number[];
  totales: TotalesFacturacionData;
}
type TablesEstructureCobranza = {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: {
    id: string;
    n_docCobr: string;
    t_reciboCobr: string;
    vendedorCobr: string;
    monedaCobr: string;
    montoCobr: string;
  }[];
  pageSizeOptions: number[];
  totales: TotalesCobranzaData;
}

interface ApiModalResponse {
  pedidos: TablesEstructurePedidos;
  facturacion: TablesEstructureFacturacion;
  cobranza: TablesEstructureCobranza;
}

export const TableDaysDetails: React.FC<{ rowData: RowType }> = ({ rowData }) => {
  // API Endpoint
  const url = import.meta.env.PUBLIC_HOST_API+
              import.meta.env.PUBLIC_COORD_DAYS_DETAIL_DATE+
              getLocalStorageData('authToken_vendedor')+"/"+
              `${rowData.fecha[0]}-${rowData.fecha[1]}-${rowData.fecha[2]}`;
  const { data, isLoading, error } = useFetch<ApiModalResponse>(url);

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

  const pedidosFooter = (
    <CustomTableFooter
      totales={data.pedidos.totales} 
      columns={data.pedidos.columns as GridColDef<any>[]} 
      totalsPrefix="total_" 
    />
  );
  const facturacionFooter = (
    <CustomTableFooter
      totales={data.facturacion.totales} 
      columns={data.facturacion.columns as GridColDef<any>[]} 
      totalsPrefix="total_" 
    />
  );
  const cobranzaFooter = (
    <CustomTableFooter
      totales={data.cobranza.totales} 
      columns={data.cobranza.columns as GridColDef<any>[]} 
      totalsPrefix="total_" 
    />
  );

  // Estilos
  const modals_container = "flex flex-row w-full h-auto";
  const modal_titles = "font-rFont text-[1rem] text-[var(--colors-06)]";
  const modal_span = "font-bold text-[var(--colors-03)]";
  const section01_div = "flex flex-row justify-between items-start w-full h-auto space-y-2";
  const section02_div = "flex flex-row justify-start items-start w-full h-auto space-x-2";
  const section02_subDivs = "flex flex-col justify-center items-start w-1/3 space-y-2"

  // Fecha
  const daySplit = rowData.days.split(' - ');
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const [year, month, day] = rowData.fecha;
  const mesNombre = meses[parseInt(month, 10) - 1];
  const fechaFormateada = `${day} de ${mesNombre} del ${year}`;

  return (
    <>
      <div className="flex flex-col w-full h-auto space-y-2">
        {/* Header */}
        <div className={modals_container}>
          <div className={section01_div}>
            <p className={modal_titles}>
              <span className={modal_span}>Día: </span>
              {`${daySplit[1]}, ${fechaFormateada}.`}
            </p>
            <p className={modal_titles}>
              <span className={modal_span}>Cant. Ventas: </span>
              {rowData.vent}
            </p>
            <p className={modal_titles}>
              <span className={modal_span}>Cant. Cobranza: </span>
              {rowData.cobr}
            </p>
          </div>
        </div>
        
        {/* Middle */}
        <div className={modals_container}>
          <div className={section02_div}>
            {/* Pedidos */}
            <div className={section02_subDivs}>
              <p className={modal_titles}>
                <span className={modal_span}>Pedidos</span>
              </p>
              <Tables
                rows={data.pedidos.rows}
                columns={data.pedidos.columns}
                initialState={{
                  pagination: {
                    paginationModel:
                    { page: 0, pageSize: 10 }
                  }
                }}
                pageSizeOptions={data.pedidos.pageSizeOptions}
                getRowId={(row) => row.n_docPedidos} 
                footerSlot={pedidosFooter}
              />
            </div>

            {/* Facturación */}
            <div className={section02_subDivs}>
              <p className={modal_titles}>
                <span className={modal_span}>Facturación</span>
              </p>
              <Tables
                rows={data.facturacion.rows}
                columns={data.facturacion.columns}
                initialState={{
                  pagination: {
                    paginationModel:
                    { page: 0, pageSize: 10 }
                  }
                }}
                pageSizeOptions={data.facturacion.pageSizeOptions}
                getRowId={(row) => row.n_docFact} 
                footerSlot={facturacionFooter}
                
              />
            </div>

            {/* Cobranza */}
            <div className={section02_subDivs}>
              <p className={modal_titles}>
                <span className={modal_span}>Cobranza</span>
              </p>
              <Tables
                rows={data.cobranza.rows}
                columns={data.cobranza.columns}
                initialState={{
                  pagination: {
                    paginationModel:
                    { page: 0, pageSize: 10 }
                  }
                }}
                pageSizeOptions={data.cobranza.pageSizeOptions}
                getRowId={(row) => row.n_docCobr}
                footerSlot={cobranzaFooter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}