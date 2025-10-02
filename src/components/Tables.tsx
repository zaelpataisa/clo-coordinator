import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridPaginationModel, GridRowParams } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { esES } from '@mui/x-data-grid/locales';



interface DataTableProps<T extends object> {
  rows: T[];
  columns: GridColDef<T>[];
  initialState?: {
    pagination?: {
      paginationModel?: GridPaginationModel;
    };
  };
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  getRowId?: (row: T) => string | number;
  onRowClick?: (params: GridRowParams<T>) => void; 
  footerSlot?: React.ReactNode;
}

const isPurelyNumeric = (value: any): boolean => {
    if (value === null || value === undefined) return false;
    const strValue = String(value);
    return !(/[a-zA-Z]/).test(strValue);
}

export const Tables = <T extends object>({
  rows,
  columns: originalColumns,
  initialState,
  pageSizeOptions,
  getRowId,
  onRowClick,
  footerSlot,
}: DataTableProps<T>) => {
  
  const [scrollContainerElement, setScrollContainerElement] = React.useState<HTMLDivElement | null>(null);

  const columns = originalColumns.map(col => {
    if (rows.length > 0) {
        const value = (rows[0] as any)[col.field];
        if (isPurelyNumeric(value)) {
          return {
            ...col,
            align: 'center', 
            headerAlign: 'center',
          };
        }
    }
    

    return col;
  });

  React.useEffect(() => {
    const element = document.querySelector('.MuiDataGrid-virtualScroller');
    if (element && element !== scrollContainerElement) {
        setScrollContainerElement(element as HTMLDivElement);
    }
  }, [rows, scrollContainerElement]);

  const footerSlots = footerSlot 
    ? { footer: () => footerSlot }
    : {}; 

  const disableRowSelection = onRowClick === undefined;

  return (
    <Paper sx={{ height: 400, width: '100%', display: 'flex' }}>
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns as GridColDef<T>[]}
        initialState={initialState}
        pageSizeOptions={pageSizeOptions}
        disableRowSelectionOnClick={disableRowSelection}
        getRowId={getRowId}
        slots={footerSlots} 
        onRowClick={onRowClick}
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
          cursor: onRowClick ? 'pointer' : 'default',
        }}
      />
    </Paper>
  );
};

export default Tables;