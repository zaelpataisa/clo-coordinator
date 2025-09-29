import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';

interface ChartDataItem {
  id: number;
  label: string;
  value: number;
  color: string;
}

interface DataProps {
  data_text: string[];
  data_values: number[];
  data_colors: string[];
}

const ChartPie = ({ data_text, data_values, data_colors }: DataProps) => {
  const chartData: ChartDataItem[] = data_text.map((text, index) => ({
    id: index, 
    label: text,
    value: data_values[index], 
    color: data_colors[index],
  }));

  const totalGlobal = chartData.reduce((sum: number, item: any) => sum + item.value, 0);

  const formatAsPercentage = (params: any) => {
    const percentage = (params.value / totalGlobal) * 100;
    return `${percentage.toFixed(2)}%`;
  };

  const formatValueForTooltip = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <>
      <div className=''>
        <Box sx={{ width: '100%', height: 'auto' }}>
          <PieChart
            height={300}
            width={300}
            series={[
              {
                data: chartData,
                innerRadius: 50,
                outerRadius: 150,
                highlightScope: { fade: 'global', highlight: 'item' },
                arcLabel: formatAsPercentage as any,
                arcLabelMinAngle: 15,
              },
            ]}
            slotProps={{
              tooltip: {
                content: ({ itemData }: { itemData: { data: ChartDataItem, color: string }[] | undefined }) => {
                  const activeItem = itemData?.[0];
                  if (!activeItem) {
                    return null;
                  }
                  const originalData = activeItem.data;
                  const absoluteValue = originalData.value;
                  const label = originalData.label;
                  const color = activeItem.color;

                  return (
                    <div style={{ padding: 8 }}>
                      <div style={{ color: color, fontWeight: 'bold' }}>
                        {label}
                      </div>
                      <div>
                        **{formatValueForTooltip(absoluteValue)}**
                      </div>
                    </div>
                  );
                },
              },
            } as any}
          />
        </Box>
      </div>
    </>
  );
}

export default ChartPie;