import * as React from 'react';
import IconSelect from './Icons'; 

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
  if (!open) {
    return null;
  }
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-auto max-h-[90vh] bg-[var(--colors-07)] shadow-xl rounded-xl p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex flex-row justify-between items-center border-b border-[var(--colors-03_50)] p-2 pb-4">
          <h2 id="modal-title" className='font-bold font-rFont text-[var(--colors-03)] text-2xl leading-none'>
            {title}
          </h2>

          <button
            aria-label="close"
            onClick={onClose}
            className="text-[var(--colors-03)] text-[1.5rem] hover:opacity-80 transition duration-150 cursor-pointer"
          >
            <IconSelect iconCode='IoMdClose' />
          </button>
        </div>

        <div id="modal-description" className="py-4">
          {children} 
        </div>
      </div>
    </div>
  );
};