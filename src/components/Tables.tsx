import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
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
}

export const Tables = <T extends object>({
    rows,
    columns,
    initialState,
    pageSizeOptions,
    getRowId,
}: DataTableProps<T>) => {
  return (
    <Paper sx={{ height: 400, width: '100%', display: 'flex' }}>
        <DataGrid
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            rows={rows}
            columns={columns}
            initialState={initialState}
            pageSizeOptions={pageSizeOptions}
            // autosizeOnMount
            // autosizeOptions={{ includeHeaders: true }}
            disableRowSelectionOnClick={true}
            getRowId={getRowId}
            sx={{
                background: 'transparent',
                '& .MuiDataGrid-columnHeaders': {
                    color: 'var(--colors-03)',
                    fontSize: 16,
                },
                '& .MuiDataGrid-cell': {
                    borderColor: 'var(--colors-04)',
                },
                // width: '100%',
                // flex: 1,
                height: '100%',
                // overflowX: 'auto',
            }}
        />
    </Paper>
  );
};

export default Tables;
