import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { esES } from '@mui/x-data-grid/locales';
import type { TotalesData } from 'src/test/TestComponent';

const CustomFooter = ({ totales, columns, scrollContainerElement }: { 
    totales: TotalesData; 
    columns: GridColDef<any>[]; 
    scrollContainerElement: HTMLDivElement | null; 
}) => {
  const dynamicTotalsOrder = Object.keys(totales) as (keyof TotalesData)[];
  const footerRef = React.useRef<HTMLDivElement>(null); 
  
  const formatTotalValue = (key: keyof TotalesData, value: number): string => {
    if (key.includes('_p')) {
      return `${value.toFixed(2)}%`; 
    }
    return value.toFixed(2); 
  };

  React.useEffect(() => {
    const dataGridScrollContainer = scrollContainerElement;
    const footerContainer = footerRef.current;

    if (dataGridScrollContainer && footerContainer) {
      const handleScroll = () => {
        footerContainer.scrollLeft = dataGridScrollContainer.scrollLeft;
      };
      dataGridScrollContainer.addEventListener('scroll', handleScroll);
      footerContainer.scrollLeft = dataGridScrollContainer.scrollLeft;
      
      return () => {
        dataGridScrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainerElement]); 

  const finalGridTemplate = columns
    .map(col => {
        const minW = col.minWidth || 100; 
        const flexW = col.flex ? `${col.flex}fr` : 1;

        return `minmax(${minW}px, ${flexW})`;
    })
    .join(' ');

  const totalsMap = new Map<string, { header: string, value: string }>();
  dynamicTotalsOrder.forEach(key => {
      const fieldNameInColumns = key.replace('total_', ''); 
      const column = columns.find(c => c.field === fieldNameInColumns);
      
      if (column && column.headerName) {
          totalsMap.set(fieldNameInColumns, {
              header: column.headerName,
              value: formatTotalValue(key, totales[key])
          });
      }
  });
  
  const columnFields = columns.map(col => col.field);

  return (
    <Box
      ref={footerRef}
      sx={{
        display: 'grid',
        gridTemplateColumns: finalGridTemplate, 
        height: 52, 
        backgroundColor: 'var(--colors-07)',
        borderTop: '1px solid var(--colors-04)',
        fontWeight: 'bold',
        alignItems: 'center',
        overflowX: 'hidden', 
        overflowY: 'hidden',
        width: '100%', 
      }}
    >
        <Box sx={{ 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            paddingLeft: '14px', 
            justifyContent: 'flex-start',
        }}>
        <Typography variant="subtitle1" className='text-[var(--colors-03)]' sx={{ fontWeight: 'bold' }}>
            TOTALES
          </Typography>
        </Box>

        {columnFields.slice(1).map(field => { 
          const total = totalsMap.get(field);
          
          if (total) {
            return (
              <Box 
                key={field} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: '4px', 
                  paddingLeft: '4px',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {total.value}
                </Typography>
              </Box>
            );
          }
          
          return <Box key={field} />;
        })}
    </Box>
  );
};

interface DataTableProps<T extends object> {
  rows: T[];
  columns: GridColDef<T>[];
  totales?: TotalesData;
  initialState?: {
    pagination?: {
      paginationModel?: GridPaginationModel;
    };
  };
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  getRowId?: (row: T) => string | number;
}

export const Tables = <T extends object>({
  rows,
  columns: originalColumns,
  totales,
  initialState,
  pageSizeOptions,
  getRowId,
}: DataTableProps<T>) => {
  
  const [scrollContainerElement, setScrollContainerElement] = React.useState<HTMLDivElement | null>(null);
  const numericFields = Object.keys(totales || {}).map(key => key.replace('total_', ''));

  const columns = originalColumns.map(col => {
    if (numericFields.includes(col.field)) {
      return {
        ...col,
        align: 'center', 
        headerAlign: 'center',
      };
    }
    return col;
  });

  React.useEffect(() => {
    const element = document.querySelector('.MuiDataGrid-virtualScroller');
    if (element && element !== scrollContainerElement) {
        setScrollContainerElement(element as HTMLDivElement);
    }
  }, [rows, scrollContainerElement]);

  const footerSlots = totales 
    ? { footer: () => <CustomFooter totales={totales} columns={columns as GridColDef<any>[]} scrollContainerElement={scrollContainerElement} /> }
    : {};

  return (
    <Paper sx={{ height: 400, width: '100%', display: 'flex' }}>
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns as GridColDef<T>[]}
        initialState={initialState}
        pageSizeOptions={pageSizeOptions}
        disableRowSelectionOnClick={true}
        getRowId={getRowId}
        slots={footerSlots} 
        sx={{
          background: 'transparent',
          '& .MuiDataGrid-columnHeaders': {
            color: 'var(--colors-03)',
            fontSize: 16,
          },
          '& .MuiDataGrid-cell': {
            borderColor: 'var(--colors-04)',
          },
          height: '100%',
        }}
      />
    </Paper>
  );
};

export default Tables;