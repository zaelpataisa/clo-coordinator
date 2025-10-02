import { useFetch } from "src/hooks/useFetch";
import LoadingCircle from "src/components/LoadingCircle";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TableModalWrapper } from "src/components/TableModalWrapper";

type RowType = {
  id: number;
  referencia: string;
  cliente: string;
  vendedor: string;
  monto: string;
  emision: string;
  cantidad: number;
  estado: string;
}

interface ApiResponse {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: RowType[];
  pageSizeOptions: number[];
}

const RowDetailContent: React.FC<{ rowData: RowType }> = ({ rowData }) => {
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

const ComponenteTablePedidos = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_PEDIDOS_TABLE_PEDIDOS;
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

  return (
    <>
      <TableModalWrapper<RowType> 
          rows={data.rows}
          columns={data.columns}
          initialState={{
              pagination: {
                  paginationModel:
                  { page: 0, pageSize: 10 }
              }
          }}
          pageSizeOptions={data.pageSizeOptions}
          modalTitle={"Detalle de pedidos por vendedor"}
          renderModalContent={(rowData) => <RowDetailContent rowData={rowData} />}
      />
    </>
  )
}

export default ComponenteTablePedidos;