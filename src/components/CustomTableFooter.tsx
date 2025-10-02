import * as React from 'react';
import type { GridColDef } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CustomFooterProps<T extends Record<string, number>> {
  totales: T; 
  columns: GridColDef<any>[]; 
  totalsPrefix?: string;
}

const CustomTableFooter = <T extends Record<string, number>>({ 
    totales, 
    columns, 
    totalsPrefix = 'total_',
}: React.PropsWithChildren<CustomFooterProps<T>>) => {
    
  const [scrollContainerElement, setScrollContainerElement] = React.useState<HTMLDivElement | null>(null);
  const footerRef = React.useRef<HTMLDivElement>(null); 

  React.useEffect(() => {
    const element = document.querySelector('.MuiDataGrid-virtualScroller');
    if (element && element !== scrollContainerElement) {
      setScrollContainerElement(element as HTMLDivElement);
    }
  }, [scrollContainerElement]);
    
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
  
  const dynamicTotalsOrder = Object.keys(totales) as (keyof T)[];
  
  const formatTotalValue = (key: keyof T, value: number): string => {
    if (String(key).includes('_p')) {
      return `${value}%`; 
    }
    return `${value}`; 
  };

  const finalGridTemplate = columns
    .map(col => {
      const minW = col.minWidth || 100; 
      const flexW = col.flex ? `${col.flex}fr` : 1;
      return `minmax(${minW}px, ${flexW})`;
    })
    .join(' ');

  const totalsMap = new Map<string, { header: string, value: string }>();
  
  dynamicTotalsOrder.forEach(key => {
    const keyString = String(key);
    const fieldNameInColumns = keyString.startsWith(totalsPrefix) 
      ? keyString.substring(totalsPrefix.length) 
      : keyString;
      
    const column = columns.find(c => c.field === fieldNameInColumns);
    
    if (column) {
      totalsMap.set(fieldNameInColumns, {
        header: column.headerName || column.field,
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
        // Estilos...
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

export default CustomTableFooter;