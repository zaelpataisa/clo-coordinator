import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface RowDetailModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode; 
  title?: string;
}

export const RowDetailModal: React.FC<RowDetailModalProps> = ({ 
  open, 
  onClose, 
  children, 
  title = "Detalles de la Fila",
}) => {
  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80dvw',
    height: 'auto',
    // maxHeight: '90vh',
    bgcolor: 'var(--colors-07)',
    // border: '2px solid #000',
    boxShadow: 'var(--bs)',
    p: 4,
    overflowY: 'auto',
    borderRadius: '1rem', 
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2, borderBottom: '1px solid var(--colors-03)', pb: 1 }}>
          <div className='font-bold font-rFont text-[var(--colors-03)] text-[1.5rem]'>
            {title}
          </div>
        </Typography>
        <Box id="modal-description" sx={{ mt: 2 }}>
          {children} 
        </Box>
      </Box>
    </Modal>
  );
};