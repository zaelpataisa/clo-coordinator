import * as React from 'react';
import type { GridColDef, GridPaginationModel, GridRowParams } from '@mui/x-data-grid'; 
import Tables from 'src/components/Tables';
import { RowDetailModal } from './RowDetailModal';

type ModalContentRenderer<T extends object> = (rowData: T) => React.ReactNode;

interface TableModalWrapperProps<T extends object> {
  rows: T[];
  columns: GridColDef<T>[];
  totales?: Record<string, any>; 
  initialState?: {
    pagination?: {
      paginationModel?: GridPaginationModel;
    };
  };
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  getRowId?: (row: T) => string | number;

  modalTitle: string;
  renderModalContent: ModalContentRenderer<T>; 

  footerSlot?: React.ReactNode; 
}

export const TableModalWrapper = <T extends object>({ 
    modalTitle,
    renderModalContent,

    footerSlot,

    ...props 
}: TableModalWrapperProps<T>) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRowData, setSelectedRowData] = React.useState<T | null>(null);
  
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedRowData(null); 
  };
  const handleRowClick = (params: GridRowParams<T>) => {
    setSelectedRowData(params.row);
    setIsModalOpen(true);
  };

  const modalContent = selectedRowData ? (
    renderModalContent(selectedRowData)
  ) : null;

  return (
    <>
      <Tables 
        {...props} 
        onRowClick={handleRowClick}
        footerSlot={footerSlot} 
      />
      <RowDetailModal
        open={isModalOpen}
        onClose={handleClose}
        title={modalTitle}
      >
        {modalContent}
      </RowDetailModal>
    </>
  );
};